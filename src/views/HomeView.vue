<template>
  <div id="app">
    <nav>
      
      <el-row class="tac">
        <el-col :span="24">
          <h3 class="mb-2">
            <RouterLink to="/">home</RouterLink>
          </h3>
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
          >
          <!-- HTML菜单 -->
            <el-sub-menu index="1">
              <template #title>
                <el-icon><location /></el-icon>
                <span>HTML</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">
                  <p>施工中···</p>
                </el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>
            <!-- CSS菜单 -->
            <el-sub-menu index="2">
              <template #title>
                <el-icon><location /></el-icon>
                <span>CSS</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="2-1">
                  <p>施工中···</p>
                </el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>
            <!-- JS菜单 -->
            <el-sub-menu index="3">
              <template #title>
                <el-icon><location /></el-icon>
                <span>JavaScript</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="3-1">
                  <RouterLink to="/prototype-link">原型链</RouterLink>
                </el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>
            <!-- 测试栏 -->
            <el-sub-menu index="4">
              <template #title>
                <el-icon><location /></el-icon>
                <span>测试栏</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="4-1">
                  <RouterLink to="/text">测试1</RouterLink>
                </el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>
          </el-menu>
        </el-col>
      </el-row>
    </nav>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<script lang="ts" setup>
import { RouterLink,RouterView } from 'vue-router';

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
};
</script>

<style scoped>
nav {
  width: 300rpx;
  border: 1px solid green;
  display: grid;
  justify-content: start;
}
nav a {
  margin: 0 10px;
}
main {
  width: 100%;
  border: 1px solid red;
}
#app{
  display: flex;
  justify-content: start;
}
</style>