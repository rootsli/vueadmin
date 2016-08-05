<template>
    <!-- breadcrumb -->
    <breadcrumb :paths="paths"></breadcrumb>
    <div style="height:500px;overflow:auto;">
        <div class="ui basic segment">Page1 Semantic UI demo</div>
        <div class="ui basic segment" style="height:800px">
            <div>屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试屏幕边界测试</div>
            <div class="ui toggle checkbox">
                <input type="checkbox">
                <label>checkbox</label>
            </div>
        </div>
        <div class="ui basic segment">
            <div class="ui selection dropdown">
                <input type="hidden" name="gender">
                <i class="dropdown icon"></i>
                <div class="default text">Gender</div>
                <div class="menu">
                    <div class="item" data-value="male" data-text="Male">
                        <i class="male icon"></i>
                        Male
                    </div>
                    <div class="item" data-value="female" data-text="Female">
                        <i class="female icon"></i>
                        Female
                    </div>
                </div>
            </div>
        </div>
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
        },
        ready() {
            $(".ui.basic .ui.checkbox").checkbox()
            $('.ui.basic .ui.dropdown').dropdown()
        }
    }
</script>
