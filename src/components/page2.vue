<template>
    <!-- breadcrumb -->
    <breadcrumb :paths="paths"></breadcrumb>
    <div class="ui basic segment">
        <div>this is page2</div>
        <a class="item" v-link="{path: '/home/page1', exact: true}"> 跳转到页面1 </a>
    </div>
</template>
<script>
    import Breadcrumb from './Breadcrumb'
    export default{
        data(){
            return {
                paths: [{
                    title: '菜单',
                    icon: 'calendar'
                }, {
                    title: '页面1',
                    link: '/home/page1'
                },{
                    title: '页面2',
                    link: '/home/page2'
                }]
            }
        },
        components: {
            Breadcrumb
        }
    }
</script>
