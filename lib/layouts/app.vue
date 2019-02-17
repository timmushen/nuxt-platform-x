<template>
  <div class="bg-grey-lighter">
    <XSidebarDark logo="https://x.enterprises/x/img/x_logo-d53b64c6.png" :nav_items="nav_items"/>
    <XTopbar/>
    <div>
      <nuxt/>
    </div>
  </div>
</template>
<style >
</style>
<script>
export default {
  data() {
    return {
      nav_items: [
        { name: "login", icon: "plus", url: "/login" },
        { name: "login", icon: "minus", url: "/login" },
        { name: "login", icon: "abacus", url: "/login" }
      ],
      timeline_items: [
        {
          id: 1,
          date: "Wednesday",
          name: "Henry",
          body: "is awesome"
        },
        {
          id: 2,
          date: "Friday",
          name: "Lucinda",
          body: "is awesome"
        },
        {
          id: 3,
          date: "Wednesday",
          name: "Tim",
          body: "is awesome"
        }
      ]
    };
  }
};
</script>