<template>
  <div class="page">
    <main class="main">
      <h1>тестовое задание</h1>
      <NuxtLink
          to="/catalog"
          class="main__btn"
      >
        В каталог
      </NuxtLink>
    </main>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.page {
  height: 100vh;
  display: flex;
  align-items: center;
}

.main {
  h1 {
    font-weight: 500;
    font-size: 64px;
    margin-bottom: 40px;

    @include mobile {
      font-size: 26px;
    }
  }

  &__btn {
    padding: 10px 24px;
    background-color: red;
    color: white;
    gap: 40px;
  }
}
</style>