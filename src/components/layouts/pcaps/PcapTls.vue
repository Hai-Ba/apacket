<template>
<div class="tls_wrapper">
    <a-empty />
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
        return {}
    },
})
</script>

    
<style scoped>
.tls_wrapper {
    display: flex;
    min-height: 200px;
    width: 100%;
    background-color: #32373A;
    justify-content: center;
    padding: 20px;
}
</style>
