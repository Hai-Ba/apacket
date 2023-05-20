import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router/index.js'
import {Button, 
    Pagination, 
    Table,
    Switch,
    Input,
    Collapse,
    List,
    Tabs,
    Empty
} from 'ant-design-vue';
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, 
        faList, 
        faChartPie,
        faKey,
        faDatabase,
        faArrowRightArrowLeft,
        faH,
        faLeftRight,
        faFingerprint,
        faLock,
        faImage,
        faComputer,
        faFolder,
        faServer,
        faDownload,
        faTerminal,
        faBriefcase,
        faNetworkWired,
        faBroadcastTower,
        faPhoneAlt,
        faRandom,
        faEthernet,
        faWifi,
        faStream
    } from '@fortawesome/free-solid-svg-icons'

import 'ant-design-vue/dist/antd.css';//Import separately

import './assets/main.css'

/* add icons to the library */
library.add(faUserSecret, 
    faList, 
    faChartPie, 
    faKey, 
    faDatabase, 
    faArrowRightArrowLeft,
    faH,
    faLeftRight,
    faFingerprint,
    faLock,
    faImage,
    faComputer,
    faFolder,
    faServer,
    faDownload,
    faTerminal,
    faBriefcase,
    faBroadcastTower,
    faNetworkWired,
    faPhoneAlt,
    faRandom,
    faEthernet,
    faWifi,
    faStream
    );

const pinia = createPinia()
const app = createApp(App);

app.use(pinia)
app.use(router);
app.use(Button)
    .use(Pagination)
    .use(Empty)
    .use(Table)
    .use(Switch)
    .use(Input)
    .use(Collapse)
    .use(List)
    .use(Tabs)

app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
