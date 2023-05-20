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
    import { computed, defineComponent } from 'vue'
    import { useBreadCumTail } from '../../../store';
    export default defineComponent({
        setup() {
            const route = useRoute()
            const currentRouteName = computed(() => route.name)
            const brCum = useBreadCumTail()
            //Update the breadcum woth router
            brCum.updateSelectedTask(currentRouteName.value)
            return {
                dataSource: [
                    {
                        ip: "abc",
                        name: "6000",
                    },
                    {
                        ip: "abcx",
                        name: "8070",
                    },
                ],

                columns: [
                    {
                        title: 'IP',
                        dataIndex: 'ip',
                        key: 'ip',
                    },
                    {
                        title: 'Name',
                        dataIndex: 'name',
                        key: 'name',
                    },
                ],
            }
        },
    })
</script>

<style scoped>
@import '../../../assets/ant-module.css';
</style>