export default defineNuxtPlugin(() => {
  useSchemaOrg({
    host: 'https://maevapasteur.com'
  })

  const defineFAQSchema = () => {
    const { t } = useI18n()

    return {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: t('schema.faq.question1.question'),
          acceptedAnswer: {
            '@type': 'Answer',
            text: t('schema.faq.question1.answer')
          }
        },
        {
          '@type': 'Question',
          name: t('schema.faq.question2.question'),
          acceptedAnswer: {
            '@type': 'Answer',
            text: t('schema.faq.question2.answer')
          }
        },
        {
          '@type': 'Question',
          name: t('schema.faq.question3.question'),
          acceptedAnswer: {
            '@type': 'Answer',
            text: t('schema.faq.question3.answer')
          }
        }
      ]
    }
  }

  const defineLocalBusiness = () => {
    const { t } = useI18n()

    return {
      '@type': 'LocalBusiness',
      '@id': 'https://maevapasteur.com/#business',
      name: t('schema.business.name'),
      description: t('schema.business.description'),
      url: 'https://maevapasteur.com',
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
        {
          '@type': 'Country',
          name: 'United Arab Emirates'
        },
        {
          '@type': 'Country',
          name: 'France'
        },
        {
          '@type': 'Country',
          name: 'United States'
        },
        {
          '@type': 'Country',
          name: 'Saudi Arabia'
        }
      ]
    }
  }

  return {
    provide: {
      schemaOrg: {
        defineFAQSchema,
        defineLocalBusiness
      }
    }
  }
})
