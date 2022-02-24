import { createApp } from 'vue'
import { Quasar } from 'quasar'
import quasarLang from 'quasar/lang/ko-KR'

// Import Quasar css
import 'quasar/src/css/index.sass'

// Assumes your root component is App.vue
// and placed in same folder as main.js
import App from './App.vue'
import router from './router'

createApp(App)
  .use(router)
  .use(Quasar, {
    plugins: {}, // import Quasar plugins and add here
    lang: quasarLang
  })
  .mount('#app')
