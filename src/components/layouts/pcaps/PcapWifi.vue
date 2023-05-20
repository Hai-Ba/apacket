<template>
<div class="wf_top">
    <div class="wifi_chart">
        <a-empty />
    </div>
    <div class="wifi_chart">
        <a-empty />
    </div>
</div>
<div v-if="false" class="wifi_chart">
    <CanvasJSChart :options="optionsProtocol" class="wifi_chart_item" />
</div>
<div class="wifi_tab">
    <a-tabs v-model:activeKey="activeKey">
        <a-tab-pane key="1" tab="WPA Handshakes (1)">
            <!-- <a-table class="ant-table-striped" :columns="columns" :dataSource="dataSource" :pagination="{
                    pageSizeOptions: ['5', '10', '15', '20'],
                    defaultPageSize: 5,
                    showSizeChanger: true, 
                }" bordered /> -->
            <div style="background-color: #32373A;">
                <a-empty />
            </div>
        </a-tab-pane>
        <a-tab-pane key="2" tab="Access Points (0)" force-render>
            <div style="background-color: #32373A;">
                <a-empty />
            </div>
        </a-tab-pane>
        <a-tab-pane key="3" tab="Broadcast (0)" force-render>
            <div style="background-color: #32373A;">
                <a-empty />
            </div>
        </a-tab-pane>
        <a-tab-pane key="4" tab="Client To Client (0)" force-render>
            <div style="background-color: #32373A;">
                <a-empty />
            </div>
        </a-tab-pane>
        <a-tab-pane key="5" tab="Problem Requests (0)" force-render>
            <div style="background-color: #32373A;">
                <a-empty />
            </div>
        </a-tab-pane>
    </a-tabs>
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
            checkedDns: true,
            checkedMdns: false,
            checkedNbns: true,
            checkedError: false,
        });
        //Update the breadcum woth router
        brCum.updateSelectedTask(currentRouteName.value)
        return {
            ...toRefs(switchState),
            chart: null,
            activeKey: ref('1'),
            optionsProtocol: {
                exportEnabled: true,
                animationEnabled: true,
                theme: "dark2",
                width: 500,
                height: 240,
                title: {
                    text: "DNS Protocols"
                },
                data: [{
                    type: "doughnut",
                    innerRadius: "50%",
                    showInLegend: true,
                    legendText: "{name}: {y}",
                    yValueFormatString: "#,###'%'",
                    dataPoints: [{
                            name: "DNS",
                            y: 27,
                            color: "#cbf3f5"
                        },
                        {
                            name: "NDNS",
                            y: 55,
                            color: "#25ced9"
                        },
                        {
                            name: "NBNS",
                            y: 18,
                            color: "#f72564"
                        }
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
.wf_top {
    display: flex;
    flex-wrap: wrap;
}

.wf_top div {
    flex-basis: 0;
    flex-grow: 1;
    margin: 15px;
}

.wifi_chart {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    justify-content: space-around;
}

.wifi_chart_item {
    height: 240px !important;
    width: 500px !important;
    /* padding: 20px; */
}

.wifi_tab :deep(.ant-tabs-tab-btn) {
    color: #fff;
    font-weight: 800;
    border-left: 4px solid #1890FF;
    padding-left: 4px;
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
