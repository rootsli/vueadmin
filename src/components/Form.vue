<template>
    <!-- breadcrumb -->
    <breadcrumb :paths="paths"></breadcrumb>
    <div class="page-container">
        <h3 class="ui header">表单示例</h3>
        <div class="form-content">
            <form class="ui form">
                <div class="required inline field">
                    <label>姓名</label>
                    <input type="text" name="first-name" v-model="user.name" placeholder="请输入姓名">
                </div>
                <div class="inline field">
                    <label>昵称</label>
                    <input type="text" name="last-name" v-model="user.nick" placeholder="请输入昵称">
                </div>
                <div class="inline field">
                    <label>信用卡类型</label>
                    <div class="ui selection dropdown">
                        <input type="hidden" name="cardType">
                        <i class="dropdown icon"></i>
                        <div class="default text">类型</div>
                        <div class="menu">
                            <div class="item" data-value="visa"><i class="visa icon"></i> Visa </div>
                            <div class="item" data-value="amex"><i class="amex icon"></i> American Express </div>
                            <div class="item" data-value="discover"><i class="discover icon"></i> Discover </div>
                        </div>
                    </div>
                </div>
                <div class="inline fields">
                    <label>性别</label>
                    <div class="field">
                        <div class="ui radio checkbox">
                            <input type="radio" name="sex" v-model="user.sex" value="male" class="hidden">
                            <label>男</label>
                        </div>
                    </div>
                    <div class="field">
                        <div class="ui radio checkbox">
                            <input type="radio" name="sex" v-model="user.sex" value="female" class="hidden">
                            <label>女</label>
                        </div>
                    </div>
                    <div class="field">
                        <div class="ui radio checkbox">
                            <input type="radio" name="sex" v-model="user.sex" value="unknow" class="hidden">
                            <label>不明</label>
                        </div>
                    </div>
                </div>
                <div class="inline field">
                    <label>开关</label>
                    <div class="ui toggle checkbox">
                        <input type="checkbox" tabindex="0" class="hidden">
                    </div>
                </div>
                <div class="inline field button-group">
                    <label>&nbsp;</label>
                    <div class="ui positive button"><i class="checkmark icon"></i>提交</div>
                    <div class="ui deny button margin10">重置</div>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
    import Breadcrumb from './Breadcrumb'

    export default{
        data(){
            return {
                paths: [{
                    title: '菜单',
                    icon: 'home'
                }, {
                    title: '表单示例',
                    link: '/home/form'
                }],
                user:{
                    name:'',
                    nick:'',
                    sex:'male'
                }
            }
        },
        components: {
            Breadcrumb
        },
        ready() {
            $('.ui.form .ui.checkbox').checkbox()
            $('.ui.dropdown').dropdown()
        }
    }
</script>
<style scoped>
    .ui.form .inline.field > label, .ui.form .inline.fields > label {
        width: 120px;
    }

    .ui.form .inline.field > input,.ui.form .inline.field>.selection.dropdown, .ui.form .inline.fields .field>.selection.dropdown {
        min-width: 550px;
    }

    .form-content {
        overflow: hidden;
        background-color: #fff;
        border: 1px solid #ddd;
        padding: 36px 0 25px 36px;
    }

    .ui.form .button-group{
        margin-top: 35px;
    }

    .margin10{
        margin-left: 10px;
    }
</style>