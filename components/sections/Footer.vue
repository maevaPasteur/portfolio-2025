<template>
    <footer class="bg-gray-900 w-full text-white px-6 py-6 flex flex-col md:flex-row gap-4 items-center justify-between">
        <div v-reveal class="flex gap-4 items-center">
            <p class="text-sm font-mono">{{ $t('footer.follow') }}</p>
            <div class="flex gap-1 items-center text-2xl">
                <a
                        v-for="link in links"
                        :href="link.url"
                        target="_blank"
                        class="p-2 block"
                >
                    <Icon :name="link.icon" />
                </a>
            </div>
        </div>
        <p v-reveal class="font-mono text-xs">© 2025 Maëva Pasteur</p>
    </footer>
</template>

<script setup lang="ts">
const links = [
    {
        url: 'https://www.linkedin.com/in/maeva-pasteur',
        icon: 'mdi:linkedin'
    },
    {
        url: 'https://github.com/maevaPasteur',
        icon: 'mdi:github'
    }
]
</script>