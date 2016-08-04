<template>
    <!-- breadcrumb -->
    <breadcrumb :paths="paths"></breadcrumb>
    <div class="ui basic segment">
        <div>this is page1</div>
        <button @click="gotoPage2">跳转到page2</button>
    </div>
</template>
<script>
    import Breadcrumb from './Breadcrumb'
    export default{
        data(){
            return {
                paths: [{
                    title: '菜单',
                    icon: 'home',
                    link: '/home/page1'
                }, {
                    title: '页面1'
                }]
            }
        },
        components: {
            Breadcrumb
        },
        methods: {
            gotoPage2(event) {
                this.$route.router.go('/home/page2')
            }
        }
    }
</script>
