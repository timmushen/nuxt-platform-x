<template>
  <div>
    <div class="flex-card light-bordered light-raised padding-10">
      <h3 class="card-heading">{{title}}</h3>
      <div class="header-control ml-auto is-drop drop-sm">
        <i class="sl sl-icon-arrow-down"></i>
        <div class="dropContain">
          <div class="dropOut">
            <ul>
              <li v-for="item in dropdown_items" :key="item.name">
                <XIcon :icon="['fal', item.icon]" class="drop-icon"/>
                {{item.name}}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "dropdown_items"]
};
</script>

<style scoped>
</style>