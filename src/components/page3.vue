<template>
  <!-- breadcrumb -->
  <breadcrumb :paths="paths"></breadcrumb>
  <div class="ui basic segment">
    <div class="ui button" data-tooltip="Add users to your feed" data-position="top left">Top Left</div>
    <div class="ui button" data-tooltip="Add users to your feed" data-position="top center">Top Center</div>
    <div class="ui button" data-tooltip="Add users to your feed" data-position="top right">Top Right</div>
    <div class="ui divider"></div>
    <div class="ui button" data-tooltip="Add users to your feed" data-position="bottom left">Bottom Left</div>
    <div class="ui button" data-tooltip="Add users to your feed" data-position="bottom center">Bottom Center</div>
    <div class="ui button" data-tooltip="Add users to your feed" data-position="bottom right">Bottom Right</div>
    <div class="ui divider"></div>
    <div class="ui button" data-tooltip="Add users to your feed" data-position="right center">Right Center</div>
    <div class="ui button" data-tooltip="Add users to your feed" data-position="left center">Left Center</div>
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
        }, {
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
