<template>
  <div class="bg-black">
    <div class="h-screen w-full flex items-center text-center hero-image opacity-75">
      <div class="w-full text-center -mt-32">
        <div class="font-black text-white text-center opacity-100" style="font-size: 12rem;">404</div>
        <h1
          class="text-grey text-5xl text-center font-black tracking-wide -mt-5 opacity-100"
        >Page not found</h1>
      </div>
    </div>
  </div>
</template>
<style scoped>
.hero-image {
  /* background-image: url("https://images.unsplash.com/photo-1534106474077-f9e9c6f5a47c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1960&q=80"); */
  /* background-image: url("https://images.unsplash.com/photo-1495225134022-21db12852856?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=80"); */
  background-image: url("https://images.unsplash.com/photo-1503751071777-d2918b21bbd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
<script>
export default {
  head() {
    return {
      title: "404 Page Not Found",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "The page you were looking for was not found."
        }
      ]
    };
  }
};
</script>