import{a as s,m as t}from"./marked.esm-BGdMiPcd.js";import{_ as a,o as n,C as r,D as d}from"./index-CrG_2E7Y.js";const c={data(){return{mdData:""}},async mounted(){try{const e=await s.get("blog-md/md-js/text-md.md");console.log("文件内容:",e.data),this.mdData=t(e.data)}catch(e){console.error("Markdown 文件请求错误:",e),console.log("请求路径:","blog-md/md-js/text-md.md"),e.response&&(console.log("响应状态码:",e.response.status),console.log("响应头:",e.response.headers),console.log("响应内容:",e.response.data))}}},l=["innerHTML"];function m(e,i,p,_,o,f){return n(),r("div",null,[d("div",{innerHTML:o.mdData},null,8,l)])}const x=a(c,[["render",m],["__scopeId","data-v-44df4b7d"]]);export{x as default};
