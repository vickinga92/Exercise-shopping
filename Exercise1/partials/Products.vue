<template>

    <div class="col-lg-4 col-md-3 col-sm-12 col-xs-12 text-center">
      <div class="shop-box">
        <h3>{{ title }}</h3>
        <img :src="img" alt="" class="img" />
        <button class="btn hvr-hover" @click.prevent="addToCart">
          Add to cart
          <h3> <span> {{ price }}€</span></h3>
        </button>
      </div>
    </div>

</template>

<script>
export default {
  props: ["img", "title", "price"],

  methods: {
    addToCart(item) {
      this.$emit("click");
    },
  },
};
</script>

