<template>
    <!-- breadcrumb -->
    <breadcrumb :paths="paths"></breadcrumb>
    <div class="page-container">
        <h3 class="ui header">表单示例</h3>
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
                }]
            }
        },
        components: {
            Breadcrumb
        }
    }
</script>
<style scoped>
    .page-header {
        height: 67px;
        line-height: 67px;
        padding-left: 25px;
        background-color: #fff;
        border: 1px solid rgba(34, 36, 38, .15);
        border-bottom: 0;
        border-top-right-radius: .28571429rem;
        border-top-left-radius: .28571429rem;
    }

    .ui.table {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        margin-top: 0;
    }
</style>
