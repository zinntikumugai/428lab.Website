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
              <!-- link: [ 'https://blog.428lab.net/entry/2020/01/28/230000' ],
              description: []
              pubDate: [ 'Tue, 28 Jan 2020 23:00:00 +0900' ],
              category: [ '機械学習', '自作PC', 'ハードウェア', '料理' ], -->
        </ul>
      </section>
      <section class="col-lg-6 ">
        <h3 class="">イベント情報</h3>
        <ul>
          <li v-for="item in events" :key="item.event_id" target="_blank">
            <a :href="item.event_url" target="_blank">{{ item.title }}</a>
          </li>
          <!-- { event_id: 165655,
            title: '自作キーボード 基板設計ハンズオン 4回目',
            catch: '初心者向けのハンズオンとなります。基本は一人一回',
            description: ''
            event_url: 'https://428lab.connpass.com/event/165655/',
            started_at: '2020-03-21T13:00:00+09:00',
            ended_at: '2020-03-21T18:00:00+09:00',
            limit: 6,
            hash_tag: '自作キーボード設計',
            event_type: 'participation',
            accepted: 0,
            waiting: 0,
            updated_at: '2020-02-15T23:43:57+09:00',
            owner_id: 307185,
            owner_nickname: 'SHINOHARATTT',
            owner_display_name: 'Shino3',
            place: '全力機械（株） 四谷ラボ',
            address: '東京都新宿区四谷２丁目８−８ 第５三和ビル 802号室',
            lat: '35.686971700000',
            lon: '139.727028400000',
            series:
            { id: 9445, title: '四谷ラボ', url: 'https://428lab.connpass.com/' }
          } -->
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
import xml2js from "xml2js";

export default {
  data() {
    return {
      events: [],
      articles: []
    };
  },
  async asyncData({app}) {
    let blogitems = {}
    let eventItems = {}
    try {
      const eventResponse = await app.$axios.$get(
        "https://connpass.com/api/v1/event/",
        // "/connpass/api/v1/event/?series_id=9445&order=2&count=10"
        {
          adapter: axiosJsonpAdapter,
          params: {
            series_id: 9445,
            order: 2,
            count: 10,
            callback: sample
          }
        }
      );
      eventItems = eventResponse.events;

      // const blogResponse = await app.$axios.$get(
      //   "https://blog.428lab.net/rss"
      // );

      // xml2js.parseString(blogResponse, (message, xmlres) => {
      //   blogitems = xmlres.rss.channel[0].item;
      // });
    } catch (error) {
      console.log('get-data error');
      console.log(error);
    }

    return {
      events: eventItems,
      // articles: blogitems
    };
  }
};
</script>
