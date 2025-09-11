import 'array.prototype.at/auto'

export default defineNuxtPlugin(() => {
  if (!String.prototype.at) {
    Object.defineProperty(String.prototype, 'at', {
      value(index: number) {
        const str = String(this)
        let i = Math.trunc(index) || 0
        if (i < 0) i += str.length
        if (i < 0 || i >= str.length) return undefined
        return str.charAt(i)
      },
      configurable: true,
      writable: true
    })
  }
})
