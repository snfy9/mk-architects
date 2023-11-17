<template>
  <div class="nav-and-container">
  <header>
      <div class="logo">
        mk-architects
      </div>
      <nav class="menu">
        <ul>
          <li><NuxtLink to="/">Works</NuxtLink></li>
          <li><NuxtLink to="/bio">Bio</NuxtLink></li>
          <li><NuxtLink to="/bio">Contact</NuxtLink></li>
        </ul>
      </nav>
    </header>
    <div class="container">
      <div class="box" v-for="item in orderedItems" :key="item.id">
          <NuxtLink :to="'/works/' + item.projectName">
          <img :src="item.src" alt="Image">
          <p class="caption">{{ item.caption }}</p> <!-- キャプション -->
          <p class="description">{{ item.description }}</p> <!-- 説明文 -->
          </NuxtLink>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      items: [
         { id: 1, src: '/works/image1.jpg', order: 1, caption: 'The Floating Gardens of Serendipity', description: 'Utopian Vale, 2011' , projectName: '' },
         { id: 2, src: '/works/image3.jpg', order: 2, caption: 'The Floating Gardens of Serendipity', description: 'Utopian Vale, 2011' },
         { id: 3, src: '/works/image2.jpg', order: 3, caption: 'The Floating Gardens of Serendipity', description: 'Utopian Vale, 2011' },
         { id: 4, src: '/works/image5.jpg', order: 4, caption: 'The Floating Gardens of Serendipity', description: 'Utopian Vale, 2011' },
         { id: 5, src: '/works/image4.jpg', order: 5, caption: 'The Floating Gardens of Serendipity', description: 'Utopian Vale, 2011' },
      ],
    };
  },
  computed: {
    orderedItems() {
      return this.items.slice().sort((a, b) => a.order - b.order);
    },
  },
};

</script>





<style scoped>
.logo{
  font-size: 18px;
  letter-spacing: 0.05em;
  padding-bottom: 20px;
}
a{
  text-decoration: none;
  color: #1c1c1c;
}
.nav-and-container{
  display: flex;
  justify-content: space-between; /* 要素を水平に均等に配置 */
  padding: 0 80px;
}

header{
  font-size: 11px;
  white-space: nowrap; 
  width: calc(calc((calc(var(--vw, 1vw) * 100) - (75px* 2)) / 12)* 3);
  position: fixed;
    top: 125px;
    height: 100vh;
}
ul {
  list-style: none; /* リストアイテムの点を削除 */
  padding: 0;
  margin: 0;
}
li{
  padding:  1px;
}
.caption{
  font-size: 11px;
  font-weight: bold;
  margin: 0;
  padding-top: 32px;
}
.description{
  font-size: 11px;
  margin: 0;
}



.container{
  columns: 2;
  column-gap: 72px;
  width: calc(calc((calc(var(--vw, 1vw) * 100) - (75px* 2)) / 12) * 9);
    margin-left: calc(calc((calc(var(--vw, 1vw) * 100) - (75px* 2)) / 12)* 3);
    margin-top: 125px;
  
}

.box{
  margin-bottom: 72px;
  break-inside: avoid;
}

img{
  width: 100%;
}

@media screen {
  .container{
  width: calc(100% - 40px)
  }
  
}
.works{
  padding: 0 75px ;
}
</style>