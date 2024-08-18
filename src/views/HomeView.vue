<template>
  <div id="app">
    <nav>
      <el-row class="tac">
        <el-col :span="24">
          <h3 class="mb-2">
            <RouterLink class="home-div" to="/">
              <h1>HOME</h1>
            </RouterLink>
          </h3>
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
          >
            <!-- GitHub菜单 -->
            <el-sub-menu index="1">
              <template #title>
                <el-icon><location /></el-icon>
                <span>GitHub</span>
              </template>
              <el-menu-item-group>
                <RouterLink class="rl" to="/github-pages">
                  <el-menu-item index="1-1">
                    <p>Github Pages</p>
                  </el-menu-item>
                </RouterLink>
              </el-menu-item-group>
              <el-menu-item-group>
                <RouterLink class="rl" to="/static-web">
                  <el-menu-item index="1-2">
                    <p>静态网页</p>
                  </el-menu-item>
                </RouterLink>
              </el-menu-item-group>
            </el-sub-menu>
            <!-- CSS菜单 -->
            <el-sub-menu index="2">
              <template #title>
                <el-icon><location /></el-icon>
                <span>CSS</span>
              </template>
              <el-menu-item-group>
                <RouterLink class="rl" to="/center-css">
                  <el-menu-item index="2-1">
                    <p>CSS居中</p>
                  </el-menu-item>
                </RouterLink>
                <RouterLink class="rl" to="/css::">
                  <el-menu-item index="2-2">
                    <p>CSS伪元素</p>
                  </el-menu-item>
                </RouterLink>
              </el-menu-item-group>
            </el-sub-menu>
            <!-- JS菜单 -->
            <el-sub-menu index="3">
              <template #title>
                <el-icon><location /></el-icon>
                <span>JavaScript</span>
              </template>
              <el-menu-item-group>
                <RouterLink class="rl" to="/prototype-link">
                  <el-menu-item index="3-1">
                    <p>原型链</p>
                  </el-menu-item>
                </RouterLink>
                <RouterLink class="rl" to="/execution-context-stack">
                  <el-menu-item index="3-2">
                    <p>执行上下文栈</p>
                  </el-menu-item>
                </RouterLink>
                <RouterLink class="rl" to="/execution-context">
                  <el-menu-item index="3-3">
                    <p>执行上下文</p>
                  </el-menu-item>
                </RouterLink>
              </el-menu-item-group>
            </el-sub-menu>
            <el-sub-menu index="4">
              <template #title>
                <el-icon><location /></el-icon>
                <span>TypeScript</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="4-1">
                  <RouterLink class="rl" to="/ts-base">TS基础</RouterLink>
                </el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>
            <!-- 测试栏 -->
            <el-sub-menu index="5">
              <template #title>
                <el-icon><location /></el-icon>
                <span>测试栏</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="4-1">
                  <RouterLink class="rl" to="/text">测试一</RouterLink>
                </el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>
          </el-menu>
        </el-col>
      </el-row>
    </nav>
    <main>
      <RouterView class="rv" />
    </main>
  </div>
</template>

<script lang="ts" setup>
import { RouterLink, RouterView } from 'vue-router'

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style scoped>
h3 {
  border: 1px solid black;
  padding: 0;
  margin: 0;
}
.home-div,
h1 {
  text-decoration: none;
  justify-content: center;
  text-align: center;
  padding: 0;
  margin: 0;
  border-bottom: 1px solid black;
  height: 100%;
}
.el-menu-item {
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
}
.rl,
p {
  padding: 0;
  margin: 0;
  display: flex;
  text-decoration: none;
  color: gray;
  width: 100%;
  justify-content: start;
}
nav {
  width: 300rpx;
  border: 1px solid black;
  display: grid;
  justify-content: start;
}
nav,
a {
  margin: 0 10px;
}
main {
  width: 100%;
  border: 1px solid black;
}
#app {
  display: flex;
  justify-content: start;
  margin-top: 10px;
}
</style>
