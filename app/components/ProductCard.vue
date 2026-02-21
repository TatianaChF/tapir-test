<template>
  <NuxtLink
      to="#"
      class="product-card"
  >
    <div class="product-card__image-wrapper">
      <img
          :src="product.image"
          :alt="product.name"
          class="product-card__image"
          loading="lazy"
      />
      <button class="product-card__favorite">
        <img
            src="./../assets/icons/favorite.svg"
            alt="favorite"
        />
      </button>
    </div>
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
  text-decoration: none;

  @include mobile {
    width: 150px;
    gap: 20px;
  }

  &__image-wrapper {
    position: relative;
    width: 100%;
    height: 290px;
    overflow: hidden;

    @include mobile {
      height: 150px;
    }
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: transform 0.3s ease;

    .product-card:hover & {
      transform: scale(1.05);
    }
  }

  &__favorite {
    position: absolute;
    background: none;
    border: none;
    width: 24px;
    height: 24px;
    top: 16px;
    right: 16px;
    z-index: 2;
    cursor: default;

    @include mobile {
      top: 2px;
      right: 2px;
    }
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

    @include mobile {
      flex-direction: column;
      align-items: start;
      gap: 9px;
    }
  }

  &__split-price {
    padding: 4px;
    color: white;
    font-size: 14px;
    background-color: black;
  }

  &__name {
    font-size: 16px;

    @include mobile {
      font-size: 12px;
    }
  }
}
</style>