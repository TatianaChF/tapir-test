<template>
  <footer class="footer">
    <div class="footer__container">
      <FooterNavBlock
          titleCategory="Каталог"
          :categoryLinks="catalog"
      />

      <FooterNavBlock
          titleCategory="Помощь"
          :categoryLinks="help"
      />

      <FooterNavBlock
          titleCategory="Информация"
          :categoryLinks="info"
      />

      <FooterNavBlock
          titleCategory="Компания"
          :categoryLinks="company"
      />
    </div>
  </footer>
</template>

<script lang="ts" setup>
const catalog = [
  {
    text: "Все бренды",
    link: "#",
  },
  {
    text: "Nike",
    link: "#",
  },
  {
    text: "Adidas",
    link: "#",
  },
  {
    text: "Puma",
    link: "#",
  },
  {
    text: "New Balance",
    link: "#",
  },
];

const help = [
  {
    text: "Доставка",
    link: "#",
  },
  {
    text: "Заказ и оплата",
    link: "#",
  },
  {
    text: "Обмен и Возврат",
    link: "#",
  },
  {
    text: "F. A. Q.",
    link: "#",
  },
];

const info = [
  {
    text: "Преимущества",
    link: "#",
  },
  {
    text: "Гарантия и безопасность",
    link: "#",
  },
  {
    text: "Индивидуальный заказ",
    link: "#",
  },
  {
    text: "Акции",
    link: "#",
  },
];

const company = [
  {
    text: "О нас",
    link: "#",
  },
  {
    text: "Блог",
    link: "#",
  },
  {
    text: "Отзывы",
    link: "#",
  },
  {
    text: "Контакты",
    link: "#",
  },
];
</script>

<style lang="scss" scoped>
.footer {
  background-color: black;
  color: white;
  font-size: 14px;
  line-height: 140%;
  margin-left: -60px;

  &__container {
    padding: 100px 60px;
    display: flex;
    justify-content: space-between;
  }
}
</style>