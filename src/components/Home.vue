<template>
    <div class="ui tiny teal progress" v-show="isShow">
        <div class="bar" style="transition-duration: 300ms;min-width:0;height:3px;" :style="{width: width + '%'}"></div>
    </div>
    <div class="home-header">
        <div class="ui inline pointing  dropdown" @mouseover="toggle('over')" @mouseout="toggle('out')">
            <div class="text"><img class="ui avatar image"
                                   src="http://cs.101.com/v0.1/static/cscommon/avatar/310198/310198.jpg?size=80"> 李承彬
            </div>
            <i class="dropdown icon"></i>
            <div class="menu ui transition" :class="{'visible':flag=='over','hidden':flag=='out'}">
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
                <!-- page container -->
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
    import Menu from './menu/Menu'

    export default{
        data(){
            return {
                flag: 'out',
                timer: null,
                width: 0,
                isShow: false
            }
        },
        vuex: {
            getters: {
                progress: ({progress}) => progress.rate || 0
            }
        },
        watch: {
            'progress': {
                deep: true,
                handler: function (val) {
                    this.isShow = true;
                    this.width = 10
                    setTimeout(()=> {
                        this.width = 60
                        setTimeout(()=> {
                            this.width = 100
                            setTimeout(()=> {
                                this.isShow = false;
                                this.width = 0
                            }, 300)
                        }, 200)
                    }, 100)
                }
            }
        },
        components: {
            Menu
        },
        methods: {
            toggle(flag){
                var self = this;
                if (flag == 'out') {
                    self.timer = setTimeout(() => {
                        self.flag = flag;
                    }, 600);
                } else {
                    clearTimeout(self.timer);
                    self.flag = flag;
                }
            }
        }
    }
</script>
<style>
    .ui.attached.segment {
        border-top: 0;
    }

    .ui.inline.dropdown {
        float: right;
        padding-right: 35px;
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
</style>
