export default defineNuxtPlugin((nuxtApp) => {
  const runtimeConfig = useRuntimeConfig()
  const host = runtimeConfig.public?.siteUrl ?? 'https://maevapasteur.com'

  useSchemaOrg({
    host
  })

  // Fonctions de schéma pour le plugin (sans composables Vue)
  const createGlobalSchemas = (i18n: {
    t: (key: string) => string | string[]
    locale: { value: string }
  }) => {
    const t = i18n.t || (() => '')
    const locale = i18n.locale?.value || 'fr'

    return [
      {
        '@type': 'Person',
        '@id': `${host}/#person`,
        name: t('schema.person.name') || 'Maëva Pasteur',
        jobTitle: t('schema.person.jobTitle') || 'Développeur Front-End',
        description:
          t('schema.person.description') ||
          'Développeur front-end fullstack spécialisé Vue.js et Nuxt.js',
        disambiguatingDescription:
          t('schema.person.disambiguatingDescription') || '',
        url: host,
        image: `${host}/images/maeva-pasteur.webp`,
        sameAs: [
          'https://linkedin.com/in/maeva-pasteur',
          'https://github.com/maevapasteur'
        ],
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Dubai',
          addressCountry: 'AE'
        },
        knowsAbout: t('schema.skills') || [],
        hasOccupation: {
          '@type': 'Occupation',
          name: t('schema.person.jobTitle') || 'Développeur Front-End',
          occupationLocation: {
            '@type': 'City',
            name: 'Dubai'
          },
          skills: t('schema.skills') || []
        }
      },

      {
        '@type': 'WebSite',
        '@id': `${host}/#website-main`,
        name: t('schema.website.name') || 'Maëva Pasteur Portfolio',
        description:
          t('schema.website.description') ||
          'Portfolio de Maëva Pasteur, développeur front-end',
        url: host,
        inLanguage: locale,
        publisher: {
          '@type': 'Person',
          '@id': `${host}/#person`
        },
        author: {
          '@type': 'Person',
          '@id': `${host}/#person`
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${host}/search?q={search_term_string}`
          },
          'query-input': 'required name=search_term_string'
        }
      },

      {
        '@type': 'Organization',
        '@id': `${host}/#organization`,
        name:
          t('schema.organization.name') || 'Maëva Pasteur - Web Development',
        description:
          t('schema.organization.description') ||
          'Services de développement web front-end',
        url: host,
        logo: `${host}/images/logo.png`,
        founder: {
          '@type': 'Person',
          '@id': `${host}/#person`
        },
        foundingDate: '2017-01-01',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Dubai',
          addressCountry: 'AE'
        },
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'customer service',
          email: 'contact@maevapasteur.com',
          url: `${host}/contact`
        },
        serviceArea: [
          { '@type': 'Country', name: 'France' },
          { '@type': 'Country', name: 'United Arab Emirates' },
          { '@type': 'Country', name: 'United States' },
          { '@type': 'Country', name: 'Saudi Arabia' }
        ]
      },

      {
        '@type': 'FAQPage',
        '@id': `${host}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name:
              t('schema.faq.question1.question') || 'Quels sont vos tarifs ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text:
                t('schema.faq.question1.answer') ||
                'Les tarifs dépendent de la complexité du projet.'
            }
          },
          {
            '@type': 'Question',
            name:
              t('schema.faq.question2.question') ||
              'Dans quels délais pouvez-vous livrer ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text:
                t('schema.faq.question2.answer') ||
                'Les délais varient selon le projet.'
            }
          },
          {
            '@type': 'Question',
            name:
              t('schema.faq.question3.question') ||
              'Travaillez-vous à distance ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text:
                t('schema.faq.question3.answer') ||
                'Oui, je travaille principalement à distance.'
            }
          }
        ]
      },

      {
        '@type': 'LocalBusiness',
        '@id': `${host}/#business`,
        name: t('schema.business.name') || 'Maëva Pasteur - Développement Web',
        description:
          t('schema.business.description') ||
          'Services de développement web front-end',
        url: host,
        telephone: '+33786467271',
        email: 'contact@maevapasteur.com',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Dubai',
          addressCountry: 'AE'
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 25.2048,
          longitude: 55.2708
        },
        openingHours: 'Su-Th 09:00-18:00',
        priceRange: '€€€',
        serviceArea: [
          { '@type': 'Country', name: 'United Arab Emirates' },
          { '@type': 'Country', name: 'France' },
          { '@type': 'Country', name: 'United States' },
          { '@type': 'Country', name: 'Saudi Arabia' }
        ]
      }
    ]
  }

  const applyGlobalSchemas = () => {
    if (!nuxtApp.$i18n) {
      return
    }

    try {
      const schemas = createGlobalSchemas(nuxtApp.$i18n)
      useSchemaOrg(schemas)
    } catch (error) {
      console.warn('Global schemas error:', error)
    }
  }

  if (import.meta.server) {
    nuxtApp.hook('app:rendered', () => {
      applyGlobalSchemas()
    })
  }

  if (import.meta.client) {
    nuxtApp.hook('app:mounted', () => {
      applyGlobalSchemas()
    })

    if (nuxtApp.$i18n) {
      nuxtApp.hook('i18n:localeSwitched', () => {
        applyGlobalSchemas()
      })
    }
  }
})
