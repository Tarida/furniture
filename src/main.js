import Vue from 'vue'
import App from './App'
import router from './router'
const fb = require('./firebaseConfig.js')
import { store } from './store'
import './assets/scss/app.scss'
Vue.config.productionTip = false
let app
fb.auth.onAuthStateChanged(user => {
    if (!app) {
        app = new Vue({
            el: '#app',
            router,
            store,
            render: h => h(App)
        })
    }
})