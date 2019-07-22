<template>
  <v-app id="inspire" dark>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-title> 
        <router-link to="/" tag="span" style="cursor: pointer">Basketball Stats</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn
        flat
        v-for="item in menuItems"
        :key="item.title"
        router
        :to="item.link"
        >
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout>
          <v-flex shrink>
            <v-flex xs12>
            <v-card color="blue" class="white--text" v-for="news in allNews" :key="news.id">
              <v-layout row>
                <v-flex xs7>
                  <v-card-title primary-title>
                    <div>
                      <div class="headline">{{news.data.title}}</div>
                      <div>({{news.data.text}})</div>
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
                @click="viewNews(news.id, news.data)"
                >
                View News
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer app fixed>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    name: 'Player',
    data () {
      return{
        menuItems: [
            { title: 'News', link:'/allnews'},
            { title: 'AllPlayer', link:'/allplayer'},
            { title: 'Teams', link:'/teams'},
        ]
      }
    },
    computed: {
        allNews () {
            return this.$store.getters.getAllNews
        }
    }
  }
</script>