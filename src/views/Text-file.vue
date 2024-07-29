<template>
  <div>
    <div v-html="mdData"></div>
  </div>
</template>

<script>
import axios from 'axios';
import { marked } from 'marked'
import {  } from "module";

export default {
   data(){
     return {
      mdData:'',
    }
   },
   async mounted(){
    try {
      const getmd = await axios.get('@/../public/blog-md/Js/TextMd.md');
      console.log('文件内容:', getmd.data);
      this.mdData = marked(getmd.data);
    } catch (error) {
      console.log('text-file请求错误');
      console.log('请求路径:', '/Makar-Web/blog-md/Js/TextMd.md');
    }
   }
}
</script>
