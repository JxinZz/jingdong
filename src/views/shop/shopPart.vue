<template>
    <div class="wrapper">
        <div class="search">
            <div class="search__back iconfont" @click="handleBackClick">&#xe6db;</div>
            <div class="search__content">
                <span class="search__content__icon iconfont">&#xe600;</span>
                <input class="search__content__input" placeholder="请输入商品名称" />
            </div>
        </div>
        <ShopInfo :item="item" :hideBorder="true" v-show="item.imgUrl" />
        <ContentPart :shopName="item.name"/>
        <CartPart />
    </div>
</template>

<script>
import { reactive,toRefs } from 'vue';
import { useRouter, useRoute } from 'vue-router'
import { get } from '../../utils/request';
import ShopInfo from '../../components/ShopInfo.vue'
import ContentPart from './contentPart.vue'
import CartPart from './cartPart.vue'

//获取当前商铺信息
const useShopInfoEffect = () => {
    const route = useRoute();
    const data = reactive({ item: {} });
    const getItemData = async () => {
        const result = await get(`/api/shop/${route.params.id}`);
        if (result?.errno === 0 && result?.data) {
            data.item = result.data;
        }
    }
    const { item } = toRefs(data);
    return { item, getItemData }
}

//点击回退逻辑
const useBackRouterEffect = () => {
    const router = useRouter();
     const handleBackClick = () => {
            router.back();
    }
        return handleBackClick
}
export default {
    name: 'shopPart',
    components: { ShopInfo, ContentPart, CartPart },
    setup() {
        const { item, getItemData } = useShopInfoEffect()
        const handleBackClick = useBackRouterEffect();
        getItemData()
        return { item, handleBackClick }
    }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';

.wrapper {
    padding: 0 .18rem;
}

.search {
    display: flex;
    margin: .14rem 0 .02rem 0;
    line-height: .32rem;

    &__back {
        font-size: .24rem;
        width: .3rem;
        color: #b6b6b6;
    }

    &__content {
        display: flex;
        flex: 1;
        background: $search-bgColor;
        border-radius: .16rem;

        &__icon {
            width: .44rem;
            text-align: center;
            color: $search-fontColor;
        }

        &__input {
            display: block;
            width: 100%;
            padding-right: .2rem;
            border: none;
            outline: none;
            background: none;
            height: .32rem;
            font-size: .14rem;
            color: $content-fontcolor;

            &::placeholder {
                color: $content-fontcolor;
            }
        }
    }
}
</style>