import { imagesSizes } from './images-sizes'
import { clientsData } from '../data/clients'

type Fit = 'cover' | 'contain' | 'inside' | 'outside'

interface Format {
  densities: number[]
  width: number
  height?: number
  sizes: number[]
  fit: Fit
}

const formats: Record<string, Format> = {}

Object.keys(imagesSizes).forEach((key) => {
  const props = imagesSizes[key]
  formats[key] = {
    ...props,
    densities: props.densities
      ?.split(' ')
      .map((d) => Number(d.replace(/^x/, '')))
      .filter(Boolean) || [1],
    sizes:
      props.sizes
        ?.split(' ')
        .map((token) =>
          Number((token.split(':').pop() || '').replace('px', ''))
        )
        .filter(Boolean) || []
  }
})

const buildIpxRoutesFor = (src: string, format: Format): string[] => {
  const images: string[] = []

  for (const size of format.sizes) {
    const ratio = format.height ? format.height / format.width : null

    for (const density of format.densities) {
      const width = size * density
      const height = ratio ? Math.round(width * ratio) : null

      let url = '/_ipx/'

      if (format.fit) url += `fit_${format.fit}&`

      if (height) url += `s_${width}x${height}`
      else url += `w_${width}`

      images.push(`${url}${src}`)
    }
  }
  return images
}

const routes = []

for (const client of clientsData) {
  if (client?.mockups?.desktop)
    routes.push(
      ...buildIpxRoutesFor(client.mockups.desktop, formats.mockupDesktop)
    )
  if (client?.mockups?.tablet)
    routes.push(
      ...buildIpxRoutesFor(client.mockups.tablet, formats.mockupTablet)
    )
  if (client?.mockups?.mobile)
    routes.push(
      ...buildIpxRoutesFor(client.mockups.mobile, formats.mockupMobile)
    )
  if (client?.mockups?.full)
    routes.push(...buildIpxRoutesFor(client.mockups.full, formats.mockupFull))
  if (client?.portrait) {
    routes.push(...buildIpxRoutesFor(client.portrait, formats.homeDesktop))
    routes.push(...buildIpxRoutesFor(client.portrait, formats.homeMobile))
    routes.push(...buildIpxRoutesFor(client.portrait, formats.cursor))
  }
}

export const ipxRoutes: string[] = routes
