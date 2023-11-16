<template>
  <div>
    <transition name="fade" mode="out-in">
      <div v-if="showLogo" key="logo" class="logo-container">
        <img src="/logo.png" alt="Your Logo" width="300px">
      </div>
      <div v-else key="homepage" class="homepage-container">
        <!-- ホームページのコンテンツをここに配置 -->
        <p>Welcome to our website!</p>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showLogo: true,
    };
  },
  mounted() {
    // localStorageから取得して初回アクセスかどうかを判定
    const isFirstAccess = localStorage.getItem('isFirstAccess') === null;

    if (isFirstAccess) {
      // ロゴの表示後、3秒後にホームページに切り替え
      setTimeout(() => {
        this.showLogo = false;
        // 初回アクセスの場合、localStorageにフラグを設定
        localStorage.setItem('isFirstAccess', 'false');
      }, 2000);
    } else {
      // 初回アクセスでない場合、直接ホームページを表示
      this.showLogo = false;
    }
  },
};
</script>

<style scoped>


body {
  margin: 0;
  padding: 0;
  overflow: hidden;
}
.logo-container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.homepage-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
