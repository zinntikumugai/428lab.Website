<template>
  <article class="container">
    <div class="row">
      <section class="col-lg-4 pt-4">
        <h3 class="">ラボ所在地</h3>
        <p class="h5">
          〒160-0004<br />
          東京都 新宿区 四谷二丁目 8-8<br />
          第5三和ビル 802号室
        </p>
      </section>
      <section class="col-lg-8 px-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d399.080352925273!2d139.72523855578095!3d35.68720744886242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa49500887322918a!2z56ysNeS4ieWSjOODk-ODqw!5e0!3m2!1sja!2sjp!4v1580548401896!5m2!1sja!2sjp"
          width="100%"
          height="350"
          frameborder="0"
          style="border:0;"
          allowfullscreen=""
        ></iframe>
      </section>
    </div>
    <div class="row mt-4">
      <section class="col-lg-6 ">
        <h3 class="">ブログ記事</h3>
        <ul>
          <li v-for="item in articles" :key="item.event_id" target="_blank">
            <a :href="item.link[0]" target="_blank">{{ item.title[0] }}</a>
          </li>
        </ul>
      </section>
      <section class="col-lg-6 ">
        <h3 class="">イベント情報</h3>
        <ul>
          <li v-for="item in events" :key="item.event_id" target="_blank">
            <a :href="item.event_url" target="_blank">{{ item.title }}</a>
          </li>
        </ul>
      </section>
      <section class="col-12">
        <h3 class="">スポンサー</h3>
        <ul>
          <li>
            <a href="https://www.zenryokukikai.com/" target="_blank"
              >全力機械株式会社</a
            >
          </li>
        </ul>
      </section>
    </div>
    <!-- <section>
            <p>
                このWebページは所属メンバー、イベント参加者、また皆様のご協力により運営デザイン変更・フレームワーク導入等、皆様のフォーク・プルリクエストを募集しております。
            </p>
        </section> -->
    <div class="p-5"></div>
  </article>
</template>

<script>
import axios from "axios";
import xml2js from "xml2js";

export default {
  data() {
    return {
      events: [],
      articles: []
    };
  },
  async asyncData({ app }) {
    const eventResponse = await axios.get(
      "https://connpass.com/api/v1/event/?series_id=9445&order=2&count=10"
    );
    const blogResponse = await axios.get("https://blog.428lab.net/rss");
    // axios.get(`RSSのURL`)
    //     .then((res) => {
    //       var parseString = require('xml2js').parseString
    //       var xml = res.data
    //       parseString(xml, (message, xmlres) => {
    //         callback(null, {data: xmlres.rss.channel[0].item})
    //       })
    //     })
    //     .catch((e) => {
    //       callback({ statusCode: 404, message: 'ページが見つかりません' })
    //     })
    let blogitems = {
    }
    xml2js.parseString(blogResponse.data, (message, xmlres) => {
      blogitems = xmlres.rss.channel[0].item;
    });

    return {
      events: eventResponse.data.events,
      articles: blogitems
    };
  }
};
</script>
