<template>
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
            bordered
        />
    </div>
</template>
<script>
    // import credList from '../../../datas/cred_data';
    import { useRoute } from 'vue-router'
    import { computed, defineComponent } from 'vue'
    import { useBreadCumTail, usePcapSelected } from '../../../store';
    export default defineComponent({
        setup() {
            const route = useRoute()
            const currentRouteName = computed(() => route.name)
            const selectedItem = usePcapSelected()
            const brCum = useBreadCumTail()
            //Update the breadcum woth router
            brCum.updateSelectedTask(currentRouteName.value)
            return {
                dataSource: selectedItem.getItemSelected.result.Creds,

                columns: [
                {
                    title: 'From',
                    dataIndex: 'From',
                    key: 'from',
                },
                {
                    title: 'To',
                    dataIndex: 'To',
                    key: 'to',
                },
                {
                    title: 'Type',
                    dataIndex: 'Type',
                    key: 'type',
                },
                {
                    title: 'Login',
                    dataIndex: 'Login',
                    key: 'login',
                },
                {
                    title: 'Password',
                    dataIndex: 'Password',
                    key: 'password',
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