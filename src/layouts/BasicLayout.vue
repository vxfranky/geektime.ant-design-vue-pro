<template>
  <div>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
      <!-- vertical layout -->
      <a-layout
        id="components-layout-demo-custom-trigger"
        v-if="navMode == 'vertical'"
      >
        <a-layout-sider
          :theme="theme"
          v-model="collapsed"
          :trigger="null"
          :width="siderWidth"
          collapsible
        >
          <div
            v-if="!collapsed"
            class="logo"
            :style="{ color: theme === 'dark' ? '#fff' : '#000' }"
          >
            Ant Design of Vue
          </div>
          <div
            v-else
            class="logo"
            :style="{ color: theme === 'dark' ? '#fff' : '#000' }"
          >
            AntDV
          </div>
          <SiderMenu
            :collapsed="collapsed"
            :navMode="navMode"
            :theme="theme"
            :siderWidth="siderWidth"
          />
        </a-layout-sider>
        <a-layout>
          <a-layout-header style="background: #fff; padding: 0">
            <a-icon
              class="trigger"
              :type="collapsed ? 'menu-unfold' : 'menu-fold'"
              @click="() => (collapsed = !collapsed)"
              v-auth="['admin']"
            ></a-icon>
            <Header />
          </a-layout-header>
          <a-layout-content
            :style="{
              margin: '24px 16px',
              padding: '24px',
              background: '#fff',
              minHeight: '280px',
            }"
          >
            <router-view></router-view>
          </a-layout-content>
          <a-layout-footer style="text-align: center">
            <Footer />
          </a-layout-footer>
        </a-layout>
      </a-layout>

      <!-- horizontal layout -->
      <a-layout
        id="components-layout-demo-fixed"
        v-if="navMode == 'horizontal'"
      >
        <a-layout-header
          :style="{
            position: 'fixed',
            zIndex: 1,
            width: '100%',
            padding: 0,
          }"
        >
          <div
            class="logo"
            :style="{ color: theme === 'dark' ? '#fff' : '#000' }"
          >
            Ant Design of Vue
          </div>
          <Header />
          <a-menu
            :theme="theme"
            mode="horizontal"
            :default-selected-keys="['1']"
            :style="{ lineHeight: '64px' }"
          >
            <SiderMenu
              :collapsed="true"
              :navMode="navMode"
              :theme="theme"
              :siderWidth="siderWidth"
            />
          </a-menu>
        </a-layout-header>
        <a-layout-content :style="{ padding: '0 50px', marginTop: '64px' }">
          <div
            :style="{
              background: '#fff',
              padding: '24px',
              minHeight: '380px',
              marginTop: '48px',
            }"
          >
            <router-view></router-view>
          </div>
        </a-layout-content>
        <a-layout-footer :style="{ textAlign: 'center' }">
          <Footer />
        </a-layout-footer>
      </a-layout>

      <SettingDrawer />
    </a-layout>
  </div>
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";
import SiderMenu from "./SiderMenu";
import SettingDrawer from "../components/SettingDrawer";
export default {
  data() {
    return {
      collapsed: false,
      siderWidth: "256px",
    };
  },
  computed: {
    theme() {
      return this.$route.query.theme || "dark";
    },
    navMode() {
      return this.$route.query.navMode || "vertical";
    },
  },
  components: {
    Header,
    Footer,
    SiderMenu,
    SettingDrawer,
  },
};
</script>

<style scoped>
.trigger {
  padding: 0 20px;
  line-height: 64px;
  font-size: 20px;
}

.trigger:hover {
  background: #eee;
}

.logo {
  float: left;
  padding: 0 20px;
  height: 64px;
  line-height: 64px;
  text-align: center;
}
</style>
