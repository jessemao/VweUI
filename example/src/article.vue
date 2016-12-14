<template>
  <div class="page article">
    <div class="page__header">
      <h1 class="header__title">Article</h1>
      <p class="header__desc">文章</p>
    </div>
    <weui-article>
      <h1>大标题</h1>
      <section>
        <h2 class="title">章标题</h2>
        <section>
          <h3>1.1 节标题</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>
            <img src="/static/images/pic_article.png" alt="">
            <img src="/static/images/pic_article.png" alt="">
          </p>
        </section>
        <section>
          <h3>1.2 节标题</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>
      </section>
    </weui-article>
  </div>
</template>
<script>
import {Article} from 'vweui'
export default {
  components: {
    'weui-article': Article
  }
}
</script>