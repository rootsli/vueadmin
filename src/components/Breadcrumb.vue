<template>
    <div class="breadcrumb-item">
        <div class="ui large breadcrumb">
      <span v-for="path in paths" track-by="$index">
        <i v-if="$index!=0" class="right chevron icon divider"></i>
        <a class="section" @click.prevent="redirect(path.link, $event)">
          <i v-if="!!path.icon && path.icon!=''" class="icon" :class="path.icon"></i>{{path.title}}
        </a>
      </span>
        </div>
    </div>
</template>
<script>
    export default{
        props: {
            paths: {
                type: Array,
                required: true
            }
        },
        methods: {
            redirect(path, event){
//                event.preventDefault()
                if (path) {
                    this.$route.router.go(path)
                }
            }
        }
    }
</script>
<style>
    .breadcrumb-item{
        background-color: #eee;
        box-shadow: none;
        padding-left: 8px;
    }
    .ui.large.breadcrumb{
        height: 35px !important;
        line-height: 35px !important;;
    }
</style>
