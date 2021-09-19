<template>
  <div>
    <Header />
    <SideMenu />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import SideMenu from "./SideMenu.vue";
export default {
  components: {
    Header,
    Footer,
    SideMenu,
  },
};
</script>

<style></style>
