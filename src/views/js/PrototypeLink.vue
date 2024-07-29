<template>
  <h3>原型链</h3>
  <div v-html="mdData"></div>
</template>

<script>
import axios from 'axios';
import { marked } from 'marked';
import {  } from "module";


export default {
  data() {
    return {
      mdData:'',
    };
  },
  async mounted(){
    try {
      const getMd = await axios.get('/public/blog-md/Js/PrototypeLink.md');
      console.log('文件内容:', getMd.data);
      this.mdData = marked(getMd.data);
    } catch (error) {
      console.log('text-file请求错误');
      console.log('请求路径:', '/Makar-Web/blog-md/Js/TextMd.md'); 
    }
  }
};
</script>