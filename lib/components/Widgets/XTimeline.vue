<template>
  <div>
    <ol class="simple-feed">
      <li class="feed-item" v-for="item in timeline_items" :key="item.id">
        <XTimelineItem :item="item"/>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  props: ["timeline_items"]
};
</script>

<style scoped>
</style>