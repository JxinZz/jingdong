<template>
    <div class="order">
        <div class="order__price">实付金额 <b>￥{{calulations.price}}</b></div>
        <div class="order__btn" @click="()=>handleShowConfirmChange(true)">提交订单</div>
    </div>
    <div class="mask" v-show="showConfirm"  @click="()=>handleShowConfirmChange(false)">
        <div class="mask__content" @click.stop>
            <h3 class="mask__content__title">确认要离开收银台？</h3>
            <div class="mask__content__desc">请尽快完成支付，否则将被取消</div>
            <div class="mask__content__btns">
                <div
                 class="mask__content__btn mask__content__btn--first"
                 @click="()=>handleConfirmOrder(true)"
                >取消订单</div>
                <div
                 class="mask__content__btn mask__content__btn--last"
                 @click="()=>handleConfirmOrder(false)"
                 >确认支付</div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex';
import {post} from '../../utils/request';
import { useCommonCartEffect } from '../../effects/cartEffects';

//下单相关逻辑
const useMakOrderEffect = (productList, shopName, shopId) => {
    const router = useRouter()
        const store = useStore();
    const handleConfirmOrder = async (isCanceled) => {
            const products = [];
            for (let i in productList.value) {
                const product = productList.value[i]
                products.push({id:parseInt(product._id,10),num:product.count })
            }
            console.log(products)
        
        try {
                const result=await post('/api/order', {
                addressId: 1,
                    shopId,
                    shopName:shopName.value,
                    isCanceled,
                    products
                })
            if (result?.errno === 0) {
                store.commit('clearCartData',shopId)
               router.push({ name: 'OrderList' });
            }
            } catch (e) {alert('下单失败')}        
    }
    return { handleConfirmOrder };
}
//蒙层展示相关逻辑
const useShowMaskEffect = () => {
    const showConfirm = ref(false);
    const handleShowConfirmChange = (status) => {
            showConfirm.value=status
        }
    return  {handleShowConfirmChange,showConfirm}
}

export default{
    name: "OrderPart",
    setup() {
        const route = useRoute();
        const shopId = parseInt(route.params.id,10);
        const { calulations, shopName, productList } = useCommonCartEffect(shopId);
        const {handleConfirmOrder}=useMakOrderEffect(productList,shopName,shopId)
       const {showConfirm,handleShowConfirmChange}=useShowMaskEffect()
      
        return { showConfirm, calulations,handleConfirmOrder,handleShowConfirmChange };
    },
}

</script>

<style lang="scss" scoped>
    @import '../../style/viriables.scss';
@import '../../style/mixins.scss';
    .order {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        height: .49rem;
        line-height: .49rem;
        background-color: $bgColor;
    
        &__price {
            flex: 1;
            text-indent: .24rem;
            font-size: .14rem;
            color: $content-fontcolor;
        }
    
        &__btn {
            width: .98rem;
            background-color: #4fb0f9;
            color: $bgColor;
            text-align: center;
            font-size: .14rem;
    
        }
    }
    .mask{
        z-index: 1;
        position: absolute;
        left:0;
        right:0;
        bottom:0;
        top:0;
        background: rgba(0,0,0,.5);
        &__content{
            position:absolute;
            top:50%;
            left:50%;
            transform:translate(-50%,-50%);
            width:3rem;
            height:1.56rem;
            background: $bgColor;
            border-radius: .04rem;
            text-align: center;
            &__title{
                margin:.24rem 0 0 0;
                line-height:.26rem;
                font-size:.18rem;
                color:$content-fontcolor;
             }
             &__desc{
                margin:.08rem 0 0 0 ;
                font-size:.14rem;
                color:$medium-fontColor;
             }
             &__btns{
                display: flex;
                margin:.24rem .58rem;
                line-height:.32rem;
             }
             &__btn{
                flex:1;
                width:.8rem;
                border-radius: .16rem;
                &--first{
                    margin-right:.12rem;
                border:.01rem solid #4fb0f9;
                color:#4fb0f9;
            }
                &--last{
                    margin-right:.12rem;
                    background:#4fb0f9;
                    color:$bgColor;
                }
             }
        }
    }
    
</style>