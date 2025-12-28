<script setup lang="ts">
import { type ClassNameValue, twMerge } from "tailwind-merge";

import { useAttrs } from "vue";

const attrs = useAttrs();
</script>

<template>
  <a
    :class="
      twMerge(
        'bg-transparent text-primary hover:underline underline-offset-3',
        attrs.class as ClassNameValue,
      )
    "
    v-bind="attrs"
  >
    <slot />
  </a>
</template>
