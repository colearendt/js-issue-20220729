import { createApp } from 'vue'
import App from './App.vue'

// plugins
import vuetify from './plugins/vuetify'
import {createRouter, createWebHistory, RouteRecordRaw,} from 'vue-router';

import { loadFonts } from './plugins/webfontloader'

loadFonts()

// // @ts-ignore
import PouchDB from 'pouchdb'
// // @ts-ignore
// import PouchDBFindPlugin from 'pouchdb-find'
// PouchDB.plugin(PouchDBFindPlugin)
// // TODO: move this connection into a global or helper somewhere else?
let db = new PouchDB("http://my.example.com")

let router = createRouter({
    routes: [],
    history: createWebHistory(),
})

createApp(App)
  .use(vuetify)
  .use(router) // router must go before auth0
  .mount('#app')
