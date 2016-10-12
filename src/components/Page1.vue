<template>
    <!-- breadcrumb -->
    <breadcrumb :paths="paths"></breadcrumb>
    <div style="height:500px;overflow:auto;">
        <div class="ui basic segment">Page1 Semantic UI demo</div>
        <div class="ui basic segment">
            <div>this is Page1</div>
        </div>
        <button @click="gotoPage2">跳转到page2</button>
        <div class="ui basic segment" style="height:800px">
            <div>屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试</div>
            <div class="ui toggle checkbox">
                <input type="checkbox">
                <label>checkbox</label>
            </div>
        </div>
    </div>
</template>
<script>
    import Breadcrumb from './Breadcrumb'
    export default{
        data(){
            return {
                paths: [{
                    title: '页面测试',
                    icon: 'calendar',
                    link: '/home/other1'
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
                this.$route.router.go('/home/other2')
            }
        },
        ready() {
            $(".ui.basic .ui.checkbox").checkbox()
            $('.ui.basic .ui.dropdown').dropdown()
        }
    }
</script>
