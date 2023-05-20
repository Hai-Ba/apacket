<template>
<div class="dns_chart">
    <CanvasJSChart :options="optionsProtocol" class="dns_chart_item" />
    <CanvasJSChart :options="optionsError" class="dns_chart_item" />
</div>
<div class="dns_map">
    <h3 style="align-self: center; font-weight: 700;">DNS Servers</h3>
    <MapData />
</div>
<div class="dns_tool_bar">
    <div>
        <span>DNS</span>
        <a-switch v-model:checked="checkedDns" checked-children="4" un-checked-children="4" />
    </div>
    <div>
        <span>mDNS</span>
        <a-switch v-model:checked="checkedMdns" checked-children="4" un-checked-children="4" />
    </div>
    <div>
        <span>NBNS</span>
        <a-switch v-model:checked="checkedNbns" checked-children="4" un-checked-children="4" />
    </div>
    <div>
        <span>Error</span>
        <a-switch v-model:checked="checkedError" checked-children="4" un-checked-children="4" />
    </div>
    <div>
        <a-input-search
            v-model:value="value"
            placeholder="input search text"
            enter-button
            @search="onSearch"
            size="small"/>
    </div>
</div>
<div class="dns_table">
    <a-table 
        class="ant-table-striped"
        :columns="columns" 
        :dataSource="dataSource" 
        :pagination="{
            pageSizeOptions: ['5', '10', '15', '20'],
            defaultPageSize: 5,
            showSizeChanger: true, 
        }"
        bordered/>
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
import MapData from '../../icons/pcap-dns/MapData.vue'
export default defineComponent({
    components: {
        CanvasJSChart,
        MapData
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
        //Input
        const value = ref('');
        const onSearch = searchValue => {//event seraching
            console.log('use value', searchValue);
        };
        //Update the breadcum woth router
        brCum.updateSelectedTask(currentRouteName.value)
        return {
            ...toRefs(switchState),
            chart: null,
            value,
            onSearch,
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
            optionsError: {
                exportEnabled: true,
                animationEnabled: true,
                theme: "dark2",
                width: 500,
                height: 240,
                title: {
                    text: "DNS Errors"
                },
                data: [{
                    type: "doughnut",
                    innerRadius: "50%",
                    showInLegend: true,
                    legendText: "{name}: {y}",
                    yValueFormatString: "#,###'%'",
                    dataPoints: [{
                            name: "No Error",
                            y: 27,
                            color: "#cbf3f5"
                        },
                        {
                            name: "Non-Existent Domain",
                            y: 55,
                            color: "#25ced9"
                        },
                    ]
                }]
            },
            dataSource: [
                {
                    ip: "abc",
                    dns: "ccc",
                    name: "asd"
                }
            ],

            columns: [
                {
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
    gap: 5px;
    justify-content: space-around;
}

.dns_chart_item {
    height: 240px !important;
    width: 500px !important;
    /* padding: 20px; */
}

.dns_map {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
}
.dns_map h3 {
    font-weight: 800px;
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
    margin-bottom: 10px;
}

.dns_tool_bar div span:first-child {
    padding-right: 3px;
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

.ant-table-striped :deep(tr):hover td{
    background-color: rgba(0, 0, 0, 0.966);
    color: red;
}
</style>
