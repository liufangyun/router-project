<template>
  <div id="sideNavigation">
        <el-menu
        :router="true"
        default-active="activeLink"
      class="side-nav-bar">
      <el-menu-item index="/dashboard">
        <i class="el-icon-menu"></i>
        <span>Dashboard</span>
      </el-menu-item>
      <el-menu-item index="/list">
        <i class="el-icon-setting"></i>
        <span>List</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script src="./side-navigation.component.js"></script>
<style src="./side-navigation.component.css" scope></style>