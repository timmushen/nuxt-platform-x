<template>
  <div class="deal-content">
    <!-- Deal details -->
    <div class="flex-card deal-card">
      <div class="deal-card-header is-toggle">
        <h3>{{title}}</h3>
        <div class="toggle-icon">
          <XIcon :icon="['fal','chevron-right']"/>
        </div>
      </div>
      <div class="deal-card-content">
        <div class="details-placeholder">
          <span>What do you know about this deal?</span>
          <a>
            <XIcon :icon="['fal','plus']"/>Add more details
          </a>
        </div>
      </div>
    </div>
    <!-- Deal contact -->
  </div>
</template>

<script>
export default {
  props: ["title", "dropdown_items"]
};
</script>

<style scoped>
</style>