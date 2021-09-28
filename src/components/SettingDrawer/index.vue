<template>
  <div>
    <a-drawer
      title="Settings"
      placement="right"
      width="300px"
      :closable="false"
      :visible="visible"
      @close="onClose"
    >
      <template v-slot:handle>
        <div class="handle" @click="visible = !visible">
          <a-icon :type="visible ? 'close' : 'setting'"></a-icon>
        </div>
      </template>

      <div>
        <h3>Theme</h3>
        <a-radio-group
          :value="$route.query.theme || 'dark'"
          @change="(e) => handleSettingChange('theme', e.target.value)"
        >
          <a-radio value="dark"> Dark </a-radio>
          <a-radio value="light"> Light </a-radio>
        </a-radio-group>
        <a-divider />
        <h3>Navigation Mode</h3>
        <a-radio-group
          :value="$route.query.navMode || 'vertical'"
          @change="(e) => handleSettingChange('navMode', e.target.value)"
        >
          <a-radio value="vertical"> Vertical </a-radio>
          <a-radio value="horizontal"> Horizontal </a-radio>
        </a-radio-group>
      </div>
    </a-drawer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
    };
  },
  computed: {
    theme() {
      return this.$route.query.theme || "light";
    },
    navMode() {
      return this.$route.query.navMode || "vertical";
    },
  },
  methods: {
    handleSettingChange(type, value) {
      this.$router.push({ query: { ...this.$route.query, [type]: value } });
    },
    onClose() {
      this.visible = false;
    },
  },
};
</script>
<style scoped>
.handle {
  position: absolute;
  top: 200px;
  right: 300px;
  width: 48px;
  height: 48px;
  background: #1890ff;
  text-align: center;
  line-height: 48px;
  color: #fff;
  font-size: 20px;
  border-radius: 4px 0 0 4px;
}
</style>
