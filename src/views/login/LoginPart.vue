<template>
    <div class="wrapper">
        <img src="../../assets/编组@2x.png" alt="" class="wrapper__img">
        <div class="wrapper__input">
            <input type="text" class="wrapper__input__content" placeholder="请输入用户名" v-model="username">
        </div>
        <div class="wrapper__input">
            <input type="password" class="wrapper__input__content" placeholder="请输入密码" v-model="password" autocomplete="new-password">
        </div>
        <div class="wrapper__login-button" @click="handleLogin">登录</div>
        <div class="wrapper__login-link" @click="handleRegisterClick">立即注册</div>
        <toast-part v-if="show" :message="toastMessage"/>
    </div>
</template>

<script>
    import { reactive ,toRefs} from 'vue';
import { useRouter } from 'vue-router';
import {post} from '../../utils/request';
import ToastPart,{useToastEffect} from '../../components/Toast.vue'

//处理注册逻辑
const useLoginEffect = (showToast) => {
    const router = useRouter();
    const data = reactive({ username: '', password: '', })
    const handleLogin = async () => {
        try {
            const { username, password } = data;
            if (username == "" || password == '') {
                alert('请输入用户名和密码')
                return
            }
                const result=await post('/api/user/login', {
                username: data.username,
                password: data.password
           })
            if (result?.errno === 0) {
               localStorage.isLogin = true;
               router.push({ name: 'Home' });
            } else {
                showToast('登录失败')
           }
            } catch (e) {
                showToast('请求失败')
            }        
    }
    const { username, password } = toRefs(data)
        return{username, password,handleLogin}
}
const useRegisterEffect = () => {
    const router = useRouter();
    const handleRegisterClick = () => {
            router.push({ name: 'RegisterPart' })
    }
        return {handleRegisterClick}
}

export default {
    name: 'LoginPart',
    components: { ToastPart },
    //职责就是告诉你，代码执行的一个流程
    setup() {
        const {show,toastMessage,showToast}=useToastEffect()
        const { username, password, handleLogin } = useLoginEffect(showToast);
        const {handleRegisterClick}=useRegisterEffect()
        
        return {username,password, handleLogin, handleRegisterClick,show,toastMessage}
    }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';

.wrapper {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-50%);

    &__img {
        display: block;
        margin: 0 auto .4rem auto;
        width: .66rem;
        height: .66rem;
    }

    &__input {
        height: .48rem;
        margin: 0 .4rem .16rem .4rem;
        padding: 0 .16rem;
        background: #F9F9F9;
        border: .01rem solid rgba(0, 0, 0, 0.10);
        border-radius: .06rem;
        border-radius: .06rem;

        &__content {
            margin-top:.12rem;
            line-height: .22rem;
            border: none;
            outline: none;
            width: 100%;
            background: none;
            font-size: .16rem;
            color: $content-notice-fontcolor;

            &::placeholder {
                color: $content-notice-fontcolor;
            }
        }
    }

    &__login-button {
        margin: .32rem .4rem .16rem .4rem;
        line-height: .48rem;
        background: #0091FF;
        box-shadow: 0 .04rem .08rem 0 rgba(0, 145, 255, 0.32);
        border-radius: .04rem;
        border-radius: .04rem;
        color: $bgColor;
        font-size: .16rem;
        text-align: center;
    }

    &__login-link {
        text-align: center;
        font-size: .14rem;
        color: $content-notice-fontcolor;
    }
}
</style>