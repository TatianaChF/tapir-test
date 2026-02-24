<template>
  <header class="header">
    <img
        src="~/assets/icons/logo.svg"
        alt="logo"
    />
    <button class="header__menu-btn">
      <img
          src="~/assets/icons/menu.svg"
          alt="menu"
      />
    </button>
    <nav class="header__nav">
      <ul class="header__menu">
        <li v-for="link of links">
          <NuxtLink
              :to="link.link"
              class="header__menu-link">
            {{link.text}}
          </NuxtLink>
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
  display: flex;
  gap: 23%;
  align-items: center;

  @include mobile {
    justify-content: space-between;
  }

  &__menu-btn {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;

    @include mobile {
      display: block;
    }
  }

  &__nav {
    flex: 1;

    @include mobile {
      display: none;
    }
  }

  &__menu {
    display: flex;
    align-items: center;
    gap: 40px;
  }

  &__menu-link {
    color: black;
  }
}
</style>