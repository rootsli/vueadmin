<template>
    <!-- breadcrumb -->
    <breadcrumb :paths="paths"></breadcrumb>
    <div class="ui basic segment">
        <div>this is Page2</div>
        <a class="item" v-link="{path: '/home/other1', exact: true}"> 跳转到页面1 </a>
    </div>
</template>
<script>
    import Breadcrumb from './Breadcrumb'
    export default{
        data(){
            return {
                paths: [{
                    title: '页面测试',
                    icon: 'calendar'
                }, {
                    title: '页面1',
                    link: '/home/other1'
                },{
                    title: '页面2',
                    link: '/home/other2'
                }]
            }
        },
        components: {
            Breadcrumb
        }
    }
</script>
