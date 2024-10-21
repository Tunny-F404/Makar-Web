<template>
  <div v-html="mdDataLink"></div>
</template>

<script>
import axios from 'axios'
import { marked } from 'marked'
import 'github-markdown-css'

export default {
  data() {
    return {
      mdDataLink: ''
    }
  },
  async mounted() {
    try {
      //导入blog·md文件
      const getMd = await axios.get('blog-md/git/git-base.md')
      console.log('文件内容:', getMd.data)
      this.mdDataLink = marked(getMd.data)
    } catch (error) {
      // marked文件状态输出
      console.error('Markdown 文件请求错误:', error)
      console.log('请求路径:', 'blog-md/md-js/prototype-link.md')
      if (error.response) {
        console.log('响应状态码:', error.response.status)
        console.log('响应头:', error.response.headers)
        console.log('响应内容:', error.response.data)
      }
    }
  }
}
</script>
<style module>
@import '@/assets/css-file/bluetex.css';
</style>
