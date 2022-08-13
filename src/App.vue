<template>
  <div class="wrapper">
    <v-add-product></v-add-product>
    <v-sorting></v-sorting>
    <v-catalog></v-catalog>
  </div>
</template>

<script>
import vAddProduct from "@/components/v-add-product.vue";
import vCatalog from "@/components/v-catalog.vue";
import vSorting from "@/components/v-sorting.vue";
export default {
  components: {
    vAddProduct,
    vCatalog,
    vSorting,
  },
};
</script>

<style lang="scss">
.wrapper {
  padding: 32px;
  gap: 16px;
  display: grid;
  grid-template-areas: "add-product sorting" "add-product catalog";
  grid-template-columns: min-content 1fr;
  grid-template-rows: min-content 1fr;

  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 380px) {
    padding: 16px;
  }
}
</style>
