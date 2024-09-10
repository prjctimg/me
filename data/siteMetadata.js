/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Gone with the wind🍃',
  author: 'ディーン・タリサイ',
  headerTitle: 'Gone with the wind 🌬️🍃',
  description: 'A breathing space from it all and haven for my (perhaps biased) experiences.',
  language: 'en-us',
  theme: 'light',
  siteUrl: 'https://deantarisai.me',
  siteRepo: 'https://github.com/prjctimg',
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/twitter-card.png`,

  email: 'prjctimg@outlook.com',
  github: 'https://github.com/prjctimg',
  x: 'https://twitter.com/prjctimg',
  facebook: 'https://facebook.com/deantarisai',
  linkedin: 'https://www.linkedin.com/in/dean-tarisai-7b96b3270/',

  instagram: 'https://www.instagram.com/deantarie',
  locale: 'en-US',

  stickyNav: true,
  analytics: {
    googleAnalytics: {
      googleAnalyticsId: 'G-XWP9RJYZHC',
    },
  },
}

module.exports = siteMetadata
