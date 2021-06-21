<template>
  <div>
    <div class="container-fluid">
      <h1 class="intro text-center">FRUITS SHOP</h1>
    </div>
    <div class="container shop">
      <div class="row">
        <div class="col-sm-8 products">
          <Products
            v-for="item in fruits"
            :key="item.id"
            :id="item.id"
            :title="item.title"
            :price="item.price"
            :img="item.img"
            @click="addToCart(item)"
          ></Products>
        </div>
        <div class="col-sm-4">
          <ListCart
            :order="listOrder"
            :total="totalPrice"
            @remove="removeItem"
          ></ListCart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Products from "@/partials/Products.vue";
import ListCart from "@/partials/ListCart.vue";

export default {
  name: "index",
  data() {
    return {
      fruits: { id: "", title: "", price: "", img: "" },
      listOrder: [],
      total: "",
      offert: ""
    };
  },
  async mounted() {
    let response = await this.$axios.get("http://localhost:8082/products");
    console.log(response.data);
    this.fruits = response.data;
  },

  computed: {
    totalPrice() {
      if (this.listOrder.length === 0) {
        return 0;
      }
      let total = this.listOrder.map((item) => item.unitPrice * item.quantity);
      total = total.reduce((sum, current) => sum + current);
      return total;
    },
  },
  methods: {

     addToCart(item) {

      let found = this.listOrder.filter((order) => order.id === item.id);

      if (found.length != 0) {
        found[0].quantity++;

        if (found[0].id === "1"){
         let offert = ( Math.trunc(found[0].quantity / 3)) * 130;
         if (found[0].quantity % 3 === 1) offert = offert + 50;
         if (found[0].quantity % 3 === 2) offert = offert + 100;
         found[0].unitPrice =  offert / found[0].quantity;
        }
        if (found[0].id === "2"){
         let offert = ( Math.trunc(found[0].quantity / 2)) * 45;
         if (found[0].quantity % 2 === 1) offert = offert + 30;
         if (found[0].quantity % 2 === 2) offert = offert + 95;
         found[0].unitPrice =  offert / found[0].quantity;
        }
      }else {
        let order = {
          id: item.id,
          title: item.title,
          unitPrice: item.price,
          quantity: 1,
        };
      this.listOrder.push(order);
      }

      console.log(found)
    },

      removeItem() {
      let index = this.listOrder.findIndex((item) => item.id === item.id);
      this.listOrder.splice(index, 1);
    },
  },

  components: {
    Products,
    ListCart,
  },
};
</script>

<style>
</style>
