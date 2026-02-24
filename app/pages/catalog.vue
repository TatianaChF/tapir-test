<template>
  <p v-if="loading && !products.length">
    Загрузка...
  </p>

  <div
      v-else
      class="catalog"
  >
    <h2>каталог</h2>

    <div class="catalog__products">
      <product-card
          v-for="product of products"
          :product="product"
      />
    </div>

    <p v-if="loading && products.length > 0">
      Загрузка...
    </p>

    <div
        v-else-if="hasMore"
        class="catalog__controls"
    >
      <p v-if="error">{{ error }}</p>
      <button
          class="catalog__btn"
          @click="loadMore"
      >
        {{ textBtn }}
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
const {products, error, loading, hasMore, getProducts, loadMore} = useProducts();

const textBtn = computed(() => error.value ? "Повторить" : "Показать еще");

onMounted(() => {
  getProducts(1);
})
</script>

<style lang="scss" scoped>
.catalog {
  margin-top: 100px;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 110px;

  @include mobile {
    margin-top: 20px;
    margin-bottom: 40px;
    gap: 40px;
  }

  h2 {
    font-size: 42px;
    font-weight: 500;
  }

  &__products {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  &__controls {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    font-size: 14px;
  }

  &__btn {
    padding: 10px 24px;
    background: none;
    border: 1px solid black;
    cursor: pointer;
    transition: 0.5s;

    &:hover {
      background-color: black;
      color: white;
      transition: 0.5s;
    }
  }

  p {
    font-size: 14px;
  }
}
</style>