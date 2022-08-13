<template>
  <div class="v-sorting">
    <v-select 
    :options="optionSortingType" 
    @change="setSortingType" 
    />
    <v-select 
    :options="optionSortingOrder" 
    @change="setSortingOrder" 
    />
  </div>
</template>

<script>
import vSelect from "@/components/v-select.vue";
import { mapState } from "vuex";
import { mapActions } from "vuex";
export default {
  name: "v-sorting",
  components: {
    vSelect,
  },
  data() {
    return {
      optionSortingType: [
        { title: "По цене", value: "price" },
        { title: "По названию", value: "title" },
      ],
      optionSortingOrder: [
        { title: "По возрастанию", value: "ascending" },
        { title: "По убыванию", value: "descending" },
      ],
    };
  },
  methods: {
    ...mapActions(["SET_SORTING_TYPE", "SET_SORTING_ORDER"]),
    setSortingType(event) {
      this.SET_SORTING_TYPE(event.target.value);
    },
    setSortingOrder(event) {
      this.SET_SORTING_ORDER(event.target.value);
    },
  },
  computed: {
    ...mapState({
      sortingType: (state) => state.sortingType,
      sortingOrder: (state) => state.sortingOrder,
    }),
  },
};
</script>

<style lang="scss" scoped>
.v-sorting {
  display: flex;
  justify-content: flex-end;
  grid-area: sorting;
}
</style>