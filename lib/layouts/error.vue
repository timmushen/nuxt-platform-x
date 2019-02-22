<template>
  <div class="bg-black">
    <div class="h-screen w-full flex items-center text-center hero-image opacity-75">
      <div class="w-full text-center -mt-32">
        <div
          class="font-black text-white text-center opacity-100"
          style="font-size: 6rem;"
        >Houston, we have a problem.</div>
        <h1 class="text-grey text-5xl text-center font-black tracking-wide opacity-100">
          <div class="title">{{ message }}</div>
        </h1>
        <p class="description" v-if="debug">{{messages.client_error_details}}</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.hero-image {
  background-image: url("https://images.unsplash.com/photo-1503751071777-d2918b21bbd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
<script>
export default {
  name: "NuxtError",
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head() {
    return {
      title: this.message
    };
  },
  computed: {
    statusCode() {
      return (this.error && this.error.statusCode) || 500;
    },
    message() {
      return this.error.message || `<%= messages.client_error %>`;
    }
  }
};
</script>