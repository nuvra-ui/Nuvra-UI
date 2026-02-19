# Component Gallery

Here you can find all the components available in the library. We are working on adding more components.

<div class="grid grid-cols-5 gap-4">
    <a 
      v-for="component in components" 
      :key="component" 
      :href="`/components/${component}`"
    >
      {{ component.charAt(0).toUpperCase() + component.slice(1) }}
    </a>
</div>

<script setup>
  const components = ["link", "button", "badge", "switch"]
</script>
