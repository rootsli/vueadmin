<template>
    <div class="ui tiny teal progress" v-show="isShow">
        <div class="bar" style="transition-duration: 300ms;min-width:0;height:3px;" :style="{width: width + '%'}"></div>
    </div>
    <div class="home-header">
        <a href="https://github.com/rootsli/vueadmin" target="_blank">
            <img src="../assets/img/logo2.png" class="logo" alt="logo" />
        </a>
        <div class="ui inline pointing dropdown">
            <div class="text">
                <img class="ui avatar image" src="../assets/img/avatar_small.jpg"> 张小泉
                <i class="dropdown icon"></i>
            </div>
            <div class="menu ui transition">
                <a class="item" href="http://www.yeelink.net"><i class="reply mail icon"></i>返回首页</a>
                <a class="item" href="/user/logout"><i class="sign out icon"></i>注销登录</a>
            </div>
        </div>
    </div>
    <div class="home-main">
        <div class="ui bottom attached segment pushable">
            <!-- menu -->
            <menu></menu>
            <div class="pusher">
                <div class="menu-toggle" @click="toggleMenu">{{toggleTitle}}</div>
                <!-- page container -->
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
    import Menu from './menu/Menu'
    import {setProgress} from '../vuex/actions'

    export default{
        data(){
            return {
                width: 0,
                isShow: false,
                toggleTitle: '隐藏菜单'
            }
        },
        vuex: {
            getters: {
                progress: ({progress}) => progress.rate || 0
            },
            actions: {
                setProgress
            }
        },
        watch: {
            'progress': {
                deep: true,
                handler: function (val) {
                    if (val == 1) { //有路由切换
                        this.isShow = true;
                        this.width = 10
                        setTimeout(()=> {
                            this.width = 60
                            setTimeout(()=> {
                                this.width = 100
                                setTimeout(()=> {
                                    this.isShow = false;
                                    this.width = 0
                                    this.setProgress(0)
                                }, 300)
                            }, 200)
                        }, 100)
                    }
                }
            }
        },
        components: {
            Menu
        },
        methods: {
            toggleMenu(){
                this.toggleTitle = (this.toggleTitle == '隐藏菜单' ? '显示菜单' : '隐藏菜单')
                $('.ui.pushable .ui.sidebar').sidebar('toggle')
            }
        },
        ready(){
            $('.home-header .ui.dropdown').dropdown({on: 'hover'})
        }
    }
</script>
<style scoped>
    .ui.attached.segment {
        border-top: 0;
    }

    .ui.inline.dropdown {
        float: right;
        margin-right: 35px;
    }

    .ui.inline.dropdown:hover {
        background-color: #53575E;
    }

    .ui.pointing.dropdown > .menu {
        margin-top: 0 !important;
    }

    .pusher .breadcrumb-item {
        height: 39px;
        line-height: 39px;
        background-color: #FFFFFF;
        padding-left: 12px;
    }

    .home-header {
        overflow: visible;
        right: 0;
        z-index: 500;
        min-width: 900px;
        height: 44px;
        line-height: 44px;
        color: #fff;
        background-color: #2a2d34;
    }

    .home-main {
        position: absolute;
        top: 44px;
        right: 0;
        bottom: 0;
        left: 0;
        min-width: 900px;
        font-size: 14px;
    }

    .ui.progress {
        position: absolute !important;
        width: 100%;
    }

    .menu-toggle {
        position: absolute;
        background-color: #0cadb7;
        height: 81px;
        width: 20px;
        z-index: 9999;
        top: 450px;
        font-size: 14px;
        color: #fff;
        padding: 2px;
        cursor: pointer;
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
    }

    .menu-toggle:hover {
        background-color: rgba(12, 173, 183, 0.76);
    }

    .logo{
        vertical-align: middle;
    }
</style>
