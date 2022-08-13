<template>
  <div class="product">
    <div class="product__delete" @click="deleteProduct">
      <img src="../assets/icons/delete.svg" alt="" />
    </div>
    <img class="product__image" :src="product_data.image" alt="" />
    <div class="product__information information">
      <div class="information__name">
        {{ product_data.name }}
      </div>
      <div class="information__description">{{ product_data.description }}</div>
      <div class="information__price">{{ priceMask }} руб.</div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "v-catalog-item",
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    ...mapActions(["REMOVE_PRODUCT"]),
    deleteProduct() {
      this.REMOVE_PRODUCT(this.product_data.id);
    },
  },
  computed: {
    priceMask() {
      return this.product_data.price
        .toString()
        .replaceAll(" ", "")
        .split("")
        .map((num, i, arr) => {
          return (arr.length - 1 - i) % 3 === 0 && i !== arr.length - 1
            ? num + " "
            : num;
        })
        .join("");
    },
  },
};
</script>

<style lang="scss" scoped>
.product {
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #fffefa;
  border-radius: 4px;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
    0px 6px 10px rgba(0, 0, 0, 0.02);
  transition: 0.2s ease-in-out;
  @media screen and (max-width: 767px) {
    max-width: 332px;
  }
  &:hover {
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.1),
      0px 6px 10px rgba(0, 0, 0, 0.1);
    transition: 0.2s ease-in-out;
  }
  &:hover &__delete {
    opacity: 1;
    top: -8px;
    right: -8px;
  }
  &__delete {
    position: absolute;
    width: 32px;
    height: 32px;
    background-color: #ff8484;
    border-radius: 10px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    top: 0;
    right: 0;
    opacity: 0;
    transition: 0.2s ease-in-out;
  }

  &__image {
    height: 200px;
    width: 100%;
    object-fit: cover;
    object-position: 50% 50%;
    border-radius: 4px 4px 0px 0px;
  }
}
.information {
  padding: 16px;
  padding-bottom: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;

  &__name {
    font-size: 20px;
    font-weight: 600;
  }

  &__description {
    font-size: 16px;
  }
  &__price {
    padding-top: 10px;
    margin-top: auto;
    color: #3f3f3f;
    font-weight: 600;
    font-size: 24px;
  }
}
</style>