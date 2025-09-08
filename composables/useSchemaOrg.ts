import type { Person, WebSite, Organization, BreadcrumbList, Service } from 'schema-dts'

export const useSchemaOrgPersonal = () => {
  const { $i18n } = useNuxtApp()
  const route = useRoute()
  const { t } = useI18n()

  const definePerson = (): Person => {
    const baseUrl = 'https://maevapasteur.com'

    return {
      '@type': 'Person',
      name: t('schema.person.name'),
      jobTitle: t('schema.person.jobTitle'),
      description: t('schema.person.description'),
      disambiguatingDescription: t('schema.person.disambiguatingDescription'),
      url: baseUrl,
      image: `${baseUrl}/images/maeva-pasteur.webp`,
      sameAs: [
        'https://linkedin.com/in/maeva-pasteur',
        'https://github.com/maevapasteur'
      ],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Dubai',
        addressCountry: 'AE'
      },
      knowsAbout: t('schema.skills'),
      hasOccupation: {
        '@type': 'Occupation',
        name: t('schema.person.jobTitle'),
        occupationLocation: {
          '@type': 'City',
          name: 'Dubai'
        },
        skills: t('schema.skills')
      }
    }
  }

  const defineWebSite = (): WebSite => {
    const baseUrl = 'https://maevapasteur.com'

    return {
      '@type': 'WebSite',
      name: t('schema.website.name'),
      description: t('schema.website.description'),
      url: baseUrl,
      inLanguage: $i18n.locale.value,
      isPartOf: {
        '@type': 'Organization',
        name: t('schema.organization.name')
      },
      about: {
        '@type': 'Person',
        name: t('schema.person.name')
      },
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${baseUrl}/search?q={search_term_string}`
        },
        'query-input': 'required name=search_term_string'
      }
    }
  }

  const defineOrganization = (): Organization => {
    const baseUrl = 'https://maevapasteur.com'

    return {
      '@type': 'Organization',
      name: t('schema.organization.name'),
      description: t('schema.organization.description'),
      url: baseUrl,
      logo: `${baseUrl}/images/logo.png`,
      founder: {
        '@type': 'Person',
        name: t('schema.person.name')
      },
      foundingDate: '2016-01-01',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Dubai',
        addressCountry: 'AE'
      },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        url: `${baseUrl}/contact`
      }
    }
  }

  const defineBreadcrumbList = (): BreadcrumbList => {
    const baseUrl = 'https://maevapasteur.com'
    const pathSegments = route.path.split('/').filter(Boolean)

    // Determine if we have a language prefix
    const hasLangPrefix = pathSegments.length > 0 && (pathSegments[0] === 'en' || pathSegments[0] === 'fr')
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
    const baseUrl = 'https://maevapasteur.com'
    const services = t('schema.services') as Array<{name: string, description: string}>

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
  }

  return {
    definePerson,
    defineWebSite,
    defineOrganization,
    defineBreadcrumbList,
    defineServices
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
      url: projectData.url || `${baseUrl}/works/${projectData.name.toLowerCase().replace(/\s+/g, '-')}`,
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
