import type { Directive } from 'vue'

type RevealGroupOptions = {
    threshold?: number
    rootMargin?: string
    once?: boolean
    staggerDelay?: number // ms delay between each child (default: 100ms)
}

const getDelay = (index: number, staggerDelay: number) => {
    let delay
    if (index <= 4) {
        delay = index * staggerDelay
    } else if (index === 5) {
        delay = 4 * staggerDelay+ 40
    } else if (index === 6) {
        delay = 4 * staggerDelay + 40 + 30
    } else if (index === 7) {
        delay = 4 * staggerDelay + 40 + 30 + 20
    } else {
        delay = 4 * staggerDelay + 40 + 30 + 20 + (index - 4) * 10
    }
    return delay;
}

export const vRevealGroup: Directive<HTMLElement, RevealGroupOptions | undefined> = {
    mounted(el, binding) {
        const {
            threshold = 0.1,
            rootMargin = '0px 0px 0px 0px',
            once = false,
            staggerDelay = 100
        } = binding.value || {}

        const children = Array.from(el.children) as HTMLElement[]

        children.forEach((child, index) => {
            child.classList.add('reveal');
            const delay = getDelay(index, staggerDelay);
            child.style.transitionDelay = `${delay}ms`
        })

        const observer = new IntersectionObserver((entries) => {
            for (const entry of entries) {
                if (entry.isIntersecting) {
                    children.forEach((child, index) => {
                        const delay = getDelay(index, staggerDelay);
                        setTimeout(() => {
                            child.classList.add('reveal-show')
                        }, delay)
                    })
                    if (once) observer.unobserve(el)
                } else if (!once) {
                    children.forEach((child) => {
                        child.style.transitionDelay = '0ms'
                        child.classList.remove('reveal-show')
                        setTimeout(() => {
                            const index = children.indexOf(child)
                            const delay = getDelay(index, staggerDelay);
                            child.style.transitionDelay = `${delay}ms`
                        }, 50) // Small delay to allow transition to complete
                    })
                }
            }
        }, { threshold, rootMargin })

        observer.observe(el)
        ;(el as HTMLElement & { __revealGroupObserver?: IntersectionObserver }).__revealGroupObserver = observer
    },
    unmounted(el) {
        const obs: IntersectionObserver | undefined = (el as HTMLElement & { __revealGroupObserver?: IntersectionObserver }).__revealGroupObserver
        if (obs) obs.unobserve(el)
        delete (el as HTMLElement & { __revealGroupObserver?: IntersectionObserver }).__revealGroupObserver
    }
}
