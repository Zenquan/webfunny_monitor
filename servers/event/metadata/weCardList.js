//为每个项目创建一个心跳次数卡片
module.exports = [
    {
        "pageId":279,
        "name":"心跳次数",
        "type":6,
        "calcRule":"[{\"calcName\":\"数量\",\"unit\":\"次\",\"prePoint\":{\"calcField\":{\"fieldName\":\"weCustomerKey\",\"isRepeat\":\"0\"},\"pointId\":79,\"queryCriteria\":[]},\"calcNameKey\":\"shuliang20230427191801\"}]",
        "sort":1,
        "conversionCycle":1,
        "groupByFlag":0,
        "chartTableShow":"chart",
        "togetherList":"total,average,yoyRatio,ringRatio",
        "refreshFrequency":30,
        "createBy":"webfunny",
        "updateBy":null
    },
    {
        "pageId":279,
        "name":"地域分布",
        "type":7,
        "sort":2,
        "calcRule":"[{\"calcName\":\"数据1\",\"prePoint\":{\"calcField\":{\"fieldName\":\"weProvince\",\"isRepeat\":\"4\"},\"pointId\":37,\"queryCriteria\":[]},\"calcNameKey\":\"shuju120230522001345\"}]",
        "conversionCycle":1,
        "groupByFlag":1,
        "chartTableShow":"chart",
        "togetherList":"",
        "refreshFrequency":0,
        "alarmStatus":0,
        "createBy":"webfunny",
        "updateBy":null
    },
    {
        "pageId":279,
        "name":"pv/uv统计",
        "type":4,
        "sort":3,
        "calcRule":"[{\"calcName\":\"PV量\",\"unit\":\"次\",\"prePoint\":{\"calcField\":{\"fieldName\":\"pageUrl\",\"isRepeat\":\"4\"},\"pointId\":126,\"queryCriteria\":[]},\"calcNameKey\":\"pvliang20230429211601\"}]",
        "conversionCycle":1,
        "groupByFlag":1,
        "chartTableShow":"chart",
        "togetherList":"total,average,yoyRatio,ringRatio",
        "refreshFrequency":0,
        "createBy":"webfunny",
        "updateBy":null
    },
    {
        "pageId":279,
        "name":"页面访问量",
        "type":4,
        "sort":4,
        "calcRule":"[{\"calcName\":\"人数\",\"unit\":\"人\",\"prePoint\":{\"calcField\":{\"fieldName\":\"pageUrl\",\"isRepeat\":\"5\"},\"pointId\":126,\"queryCriteria\":[]},\"calcNameKey\":\"renshu20230530215147\"}]",
        "conversionCycle":1,
        "groupByFlag":1,
        "chartTableShow":"chart-pie",
        "togetherList":"total,average,yoyRatio,ringRatio",
        "refreshFrequency":0,
        "createBy":"webfunny",
        "updateBy":null
    },
    {
        "pageId":279,
        "name":"用户平均停留时长",
        "type":1,
        "sort":5,
        "calcRule":"[{\"calcName\":\"时长\",\"unit\":\"s\",\"prePoint\":{\"calcField\":{\"fieldName\":\"stayTime\",\"isRepeat\":\"2\"},\"pointId\":64,\"queryCriteria\":[]},\"calcNameKey\":\"shichang20230530215150\",\"endPoint\":{\"calcField\":{\"fieldName\":\"weCustomerKey\",\"isRepeat\":\"1\"},\"pointId\":64,\"queryCriteria\":[]},\"calcType\":\"/\"}]",
        "conversionCycle":1,
        "groupByFlag":0,
        "chartTableShow":"chart",
        "togetherList":"total,average,yoyRatio,ringRatio",
        "refreshFrequency":0,
        "createBy":"webfunny",
        "updateBy":null
    },
]