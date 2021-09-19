<template>
  <div id="app">
    <a-button>Button</a-button>
    <div id="nav">
      <router-link to="/dashboard/analysis">Dashboard</router-link> |
      <router-link to="/form">Form</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="less"></style>
