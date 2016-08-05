<template>
    <div class="ui middle aligned center aligned grid">
        <div class="column">
            <h2 class="ui teal image header">
                <img src="../assets/img/logo.png" class="image">
                <div class="content">登录</div>
            </h2>
            <validator name="loginValidation" :classes="{invalid:'error'}">
                <form class="ui large form" novalidate>
                    <div class="ui stacked segment">
                        <div v-validate-class class="account field">
                            <div class="ui left icon input">
                                <i class="user icon"></i>
                                <input type="text" v-model="user.account" initial="off" v-validate:account="{required:{rule:true,message:'请输入登录名'}}" :placeholder="namePlaceholder">
                            </div>
                        </div>
                        <div v-validate-class class="password field">
                            <div class="ui left icon input">
                                <i class="lock icon"></i>
                                <input type="password" v-model="user.password" initial="off" v-validate:password="{required:{rule:true,message:'请输入密码'}}" :placeholder="pwdPlaceholder">
                            </div>
                        </div>
                        <div class="ui fluid large teal submit button" :class="{disabled:!$loginValidation.valid}" @click.stop="loginMain">登录
                        </div>
                    </div>
                </form>
            </validator>
        </div>
    </div>
</template>
<script>
    import {login} from '../vuex/actions'
    export default{
        data(){
            return {
                user: {
                    account: '',
                    password: ''
                },
                namePlaceholder: '请输入登录名'//,
//                pwdPlaceholder: '请输入密码'
            }
        },
        methods: {
            loginMain(){
//        this.$route.router.go('/page1')
                this.login(this.user)
//        auth.login({name: this.account, password: this.password}).then(res => {
//          alert('ok');
//        }, err => {
//          this.pwdPlaceholder = "密码错误，请重新输入。";
//          this.password = '';
//        });
            }
        },
        vuex: {
            getters: {
                pwdPlaceholder: ({auth}) => auth.errmsg
            },
            actions: {
                login
            }
        }
    }
</script>
<style scoped>
    body {
        background-color: #DADADA;
    }

    body > .grid {
        height: 100%;
    }

    .image {
        margin-top: -100px;
    }

    .column {
        max-width: 450px;
    }
</style>
