/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: "Reasearch Hub",
  author: "",
  headerTitle: "Reasearch Hub",
  description: "A blog created for researchers",
  language: "en-us",
  theme: "system", // system, dark or light
  siteUrl: "",
  siteRepo: "",
  siteLogo: "/static/images/logo.png",
  socialBanner: "/static/images/twitter-card.png",
  email: "address@yoursite.com",
  github: "https://github.com",
  twitter: "https://twitter.com/Twitter",
  facebook: "https://facebook.com",
  youtube: "https://youtube.com",
  linkedin: "https://www.linkedin.com",
  threads: "https://www.threads.net",
  instagram: "https://www.instagram.com",
  locale: "en-US",
  search: {
    provider: "kbar", // kbar or algolia
    kbarConfig: {
      searchDocumentsPath: "search.json", // path to load documents to search
    },
    // provider: 'algolia',
    // algoliaConfig: {
    //   // The application ID provided by Algolia
    //   appId: 'R2IYF7ETH7',
    //   // Public API key: it is safe to commit it
    //   apiKey: '599cec31baffa4868cae4e79f180729b',
    //   indexName: 'docsearch',
    // },
  },
};

module.exports = siteMetadata;
