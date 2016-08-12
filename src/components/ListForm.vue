<template>
    <div class="ui small modal user">
        <div class="header">{{isEdit?'修改项目':'新增项目'}}</div>
        <div class="content">
            <form class="ui form">
                <div class="required inline field">
                    <label>姓名</label>
                    <input type="text" name="first-name" v-model="data.name" placeholder="请输入姓名">
                </div>
                <div class="inline field">
                    <label>昵称</label>
                    <input type="text" name="last-name" v-model="data.nick" placeholder="请输入昵称">
                </div>
                <div class="inline fields">
                    <label>性别</label>
                    <div class="field">
                        <div class="ui radio checkbox">
                            <input type="radio" name="sex" v-model="data.sex" value="male" class="hidden">
                            <label>男</label>
                        </div>
                    </div>
                    <div class="field">
                        <div class="ui radio checkbox">
                            <input type="radio" name="sex" v-model="data.sex" value="female" class="hidden">
                            <label>女</label>
                        </div>
                    </div>
                    <div class="field">
                        <div class="ui radio checkbox">
                            <input type="radio" name="sex" v-model="data.sex" value="unknow" class="hidden">
                            <label>不明</label>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        <div class="actions">
            <div class="ui deny button" @click="onOK">关闭</div>
            <div class="ui positive right ok button" @click="onCancel"><i class="checkmark icon"></i>确定</div>
        </div>
</div>
</template>
<script>
    export default{
        props: {
            data: {
                type: Object,
                required: true
            },
            isEdit: {
                type: Boolean,
                required: true
            }
        },
        methods: {
            onOK(){
                $('.ui.modal.user').modal('hide')
                this.$dispatch('on-ok', this.data)
            },
            onCancel(){
                $('.ui.modal.user').modal('hide')
                this.$dispatch('on-cancel', this.data)
            }
        },
        ready() {
            $('.ui.form .ui.checkbox').checkbox()
            $('.ui.modal').modal({closable: false})
        }
    }
</script>
<style scoped>
    .ui.form .inline.field > label, .ui.form .inline.fields > label {
        width: 80px;
    }

    .ui.form .inline.field > input {
        min-width: 550px;
    }
</style>
