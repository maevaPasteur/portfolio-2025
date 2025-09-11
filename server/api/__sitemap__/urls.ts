import { clientsData } from '../../../data/clients'

export default defineSitemapEventHandler(async () => {
  const clients = clientsData.map((client) => client.id)

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

  clients.forEach((clientId) => {
    urls.push(
      { loc: `/works/${clientId}`, priority: 0.6, changefreq: 'weekly' },
      { loc: `/en/works/${clientId}`, priority: 0.6, changefreq: 'weekly' }
    )
  })

  return urls
})
