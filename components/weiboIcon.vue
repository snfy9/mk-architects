<template>
  <div>
    <img :src="svgPath" alt="Weibo Icon" width="16" height="16">
  </div>
</template>

<script>
export default {
  data() {
    return {
      svgPath: '/weibo.svg',
    };
  },
};
</script>
