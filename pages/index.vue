<template>
  <div class="ScrollDisablePage">
    <div class="logo">
     <h1>mk-architects</h1>
     <h2>川岛雅矢建筑环境设计室</h2>
    </div>
     <hr size="1.5px" width="2px" color="#333">
      <div class="contact">
        <p>
          TEL: &lpar;+86&rpar; 13521587563<br>
          MAIL: info@mk-architects.net
        </p>
      </div>
      <nav class="bio">
        <NuxtLink to="/bio">bio</NuxtLink>
      </nav>      
      <div class="icon-container">
        <div class="icon">
         <a href="https://www.instagram.com/mk____architects/">
            <instagramIcon />
         </a>
        </div>
        <div class="icon">
          <a href="https://weibo.com/u/7083865295">
            <weiboIcon />
          </a>
        </div>
      </div>
    <footer>
      <p>© mk-architects, 2023</p>
    </footer>
  </div>
</template>

<script>
  import instagramIcon from '@/components/instagramIcon.vue';
  import weiboIcon from '@/components/weiboIcon.vue';

  export default {
    components: {
      instagramIcon, weiboIcon,
    },
    name: 'ScrollDisablePage',
    mounted() {
      this.disableScroll();
    },
    beforeDestroy() {
      this.enableScroll();
    },
    methods: {
      disableScroll() {
        document.body.style.overflow = 'hidden';
      },
      enableScroll() {
        document.body.style.overflow = 'auto'; 
      },
    },
  };
</script>

<style scoped>
  h1, h2, p{
    padding: 0;
    margin: 0;
  }
  .ScrollDisablePage {
    font-family: 'Didact Gothic', 'HarmonyOS Sans SC', sans-serif !important;
    color: #333;
    text-align: center;
    padding: 0;
    margin: 220px 0 0 0;
    min-height: 100vh;
    overflow: hidden;
  }
  .logo h1{
    font-size: 17.5px;
    font-weight: normal;
    letter-spacing: 0.5em;
    padding-bottom: 8px;
  }
  .logo h2{
    font-size: 12px;
    font-weight: 100;
    letter-spacing: 0.25em;
  }
  .logo{
    margin-bottom: 16px;
  }
  .contact{
    font-size: 12px;
    letter-spacing: 0.08em;
    line-height: 2em;
    margin: 16px 0 40px;
  }
  .bio{
    padding-bottom: 24px;
  }
  .bio a{
    font-size: 12px;
    color: #333;
  }
  .icon-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .icon {
    padding: 0 8px ;
  }
  footer{
    font-size: 11px;
    letter-spacing: 0.04em;
    color:#a6a6a6;
    width: 100%;
    position: fixed;
    bottom: 56px;
    width: 100%;
  }

  @media (max-width: 500px) {
    .ScrollDisablePage {
    margin: 175px 0 0 0;
    }
    footer{
    width: 100%;
    position: fixed;
    bottom: 56px;
    widows: 100%;
    }
  }



</style>