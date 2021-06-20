<template>
  <div>
    <div class="container-fluid">
      <h1 class="intro text-center">FRUITS SHOP</h1>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-sm-6">
          <Products
            v-for="item in fruits"
            :key="item.id"
            :title="item.title"
            :price="item.price"
            :img="item.img"
            @click="addToCart(item)"
          ></Products>
        </div>
        <div class="col-sm-6">
          <ListCart :order = "listOrder" :total="totalPrice" @remove="removeItem"></ListCart>
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
      fruits: { id:"", title: "", price: "", img: "" },
      listOrder:[],
      priceOffert: "130",
      total:"",
    };
  },
  async mounted() {
    let response = await this.$axios.get("http://localhost:8082/products");
    console.log(response.data);
    this.fruits = response.data
  },
  computed:{
  totalPrice(){
      if(this.listOrder.length===0){
         return 0;
      }
      let total = this.listOrder.map((item)=> item.unitPrice * item.quantity)
      total=total.reduce((sum,current)=> sum + current)
      return total
    },

  },
  methods: {
     addToCart(item) {

      //si ananas.quantity == 2, entonces ananas.price == 130
      let offert = this.listOrder.filter(order=> order.quantity === item.quantity)
       if (offert.length === 3 && item.title === "ANANAS"){
          let offerton = offert.unitPrice = "130"
           this.listOrder.push(offerton)
      }
      let found = this.listOrder.filter(order => order.id === item.id);

      if (found.length != 0) {
        found[0].quantity++;
      } else {
        let order = {
          id: item.id,
          title: item.title,
          unitPrice: item.price,
          quantity: 1
        }
        this.listOrder.push(order);
      }
    },
     removeItem(item){
      let index= this.listOrder.findIndex((item)=>item.id===item.id)
      this.listOrder.splice(index, 1)
     }
  },

  components: {
    Products,
    ListCart,
  },
};
</script>

<style>
</style>
