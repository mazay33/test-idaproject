<template>
  <div class="product-list">
    <div class="products">
      <transition-group name="list">
      <v-catalog-item
        v-for="product in sortedProducts"
        :key="product.id"
        :product_data="product"
      />
      </transition-group>
    </div>
  </div>
</template>

<script>
import vCatalogItem from "@/components/v-catalog-item.vue";
import { mapState, mapActions } from 'vuex'

export default {
  name: "v-catalog",
  components: {
    vCatalogItem,
  },
  computed: {
    ...mapState({
      productList: (state) => state.productList,
      sortingType: (state) => state.sortingType,
      sortingOrder: (state) => state.sortingOrder,
    }),
    sortedProducts() {
      return [...this.productList].sort((product1, product2) => {
        if (this.sortingOrder === 'ascending') {
          if (this.sortingType === 'title') {
            return product1.name.localeCompare(product2.name)
          } else {
            if (product1.price === product2.price) return 0
            return product1.price < product2.price ? -1 : 1
          }
        } else {
          if (this.sortingType === 'title') {
            return product2.name.localeCompare(product1.name)
          } else {
            if (product2.price === product1.price) return 0
            return product2.price < product1.price ? -1 : 1
          }
        }
      })
    }
  },
  methods: {
    ...mapActions(['LOAD_FROM_LOCAL_STORAGE'])
  },
  created() {
    this.LOAD_FROM_LOCAL_STORAGE()
  },
};
</script>

<style lang="scss" scoped>
.product-list {
  position: relative;
  grid-area: catalog;
}
.products {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: min-content;
  gap: 16px;

  @media screen and (max-width: 1600px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 940px) {
    grid-template-columns: 1fr;
  }
}


// vue animations
.list-enter-from{
  opacity: 0;
  transform: scale(0.6);
}
.list-enter-to{
  opacity: 1;
  transform: scale(1);
}
.list-enter-active{
  transition: all 0.5 ease;
}
.list-leave-from{
  opacity: 1;
  transform: scale(1);
}
.list-leave-to{
  opacity: 0;
  transform: scale(0.6);
}
.list-leave-active{
  transition: 0.5s ease;
}
.list-move{
transition: 0.5s ease;
}


</style>