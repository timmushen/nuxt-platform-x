<template>
  <div>
    <!-- Feed item -->
    <div class="feed-item-text">
      <span class="date">{{item.date}}</span>
      <span class="text">
        <span class="name">{{item.name}}</span>
        {{item.body}}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"]
};
</script>

<style scoped>
</style>