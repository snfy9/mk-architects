<template>
  <div>
    <img :src="svgPath" alt="Instagram Icon" width="16" height="16">
  </div>
</template>

<script>
export default {
  data() {
    return {
      svgPath: '/instagram.svg',
    };
  },
};
</script>
