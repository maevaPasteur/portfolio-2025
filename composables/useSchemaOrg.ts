import type { BreadcrumbList, Service } from 'schema-dts'

export const useSchemaOrgPersonal = () => {
  const route = useRoute()
  const { t } = useI18n()
  const baseUrl = 'https://maevapasteur.com'

  // Note: Person, WebSite, Organization, FAQ are included globally by a plugin

  const defineBreadcrumbList = (): BreadcrumbList => {
    const pathSegments = route.path.split('/').filter(Boolean)

    const hasLangPrefix =
      pathSegments.length > 0 &&
      (pathSegments[0] === 'en' || pathSegments[0] === 'fr')
    const langPrefix = hasLangPrefix ? pathSegments[0] : ''
    const actualSegments = hasLangPrefix ? pathSegments.slice(1) : pathSegments

    const items = [
      {
        '@type': 'ListItem' as const,
        position: 1,
        name: t('schema.breadcrumb.home'),
        item: langPrefix ? `${baseUrl}/${langPrefix}` : baseUrl
      }
    ]

    let currentPath = langPrefix ? `/${langPrefix}` : ''
    actualSegments.forEach((segment) => {
      currentPath += `/${segment}`
      const breadcrumbKey = `schema.breadcrumb.${segment}`

      items.push({
        '@type': 'ListItem' as const,
        position: items.length + 1,
        name: t(breadcrumbKey),
        item: `${baseUrl}${currentPath}`
      })
    })

    return {
      '@type': 'BreadcrumbList',
      itemListElement: items
    }
  }

  const defineServices = (): Service[] => {
    try {
      const services = t('schema.services') as Array<{
        name: string
        description: string
      }>

      if (!services || !Array.isArray(services)) {
        return []
      }

      return services.map((service) => ({
        '@type': 'Service',
        name: service.name,
        description: service.description,
        provider: {
          '@type': 'Person',
          name: t('schema.person.name')
        },
        areaServed: {
          '@type': 'Country',
          name: 'France'
        },
        url: `${baseUrl}/works`
      }))
    } catch (error) {
      console.warn('Schema services not available yet:', error)
      return []
    }
  }

  const defineProfilePage = () => {
    try {
      return {
        '@type': 'ProfilePage',
        '@id': `${baseUrl}/#homepage`,
        mainEntity: {
          '@type': 'Person',
          name: t('schema.person.name'),
          jobTitle: t('schema.person.jobTitle'),
          description: t('schema.person.description')
        },
        name: t('home.seo.title'),
        description: t('home.seo.description'),
        url: baseUrl,
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: `${baseUrl}/images/maeva-pasteur.webp`
        }
      }
    } catch (error) {
      console.warn('Schema profile page not available yet:', error)
      return {
        '@type': 'ProfilePage',
        '@id': `${baseUrl}/#homepage`,
        name: 'Maëva Pasteur Portfolio',
        description: 'Frontend developer specialized in Vue.js and Nuxt',
        url: baseUrl
      }
    }
  }

  const defineWorksCollection = () => {
    try {
      return {
        '@type': 'CollectionPage',
        '@id': `${baseUrl}/works#collection`,
        name: t('works.seo.title'),
        description: t('works.seo.description'),
        url: `${baseUrl}/works`,
        mainEntity: {
          '@type': 'ItemList',
          numberOfItems: 44,
          itemListElement: [
            {
              '@type': 'CreativeWork',
              name: 'Citadium',
              url: `${baseUrl}/works/citadium`
            },
            {
              '@type': 'CreativeWork',
              name: 'Isabel Marant',
              url: `${baseUrl}/works/isabel-marant`
            },
            {
              '@type': 'CreativeWork',
              name: 'Jimmy Fairly',
              url: `${baseUrl}/works/jimmy-fairly`
            },
            {
              '@type': 'CreativeWork',
              name: 'Lacoste',
              url: `${baseUrl}/works/lacoste`
            },
            {
              '@type': 'CreativeWork',
              name: 'AMI Paris',
              url: `${baseUrl}/works/ami`
            }
          ]
        },
        creator: {
          '@type': 'Person',
          name: t('schema.person.name')
        }
      }
    } catch (error) {
      console.warn('Schema works collection not available yet:', error)
      return {
        '@type': 'CollectionPage',
        '@id': `${baseUrl}/works#collection`,
        name: 'Works - Maëva Pasteur',
        description: 'Frontend development projects and case studies',
        url: `${baseUrl}/works`
      }
    }
  }

  const defineContactPage = () => {
    try {
      return {
        '@type': 'ContactPage',
        '@id': `${baseUrl}/contact#page`,
        name: t('contact.seo.title'),
        description: t('contact.seo.description'),
        url: `${baseUrl}/contact`,
        mainEntity: {
          '@type': 'ContactPoint',
          contactType: 'customer service',
          email: 'contact@maevapasteur.com',
          url: `${baseUrl}/contact`,
          areaServed: [
            {
              '@type': 'Country',
              name: 'France'
            },
            {
              '@type': 'Country',
              name: 'United Arab Emirates'
            }
          ],
          availableLanguage: ['French', 'English']
        },
        about: {
          '@type': 'Person',
          name: t('schema.person.name')
        }
      }
    } catch (error) {
      console.warn('Schema contact page not available yet:', error)
      return {
        '@type': 'ContactPage',
        '@id': `${baseUrl}/contact#page`,
        name: 'Contact - Maëva Pasteur',
        description: 'Contact information for frontend development services',
        url: `${baseUrl}/contact`
      }
    }
  }

  return {
    defineBreadcrumbList,
    defineServices,
    defineProfilePage,
    defineWorksCollection,
    defineContactPage
  }
}

export const useSchemaOrgProject = (projectData: {
  name: string
  description: string
  image?: string
  url?: string
  dateCreated?: string
  technologies?: string[]
}) => {
  const { t } = useI18n()
  const { $i18n } = useNuxtApp()
  const baseUrl = 'https://maevapasteur.com'

  const defineProject = () => {
    const langCode = $i18n.locale.value === 'fr' ? 'fr-FR' : 'en-US'

    return {
      '@type': 'CreativeWork',
      name: projectData.name,
      description: projectData.description,
      creator: {
        '@type': 'Person',
        name: t('schema.person.name')
      },
      image: projectData.image ? `${baseUrl}${projectData.image}` : undefined,
      url:
        projectData.url ||
        `${baseUrl}/works/${projectData.name.toLowerCase().replace(/\s+/g, '-')}`,
      dateCreated: projectData.dateCreated,
      keywords: projectData.technologies?.join(', '),
      inLanguage: langCode,
      audience: {
        '@type': 'Audience',
        audienceType: 'Business Professional'
      }
    }
  }

  return { defineProject }
}
