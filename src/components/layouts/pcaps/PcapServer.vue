<template>
<div class="server_wrapper">
    <div class="server_container">
        <div>DNS</div>
        <div>
            <a-empty />
        </div>
    </div>
    <div class="server_container">
        <div>DHCP</div>
        <div>
            <a-empty />
        </div>
    </div>
    <div class="server_container">
        <div>LDAP</div>
        <div>
            <a-empty />
        </div>
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
        return {}
    },
})
</script>

<style scoped>
.server_wrapper {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
.server_container {
    display: flex;
    flex-direction: column;
    /* min-width: 300px;
    min-height: 200px; */
    background-color: #32373A;
    margin: 15px;
    flex-basis: 0;
    flex-grow: 1;
}

.server_container>div:first-child {
    text-align: center;
    font-size: 16px;
    font-weight: 700;
    border-bottom: 1px solid rgba(255, 255, 255, 0.308);
    line-height: 30px;
}

.server_container>div:last-child {
    padding: 10px;
}
</style>
