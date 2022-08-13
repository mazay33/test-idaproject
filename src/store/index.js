import { createStore } from "vuex";

export default createStore({
  state: {
    productList: [
      {
        id: 1,
        image: require("../assets/images/product.png"),
        name: "Наименование товара",
        description:
          "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
        price: 10000,
      },
    ],

    sortingType: "price",
    sortingOrder: "ascending",
  },
  mutations: {
    PUSH_PRODUCT(state, productData) {
      const newId =
        state.productList.length > 0
          ? Math.max(...state.productList.map((element) => element.id)) + 1
          : 1;
      productData["id"] = newId;
      state.productList.unshift(productData);
      localStorage.setItem("UserProducts", JSON.stringify(state.productList));
    },
    DELETE_PRODUCT(state, productId) {
      state.productList = state.productList.filter(
        (element) => element.id != productId
      );
      localStorage.setItem("UserProducts", JSON.stringify(state.productList));
    },
    SORTING_TYPE(state, type) {
      state.sortingType = type;
    },
    SORTING_ORDER(state, order) {
      state.sortingOrder = order;
    },
    GET_LOCAL_PRODUCTS: (state) => {
      const localProducts = localStorage.getItem("UserProducts");
      if (localProducts !== null) {
        state.productList = JSON.parse(localProducts);
      } else {
        state.productList = [{
          id: 1,
          image: require("../assets/images/product.png"),
          name: "Наименование товара",
          description:
            "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
          price: 10000,
        },];
      }
    },
  },
  actions: {
    ADD_PRODUCT({ commit }, productData) {
      commit("PUSH_PRODUCT", productData);
    },
    REMOVE_PRODUCT({ commit }, productId) {
      commit("DELETE_PRODUCT", productId);
    },
    SET_SORTING_TYPE({ commit }, type) {
      commit("SORTING_TYPE", type);
    },
    SET_SORTING_ORDER({ commit }, order) {
      commit("SORTING_ORDER", order);
    },
    LOAD_FROM_LOCAL_STORAGE({ commit }) {
      commit("GET_LOCAL_PRODUCTS");
    },
  },
  getters: {},
});
