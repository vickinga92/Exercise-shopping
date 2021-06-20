<template>

      <div class="col-lg-4 col-md-3 col-sm-12 col-xs-12">
        <div class="shop-box">
          <img class="img-fluid" src="assets/img/ananas.jpg" alt="" />
          <h3 class="btn hvr-hover" href="#">{{ title }}</h3> <span>{{price}}</span>
          <a
            @click.prevent="addToCart"
            href="#"
            class="btn btn-white btn-outline-white"
            >Add to cart</a
          >
        </div>
        <div class="col-lg-4 col-md-3 col-sm-12 col-xs-12">
          <div class="shop-box">
            <img class="img-fluid" src="img/banana.jpg" alt="" />
            <h3 class="btn hvr-hover" href="#">{{ title }}</h3>
            <a
              @click.prevent="addToCart"
              href="#"
              class="btn btn-white btn-outline-white"
              >Add to cart</a
            >
          </div>
          <div class="col-lg-4 col-md-3 col-sm-12 col-xs-12">
            <div class="shop-box">
              <img class="img-fluid" src="img/coco.jpg" alt="" />
              <h3 class="btn hvr-hover" href="#">{{ title }}</h3>
              <a
                @click.prevent="addToCart"
                href="#"
                class="btn btn-white btn-outline-white"
                >Add to cart</a
              >
            </div>
          </div>
          <div class="col-lg-4 col-md-3 col-sm-12 col-xs-12">
            <div class="shop-box">
              <img class="img-fluid" src="img/datil.jpg" alt="" />
              <h3 class="btn hvr-hover" href="#">{{ title }}</h3>
              <a
                @click.prevent="addToCart"
                href="#"
                class="btn btn-white btn-outline-white"
                >Add to cart</a
              >
            </div>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  props: ["title", "price"],
   methods:{
        addToCart(item){
            this.$emit("click")
        }
    }
};
</script>

<style>
</style>
