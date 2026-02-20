<template>
  <div class="block">
    <p>{{titleCategory}}</p>
    <nav>
      <ul class="block__nav">
        <li v-for="item of categoryLinks">
          <NuxtLink :to="item.link">{{item.text}}</NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">

export type categotyType = {
  text: string;
  link: string;
}

defineProps({
  titleCategory: {
    type: String,
    required: true,
  },
  categoryLinks: {
    type: Array<categotyType>,
    required: true,
  }
});
</script>

<style lang="scss" scoped>
.block {
  display: flex;
  flex-direction: column;
  gap: 14px;

  p {
    color: #6F6F6F;
  }

  &__nav {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }
}
</style>