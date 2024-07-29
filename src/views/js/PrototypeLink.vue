<template>
  <h3>原型链</h3>
  <div v-html="mdDataLink"></div>
</template>

<script>
import axios from 'axios';
import { marked } from 'marked';

export default {
  data() {
    return {
      mdDataLink: '',
    };
  },
  async mounted() {
    try {
      const getMd = await axios.get('blog-md/md-js/prototype-link.md');
      console.log('文件内容:', getMd.data);
      this.mdDataLink = marked(getMd.data);
    } catch (error) {
      console.error('Markdown 文件请求错误:', error);
      console.log('请求路径:', 'blog-md/md-js/prototype-link.md');
      if (error.response) {
        console.log('响应状态码:', error.response.status);
        console.log('响应头:', error.response.headers);
        console.log('响应内容:', error.response.data);
      }
    }
  }
};
</script>