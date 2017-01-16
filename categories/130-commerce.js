const domains = [
  '5giay.vn',
  'adafruit.com',
  'adidas.com',
  'ae.com',
  'aftership.com',
  'alfacart.com',
  'alibaba.com',
  'aliexpress.com',
  'allegro.pl',
  'alza.cz',
  'amazon.es',
  'amazon.fr',
  'amazon.in',
  'amazon.it',
  'amazonaws.com',
  'apartmenttherapy.com',
  'apple.com',
  'arukereso.hu',
  'asda.com',
  'asos.com',
  'autotrader.co.uk',
  'babytree.com',
  'bahn.de',
  'bama.ir',
  'bamilo.com',
  'barnesandnoble.com',
  'bathandbodyworks.com',
  'bazos.cz',
  'bazos.sk',
  'bedbathandbeyond.com',
  'bestbuy.ca',
  'bestbuy.com',
  'bhphotovideo.com',
  'bizrate.com',
  'blibli.com',
  'blocket.se',
  'bloomingdales.com',
  'boekwinkeltjes.nl',
  'bol.com',
  'boohoo.com',
  'bookmyshow.com',
  'boots.com',
  'bukalapak.com',
  'buscape.com.br',
  'cafe24.com',
  'carrefour.es',
  'carwale.com',
  'casadellibro.com',
  'cdiscount.com',
  'chaoshi.tmall.com',
  'chegg.com',
  'citruspay.com',
  'codecanyon.net',
  'creativemarket.com',
  'dafiti.com.br',
  'daraz.pk',
  'dealmoon.com',
  'debenhams.com',
  'decolar.com',
  'dell.com',
  'detail.tmall.com',
  'dickssportinggoods.com',
  'digikala.com',
  'discogs.com',
  'disney.com',
  'disney.go.com',
  'divar.ir',
  'dominos.com',
  'dresslily.com',
  'dsw.com',
  'dx.com',
  'ebates.com',
  'ebay-kleinanzeigen.de',
  'ebay.ca',
  'ebay.co.uk',
  'ebay.com',
  'ebay.com.au',
  'ebay.de',
  'ebay.es',
  'ebay.fr',
  'ebay.ie',
  'ebay.in',
  'ebay.it',
  'ebay.nl',
  'eelly.com',
  'elevenia.co.id',
  'envato.com',
  'essef.nl',
  'etsy.com',
  'expedia.com',
  'express.com',
  'fandango.com',
  'finn.no',
  'flipkart.com',
  'fnac.com',
  'focus.cn',
  'forever21.com',
  'freelancer.com',
  'g2a.com',
  'gearbest.com',
  'geekbuying.com',
  'gemius.com',
  'gittigidiyor.com',
  'globalsources.com',
  'gmarket.co.kr',
  'go.com',
  'gomaji.com',
  'graphicriver.net',
  'groupon.co.uk',
  'groupon.com',
  'guitarcenter.com',
  'gumtree.co.za',
  'gumtree.com',
  'gumtree.com.au',
  'heureka.cz',
  'heureka.sk',
  'hollisterco.com',
  'homedepot.com',
  'houseoffraser.co.uk',
  'hp.com',
  'hsn.com',
  'hypebeast.com',
  'ikea.com',
  'infusionsoft.com',
  'irctc.co.in',
  'jcrew.com',
  'jd.com',
  'jet.com',
  'johnlewis.com',
  'jumia.com.eg',
  'jumia.com.ng',
  'jumia.ma',
  'kabum.com.br',
  'kmart.com',
  'kohls.com',
  'konga.com',
  'labirint.ru',
  'lazada.co.id',
  'lazada.co.th',
  'lazada.com.my',
  'lazada.com.ph',
  'lazada.vn',
  'lefrecce.it',
  'lego.com',
  'lidl.de',
  'lightinthebox.com',
  'lyst.com',
  'macys.com',
  'made-in-china.com',
  'mafengwo.cn',
  'mailchimp.com',
  'marksandspencer.com',
  'mataharimall.com',
  'mediaworld.it',
  'mercadolibre.com',
  'mercadolibre.com.ve',
  'mercadopago.com',
  'mercari.com',
  'michaels.com',
  'microsoft.com',
  'microsoftonline.com',
  'microsoftstore.com',
  'moneysavingexpert.com',
  'msn.com',
  'mudah.my',
  'mvideo.ru',
  'myntra.com',
  'n11.com',
  'narvar.com',
  'net-a-porter.com',
  'netshoes.com.br',
  'newlook.com',
  'next.co.uk',
  'nhadatso.com',
  'nike.com',
  'nordstrom.com',
  'nordstromrack.com',
  'notebooksbilliger.de',
  'obdesign.com.tw',
  'olx.com.br',
  'opensooq.com',
  'orbitz.com',
  'oreilly.com',
  'panasonic.com',
  'playstation.com',
  'polyvore.com',
  'popcash.net',
  'popsugar.com',
  'prestashop.com',
  'priceminister.com',
  'prom.ua',
  'qoo10.sg',
  'quidco.com',
  'racerglovesusa.com',
  'rakuten.co.jp',
  'rakuten.com',
  'rakuten.ne.jp',
  'ralphlauren.com',
  'redbubble.com',
  'rei.com',
  'reverb.com',
  'ria.com',
  'ricardo.ch',
  'saksfifthavenue.com',
  'samsclub.com',
  'samsung.com',
  'sbicard.com',
  'scottevest.com',
  'sears.com',
  'segundamano.mx',
  'shein.com',
  'shopstyle.com',
  'skrill.com',
  'smzdm.com',
  'snapdeal.com',
  'songkick.com',
  'souq.com',
  'sprint.com',
  'squareup.com',
  'ssense.com',
  'stockisti.com',
  'stripe.com',
  'stubhub.com',
  'suitableshop.nl',
  'swagbucks.com',
  'takhfifan.com',
  'taobao.com',
  'teacherspayteachers.com',
  'tesco.com',
  'thebay.com',
  'thekitchn.com',
  'themeforest.net',
  'thetrainline.com',
  'thinkgeek.com',
  'thomann.de',
  'thrillist.com',
  'tmall.com',
  'tokopedia.com',
  'topshop.com',
  'trademe.co.nz',
  'traidnt.net',
  'trendyol.com',
  'udemy.com',
  'underarmour.com',
  'uniqlo.com',
  'vente-exclusive.com',
  'videohive.net',
  'vip.com',
  'walmart.com',
  'wayfair.com',
  'wish.com',
  'xehoiviet.com',
  'xiu.com',
  'xueqiu.com',
  'xunlei.com',
  'zalando.nl',
  'zazzle.com',
  'zol.com.cn'
]

module.exports = {
  retrieve: function (cb) {
    cb(null, domains)
  },

  build: function (cb) {
    const transformedList = domains.map((item) => { return `'${item}'` }).join(', ')
    const rule = {
      condition: `(new Set([ ${transformedList} ])).has(SLD)`,
      consequent: null,
      description: 'exclude commerce sites'
    }
    cb(null, rule)
  }
}
