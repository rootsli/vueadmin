<template>
    <!-- breadcrumb -->
    <breadcrumb :paths="paths"></breadcrumb>
    <div class="page-container">
        <h3 class="ui header">表格示例</h3>
        <div class="page-header">
            <div class="ui mini icon input">
                <input type="text" placeholder="请输入关键字">
                <i class="search icon"></i>
            </div>
            <button class="ui secondary tiny button"><i class="search icon"></i>搜索</button>
            <button class="ui red tiny button"><i class="remove icon"></i>批量删除</button>
            <button class="ui primary tiny button"><i class="plus icon"></i>添加</button>
        </div>
        <!--<div class="page-content">-->
            <table class="ui celled striped table">
                <thead>
                <tr>
                    <th>标题</th>
                    <th>标题</th>
                    <th>标题</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                </tr>
                <tr>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                </tr>
                <tr>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                </tr>
                </tbody>
                <tfoot>
                <tr>
                    <th colspan="3">
                        <pagination :total-item="totalItem" @page-click="pageClick"></pagination>
                    </th>
                </tr>
                </tfoot>
            </table>
        <!--</div>-->
    </div>
</template>
<script>
    import Breadcrumb from './Breadcrumb'
    import Pagination from './Pagination'

    export default{
        data(){
            return {
                paths: [{
                    title: '菜单',
                    icon: 'home'
                }, {
                    title: '表格示例',
                    link: '/home/list'
                }],
                totalItem:100
            }
        },
        components: {
            Breadcrumb,
            Pagination
        },
        methods: {
            /*
            * 翻页回调
            * offset 记录起始索引
            * limit  返回记录数
            * */
            pageClick(page){
                alert('offset='+page.offset+';limit='+page.limit)
            }
        },
        ready() {

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
