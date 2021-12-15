<template>
  <div>
    <!-- <BaseHeader /> -->
    <slot />
    <!-- <BaseFooter /> -->
  </div>
</template>

<script setup lang="ts">
useMeta({
  link: [
    {
      href:
        'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;700&display=swap',
      rel: 'stylesheet',
    },
  ],
})
</script>
