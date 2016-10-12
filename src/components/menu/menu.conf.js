/**
 * Created by lichb on 2016/7/18.
 */
export default [
    {
        name: 'basicEditor',
        title: '基本控件',
        icon: 'home',
        subMenu: [
            {
                title: '表格',
                path: '/home/list'
            },
            {
                title: '表单',
                path: '/home/form'
            }
        ]

    },
    {
        name: 'chartEditor',
        title: '图形报表',
        icon: 'block layout',
        subMenu: [
            {
                title: '基本图形',
                path: '/home/baseChart'
            },
            {
                title: '地图',
                path: '/home/map'
            }
        ]

    },
    {
        name: 'other',
        title: '页面测试',
        icon: 'calendar',
        subMenu: [
            {
                title: '内容超边界布局示例',
                path: '/home/other1'
            },
            {
                title: '页面跳转示例',
                path: '/home/other2'
            }
        ]

    }
];
