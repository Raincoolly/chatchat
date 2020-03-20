<template>
    <transition name="fadeIn">
        <div class="login">
            <i @click="showAbout" class="icon-about" title="关于"></i>
            <i class="icon-chat"></i>
            <h2>请输入您的昵称</h2>
            <input @keyup.enter="login" v-model.trim="name" type="text" autofocus>

            <transition name="showAbout">
                <About v-if="isShowAbout"></About>
            </transition>
        </div>
    </transition>
</template>

<script>
    export default {
        name: 'login',
        components: {
            
        },
        data(){
            return {
                isShowAbout:false,
                name:'',
            }
        },
        methods:{
            showAbout(){

            },
        }

    }

</script>

<style lang="less" scoped>
    .login{
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        top:0;
        right:0;
        bottom:0;
        left:0;
        width:100%;
        height:100%;
        background:#000;
        color:#fff;
    }

    i.icon-about{
        position: absolute;
        top:20px;
        right:80px;
        width:40px;
        height:40px;
        background: url('../../common/icons/icon-about.svg') no-repeat;
        background-size: contain; 
    }
    i.icon-chat{
        position: absolute;
        top: 25%;
        right: 36%;
        width: 100px;
        height: 100px;
        background: url(/img/icon-chat.f6df3ac2.svg) no-repeat;
        background-size: contain;
    }

    h2 {
        letter-spacing: 1px;
    }
    input {
        width:300px;
        padding: 5px 10px;
        margin-top: 10px;
        background-color: #000;
        color:#fff;
        border-bottom:1px solid #fff;
        text-align: center;
        font-size:2rem;
        letter-spacing: 2px;
    }

</style>