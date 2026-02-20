<template>
  <header class="header">
    <button class="header__menu-btn">
      <img src="./../assets/menu.svg" alt="menu" />
    </button>
    <nav class="header__nav">
      <ul class="header__menu">
        <li v-for="link of links">
          <NuxtLink :to="link.link">{{link.text}}</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts" setup>
const links = [
  {
    text: "Мужчинам",
    link: "#"
  },
  {
    text: "Женщинам",
    link: "#"
  },
  {
    text: "Каталог",
    link: "#"
  },
  {
    text: "Доставка",
    link: "#"
  },
  {
    text: "Блог",
    link: "#"
  },
  {
    text: "О нас",
    link: "#"
  },
]
</script>

<style lang="scss" scoped>
.header {
  display: grid;
  grid-template-columns: 365px 1fr;
  align-items: center;

  &__menu-btn {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
  }

  &__nav {
    flex: 1;
  }

  &__menu {
    display: flex;
    align-items: center;
    gap: 40px;
  }
}
</style>