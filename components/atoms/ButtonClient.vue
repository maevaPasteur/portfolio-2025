<template>
    <NuxtLink
            v-if="client?.id"
            :to="localePath({name: 'works-id', params: {id: client.id}})"
            class="group/btn border min-h-10 min-w-10 bg-white px-3 flex items-center justify-center"
    >
        <Icon v-if="isPrevious" name="mdi:arrow-left"/>
        <span class="max-w-0 overflow-hidden whitespace-nowrap duration-[700ms] ease group-hover/btn:max-w-xs">
            <span
                class="text-sm font-mono"
                :class="{'pr-2': isNext, 'pl-2': isPrevious}"
            >
                {{ client.title }}
            </span>
        </span>
        <Icon v-if="isNext" name="mdi:arrow-right"/>
    </NuxtLink>
</template>

<script lang="ts" setup>
import type {Client} from '~/stores/clients'

const localePath = useLocalePath();

defineProps<{
    client?: Client;
    isNext?: Boolean;
    isPrevious?: Boolean;
}>();
</script>