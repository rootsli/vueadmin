<template>
    <chart :options="bar" v-ref:bar></chart>
</template>
<style scoped>
    .echarts {
        height: 300px;
    }
</style>
<script>
    let asyncData = {
        categories: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        data: [5, 20, 36, 10, 10, 20]
    }

    export default{
        data(){
            return{
                bar: {
                    title: {
                        text: '异步数据加载示例'
                    },
                    tooltip: {},
                    legend: {
                        data: ['销量']
                    },
                    xAxis: {
                        data: []
                    },
                    yAxis: {},
                    series: [{
                        name: '销量',
                        type: 'bar',
                        data: []
                    }]
                }
            }
        },
        ready: function () {
            // simulating async data from server
            setTimeout(() => {
                this.$refs.bar.mergeOptions({
                    xAxis: {
                        data: asyncData.categories
                    },
                    series: [{
                        name: '销量',
                        data: asyncData.data
                    }]
                })
            }, 3000)
            window.addEventListener('resize', () => {
                this.$refs.bar.resize()
            }, false)
        }
    }
</script>
