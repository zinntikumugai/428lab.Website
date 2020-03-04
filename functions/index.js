const functions = require('firebase-functions');
const express = require('express');
const { Nuxt } = require('nuxt');
const request = require("request")
const cors = require("cors")
const axios = require("axios")
const xml2js = require("xml2js")

// Nuxt
const app = express();
const nuxt = new Nuxt({
  buildDir: "nuxt",
  build: {},
  dev: false,
  // modules: [
  // "@nuxtjs/axios"
  // ]
  // ,render: {
  //   csp: {
  //     enabled: false,
  //     policies: {
  //       "default-src": ["*"],
  //       "report-uri": "/_/csp-reports"
  //     }
  //   }
  // }
});
async function handleReques(req, res) {
  await nuxt.ready();
  return await nuxt.render(req, res);
};
app.use("/api", async (req, res) => {
  const connpassURI = "https://connpass.com/api/v1/event/?series_id=9445&order=2&count=10"
  const rssURI = "https://blog.428lab.net/rss"

  const dataConnpass = await axios.get(connpassURI)
    .then(data => {
      return data.data || {}
    })
    .catch(error => {
      return error
    })
  const dataRss = await axios.get(rssURI)
    .then(async (data) => {
      let response = data.data || {}

      // rss Parse
      const rss = await xml2js.parseStringPromise(response).catch(error => {
        return error
      })
      return rss.rss || {}
    })
    .catch(error => {
      return error
    })

  res.status(200).json({
    connpass: dataConnpass,
    rss: dataRss
  })
})
app.use(handleReques);
exports.ssr = functions.region('asia-northeast1').https.onRequest(app);
