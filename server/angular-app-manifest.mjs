
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/cv/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 14391, hash: 'dcf3bb58f3d55b164a69e5679986f9ecb333f6834c429fdd50b402b19350e997', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 7965, hash: 'f4fad393f3a50bd910b6a6423c7444cab21110e1308bcea4d5d950326cbae629', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-CXQUZ3PB.css': {size: 6979, hash: 'mYIPdabeAag', text: () => import('./assets-chunks/styles-CXQUZ3PB_css.mjs').then(m => m.default)}
  },
};
