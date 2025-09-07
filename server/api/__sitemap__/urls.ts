export default defineSitemapEventHandler(async () => {
  const clients = [
    'citadium', 'jimmy-fairly', 'lacoste', 'ami', 'cabaia', 'g-star', 'isotoner', 'leo-violette',
    'airbus', 'petites-jupes-de-prune', 'temperley-london', 'kids-around', 'faume-page-builder',
    'french-bandit', 'sandro', 'faume-design-system', 'victoria-beckham', 'carel', 'armor-lux',
    'sud-express', 'soeur', 'hugo-boss', 'mali-hakika', 'jerome-dreyfuss', 'tara-jarmon',
    'maison-123', 'vanessa-bruno', 'bonpoint', 'bash', 'editions-didier', 'epycure',
    'faume-backoffice', 'balzac', 'butagaz', 'groupe-soufflet', 'claudie-pierlot',
    'theater-in-paris', 'aigle', 'leo-pharma', 'lancaster', 'account-package', 'isabel-marant',
    'order-tracking', 'w3lead'
  ]

  const urls = []

  urls.push(
    { loc: '/', priority: 1.0, changefreq: 'weekly' },
    { loc: '/about', priority: 0.8, changefreq: 'weekly' },
    { loc: '/works', priority: 0.9, changefreq: 'weekly' },
    { loc: '/contact', priority: 0.7, changefreq: 'monthly' }
  )

  urls.push(
    { loc: '/en', priority: 1.0, changefreq: 'weekly' },
    { loc: '/en/about', priority: 0.8, changefreq: 'weekly' },
    { loc: '/en/works', priority: 0.9, changefreq: 'weekly' },
    { loc: '/en/contact', priority: 0.7, changefreq: 'monthly' }
  )

  clients.forEach(clientId => {
    urls.push(
      { loc: `/works/${clientId}`, priority: 0.6, changefreq: 'weekly' },
      { loc: `/en/works/${clientId}`, priority: 0.6, changefreq: 'weekly' }
    )
  })

  return urls
})