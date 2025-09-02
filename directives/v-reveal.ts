import type { Directive } from 'vue'

type RevealOptions = {
    threshold?: number
    rootMargin?: string
    once?: boolean
    delay?: number // ms
}

export const vReveal: Directive<HTMLElement, RevealOptions | undefined> = {
    getSSRProps(binding) {
        const { delay = 0 } = binding.value || {}
        return {
            class: 'reveal',
            style: delay ? { transitionDelay: `${delay}ms` } : undefined
        }
    },
    mounted(el, binding) {
        const {
            threshold = 0.1,
            rootMargin = '0px 0px 0px 0px',
            once = false,
            delay = 0,
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
        ;(el as any).__revealObserver = observer
    },
    unmounted(el) {
        const obs: IntersectionObserver | undefined = (el as any).__revealObserver
        if (obs) obs.unobserve(el)
        delete (el as any).__revealObserver
    },
}
