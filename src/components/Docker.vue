<template>
    <div class="docker">
        <div
         v-for="(item,index) in dockerList"
         :class="{'docker__item':true,'docker__item--active':index===currentIndex}"
          class="docker__item "
          :key="item.icon"
          >
          <router-link :to="item.to">
            <div class="iconfont" v-html="item.icon"/>
            <div class="docker__title">{{item.text}}</div>
        </router-link>
        </div>
    </div>
</template>
<script>
export default {
    name: "DockerPart",
    props:['currentIndex'],
    setup() {
        const dockerList = [ 
            { icon: '&#xe7a7;', text: '首页' ,to:{name:'Home'} },
            { icon: '&#xe6af;', text: '购物车',to:{name:'CartList'} },
            { icon: '&#xe713;', text: '订单' ,to:{name:'OrderList'} },
            { icon: '&#xe660;', text: '我的' ,to:{name:'Home'} },
        ];
        return {dockerList}
    }
}
</script> 
<style lang="scss" scoped>
@import '../style/viriables.scss';
@import '../style/mixins.scss';

//底部导航
.docker {
    display: flex;
    box-sizing: border-box;
    position: absolute;
    padding: 0 .18rem;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0.49rem;
    border-top: .01rem solid $content-bgClor;

    &__item {
        flex: 1;
        text-align: center;

        .iconfont {
            margin: .07rem 0 .02rem 0;
            font-size: .18rem;
        }
        a{
            color: $content-fontcolor;
            text-decoration: none;
        }

        &--active {
            a{
                color: #1fa4fc;
            }
        }
    }
}

.docker__title {
    font-size: .2rem;
    transform: scale(.5, .5);
    transform-origin: center top;
}
</style>