<template>
  <div class="add-product">
    <h1 class="title">Добавление товара</h1>
    <form class="form" action="" @submit.prevent="submitForm">
      <div class="form__field">
        <label for="name"><span>Наименование товара</span></label>
        <input
          @focus="onFocus"
          type="text"
          placeholder="Введите наименование товара"
          v-model="name"
          :class="{ error: !nameIsValid }"
        />
        <p class="form__valid" v-if="!nameIsValid">
          Поле является обязательным!
        </p>
      </div>
      <div class="form__field">
        <label for="description">Описание товара</label>
        <textarea
          @focus="onFocus"
          rows="4"
          name=""
          placeholder="Введите описание товара"
          v-model="description"
        >
        </textarea>
      </div>
      <div class="form__field">
        <label for="src"><span>Ссылка на изображения товара</span></label>
        <input
          @focus="onFocus"
          type="text"
          placeholder="Введите ссылку"
          v-model="image"
          :class="{ error: !imageIsValid }"
        />
        <p class="form__valid" v-if="!imageIsValid">
          Поле является обязательным!
        </p>
      </div>
      <div class="form__field">
        <label for="price"><span>Цена товара</span></label>
        <input
          @focus="onFocus"
          type="number"
          placeholder="Введите цену"
          v-model="price"
          :class="{ error: !priceIsValid }"
        />
        <p class="form__valid" v-if="!priceIsValid">
          Поле является обязательным!
        </p>
      </div>
      <button :disabled="!formIsValid || !this.isFocused" class="button">
        Добавить товар
      </button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      image: "",
      name: "",
      description: "",
      price: "",
      isFocused: false,
    };
  },
  methods: {
    ...mapActions(["ADD_PRODUCT"]),
    submitForm() {
      if (this.formIsValid) {
        this.ADD_PRODUCT({
          image: this.image,
          name: this.name,
          description: this.description,
          price: this.price,
        });
        this.name = "";
        this.description = "";
        this.image = "";
        this.price = "";
        this.isFocused = false;
      }
    },
    onFocus() {
      this.isFocused = true;
    },
  },
  computed: {
    nameIsValid() { 
      return !!this.name || !this.isFocused;
    },
    imageIsValid() {
      return !!this.image || !this.isFocused;
    },
    priceIsValid() {
      return typeof this.price === "number" || !this.isFocused;
    },
    formIsValid() {
      return this.nameIsValid && this.priceIsValid && this.imageIsValid;
    },
  },
};
</script>

<style lang="scss" scoped>
.add-product {
  position: sticky;
  top: 32px;
  align-self: flex-start;
  grid-area: add-product;
  @media screen and (max-width: 767px) {
    position: static;
    align-self: center;
  }
  .title {
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 16px;
    line-height: 35px;
    @media screen and (max-width: 767px) {
      text-align: center;
    }
  }

  .form {
    background-color: #fffefa;
    width: 332px;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 22px 24px;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
      0px 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;
    @media screen and (max-width: 380px) {
      width: 280px;
    }
    &__valid {
      font-size: 8px;
      color: #ff8484;
    }
    &__field {
      display: flex;
      flex-direction: column;
      gap: 4px;
      width: 100%;
      & label {
        position: relative;
        font-size: 10px;
        color: #49485e;
        letter-spacing: -0.02em;
        line-height: 13px;
        & span {
          position: relative;
          &::after {
            content: "";
            display: block;
            position: absolute;
            width: 4px;
            height: 4px;
            border-radius: 50%;
            top: -1px;
            right: -5px;
            background-color: #ff8484;
          }
        }
      }
      & input {
        padding: 9px 16px;
        background: #fffefb;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
        border-radius: 4px;
        &.error {
          border: 1px solid #ff8484;
        }
        &::placeholder {
          font-size: 12px;
          color: #b4b4b4;
          line-height: 15px;
        }
      }
      & textarea {
        all: unset;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
        border-radius: 4px;
        padding: 9px 16px;
        background: #fffefb;
        &::placeholder {
          font-size: 12px;
          color: #b4b4b4;
          line-height: 15px;
        }
      }
    }
    .button {
      font-family: "Inter", sans-serif;
      margin-top: 8px;
      padding: 11px 0;
      border-radius: 10px;
      color: #ffffff;
      background-color: #7bae73;
      font-size: 12px;
      font-weight: 600;
      line-height: 15px;
      cursor: pointer;
      &:disabled {
        background-color: #eeeeee;
        color: #b4b4b4;
      }
    }
  }
}
</style>