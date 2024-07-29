<template>
  <h3>原型链</h3>
  <div v-html="htmlContent"></div>
</template>

<script>
import { ref, onMounted } from 'vue';
import marked from 'marked';
import markdownContent from '@/blog-md/Js/PrototypeLink.md'; // 导入 Markdown 文件

export default {
  setup() {
    const htmlContent = ref('');

    onMounted(() => {
      htmlContent.value = marked(markdownContent);
    });

    return {
      htmlContent
    };
  }
};
</script>
