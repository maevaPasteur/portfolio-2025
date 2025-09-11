type Fit = 'cover' | 'contain' | 'inside' | 'outside'
type Density = 'x1' | 'x2' | 'x3'

interface ImageFormat {
  densities: `${Density}` | `${Density} ${Density}`
  width: number
  height?: number
  sizes: string
  fit: Fit
}

export const imagesSizes: Record<string, ImageFormat> = {
  homeDesktop: {
    densities: 'x1 x2',
    width: 400,
    height: 500,
    sizes: '400px',
    fit: 'cover'
  },
  homeMobile: {
    densities: 'x1 x2',
    width: 340,
    height: 425,
    sizes: '340px',
    fit: 'cover'
  },
  mockupMobile: {
    densities: 'x1 x2',
    width: 296,
    height: 600,
    sizes: '130px md:220px xl:296px',
    fit: 'inside'
  },
  mockupTablet: {
    densities: 'x1 x2',
    width: 296,
    height: 433,
    sizes: '420px md:629px xl:641px',
    fit: 'inside'
  },
  mockupDesktop: {
    densities: 'x1 x2',
    width: 594,
    height: 386,
    sizes: '262px md:440px xl:594px',
    fit: 'inside'
  },
  mockupFull: {
    densities: 'x1 x2',
    width: 700,
    sizes: '450px lg:700px',
    fit: 'inside'
  },
  cursor: {
    densities: 'x1',
    width: 100,
    height: 140,
    sizes: '100px',
    fit: 'cover'
  }
}
