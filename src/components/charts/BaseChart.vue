<template>
    <!-- breadcrumb -->
    <breadcrumb :paths="paths"></breadcrumb>
    <div class="page-container">
        <h3 class="ui header">基本图形（更多图形请参考<a target="_blank" href="https://github.com/Justineo/vue-echarts">vue-echarts</a>及<a target="_blank" href="http://echarts.baidu.com">百度echarts</a>）</h3>
        <div style="height:95%;overflow:auto;">
            <div class="ui basic segment">
                <div class="ui two cards">
                    <div class="card">
                        <div class="content">
                            <bar></bar>
                        </div>
                    </div>
                    <div class="card">
                        <div class="content">
                            <polar></polar>
                        </div>
                    </div>
                </div>
                <div class="ui two cards">
                    <div class="card">
                        <div class="content">
                            <bubble></bubble>
                        </div>
                    </div>
                    <div class="card">
                        <div class="content">
                            <meter></meter>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .ui.two.cards>.card{
        min-width: 600px !important;
    }
</style>
<script>
    import Breadcrumb from '../Breadcrumb'
    import Bar from './Bar.vue'
    import Polar from './Polar.vue'
    import Bubble from './Bubble.vue'
    import Meter from './Meter.vue'

    export default{
        data() {
            return {
                paths: [{
                    title: '图形报表',
                    icon: 'block layout'
                }, {
                    title: '基本图形',
                    link: '/home/baseChart'
                }]
            }
        },
        components: {
            Breadcrumb,
            Bar,
            Polar,
            Bubble,
            Meter
        }
    }
</script>
