<template>
  <div class="catalog">
    <h2>каталог</h2>

    <div class="catalog__products">
      <product-card
          v-for="product of products"
          :product="product"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
const {products, getProducts} = useProducts();

onMounted(() => {
  getProducts(1);
})
</script>

<style lang="scss" scoped>
.catalog {
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 110px;

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
}
</style>