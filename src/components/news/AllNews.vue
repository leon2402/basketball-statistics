<template>
  <v-app>
    <Header />
    <v-content>
      <v-container>
        <v-layout justify-center wrap>
          <v-flex xs12 md8 class="background">
            <v-carousel
              :max=1>
              <v-carousel-item
                v-for="(news, index) in BannerNews"
                :key="index"
                :src="news.data.imageLink"
                reverse-transition="fade-transition"
                transition="fade-transition"
                color="white"
              >
              <v-layout
                align-end
                fill-height
                justify-start
                pb-5
                mb-5
              >
              <div class="display-1">
                <p class="white--text">{{ news.data.title }}</p>
              </div>
              </v-layout>
              </v-carousel-item>
            </v-carousel>
          </v-flex>
        </v-layout>
        <v-layout justify-center wrap>
          <v-flex xs12 md3>
            <v-container class="background">
            <v-layout justify-center wrap>
              <v-flex xs12 md12 class="headertop">
                <tr><h3>NBA</h3></tr>
              </v-flex>
            </v-layout>
            <v-layout align-start justify-center wrap>
              <v-flex xs12 md12 class="background">
                <v-card color="white" max-width="400" class="mx-auto" v-for="news in NBANews" :key="news.id">

                      <v-img class="white--text"
                        :src="news.data.imageLink"
                        max-width="400px"
                        contain
                      >
                      <v-card-title class="align-end fill-height">
                        <div>
                          <div>{{news.data.title}}</div>
                        </div>
                      </v-card-title>
                      </v-img>
                      <v-card-text>
                        <div>
                          <div>{{news.data.intro}}</div>
                        </div>
                      </v-card-text>
                  <v-divider light></v-divider>
                  <v-card-actions>
                    <v-btn 
                    text 
                    dark
                    @click="viewNews(news.data, news.id)"
                    >
                    View News
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
            </v-container>
          </v-flex>
          <v-flex xs12 md3>
            <v-container class="background">
            <v-layout justify-center wrap>
              <v-flex xs12 md12 class="headertop">
                <tr><h3>BBL</h3></tr>
              </v-flex>
            </v-layout>
            <v-layout align-start justify-center wrap>
              <v-flex xs12 md12 class="background">
                <v-card color="white" max-width="400" class="mx-auto" v-for="news in BBLNews" :key="news.id">

                      <v-img class="white--text"
                        :src="news.data.imageLink"
                        max-width="400px"
                        contain
                      >
                      <v-card-title class="align-end fill-height">
                        <div>
                          <div>{{news.data.title}}</div>
                        </div>
                      </v-card-title>
                      </v-img>
                      <v-card-text>
                        <div>
                          <div>{{news.data.intro}}</div>
                        </div>
                      </v-card-text>
                  <v-divider light></v-divider>
                  <v-card-actions>
                    <v-btn 
                    text
                    dark
                    @click="viewNews(news.data, news.id)"
                    >
                    View News
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
            </v-container>
          </v-flex>
          <v-flex xs12 md2>
            <v-container class="background">
              <v-layout justify-center wrap>
                <v-flex xs12 md12 class="headertop">
                  <tr><h3>Alle News</h3></tr>
                </v-flex>
              </v-layout>
              <v-layout>
                <v-flex xs12 md12 class="background">
                <v-card max-width="275" max-height="100" class="newscard" v-for="news in allNews" :key="news.id">
                  <v-card-text>
                    <div>
                      <div class="news">{{news.data.title}}</div>
                    </div>
                  </v-card-text>
                </v-card>
                </v-flex>
              </v-layout>
            </v-container>
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
  export default {
    components: {
      Header,
      Footer
    },
    name: 'Player',
    data () {
      return{
        show: false,
      }
    },
    methods: {
        viewNews (newsData, id) {
            this.$store.dispatch('selectNews', id)
            this.$router.push('/news/' + newsData.title + '/' + id)
      }
    },
    computed: {
        allNews () {
            return this.$store.getters.getAllNews
        }
    },
    created () {
      const NBANews = this.allNews.filter(news => news.data.NBA == '1')
      this.NBANews = NBANews
      const BannerNews = this.allNews.filter(news => news.data.Banner == '1')
      this.BannerNews = BannerNews
      const BBLNews = this.allNews.filter(news => news.data.BBL == '1')
      this.BBLNews = BBLNews
    }
  }
</script>

<style>
  .v-application .newstitle {
    font-size: 1.10rem!important;
    font-weight: 500;
    letter-spacing: .0125em!important;
    font-family: 'Open Sans', sans-serif;
  }
  .newspicture {
    padding: 16px 16px 8px
  }
  .newscard {
    margin-right: auto!important;
    margin-left: auto!important;
    margin-top: 3px;
  }
  .newscardpicture {
    margin-left: 10px;
  }
  .news {
    color: black;
    font-size: 12px;
  }
</style>