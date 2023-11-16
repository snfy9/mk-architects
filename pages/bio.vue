<template>
  <div class="main">
    <header>
      mk-architects
    </header>
      <nav class="back">
        <NuxtLink to="/">back</NuxtLink>
      </nav>
        <div class="bio">
          <p>bio</p>
        </div>
      <div class="image-and-table-container">
         <img src="/profiel.jpg" width="360px" height="440px" class="image-container">
        <div class="table-container">
          <div class="name">
            <h1>川岛 雅矢</h1>
            <h2>Masaya Kawashima</h2>
            <p><span style="font-size: 10px;">创始人、主持建筑师</span> / Founder, Principal Architect</p>
          </div>
          <hr size="1.8px" width="2px" color="#333">
          <table class="CN">
            <tbody>
              <tr>
                <td class="year">1995</td>
                <td>生于日本新泻县</td>
              </tr>
              <tr>
                <td class="year">2018</td>
                <td>长冈造形大学 建筑・环境设计学科 毕业<br>
                / 山下研究室</td>
              </tr>
              <tr>
                <td class="year">2018</td>
                <td>二级注册建筑师 / 日本</td>
              </tr>
              <tr>
                <td class="year">2018 -</td>
                <td>B.L.U.E.建筑设计事务所</td>
              </tr>
              <tr>
                <td class="year">2023 -</td>
                <td>川岛雅矢建筑环境设计室 创始人、主持建筑师</td>
              </tr>
            </tbody>
          </table>
          <table class="EN">
            <tbody>
              <tr>
                <td class="year">1995</td>
                <td>Born in Niigata, Japan</td>
              </tr>
              <tr>
                <td class="year">2018</td>
                <td>Nagaoka Institute of Design Architecture&amp;Environmental Design<br>
                / Prof.Yamashita Lab.</td>
              </tr>
              <tr>
                <td class="year">2018</td>
                <td>Registered 2nd-Class Architect /Japan</td>
              </tr>
              <tr>
                <td class="year">2018 -</td>
                <td>B.L.U.E. Architecture Studio</td>
              </tr>
              <tr>
                <td class="year">2023 -</td>
                <td>Established mk-architects</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <footer>
         <p>© mk-architects, 2023</p>
      </footer>
  </div>
</template>

<script>
export default {
  transition: 'fade'
}
</script>

<style scoped>

  p{
    padding: 0;
    margin: 0;
  }
  .main{
    font-family: 'Didact Gothic', 'HarmonyOS Sans SC', sans-serif !important;
    font-weight: 400;
  }
  header{
    font-size: 17px;
    font-weight: 100;
    letter-spacing: 0.3em;
    padding: 0;
    margin: 0;
    position: fixed;
    top: 24px;
    left: 24px;
  }
 .back a{
    font-size: 12px;
    color: #333;
    text-decoration: none;
  }
  .name h1{
    font-weight: 400;
    font-size: 13px;
    letter-spacing: 0.1em;
    padding: 0;
    margin: 0;
  }
  .name h2{
    font-size: 11px;
    font-weight: 400;
    letter-spacing: 0.08em;
    color: #a6a6a6;
    padding: 4px 0 26px;
    margin: 0;
  }
  .name p{
    font-size: 11px;
    line-height: 1.6em;
    color: #a6a6a6;
  }
  hr{
    margin: 22px 0 42px 0;
  }
  .back {
    position: fixed;
    top: 124px; 
    left: 24px;
  }
  .image-and-table-container {
    display: flex;
    margin: 168px 0 0 26%;
  }

   .bio {
    font-size: 14px;
    color: #a6a6a6;
    position: fixed;
    padding: 0;
    margin: 0;
    left: 24px;
  }
 
  .table-container {
    letter-spacing: 0.02em;
    margin-left: 14.7%; /*212px*/
  }
  td{
    font-size: 11px;
    font-weight: 400;
    line-height: 24px;
    padding: 0;
    vertical-align: top; /* セル内のコンテンツを上揃えに設定 */
  }
  .year{
    letter-spacing: 0.08em;
    padding-right: 8px;
    white-space: nowrap;
  }
  hr{
    text-align: left;
  }
  .CN{
    margin-bottom: 32px;
  }
  .EN{
    color: #a6a6a6;
    letter-spacing: 0.04em;
  }

  footer{
    font-size: 11px;
    letter-spacing: 0.04em;
    color:#a6a6a6;
    width: 100%;
    position: fixed;
    bottom: 56px;
    left: 24px;
    widows: 100%;
  }

  /* 500px以下の画面幅に適用されるスタイル */
  @media (max-width: 500px) {
    .back {
    top: 88px; 
    }
    .image-and-table-container {
      width: 281px;
      flex-direction: column;
      margin-top: 130px;
      margin-left: calc(100% - 305px);
    } 
    .table-container {
      margin: 0;
    }
    img {
      width: 281px;
      height: auto;
    }
    footer {
    position:static;
    bottom: 48px;
    }
    footer p{
      margin: 80px 24px 40px;
    }
 }


  /* 767px以下の画面幅に適用されるスタイル */
  @media (max-width: 767px) {

    .image-and-table-container {
      flex-direction: column; /* コンテンツを縦方向に配置 */

    } 
   .image-container {
    margin: 0;
    }
    .table-container {
    letter-spacing: 0.03em;
    margin: 48px 0 0 0;
    }
    .name h2{
    padding: 4px 0 24px;
    }
    hr{
    margin: 24px 0 32px 0;
    }
    .CN{
    margin-bottom: 28px;
    }
 }
</style>
