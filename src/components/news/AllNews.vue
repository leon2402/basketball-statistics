<template>
  <v-app>
    <Header />
    <v-content>
      <v-container>
        <v-layout xs7 offset-(xs5|md2|lg5)>
          <v-carousel>
            <v-carousel-item
              v-for="(news, index) in allNews"
              :key="index"
              :src="news.data.imageLink"
              reverse-transition="fade-transition"
              transition="fade-transition"
            >
            <v-layout
              align-end
              fill-height
              justify-start
              pb-5
              mb-5
            >
            <div class="display-1">
              <p class="font-weight-medium">{{ news.data.title }}</p>
            </div>
            </v-layout>
            </v-carousel-item>
          </v-carousel>
        </v-layout>
      </v-container>
      <v-container>
        <v-layout align-start justify-center>
          <v-flex xs12 md6 offset-md1 d-flex>
            <v-card color="blue" class="white--text" v-for="news in allNews" :key="news.id">
              <v-layout row>
                <v-flex xs7>
                  <v-card-title primary-title>
                    <div>
                      <div class="title">{{news.data.title}}</div>
                    </div>
                  </v-card-title>
                </v-flex>
                <v-flex xs5>
                  <v-img
                    :src="news.data.imageLink"
                    height="125px"
                    contain
                  ></v-img>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>
              <v-card-actions>
                <v-btn 
                flat 
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
        menuItems: [
            { title: 'News', link:'/allnews'},
            { title: 'AllPlayer', link:'/allplayer'},
            { title: 'Teams', link:'/teams'},
        ],
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
    }
  }
</script>