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
      offert: "",
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
      let total = this.listOrder.map((item) => item.unitPrice);
      total = total.reduce((sum, current) => sum + current);
      return total;
    },
  },
  methods: {
    addToCart(item) {
      let found = this.listOrder.filter((order) => order.id === item.id);

      if (found.length != 0) {
        found[0].quantity++;
        if (found[0].quantity % item.itemCount === 0) {
          found[0].unitPrice += item.price * item.discount;
        } else {
          found[0].unitPrice += item.price;
        }
      } else {
        let order = {
          id: item.id,
          title: item.title,
          unitPrice: item.price,
          quantity: 1,
        };
        this.listOrder.push(order);
      }
    },

    removeItem(item) {
      this.listOrder.splice(item, 1);
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
