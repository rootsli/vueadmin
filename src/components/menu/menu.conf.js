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
        title: '报表控件',
        icon: 'block layout',
        subMenu: [
            {
                title: '基本报表',
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
        title: '其他控件',
        icon: 'calendar',
        subMenu: [
            {
                title: '其他控件1',
                path: '/home/other1'
            },
            {
                title: '其他控件2',
                path: '/home/other2'
            }
        ]

    }
];
