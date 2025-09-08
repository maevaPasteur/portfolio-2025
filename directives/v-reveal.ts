import type { Directive } from 'vue'

type RevealOptions = {
    threshold?: number
    rootMargin?: string
    once?: boolean
    delay?: number // ms
}

interface RevealHTMLElement extends HTMLElement {
  __revealObserver?: IntersectionObserver
}

export const vReveal: Directive<HTMLElement, RevealOptions | undefined> = {
    mounted(el, binding) {
        const {
            threshold = 0.1,
            rootMargin = '0px 0px 0px 0px',
            once = false,
            delay = 0
        } = binding.value || {}

        el.classList.add('reveal')
        if (delay) el.style.transitionDelay = `${delay}ms`

        const observer = new IntersectionObserver((entries) => {
            for (const entry of entries) {
                if (entry.isIntersecting) {
                    el.classList.add('reveal-show')
                    if (once) observer.unobserve(el)
                } else if (!once) {
                    el.classList.remove('reveal-show')
                }
            }
        }, { threshold, rootMargin })

        observer.observe(el)
        ;(el as RevealHTMLElement).__revealObserver = observer
    },
    unmounted(el) {
        const revealEl = el as RevealHTMLElement
        const obs = revealEl.__revealObserver
        if (obs) obs.unobserve(el)
        delete revealEl.__revealObserver
    }
}
