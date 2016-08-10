<template>
    <div class="pagination-info">共{{totalItem}}条数据，每页显示
        <select class="ui selection dropdown" v-model="pageSize">
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
        </select>
        条数据
    </div>
    <div class="ui right floated pagination menu">
        <a class="item" :class="{disabled:pageNumber==1 || totalPage<2}" @click="pagePreNext('pre')">上一页</a>
        <a class="item" v-for="headPage in headPageArray" @click="goto(headPage)" :class="{active:pageNumber==headPage}">{{headPage}}</a>
        <div class="item" v-show="totalPage>5">...</div>
        <a class="item" v-for="tailPage in tailPageArray" @click="goto(tailPage)" :class="{active:pageNumber==tailPage}">{{tailPage}}</a>
        <a class="item" :class="{disabled:pageNumber==totalPage || totalPage<2}" @click="pagePreNext('next')">下一页</a>
    </div>
</template>
<script>
    export default{
        props: {
            totalItem: {
                type: Number,
                required: true
            }
        },
        data(){
            return {
                totalPage:0,
                pageSize: 10,
                pageNumber: 0,
                headPageArray: [],
                tailPageArray: []
            }
        },
        watch:{
            'pageSize': {
                deep: true,
                handler: function(val, oldVal) {
                    this.pageNumber = 0;
                    this.goto(1)
                }
            },
            'totalItem': {
                deep: true,
                handler: function(val, oldVal) {
                    this.paginationBuild()
                }
            }
        },
        methods: {
            pagePreNext(flag){
                if ((flag == 'pre' && (this.pageNumber == 1 || this.totalPage < 2))
                        || (flag == 'next' && (this.pageNumber == this.totalPage || this.totalPage < 2))) {
                    return
                }

                let page = (flag=='pre'?this.pageNumber-1:this.pageNumber+1)
                this.goto(page)
            },
            goto(page){
                if(this.pageNumber == page){
                    return
                }

                this.pageNumber = page

                this.$dispatch('page-click', {
                    offset: ((this.pageNumber - 1) * this.pageSize + 1),
                    limit: this.pageSize
                })

                this.paginationBuild()
            },
            paginationBuild(){
                this.totalPage = parseInt(this.totalItem / this.pageSize) + 1

                let middilePage = parseInt(this.totalPage / 2)
                let headPage, tailPage

                if (this.totalPage <= 5) {
                    headPage = [1, 2, 3, 4, 5]
                    tailPage = []
                } else {
                    if (this.pageNumber > middilePage) {
                        headPage = [1, 2]
                        if (this.pageNumber + 2 <= this.totalPage) {
                            tailPage = [this.pageNumber - 2, this.pageNumber - 1, this.pageNumber, this.pageNumber + 1, this.pageNumber + 2]
                        } else if (this.pageNumber + 1 <= this.totalPage) {
                            tailPage = [this.pageNumber - 3, this.pageNumber - 2, this.pageNumber - 1, this.pageNumber, this.pageNumber + 1]
                        } else {
                            tailPage = [this.pageNumber - 4, this.pageNumber - 3, this.pageNumber - 2, this.pageNumber - 1, this.pageNumber]
                        }
                    } else {
                        tailPage = [this.totalPage - 1, this.totalPage]
                        if (this.pageNumber - 2 >= 1) {
                            headPage = [this.pageNumber - 2, this.pageNumber - 1, this.pageNumber, this.pageNumber + 1, this.pageNumber + 2]
                        } else if (this.pageNumber - 1 >= 1) {
                            headPage = [this.pageNumber - 1, this.pageNumber, this.pageNumber + 1, this.pageNumber + 2, this.pageNumber + 3]
                        } else {
                            headPage = [1, 2, 3, 4, 5]
                        }
                    }
                }

                this.headPageArray = headPage
                this.tailPageArray = tailPage
            }
        },
        ready() {
            this.goto(1)
            $('.pagination-info .ui.dropdown').dropdown()
        }
    }
</script>
<style scoped>
    .pagination-info {
        line-height: 42px;
        height: 42px;
        float: left;
    }

    .ui.pagination.menu .active.item {
        background-color: #0cadb7 !important;
        color: #fff !important;
    }
</style>