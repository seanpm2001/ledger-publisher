const platforms = [
  'bilibili',
  'blogger',
  'blogspot',
  'craigslist',
  'ello',
  'facebook',
  'github',
  'imgur',
  'instagram',
  'linkedin',
  'livejournal',
  'medium',
  'nextdoor',
  'pinterest',
  'quora',
  'slack',
  'stackoverflow',
  'twitter',
  'vk',
  'xvideos',
  'youku',
  'youtube'
]

const platformsSLD = [  
  '17k.com',
  '17track.net',
  '2ch.net',
  '4chan.org',
  '500px.com',
  '51auto.com',
  '52pk.com',
  '9gag.com',
  'academia.edu',
  'adbooth.com',
  'airbnb.com',
  'alipay.com',
  'allrecipes.com',
  'ameblo.jp',
  'aparat.com',
  'artstation.com',
  'ask.fm',
  'autotrader.com',
  'avito.ru',
  'backpage.com',
  'badoo.com',
  'basecamp.com',
  'bitauto.com',
  'bitbucket.org',
  'blog.jp',
  'blogfa.com',
  'books.com.tw',
  'bp.blogspot.com',
  'cnblogs.com',
  'csdn.net',
  'deviantart.com',
  'directrev.com',
  'douyu.com',
  'evernote.com',
  'extratorrent.cc',
  'fbcdn.net',
  'fc2.com',
  'feedly.com',
  'files.wordpress.com',
  'flickr.com',
  'force.com',
  'gfycat.com',
  'hatenablog.com',
  'kaskus.co.id',
  'kickstarter.com',
  'leagueoflegends.com',
  'leboncoin.fr',
  'livedoor.jp',
  'media.tumblr.com',
  'mediafire.com',
  'mercadolibre.com.ar',
  'mercadolivre.com.br',
  'nicovideo.jp',
  'office.com',
  'ok.ru',
  'outbrain.com',
  'pixnet.net',
  'prezi.com',
  'qiita.com',
  'quizlet.com',
  'researchgate.net',
  'roblox.com',
  'ruten.com.tw',
  'salesforce.com',
  'sharepoint.com',
  'shopify.com',
  'soundcloud.com',
  'stackexchange.com',
  'steamcommunity.com',
  'steampowered.com',
  'taboola.com',
  'taringa.net',
  'tianya.cn',
  'tistory.com',
  'tudou.com',
  'tumblr.com',
  'twitch.tv',
  'vimeo.com',
  'vk.me',
  'weebly.com',
  'weibo.com',
  'wittyfeed.com',
  'wix.com',
  'wixsite.com',
  'wordpress.com',
  'wordpress.org',
  'youtube-mp3.org',
  'zhihu.com',
  'zillow.com'
]

const regexpEscape = function (s) { return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&') }

module.exports = {
  retrieve: function (cb) {
    cb(null, platformsSLD.concat(platforms))
  },

  build: function (cb) {
    const transformedList = platforms.map((item) => { return `'${item}'` }).join(', ')
    var condition = `(new Set([ ${transformedList} ])).has(SLD.split('.')[0])`
    platformsSLD.forEach(function (SLD) {
      condition += ' || /' + regexpEscape(SLD) + '$/.test(SLD)'
    })

    const rule = {
      condition: condition,
      consequent: null,
      description: 'exclude platforms'
    }
    cb(null, rule)
  }
}
