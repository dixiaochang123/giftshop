export default [
    // 每个分类必须具有 name 属性
    // 其余属性可以自由添加
    // item: {name: 分类名称, icon: '未激活图标', activeIcon: '激活图标', children: [item, item]}
    {
        name: '纺织品类',
        icon: require('@~/img/slices/icon-fz.png'),
        activeIcon: require('@~/img/slices/icon-fz-1.png'),
        children: [
            {
                name: '包袋',
                children: [
                    {name: '帆布袋'},
                    {name: '电脑包'},
                    {name: '单肩包'},
                    {name: '双肩包'},
                    {name: '洗漱包'}
                ]
            },
            {
                name: '毛绒制品',
                children: [
                    {name: '抱枕'},
                    {name: '毛毯'},
                    {name: '颈枕'},
                    {name: '创意毛绒'}
                ]
            },
            {
                name: '伞类',
                children: [
                    {name: '太阳伞'},
                    {name: '雨伞'},
                    {name: '创意伞类'}
                ]
            },
        ]
    },
    {
        name: '服饰类',
        icon: require('@~/img/slices/icon-fs.png'),
        activeIcon: require('@~/img/slices/icon-fs-1.png'),
        children: [
            {
                name: '夏季服装',
                children: [
                    {name: 'T恤'},
                    {name: '防晒服'},
                    {name: '速干衣'},
                    {name: 'POLO衫'},
                ]
            },
            {
                name: '春秋服装',
                children: [
                    {name: '连帽卫衣'},
                    {name: '开衫卫衣'},
                    {name: '圆领卫衣'},
                    {name: '创意版型'},
                    {name: '常规款'},
                    {name: '限量款'},
                    {name: '两件套'},
                    {name: '三件套'},
                    {name: '冲锋衣'},
                ]
            },
            {
                name: '冬季服装',
                children: [
                    {name: '羊羔毛外套'},
                    {name: '羽绒衣'},
                    {name: '马甲'},
                ]
            },
            {
                name: '饰品',
                children: [
                    {name: '头饰'},
                    {name: '手饰'},
                    {name: '魔术贴'},
                ]
            },
            {
                name: '帽子',
                children: [
                    {name: '棒球帽'},
                    {name: '渔夫帽'},
                    {name: '防晒帽'},
                ]
            },
            {
                name: '围巾',
                children: [
                    {name: '羊毛围巾'},
                    {name: '羽绒围巾'},
                    {name: '创意围巾'},
                ]
            },
            {
                name: '袜子',
                children: [
                    {name: '长筒袜'},
                    {name: '中筒袜'},
                    {name: '短筒袜'},
                ]
            },
        ]
    },
    {
        name: '家居办公',
        icon: require('@~/img/slices/icon-ry.png'),
        activeIcon: require('@~/img/slices/icon-ry-1.png'),
        children: [
            {
                name: '笔记本',
                children: [
                    {name: "平装本"},
                    {name: "活页本"},
                    {name: "功能本"},
                    {name: "创意笔记本"},
                ]
            },
            {
                name: '书写笔',
                children: [
                    {name: "广告笔"},
                    {name: "签字笔"},
                    {name: "钢笔"},
                ]
            },
            {
                name: '杯壶',
                children: [
                    {name: "马克杯"},
                    {name: "运动水杯"},
                    {name: "保温杯"},
                    {name: "玻璃水杯"},
                    {name: "创意水杯"},
                ]
            },
            {
                name: '其他',
                children: [
                    {name: "工牌"},
                    {name: "胸牌"},
                    {name: "U盘"},
                    {name: "办公收纳"},
                    {name: "鼠标垫"},
                    {name: "创意文具"},
                ]
            },
            {
                name: '餐具',
                children: [
                    {name: "食盒"},
                    {name: "刀叉"},
                    {name: "碗筷"},
                ]
            },
        ]
    },
    {
        name: '工艺品',
        icon: require('@~/img/slices/icon-gy.png'),
        activeIcon: require('@~/img/slices/icon-gy-1.png'),
        children: [
            {
                name: '徽章',
                children: [
                    {name: "金属徽章"},
                    {name: "亚克力徽章"},
                    {name: "树脂徽章"},
                ]
            },
            {
                name: '奖杯',
                children: [
                    {name: "水晶奖杯"},
                    {name: "树脂奖杯"},
                    {name: "金属奖杯"},
                    {name: "创意奖杯"},
                ]
            },
            {
                name: '瓷器',
                children: [
                    {name: "茶具"},
                    {name: "瓷盘"},
                    {name: "摆件"},
                ]
            },
            {
                name: '钥匙扣',
                children: [
                    {name: "金属钥匙扣"},
                    {name: "亚克力钥匙扣"},
                    {name: "PVC钥匙扣"},
                    {name: "毛绒钥匙扣"},
                ]
            },
            {
                name: '冰箱贴',
                children: [
                    {name: "金属冰箱贴"},
                    {name: "亚克力冰箱贴"},
                    {name: "pvc冰箱贴"},
                    {name: "树脂冰箱贴"},
                ]
            },
            {
                name: '公仔',
                children: [
                    {name: "软胶公仔"},
                    {name: "树脂公仔"},
                    {name: "搪胶公仔"},
                    {name: "注塑公仔"},
                ]
            },
            {
                name: '汽车用品',
                children: [
                    {name: "脚垫"},
                    {name: "车用香包"},
                    {name: "车载香氛"},
                    {name: "车载手机支架"},
                ]
            },
            {
                name: '创意摆件',
                children: [
                    {name: "积木"},
                    {name: "拼图"},
                    {name: "相框"},
                    {name: "香薰"},
                    {name: "地球仪"},
                ]
            },
        ]
    },
    {
        name: '印刷品',
        icon: require('@~/img/slices/icon-ys.png'),
        activeIcon: require('@~/img/slices/icon-ys-1.png'),
        children: [
            {
                name: '纸制印刷品',
                children: [
                    {name: "手提袋"},
                    {name: "宣传册"},
                    {name: "折页"},
                    {name: "名片"},
                    {name: "明信片"},
                    {name: "台历"},
                    {name: "贴纸"},
                    {name: "扇子"},
                    {name: "扑克牌"},
                    {name: "卡券"},
                ]
            },
            {
                name: '其他印刷品',
                children: [
                    {name: "易拉宝"},
                    {name: "展架"},
                    {name: "条幅"},
                    {name: "挂画"},
                    {name: "海报"},
                ]
            },
        ]
    },
    {
        name: '创意数码',
        icon: require('@~/img/slices/icon-cy.png'),
        activeIcon: require('@~/img/slices/icon-cy-1.png'),
        children: [
            {
                name: '影音娱乐',
                children: [
                    {name: "音箱"},
                    {name: "投影仪"},
                    {name: "耳机"},
                ]
            },
            {
                name: '数码配件',
                children: [
                    {name: "键盘"},
                    {name: "鼠标"},
                    {name: "充电宝"},
                    {name: "数据线"},
                ]
            },
            {
                name: '创意小家电',
                children: [
                    {name: "破壁机"},
                    {name: "桌面加湿器"},
                    {name: "蒸汽熨斗"},
                    {name: "榨汁机"},
                    {name: "其他单品"},
                ]
            },
        ]
    },
    {
        name: '防疫产品',
        icon: require('@~/img/slices/icon-fy.png'),
        activeIcon: require('@~/img/slices/icon-fy-1.png'),
        children: [
            {
                name: '口罩',
                children: [
                    {name: "一次性医用"},
                    {name: "普通外科口罩"},
                    {name: "3M口罩"},
                ]
            },
            {
                name: '消毒工具',
                children: [
                    {name: "喷枪"},
                    {name: "洗手液机"},
                    {name: "湿纸巾"},
                ]
            },
            {
                name: '防疫包',
                children: [
                    {name: "防疫包"},
                ]
            },
        ]
    },
    {
        name: '运动户外',
        icon: require('@~/img/slices/icon-hw.png'),
        activeIcon: require('@~/img/slices/icon-hw-1.png'),
        children: [
            {
                name: '户外出行',
                children: [
                    {name: "帐篷"},
                    {name: "野餐垫"},
                    {name: "收纳箱"},
                    {name: "野餐篮"},
                ]
            },
            {
                name: '运动周边',
                children: [
                    {name: "跳绳"},
                    {name: "杠铃"},
                    {name: "弹力带"},
                    {name: "护具"},
                ]
            },
        ]
    },
    {
        name: '礼盒类',
        icon: require('@~/img/slices/icon-lh.png'),
        activeIcon: require('@~/img/slices/icon-lh-1.png'),
        children: [
            {
                name: '节日礼盒',
                children: [
                    {name: "新年礼盒"},
                    {name: "中秋礼盒"},
                    {name: "端午礼盒"},
                    {name: "重阳礼盒"},
                    {name: "儿童节"},
                    {name: "妇女节"},
                    {name: "圣诞节"},
                    {name: "教师节"},
                    {name: "程序员节"},
                ]
            },
            {
                name: '公司福利',
                children: [
                    {name: "周年礼盒"},
                    {name: "生日礼盒"},
                    {name: "入职礼盒"},
                    {name: "新婚礼盒"},
                    {name: "亲子礼盒"},
                    {name: "颁奖礼盒"},
                    {name: "关怀礼盒"},
                ]
            },
            {
                name: '商务礼赠',
                children: [
                    {name: "日常拜访"},
                    {name: "高端拜访"},
                ]
            },
        ]
    },
]