<template>
  <NuxtLink
      to="#"
      class="product-card"
  >
    <img
        :src="product.image"
        :alt="product.name"
        class="product-card__image"
        loading="lazy"
    />
    <div class="product-card__info">
      <div class="product-card__price">
        <p>{{product.price}} ₽</p>
        <p class="product-card__split-price">
          {{splitPrice}} x 2
        </p>
      </div>
      <p class="product-card__name">{{product.name}}</p>
    </div>
  </NuxtLink>
</template>

<script lang="ts" setup>
import type {Product} from "~/types";

const props = defineProps<{
  product: Product
}>()

const splitPrice = computed(() => Math.ceil(props.product.price / 2));
</script>

<style lang="scss" scoped>
.product-card {
  width: 290px;
  display: flex;
  flex-direction: column;
  gap: 31px;
  color: black;

  img {
    width: 290px;
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  &__price {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 24px;
    font-weight: 500;
  }

  &__split-price {
    padding: 4px;
    color: white;
    font-size: 14px;
    background-color: black;
  }

  &__name {
    font-size: 16px;
  }
}
</style>