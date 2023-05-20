import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import FeatureView from '../views/FeatureView.vue'
// import pcap from './pcap.js'; 

// const routes = [...pcap];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'home',
      component: FeatureView,
      meta: {
        title: '🔍 Online PCAP file analyzer designed to visualize HTTP 🌐, Telnet, FTP',
        transition: 'slide-left'
      }
    },
    {
      path: '/#feature-list',
      name: 'feature',
      
      component: FeatureView,
      meta: {
        title: '🔍 Online PCAP file analyzer designed to visualize HTTP 🌐, Telnet, FTP',
        transition: 'slide-left'
      }
    },
    {
      path: '/faq',
      name: 'home-faq',
      
      component: () => import('../views/FaqView.vue'),
      meta: {
        title: '❓ A-Packets | FAQ',
        transition: 'slide-left'
      }
    },
    {
      path: '/upload',
      name: 'home-upload',
      
      component: () => import('../views/UploadView.vue'),
      meta: {
        title: '🔄 Upload pcap file to analyze and view HTTP, FTP, Telnet, DNS, WiFi',
        transition: 'slide-left'
      }
    },
    {
      path: '/api',
      name: 'home-api',
      
      component: () => import('../views/ApiView.vue'),
      meta: {
        title: '⚙️ A-Packets | API REST Key usage',
        transition: 'slide-left'
      }
    },
    {
      path: '/price',
      name: 'home-price',
      
      component: () => import('../views/PriceView.vue'),
      meta: {
        title: '💳 A-Packets - Choose a plan to upload and analyze HTTP, FTP, Telnet, DNS',
        transition: 'slide-left'
      }
    },
    // routes,//routes for pcap
    {
      path: '/pcaps',
      name: 'home-pcaps',
      
      component: () => import('../views/ViewPcap.vue'),
      meta: {
        title: '📜 Online pcap files viewer for analyze HTTP, DNS, other network traffic',
        transition: 'slide-left'
      },
      children: [
        {
            path: "list",
            name: "pcap-list",
            component:() => import('../components/layouts/pcaps/PcapList.vue'),
        },
        {
            path: "charts",
            name: "Overview",
            component:() => import('../components/layouts/pcaps/PcapChart.vue')
        },
        {
            path: "creds",
            name: "Credentials",
            component:() => import('../components/layouts/pcaps/PcapCred.vue')
        },
        {
            path: "dns",
            name: "DNS Queries",
            component:() => import('../components/layouts/pcaps/PcapDns.vue')
        },
        {
          path: "http",
          name: "HTTP Headers",
          component:() => import('../components/layouts/pcaps/PcapHeader.vue')
        },
        {
          path: "ip",
          name: "Connections",
          component:() => import('../components/layouts/pcaps/PcapConnection.vue')
        },
        {
          path: "ports",
          name: "Open Ports",
          component:() => import('../components/layouts/pcaps/PcapPort.vue')
        },
        {
          path: "tls",
          name: "SSL/TLS",
          component:() => import('../components/layouts/pcaps/PcapTls.vue')
        },
        {
          path: "images",
          name: "Pictures",
          component:() => import('../components/layouts/pcaps/PcapImage.vue')
        },
        {
          path: "flows",
          name: "HTTP",
          component:() => import('../components/layouts/pcaps/PcapHttp.vue')
        },
        {
          path: "smb",
          name: "SMB",
          component:() => import('../components/layouts/pcaps/PcapSmb.vue')
        },
        {
          path: "servers",
          name: "Servers",
          component:() => import('../components/layouts/pcaps/PcapServer.vue')
        },
        {
          path: "docs",
          name: "Documents",
          component:() => import('../components/layouts/pcaps/PcapDocument.vue')
        },
        {
          path: "graph",
          name: "Network",
          component:() => import('../components/layouts/pcaps/PcapNetwork.vue')
        },
        {
          path: "ftp",
          name: "FTP",
          component:() => import('../components/layouts/pcaps/PcapFtp.vue')
        },
        {
          path: "tel",
          name: "Telnet",
          component:() => import('../components/layouts/pcaps/PcapTel.vue')
        },
        {
          path: "ssdp",
          name: "SSDP",
          component:() => import('../components/layouts/pcaps/PcapSsdp.vue')
        },
        {
          path: "sip",
          name: "Sip",
          component:() => import('../components/layouts/pcaps/PcapSip.vue')
        },
        {
          path: "arp",
          name: "ARP",
          component:() => import('../components/layouts/pcaps/PcapArp.vue')
        },
        {
          path: "ethernet",
          name: "Ethernet",
          component:() => import('../components/layouts/pcaps/PcapEthernet.vue')
        },
        {
          path: "wifi",
          name: "Wifi",
          component:() => import('../components/layouts/pcaps/PcapWifi.vue')
        },
        {
          path: "host",
          name: "Hosts",
          component:() => import('../components/layouts/pcaps/PcapHost.vue')
        },
    ]
    },
    {
      path: '/signin',
      name: 'home-signin',
      
      component: () => import('../views/SignIn.vue'),
      meta: {
        title: '🔍 Sign In to A-Packets',
        transition: 'slide-left'
      }
    },
  ]
})
// ... 

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
  // `/nested`'s will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if(nearestWithTitle) {
    document.title = nearestWithTitle.meta.title;
  } else if(previousNearestWithMeta) {
    document.title = previousNearestWithMeta.meta.title;
  }

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  // Skip rendering meta tags if there are none.
  if(!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });

    // We use this to track which meta tags we create so we don't interfere with other ones.
    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  })
  // Add the meta tags to the document head.
  .forEach(tag => document.head.appendChild(tag));

  next();
});

// ...
export default router
