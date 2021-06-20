<template>
  <div class="">
            <div>
              <h3>YOU ORDER</h3>
            </div>
          <div class="col-md-8 d-flex">
            <div class="text-center">
              <table class="table table-sm" >
                <thead>
                  <tr class="product-tab">
                    <th scope="col">ID</th>
                    <th scope="col">Product</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in order" :key="item.id">
                    <td>{{item.id}}</td>
                    <td>{{item.title}}</td>
                    <td>{{item.quantity}}</td>
                    <td>{{(item.unitPrice * item.quantity)}}</td>
                     <td> <button @click="removeItem(item)">X</button> </td>
                  </tr>
                </tbody>
              </table>

      <div class="product-price">
        <div class="text-center">
          <h2>TOTAL: <span>{{total}}€</span></h2>

        </div>
      </div>
    </div>
  </div>

  </div>
</template>

<script>
export default {
  props:["order", "total"],
   methods: {
    removeItem(item){
      this.$emit("remove", item)
    }
  }
}
</script>
