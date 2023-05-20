<template>
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
</template>
<script>
    import { useRoute } from 'vue-router'
    import { computed, defineComponent, ref } from 'vue'
    import { useBreadCumTail, usePcapSelected } from '../../../store';
    export default defineComponent({
        setup() {
            const route = useRoute()
            const currentRouteName = computed(() => route.name)
            const brCum = useBreadCumTail()
            const portData = usePcapSelected().getItemSelected.result.Ports
            let dataTable = []
            Object.keys(portData).forEach(ele => {
                //create object has field host is key
                let obj = {}
                obj.host = ele
                obj.port = portData[ele].join(" | ")
                dataTable.push(obj)
            });
            //Update the breadcum woth router
            brCum.updateSelectedTask(currentRouteName.value)
            return {
                dataSource: ref(dataTable),

                columns: [
                    {
                        title: 'Host',
                        dataIndex: 'host',
                        key: 'host',
                    },
                    {
                        title: 'Port',
                        dataIndex: 'port',
                        key: 'port',
                    },
                ],
            }
        },
    })
</script>

<style scoped>
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