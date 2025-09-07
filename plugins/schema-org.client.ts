export default defineNuxtPlugin(() => {
  // Configuration globale pour Schema.org
  useSchemaOrg({
    // Configuration par défaut qui sera mergée avec tous les schemas
    host: 'https://maevapasteur.com',
    inLanguage: 'fr-FR'
  })

  // FAQ Schema pour toutes les pages si nécessaire
  const defineFAQSchema = () => {
    const { t } = useI18n()
    
    return {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Quels services propose Maëva Pasteur ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Maëva Pasteur propose des services de développement frontend, intégration web, optimisation performance et développement e-commerce Shopify.'
          }
        },
        {
          '@type': 'Question',
          name: 'Quelles technologies utilise Maëva Pasteur ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Maëva Pasteur utilise principalement Vue.js, Nuxt.js, TypeScript, JavaScript, HTML5, CSS3, SCSS, Tailwind CSS, Shopify, Node.js et MongoDB.'
          }
        },
        {
          '@type': 'Question',
          name: 'Comment contacter Maëva Pasteur ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Vous pouvez contacter Maëva Pasteur par email à contact@maevapasteur.com ou via le formulaire de contact sur le site web.'
          }
        }
      ]
    }
  }

  // LocalBusiness schema pour l'aspect professionnel
  const defineLocalBusiness = () => {
    const { t } = useI18n()
    
    return {
      '@type': 'LocalBusiness',
      '@id': 'https://maevapasteur.com/#business',
      name: t('schema.organization.name'),
      description: t('schema.organization.description'),
      url: 'https://maevapasteur.com',
      telephone: '+33-X-XX-XX-XX-XX', // À remplacer par le vrai numéro
      email: 'contact@maevapasteur.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Dubai',
        addressCountry: 'AE'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 25.2048,  // Dubai coordinates
        longitude: 55.2708
      },
      openingHours: 'Mo-Fr 09:00-18:00',
      priceRange: '€€',
      serviceArea: {
        '@type': 'Country',
        name: 'France'
      }
    }
  }

  // Rendre les schemas disponibles globalement si nécessaire
  return {
    provide: {
      schemaOrg: {
        defineFAQSchema,
        defineLocalBusiness
      }
    }
  }
})