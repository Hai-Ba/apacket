<template>
<div class="dns_chart">
    <CanvasJSChart :options="optionsMethod" class="dns_chart_item" />
    <CanvasJSChart :options="optionsResponse" class="dns_chart_item" />
    <CanvasJSChart :options="optionsAll" class="dns_chart_item" />
</div>
<div class="tool_bar">
    <div>
        <span>GET</span>
        <a-switch v-model:checked="checkedGet" checked-children="4" un-checked-children="4" />
    </div>
    <div>
        <span>POST</span>
        <a-switch v-model:checked="checkedPost" checked-children="4" un-checked-children="4" />
    </div>
    <div>
        <span>HEAD</span>
        <a-switch v-model:checked="checkedHead" checked-children="4" un-checked-children="4" />
    </div>
    <div>
        <span>OPTIONS</span>
        <a-switch v-model:checked="checkedOptions" checked-children="4" un-checked-children="4" />
    </div>
    <div>
        <span>PUT</span>
        <a-switch v-model:checked="checkedPut" checked-children="4" un-checked-children="4" />
    </div>
    <div>
        <span>PATCH</span>
        <a-switch v-model:checked="checkedPatch" checked-children="4" un-checked-children="4" />
    </div>
    <div>
        <span>DELETE</span>
        <a-switch v-model:checked="checkedDelete" checked-children="4" un-checked-children="4" />
    </div>
    <div>
        <span>CONNECT</span>
        <a-switch v-model:checked="checkedConnect" checked-children="4" un-checked-children="4" />
    </div>
    <div>
        <a-input-search v-model:value="value" placeholder="input search text" enter-button @search="onSearch" width=175 size="small" />
    </div>
    <div>
        <a-button size="small" shape="round">Enable All</a-button>
    </div>
    <div>
        <a-button size="small" shape="round">Disable All</a-button>
    </div>
</div>
<div class="content_box">
    <a-collapse v-model:activeKey="activeKey" :bordered="false">
        <a-collapse-panel v-for="item in httpHeader" :key="item.header" :header="item.header" :style="customStyle">
            <code style="color: #fff;">
                <h3 style="color: #fff; font-weight: 700;">{{ item.header }}</h3>
                <p v-for="key in Object.keys(item).slice(1, Object.keys(item).length)" :key="key">
                    <span style="color: aqua;">{{ key }}:</span> {{ item[key] }}
                </p>
            </code>
        </a-collapse-panel>
    </a-collapse>
</div>
<div class="pagination">
    <a-pagination v-model:current="current" :total="pageTotal" :showSizeChanger="true" :pageSizeOptions="['5', '10', '15']" />
