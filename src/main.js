import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// import tailwind ke vue project
import './index.css'
// tambahkan secara manual disini
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faInstagram, faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faRecycle, faRupiahSign, faGraduationCap } from "@fortawesome/free-solid-svg-icons";

library.add(faTwitter, faInstagram, faFacebook, faWhatsapp, faRecycle, faRupiahSign, faGraduationCap);
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon).mount('#app')
