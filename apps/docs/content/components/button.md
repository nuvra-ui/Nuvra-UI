# Button

<div ref="el" />

<script setup>
import { createElement } from 'react'
import { createRoot } from 'react-dom/client'
import { ref, onMounted } from 'vue'
import { Button } from '@nuvra-ui/react'

const el = ref()
onMounted(() => {
  const root = createRoot(el.value)
  root.render(createElement(Button, {}, "Button"))
})
</script>