</div>
</template>

    
<script>
import {
    useRoute
} from 'vue-router'
import {
    computed,
    defineComponent,
    reactive,
    toRefs,
    ref
} from 'vue'
import {
    useBreadCumTail
} from '../../../store';
import CanvasJSChart from '../../../assets/canvas/CanvasJSVueComponent.vue'
export default defineComponent({
    components: {
        CanvasJSChart,
    },
    setup() {
        const route = useRoute()
        const currentRouteName = computed(() => route.name)
        const brCum = useBreadCumTail()
        const switchState = reactive({
            checkedGet: true,
            checkedPost: false,
            checkedHead: true,
            checkedOptions: false,
            checkedPut: true,
            checkedPatch: false,
            checkedDelete: true,
            checkedConnect: false,
        });
        //Input
        const value = ref('');
        const onSearch = searchValue => { //event seraching
            console.log('use value', searchValue);
        };
        const httpHeader = [{
                "header": "GET /wp-content/plugins/contact-form-7/includes/js/scripts.js?ver=3.7.2 HTTP/1.1",
                "Host": " www.ciniholland.nl",
                "Accept": "*/*",
                "Connection": "Keep-Alive"
            },
            {
                "header": "POST /wp-content/plugins/contact-form-7/includes/js/scripts.js?ver=3.7.2 HTTP/1.1",
                "Host": " www.ciniholland.nl",
                "Accept": "*/*",
                "Connection": "Keep-Alive",
                "Referer": "//www.bing.com/search?q=ciniholland.nl&qs=ds&form=QBLH"
            },
            {
                "header": "PUT /wp-content/plugins/contact-form-7/includes/js/scripts.js?ver=3.7.2 HTTP/1.1",
                "Host": " www.ciniholland.nl",
                "Connection": "Keep-Alive"
            },
            {
                "header": "DELETE /wp-content/plugins/contact-form-7/includes/js/scripts.js?ver=3.7.2 HTTP/1.1",
                "Host": " www.ciniholland.nl",
                "Accept": "*/*",
                "Connection": "Keep-Alive",
                "Cookie": "aaaaaa",
                "User-Agent": "bbbbbbbbbbbbbbbb"
            },
        ];
        //Update the breadcum woth router
        brCum.updateSelectedTask(currentRouteName.value)
        return {
            ...toRefs(switchState),
            chart: null,
            value,
            onSearch,
            httpHeader,
            optionsMethod: {
                exportEnabled: true,
                animationEnabled: true,
                theme: "dark2",
                width: 300,
                height: 240,
                title: {
                    text: "HTTP Methods"
                },
                data: [{
                    type: "doughnut",
                    innerRadius: "50%",
                    showInLegend: true,
                    legendText: "{name}: {y}",
                    yValueFormatString: "#,###'%'",
                    dataPoints: [{
                            name: "GET",
                            y: 100,
                            color: "#cbf3f5"
                        },
                    ]
                }]
            },
            optionsResponse: {
                exportEnabled: true,
                animationEnabled: true,
                theme: "dark2",
                width: 300,
                height: 240,
                title: {
                    text: "HTTP Responses"
                },
                data: [{
                    type: "doughnut",
                    innerRadius: "50%",
                    showInLegend: true,
                    legendText: "{name}: {y}",
                    yValueFormatString: "#,###'%'",
                    dataPoints: [{
                            name: "200 OK",
                            y: 27,
                            color: "#cbf3f5"
                        },
                        {
                            name: "302 Found",
                            y: 55,
                            color: "#FF8001"
                        },
                        {
                            name: "404 Not Found",
                            y: 18,
                            color: "#25ced9"
                        },
                    ]
                }]
            },

            optionsAll: {
                exportEnabled: true,
                animationEnabled: true,
                theme: "dark2",
                width: 300,
                height: 240,
                title: {
                    text: ""
                },
                data: [{
                    type: "doughnut",
                    innerRadius: "50%",
                    showInLegend: true,
                    legendText: "{name}: {y}",
                    yValueFormatString: "#,###'%'",
                    dataPoints: [{
                            name: "200 OK",
                            y: 27,
                            color: "#cbf3f5"
                        },
                        {
                            name: "302 Found",
                            y: 55,
                            color: "#FF8001"
                        },
                        {
                            name: "404 Not Found",
                            y: 18,
                            color: "#25ced9"
                        },
                    ]
                }]
            },
            dataSource: [{
                ip: "abc",
                dns: "ccc",
                name: "asd"
            }],

            columns: [{
                    title: 'IP',
                    dataIndex: 'ip',
                    key: 'ip',
                },
                {
                    title: 'DNS Server',
                    dataIndex: 'dns',
                    key: 'dns',
                },
                {
                    title: 'Names',
                    dataIndex: 'name',
                    key: 'name',
                },
            ],
        }
    },
})
</script>

    
<style scoped>
.dns_chart {
    display: flex;
    flex-wrap: wrap;
    padding: 0 120px;
    gap: 5px;
    justify-content: space-around;
    margin-bottom: 30px;
}

.dns_chart_item {
    height: 240px !important;
    width: 300px !important;
    /* padding: 20px; */
}

.dns_tool_bar {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 10px;
    width: 100%;
    padding: 5px 15px 5px 15px;
    background-color: #32373A;
    border-radius: 4px;
    margin-bottom: 20px;
}

.dns_tool_bar div span:first-child {
    padding-right: 3px;
}
.tool_bar {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    padding: 8px 20px 5px 20px;
    border-radius: 4px;
    min-height: 20px;
    background-color: #32373A;
    margin-bottom: 10px;
}

.tool_bar div span:first-child {
    margin-right: 3px;
}

.content_box {
    min-height: 30px;
    margin-bottom: 20px;
}

.content_box :deep(.ant-collapse-borderless) {
    background-color: transparent;
}

.content_box :deep(.ant-collapse-header) {
    color: #fff;
}
.ant-table-striped :deep(td) {
    color: #fff;
    background-color: rgba(0, 0, 0, 0.85);
    font-size: 14px;
    font-weight: 600;
}

.ant-table-striped :deep(th) {
    font-weight: 800;
    font-size: 15px;
    background-color: rgba(0, 0, 0, 0.966);
    color: #fff;
}

.ant-table-striped :deep(tr):hover td {
    background-color: rgba(0, 0, 0, 0.966);
    color: red;
}
</style>
