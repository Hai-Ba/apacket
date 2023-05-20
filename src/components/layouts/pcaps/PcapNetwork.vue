<template>
<div class="tool_bar">
    <div>
        <span>DNS</span>
        <a-switch v-model:checked="checkedDNS" checked-children="4" un-checked-children="4" />
    </div>
    <div>
        <span>HTTP</span>
        <a-switch v-model:checked="checkedHTTP" checked-children="4" un-checked-children="4" />
    </div>
    <div>
        <span>HTTPS</span>
        <a-switch v-model:checked="checkedHTTPS" checked-children="4" un-checked-children="4" />
    </div>
    <div>
        <span>SSH</span>
        <a-switch v-model:checked="checkedSSH" checked-children="4" un-checked-children="4" />
    </div>
    <div>
        <span>FTP</span>
        <a-switch v-model:checked="checkedFTP" checked-children="4" un-checked-children="4" />
    </div>
    <div>
        <span>Telnet</span>
        <a-switch v-model:checked="checkedTelnet" checked-children="4" un-checked-children="4" />
    </div>
    <div>
        <span>RDP</span>
        <a-switch v-model:checked="checkedRDP" checked-children="4" un-checked-children="4" />
    </div>
    <div>
        <span>SMB</span>
        <a-switch v-model:checked="checkedSMB" checked-children="4" un-checked-children="4" />
    </div>
    <div>
        <span>TCP</span>
        <a-switch v-model:checked="checkedTCP" checked-children="4" un-checked-children="4" />
    </div>
    <div>
        <span>UDP</span>
        <a-switch v-model:checked="checkedUDP" checked-children="4" un-checked-children="4" />
    </div>
    <div>
        <span>Other</span>
        <a-switch v-model:checked="checkedOther" checked-children="4" un-checked-children="4" />
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
<div class="tool_bar_down">
    <div class="tool_bar">
        <div>
            <span>Hide Orphaned</span>
            <a-switch v-model:checked="checkedOrphaned" checked-children="4" un-checked-children="4" />
        </div>
        <div>
            <span>Resolve DNS</span>
            <a-switch v-model:checked="checkedResolve" checked-children="4" un-checked-children="4" />
        </div>
        <div>
            <span>Display IPv6</span>
            <a-switch v-model:checked="checkedIpv6" checked-children="4" un-checked-children="4" />
        </div>
        <div>
            <a-button size="small" shape="round">Print</a-button>
        </div>
    </div>
    <div class="graph_legend">
        <div>
            External
        </div>
        <div>
            LAN
        </div>
        <div>
            Server
        </div>
        <div>
            Broadcast
        </div>
    </div>
</div>
<div class="network_graph">
    <a-empty/>
</div>
</template>

<script>
import {
    useRoute
} from 'vue-router'
import {
    computed,
    defineComponent,
    toRefs,
    reactive,
    ref
} from 'vue'
import {
    useBreadCumTail
} from '../../../store';
export default defineComponent({
    setup() {
        const route = useRoute()
        const currentRouteName = computed(() => route.name)
        const brCum = useBreadCumTail()
        const switchState = reactive({
            checkedDNS: true,
            checkedHTTP: false,
            checkedHTTPS: true,
            checkedSSH: false,
            checkedFTP: true,
            checkedTelnet: false,
            checkedRDP: true,
            checkedSMB: false,
            checkedTCP: false,
            checkedUDP: false,
            checkedOther: false,
            checkedOrphaned: true,
            checkedResolve: true,
            checkedIpv6: true,
        });
        //Input
        const value = ref('');
        const onSearch = searchValue => { //event seraching
            console.log('use value', searchValue);
        };
        //Update the breadcum woth router
        brCum.updateSelectedTask(currentRouteName.value)
        return {
            ...toRefs(switchState),
            value,
            onSearch,
        }
    },
})
</script>

<style scoped>
.network_graph {
    padding-top: 15rem;
}
.tool_bar_down {
    display: flex;
    flex-wrap: wrap;
    min-height: 37px;
    background-color: #32373A;
    justify-content: space-between;
    padding-right: 25px;
    align-items: center;
    border-radius: 4px;
    margin-top: 10px;
}
.graph_legend {
    display: flex;
    gap: 15px;
    background-color: #FFFFFF;
    color: #000;
    border-radius: 45px;
    padding: 0 10px;
}
.tool_bar {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    padding: 8px 20px 5px 20px;
    border-radius: 4px;
    min-height: 20px;
    background-color: #32373A;
    /* margin-bottom: 10px; */
}

.tool_bar div span:first-child {
    margin-right: 3px;
}

.content_box {
    min-height: 30px;
}

.content_box :deep(.ant-collapse-borderless) {
    background-color: transparent;
}

.content_box :deep(.ant-collapse-header) {
    color: #fff;
}
</style>
