<template>
  <div>
    <a-input-group compact>
      <a-select v-model="type" @change="handleTypeChange" style="width: 130px">
        <a-select-option value="Alipay"> Alipay </a-select-option>
        <a-select-option value="Bank"> Bank Account </a-select-option>
      </a-select>
      <a-input
        v-model="accountNumber"
        @change="handleNumChange"
        style="width: calc(100% - 130px)"
      />
    </a-input-group>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: Object,
    },
  },
  watch: {
    value(val) {
      Object.assign(this, val);
    },
  },
  data() {
    const { type, accountNumber } = this.value || {};
    return {
      type: type || "Alipay",
      accountNumber: accountNumber || "",
    };
  },
  methods: {
    handleTypeChange(val) {
      this.$emit("change", { ...this.value, type: val });
    },
    handleNumChange(e) {
      this.$emit("change", { ...this.value, accountNumber: e.target.value });
    },
  },
};
</script>
