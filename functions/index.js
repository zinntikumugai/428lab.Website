const functions = require('firebase-functions');
const express = require('express');
const { Nuxt } = requre('nuxt');

// Nuxt
const app = express();
const nuxt = new Nuxt({
  buildDir: "nuxt",
  build: {},
  dev: false
});
async function handleReques(req, res) {
  await nuxt.ready();
  return await nuxt.render(req, res);
};
app.use(handleReques);
exports.ssr = functions.https.onRequest(app);
