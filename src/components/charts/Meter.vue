<template>
    <chart :options="meter" v-ref:meter></chart>
</template>
<style scoped>
    .echarts {
        height: 300px;
    }
</style>
<script>
    export default{
        data(){
            return{
                meter:{
                    tooltip : {
                        formatter: "{a} <br/>{b} : {c}%"
                    },
                    toolbox: {
                        feature: {
                            restore: {},
                            saveAsImage: {}
                        }
                    },
                    series: [
                        {
                            name: '业务指标',
                            type: 'gauge',
                            detail: {formatter:'{value}%'},
                            data: [{value: 50, name: '完成率'}]
                        }
                    ]
                }
            }
        },
        ready: function () {
            setInterval(() => {
                this.$refs.meter.mergeOptions({
                    series: [
                        {
                            name: '业务指标',
                            type: 'gauge',
                            detail: {formatter:'{value}%'},
                            data: [{value: ((Math.random() * 100).toFixed(2) - 0), name: '完成率'}]
                        }
                    ]
                })
            },2000);

            window.addEventListener('resize', () => {
                this.$refs.meter.resize()
            }, false)
        }
    }
</script>
