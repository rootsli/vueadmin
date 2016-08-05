<template>
    <div class="ui inverted left vertical sidebar visible menu">
        <div v-for="menu in menus">
            <a class="teal item" :class="{'active': (menu.name==currentMenu)}">
                <i class="icon" :class="menu.icon"></i> {{menu.title}}
            </a>
            <div class="menu">
                <a class="item" v-for="subMenu in menu.subMenu" v-link="{path: subMenu.path, exact: true}"> {{subMenu.title}} </a>
            </div>
        </div>
    </div>
</template>
<script>
    import menus from './menu.conf'

    export default{
        data(){
            return {
                menus: menus,
            }
        },
        vuex: {
            getters: {
                currentMenu: ({menu}) => menu.current || 'menu1'
            }
        },
        ready(){
            $('.ui.sidebar').sidebar({dimPage: false, closable: false,context:$('.ui.pushable')})
        }
    }
</script>
<style scoped>
    .ui.inverted.menu {
        background-color: #353942;
        border-right: 3px solid #0cadb7;
    }

    .ui.inverted.menu a.teal.item {
        background-color: #323e4a;
        border-top: 1px solid #3d4853;
        border-bottom: 1px solid #252e37;
        color: #999;
    }

    .ui.inverted.menu .teal.active.item, .ui.inverted.teal.menu {
        background-color: #00B5AD !important;
    }

    .ui.vertical.inverted.menu .menu .item {
        height: 32px;
        line-height: 19px;
    }

    .ui.vertical.inverted.menu .menu .item:hover, .ui.vertical.inverted.menu .menu .item.active {
        color: #00B5AD !important;
    }

    .ui.menu .menu {
        padding: 10px 0;
    }
</style>
