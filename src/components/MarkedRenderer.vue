<template>
  <div v-html="htmlContent"></div>
</template>

<script>
import marked from 'marked';

export default {
  props: {
    markdown: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      htmlContent: ''
    };
  },
  watch: {
    markdown: 'convertMarkdown'
  },
  mounted() {
    this.convertMarkdown();
  },
  methods: {
    convertMarkdown() {
      // 使用 marked 将 Markdown 转换为 HTML
      this.htmlContent = marked(this.markdown);
    }
  }
};
</script>

<style scoped>
  
</style>