<template>
<div v-if="false" class="empty_wrapper">
    <a-empty />
</div>
<div class="e_container">
    <div class="e_graph">
        <div>
            <div class="empty_wrapper">
                <a-empty />
            </div>
        </div>
        <div>
            <div class="empty_wrapper">
                <a-empty />
            </div>
        </div>
    </div>
    <div class="e_table">
        <a-table class="ant-table-striped" :columns="columns" :dataSource="dataSource" :pagination="{
            pageSizeOptions: ['5', '10', '15', '20'],
            defaultPageSize: 5,
            showSizeChanger: true, 
        }" bordered />
    </div>
</div>
</template>

<script>
import {
    useRoute
} from 'vue-router'
import {
    computed,
    defineComponent,
} from 'vue'
import {
    useBreadCumTail
} from '../../../store';
export default defineComponent({
    setup() {
        const route = useRoute()
        const currentRouteName = computed(() => route.name)
        const brCum = useBreadCumTail()
        //Update the breadcum woth router
        brCum.updateSelectedTask(currentRouteName.value)
        return {
            dataSource: [{
                    ip: "abc",
                    name: "6000",
                },
                {
                    ip: "abcx",
                    name: "8070",
                },
            ],

            columns: [{
                    title: 'IP',
                    dataIndex: 'ip',
                    key: 'ip',
                    filters: [{
                        text: 'a',
                        value: 'a',
                    }, {
                        text: 'b',
                        value: 'b',
                    }],
                },
                {
                    title: 'Name',
                    dataIndex: 'name',
                    key: 'name',
                    filters: [{
                        text: 'a',
                        value: 'a',
                    }, {
                        text: 'b',
                        value: 'b',
                    }],
                },
            ],
        }
    },
})
</script>

<style scoped>
@import '../../../assets/ant-module.css';

.empty_wrapper {
    display: flex;
    min-height: 200px;
    width: 100%;
    background-color: #32373A;
    justify-content: center;
    padding: 20px;
}

.e_graph {
    display: flex;
    justify-content: space-between;
    padding: 15px;
    gap: 30px;
}

.e_graph div {
    flex-grow: 1;
    flex-basis: 0;
    /* height: 100px; */
    /* width: 500px; */
    /* background-color: red; */
}

.e_table {
    height: 400px;
    width: 100%;
}
</style>
