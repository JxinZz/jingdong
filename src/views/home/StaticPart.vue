<template>
    <div class="position">
        <span class="iconfont position__icon">&#xe64c;</span>
        北京理工大学国防科技园2号楼10层
        <span class="iconfont position__notice">&#xe74a;</span>
    </div>
    <div class="search">
        <span class="iconfont">&#xe699;</span>
        <span class="search__text">山姆会员商店优惠产品</span>
    </div>
    <div class="banner">
        <img class="banner__img" src="../../assets/banner.webp">
    </div>
    <div class="icons">
        <div class="icons__item" v-for="item in iconsList" :key="item.desc">
            <img :src="item.src" class="icons__item__img" />
            <p class="icons__item__desc">{{item.desc}}</p>
        </div>
    </div>
    <div class="gap"></div>
</template>

<script>
    export default {
  name: 'StaticPart',
  setup() {
    const iconsList = [
      {src: require("@/assets/超市.png"),desc:"超市便利"},
      {src: require("@/assets/菜市场.png"),desc:"菜市场"},
      {src: require("@/assets/水果店.png"),desc:"水果店"},
      {src: require("@/assets/鲜花.png"),desc:"鲜花绿植"},
      {src: require("@/assets/医药健康.png"),desc:"医药健康"},
      {src: require("@/assets/家居.png"),desc:"家居时尚"},
      {src: require("@/assets/蛋糕.png"),desc:"烘焙蛋糕"},
      {src: require("@/assets/签到.png"),desc:"签到"},
      {src: require("@/assets/大牌免运.png"),desc:"大牌免运"},
      {src: require("@/assets/红包.png"),desc:"红包套餐"},
      // {imgName: "超市",desc:"超市便利"},
      // {imgName: "菜市场",desc:"菜市场"},
      // {imgName: "水果店",desc:"水果店"},
      // {imgName: "鲜花",desc:"鲜花绿植"},
      // {imgName: "医药健康",desc:"医药健康"},
      // {imgName: "家居",desc:"家居时尚"},
      // {imgName: "蛋糕",desc:"烘焙蛋糕"},
      // {imgName: "签到",desc:"签到"},
      // {imgName: "大牌免运",desc:"大牌免运"},
      // {imgName: "红包",desc:"红包套餐"},
    ]
          return {iconsList}
        }
    }
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
//标题定位
.position {
  position: relative;
  padding: .16rem .24rem .16rem 0;
  line-height: .22rem;
  font-size: .16rem;
  @include ellipsis;

  .position__icon {
    position: relative;
    top: .01rem;
    font-size: .2rem;
  }

  .position__notice {
    position: absolute;
    right: 0;
    top: .17rem;
    font-size: .2rem;

  }

  color:$content-fontcolor;
}

//搜索框
.search {
  margin-bottom: .12rem;
  line-height: .32rem;
  background: $search-bgColor;
  color: $search-fontColor;
  border-radius: .16rem;
  font-size: .14rem;

  .iconfont {
    position: relative;
    top: .03rem;
    padding: 0 .12rem 0 .16rem;
    display: inline-block;
    font-size: .2rem;
  }

  &__text {
    display: inline-block;
  }
}

//展示图
.banner {
  height: 0;
  overflow: hidden;
  padding-bottom: 25.4%;

  &__img {
    width: 100%;
  }
}

//小图标
.icons {
  display: flex;
  flex-wrap: wrap;
  margin-top: .16rem;

  &__item {
    width: 20%;

    &__img {
      display: block;
      width: .4rem;
      height: .4rem;
      margin: 0 auto;
    }

    &__desc {
      margin: .06rem 0 .06rem 0;
      text-align: center;
      color: $content-fontcolor;
    }
  }
}

//灰色分界线
.gap {
  margin: 0 -.18rem;
  height: .1rem;
  background: $content-bgClor;
}
</style>