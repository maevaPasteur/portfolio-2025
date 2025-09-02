import type { Directive } from 'vue'

type RevealGroupOptions = {
    threshold?: number
    rootMargin?: string
    once?: boolean
    staggerDelay?: number // ms delay between each child (default: 100ms)
}

export const vRevealGroup: Directive<HTMLElement, RevealGroupOptions | undefined> = {
    mounted(el, binding) {
        const {
            threshold = 0.1,
            rootMargin = '0px 0px 0px 0px',
            once = false,
            staggerDelay = 100,
        } = binding.value || {}

        // Get all direct children
        const children = Array.from(el.children) as HTMLElement[]
        
        // Add reveal class to all children and set staggered delays
        children.forEach((child, index) => {
            child.classList.add('reveal')
            // Set staggered delay only for showing (not for hiding)
            // First 5 children: increment by staggerDelay (100ms)
            // From 6th child onwards: increment by 10ms from the 5th child delay
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
            child.style.transitionDelay = `${delay}ms`
        })

        const observer = new IntersectionObserver((entries) => {
            for (const entry of entries) {
                if (entry.isIntersecting) {
                    // Show children with staggered delays
                    children.forEach((child, index) => {
                        // First 5 children: increment by staggerDelay (100ms)
                        // From 6th child onwards: increment by 10ms from the 5th child delay
                        let delay
                        if (index <= 4) {
                            delay = index * staggerDelay
                        } else {
                            delay = 4 * staggerDelay + (index - 4) * 10
                        }
                        setTimeout(() => {
                            child.classList.add('reveal-show')
                        }, delay)
                    })
                    if (once) observer.unobserve(el)
                } else if (!once) {
                    // Hide children immediately (no delay)
                    children.forEach((child) => {
                        child.style.transitionDelay = '0ms'
                        child.classList.remove('reveal-show')
                        // Restore staggered delay for next show
                        setTimeout(() => {
                            const index = children.indexOf(child)
                            // First 5 children: increment by staggerDelay (100ms)
                            // From 6th child onwards: increment by 10ms from the 5th child delay
                            let delay
                            if (index <= 4) {
                                delay = index * staggerDelay
                            } else {
                                delay = 4 * staggerDelay + (index - 4) * 10
                            }
                            child.style.transitionDelay = `${delay}ms`
                        }, 50) // Small delay to allow transition to complete
                    })
                }
            }
        }, { threshold, rootMargin })

        observer.observe(el)
        ;(el as any).__revealGroupObserver = observer
    },
    unmounted(el) {
        const obs: IntersectionObserver | undefined = (el as any).__revealGroupObserver
        if (obs) obs.unobserve(el)
        delete (el as any).__revealGroupObserver
    },
}