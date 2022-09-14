<template>
    <div class="wrapper">
        <TopArea/>
       <ProductList/>
       <OrderPart/>
    </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { useCommonCartEffect } from '../../effects/cartEffects';
import TopArea from './TopArea.vue';
import ProductList from './ProductList.vue'
import OrderPart from './Order.vue'
export default {
    name: "OrderConfirmation",
    components: { TopArea,ProductList,OrderPart },
    setup() {
        const route = useRoute();
        const shopId = route.params.id;
        const { shopName, productList, calulations } = useCommonCartEffect(shopId);
        return { shopName, productList, calulations };
    },
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';

.wrapper {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: #eee;
    overflow-y: scroll;
}






</style>