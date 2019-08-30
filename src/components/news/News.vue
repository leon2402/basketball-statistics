<template>
  <v-app>
    <Header />
    <v-content class="mainbackground">
      <v-container justify-center>
        <v-layout justify-center wrap>
          <v-flex xs12 md6  class="background">
            <v-card color="white" max-width="95%" class="mx-auto" height="1000px">
              <v-img class="white--text"
                :src="news.data.imageLink"
                contain>
                <v-row align="end" class="lightbox white--text pa-2 fill-height">
                  <v-col class="colnews">
                    <div class="body-1">{{news.data.foto}}</div>
                  </v-col>
                </v-row>
              </v-img>
              <v-card-title>
                <div>
                  <div>{{news.data.title}}</div>
                </div>
              </v-card-title>
                <v-card-text class="text--primary"
                  >
                  <span v-html="news.data.text"> </span>
                </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 md2  class="background">
            <v-layout justify-center wrap>
                <v-flex xs12 md12 class="headertop">
                  <tr><h3>Alle News</h3></tr>
                </v-flex>
              </v-layout>
              <v-layout>
                <v-flex xs12 md12 class="background">
                <v-card max-width="275" max-height="100" class="newscard" v-for="news in allNews" :key="news.id">
                  <v-card-text  @click="viewNews(news.data, news.id)">
                    <div>
                      <div class="news" >{{news.data.title}}</div>
                    </div>
                  </v-card-text>
                </v-card>
                </v-flex>
              </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Header from '../shared/Header.vue'
import Footer from '../shared/Footer.vue'
import NewsData from '../shared/news.json'
  export default {
    components: {
      Header,
      Footer
    },
    name: 'News',
    data () {
      return{
        menuItems: [
            { title: 'News', link:'/allnews'},
            { title: 'AllPlayer', link:'/allplayer'},
            { title: 'Teams', link:'/teams'},
        ],
        
        newstext: null,
      }
    },
    methods: {
        viewNews (newsData, id) {
          this.$store.dispatch('selectNews', id)
          this.$router.push('/news/' + newsData.title + '/' + id)
      }
    },
    computed: {
        news () {
          return this.$store.getters.getSelectedNews
        },
        allNews () {
          return this.$store.getters.getAllNews
        }
    },
    created () {
      const newstext = NewsData.find(newsdata => newsdata.ID === this.news.id)
      console.log(newstext)
      this.newstext = newstext.Text
    }
    }
</script>

<style>
  .mainbackground {
    background-color: lightgrey;
  }
  .newspiccenter {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  .article body{
    font-size: 12px;
  }
  .lightbox {
    box-shadow: 0 0 30px inset rgba(0, 0, 0, 0.2);
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.4) 0%, transparent 80px);
  }
  .colnews {
    padding: 12px;
    padding-top: 24px;
    padding-right: 12px;
    padding-bottom: 0px;
    padding-left: 12px;
  }
</style>