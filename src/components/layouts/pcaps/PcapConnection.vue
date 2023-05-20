<template>
    <div class="map_wrapper">
        <div> 
            <h3>Download Sources</h3>
            <MapData />
        </div>
        <div>
            <h3>Upload Destinations</h3>
            <MapData />
        </div>
        <div>
            <h3>World to World Connections</h3>
            <MapData />
        </div>
    </div>
    <div>
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
    import { useRoute } from 'vue-router'
    import { computed, defineComponent } from 'vue'
    import { useBreadCumTail } from '../../../store';
    import MapData from '../../icons/pcap-dns/MapData.vue';
    export default defineComponent({
        components: {
            MapData
        },
        setup() {
            const route = useRoute()
            const currentRouteName = computed(() => route.name)
            const brCum = useBreadCumTail()
            //Update the breadcum woth router
            brCum.updateSelectedTask(currentRouteName.value)
            return {
                dataSource: [
                        {
                            from: "abc.asd.asdasd.asd.123",
                            to: "Google.com",
                            bytes: "2 Mb",
                        },
                        {
                            from: "abc.asd.asdasd.asd.123",
                            to: "Google.com",
                            bytes: "4 Mb",
                        },
                        {
                            from: "abc.asd.asdasd.asd.123",
                            to: "Google.com",
                            bytes: "5 Mb",
                        },
                        {
                            from: "abc.asd.asdasd.asd.123",
                            to: "Google.com",
                            bytes: "7 Mb",
                        },
                        {
                            from: "abc.asd.asdasd.asd.123",
                            to: "Google.com",
                            bytes: "8 Mb",
                        },
                    ],

                columns: [
                    {
                        title: 'From IP or DNS',
                        dataIndex: 'from',
                        key: 'from',
                    },
                    {
                        title: 'To IP or DNS',
                        dataIndex: 'to',
                        key: 'to',
                    },
                    {
                        title: 'Bytes',
                        dataIndex: 'bytes',
                        key: 'bytes',
                    },
                ],
            }
        },
    })
</script>

<style scoped>
.map_wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.map_wrapper div {
    display: flex;
    flex-direction: column;
}

.map_wrapper h3 {
    align-self: center;
    font-weight: 800;
    font-size: 18px;
    color: aliceblue;
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