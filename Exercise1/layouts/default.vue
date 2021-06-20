<template>
  <div>

    <Nuxt />

  </div>
</template>
<script>



export default {
  data() {
    return {
      menu: [
        { id: 1, path: "/", name: "index", meta: { isPrivate: false } },

      ],
    };
  },


  components: {

  }
}

</script>
<style>
</style>
