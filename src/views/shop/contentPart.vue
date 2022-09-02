<template>
    <div class="content">
        <div class="cetegory">
            <div class="cetegory__item cetegory__item--active">全部商品</div>
            <div class="cetegory__item">秒杀</div>
            <div class="cetegory__item">新鲜水果</div>
            <div class="cetegory__item">休闲食品</div>
            <div class="cetegory__item">时令蔬菜</div>
            <div class="cetegory__item">肉蛋家禽</div>
        </div>
        <div class="product">
            <div class="product__item">
                <img class="product__item__img" src="http://www.dell-lee.com/imgs/vue3/near.png">
                <div class="product__item__detail">
                    <h4 class="product__item__detail">番茄250g/份</h4>
                    <p class="product__item__sale">月售10份</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';

.content {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    top: 1.5rem;
    bottom: .5rem;
}

.cetegory {
    overflow-y: scroll;
    height: 100%;
    width: .76rem;
    background: $search-bgColor;

    &__item {
        line-height: .4rem;
        text-align: center;
        font-size: 14px;
        color: $content-fontcolor;

        &--active {
            background: #fff;
        }
    }
}

.product {
    overflow-y: scroll;
    flex: 1;

    &__item {
        display: flex;
        padding: .12rem 0;
        margin: 0 .16rem;
        border-bottom: .01rem solid #f1f1f1;

        &__img {
            width: .68rem;
            height: .68rem;
            margin-right: .16rem;
        }
    }
}
</style>