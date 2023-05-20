<template>
<a-list item-layout="horizontal" :data-source="data" :pagination="{
                    pageSizeOptions: ['10', '15', '20'],
                    defaultPageSize: 10,
                    showSizeChanger: true, 
                }">
    <template #renderItem="{item}">
        <a-list-item>
            <a-list-item-meta>
                <template #title>
                    <img :src="`https://apackets.com/api/v1/pcaps/public/download/${item}`" alt="miss">
                </template>
            </a-list-item-meta>
        </a-list-item>
    </template>
</a-list>
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
    useBreadCumTail,
    usePcapSelected
} from '../../../store';
export default defineComponent({
    setup() {
        const route = useRoute()
        const currentRouteName = computed(() => route.name)
        const brCum = useBreadCumTail()
        const selectedItem = usePcapSelected()
        const data = selectedItem.getItemSelected.result.Images;
        console.log(data)
        brCum.updateSelectedTask(currentRouteName.value)
        return {
            data
        }
    },
})
</script>
