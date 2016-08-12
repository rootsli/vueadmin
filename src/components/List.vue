<template>
    <!-- breadcrumb -->
    <breadcrumb :paths="paths"></breadcrumb>
    <div class="page-container">
        <h3 class="ui header">表格示例</h3>
        <div class="page-loading">
            <div class="ui inverted dimmer" :class="{active:isLoading}">
                <div class="ui text loader">数据加载中，请稍后...</div>
            </div>
            <div class="page-header">
                <div class="ui mini icon input">
                    <input type="text" placeholder="请输入关键字">
                    <i class="search icon"></i>
                </div>
                <button class="ui secondary tiny button"><i class="search icon"></i>搜索</button>
                <button class="ui primary tiny button" @click="addItem"><i class="plus icon"></i>添加</button>
                <button class="ui red tiny button"><i class="remove icon"></i>批量删除</button>
            </div>
            <table class="ui celled striped table">
                <thead>
                <tr>
                    <th>标题</th>
                    <th>标题</th>
                    <th>标题</th>
                    <th width="210">操作</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>
                        <a href="javascript:;" class="operator" @click="editItem"><i class="edit icon"></i>修改</a>
                        <a href="javascript:;" class="operator"><i class="remove icon"></i>删除</a>
                    </td>
                </tr>
                <tr>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>
                        <a href="javascript:;" class="operator" @click="editItem"><i class="edit icon"></i>修改</a>
                        <a href="javascript:;" class="operator"><i class="remove icon"></i>删除</a>
                    </td>
                </tr>
                <tr>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>
                        <a href="javascript:;" class="operator" @click="editItem"><i class="edit icon"></i>修改</a>
                        <a href="javascript:;" class="operator"><i class="remove icon"></i>删除</a>
                    </td>
                </tr>
                </tbody>
                <tfoot>
                <tr>
                    <th colspan="4">
                        <pagination :total-item="totalItem" @page-click="pageClick"></pagination>
                    </th>
                </tr>
                </tfoot>
            </table>
        </div>
    </div>
    <list-form :data="rowData" :is-edit="isEdit" @on-ok="onOK" @on-cancel="onCancel"></list-form>
</template>
<script>
    import Breadcrumb from './Breadcrumb'
    import Pagination from './Pagination'
    import ListForm from './ListForm'

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
                totalItem: 100,
                rowData: {},
                isEdit: false,
                isLoading: true
            }
        },
        components: {
            Breadcrumb,
            Pagination,
            ListForm
        },
        methods: {
            /*
            * 翻页回调
            * offset 记录起始索引
            * limit  返回记录数
            * */
            pageClick(page){
                console.log('offset='+page.offset+';limit='+page.limit)
                this.isLoading = true

                setTimeout(()=> {
                    this.totalItem = 120
                    this.isLoading = false
                }, 1000)
            },
            onOK(data){
                console.log(data.name)
            },
            onCancel(data){
                console.log(data.name)
            },
            addItem(){
                this.isEdit = false
                this.rowData = {}
                this.rowData.sex = 'male'
                $('.ui.modal.user').modal('show')
            },
            editItem(){
                this.isEdit = true
                this.rowData = {
                    name:'张三丰',
                    nick:'太极真人',
                    sex:'female'
                }
                $('.ui.modal.user').modal('show')
            }
        },
        ready() {
            $('.ui.form .ui.checkbox').checkbox()
            $('.ui.modal').modal({closable: false})
            setTimeout(()=> {
                this.isLoading = false
            }, 1000)
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

    .page-loading {
        overflow: hidden;
        position: relative;
    }

    .ui.table {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        margin-top: 0;
    }
</style>
