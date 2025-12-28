<script setup lang="ts">
import { twMerge } from "tailwind-merge";

import { useAttrs } from "vue";

const attrs = useAttrs();
</script>

<template>
  <a
    :class="
      twMerge(
        'bg-transparent text-primary hover:underline underline-offset-3',
        attrs.class as string | undefined,
      )
    "
    v-bind="attrs"
  >
    <slot />
  </a>
</template>
