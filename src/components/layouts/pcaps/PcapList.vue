<script setup></script>
<template>
<div class="list_container">
    <div class="list">
        <a-list class="list_ul" item-layout="horizontal" :data-source="list" :pagination="{
                    pageSizeOptions: ['10', '15', '20'],
                    defaultPageSize: 10,
                    showSizeChanger: true, 
                }">
            <template #renderItem="{item}">
                <a-list-item class="list_li" :class="curSelection == item.metadata.originalName ? 'li_active' : ''">
                    <router-link to="/pcaps/charts" @click="itemSelected.updateSelectedItem(item.metadata.uuid)">
                        {{ item.metadata.originalName }}
                    </router-link>
                    <router-link v-if="item.metadata.stat.Creds>0" @click="itemSelected.updateSelectedItem(item.metadata.uuid)" class="bubble_item" to="/pcaps/creds" style="background-color: brown;">
                        cred: {{ item.metadata.stat.Creds }}
                    </router-link>
                    <router-link v-if="item.metadata.stat.dns>0" @click="itemSelected.updateSelectedItem(item.metadata.uuid)" class="bubble_item" to="/pcaps/dns" style="background-color: blueviolet;">
                        dns: {{ item.metadata.stat.dns }}
                    </router-link>
                    <router-link v-if="item.metadata.stat.arp>0" @click="itemSelected.updateSelectedItem(item.metadata.uuid)" class="bubble_item" to="/pcaps/arp" style="background-color: red;">
                        arp: {{ item.metadata.stat.ARP }}
                    </router-link>
                    <router-link v-if="item.metadata.stat.Ftp>0" @click="itemSelected.updateSelectedItem(item.metadata.uuid)" class="bubble_item" to="/pcaps/ftp" style="background-color: pink;">
                        ftp: {{ item.metadata.stat.Ftp }}
                    </router-link>
                    <router-link v-if="item.metadata.stat.SIP>0" @click="itemSelected.updateSelectedItem(item.metadata.uuid)" class="bubble_item" to="/pcaps/sip" style="background-color: blueviolet;">
                        sip: {{ item.metadata.stat.SIP }}
                    </router-link>
                    <router-link v-if="item.metadata.stat.SMB>0" @click="itemSelected.updateSelectedItem(item.metadata.uuid)" class="bubble_item" to="/pcaps/smb" style="background-color: green;">
                        smb: {{ item.metadata.stat.SMB }}
                    </router-link>
                    <router-link v-if="item.metadata.stat.SSDP>0" @click="itemSelected.updateSelectedItem(item.metadata.uuid)" class="bubble_item" to="/pcaps/ssdp" style="background-color: goldenrod;">
                        ssdp: {{ item.metadata.stat.SSDP }}
                    </router-link>
                    <router-link v-if="item.metadata.stat.TLS>0" @click="itemSelected.updateSelectedItem(item.metadata.uuid)" class="bubble_item" to="/pcaps/tls" style="background-color: orange;">
                        tls: {{ item.metadata.stat.TLS }}
                    </router-link>
                    <router-link v-if="item.metadata.stat.Telnet>0" @click="itemSelected.updateSelectedItem(item.metadata.uuid)" class="bubble_item" to="/pcaps/tel" style="background-color: olivedrab;">
                        tel: {{ item.metadata.stat.Telnet }}
                    </router-link>
                    <router-link v-if="item.metadata.stat.Wifi>0" @click="itemSelected.updateSelectedItem(item.metadata.uuid)" class="bubble_item" to="/pcaps/wifi" style="background-color: gray;">
                        wifi: {{ item.metadata.stat.Wifi }}
                    </router-link>
                    <router-link v-if="item.metadata.stat.dhcp_server>0" @click="itemSelected.updateSelectedItem(item.metadata.uuid)" class="bubble_item" to="/pcaps/servers" style="background-color: royalblue;">
                        dhcp: {{ item.metadata.stat.dhcp_server }}
                    </router-link>
                    <router-link v-if="item.metadata.stat.http>0" @click="itemSelected.updateSelectedItem(item.metadata.uuid)" class="bubble_item" to="/pcaps/flows" style="background-color: plum;">
                        http: {{ item.metadata.stat.http }}
                    </router-link>
                    <!-- <router-link v-if="item.metadata.stat.dns>0" @click="itemSelected.updateSelectedItem(item)" class="bubble_item" to="/pcaps/dns" style="background-color: peru;">
                        dns: {{ item.metadata.stat.dns }}
                    </router-link>
                    <router-link v-if="item.metadata.stat.dns>0" @click="itemSelected.updateSelectedItem(item)" class="bubble_item" to="/pcaps/dns" style="background-color: yellowgreen;">
                        dns: {{ item.metadata.stat.dns }}
                    </router-link>
                    <router-link v-if="item.metadata.stat.dns>0" @click="itemSelected.updateSelectedItem(item)" class="bubble_item" to="/pcaps/dns" style="background-color: burlywood;">
                        dns: {{ item.metadata.stat.dns }}
                    </router-link>
                    <router-link v-if="item.metadata.stat.dns>0" @click="itemSelected.updateSelectedItem(item)" class="bubble_item" to="/pcaps/dns" style="background-color: rgb(126, 4, 4);">
                        dns: {{ item.metadata.stat.dns }}
                    </router-link>
                    <router-link v-if="item.metadata.stat.dns>0" @click="itemSelected.updateSelectedItem(item)" class="bubble_item" to="/pcaps/dns" style="background-color: rgb(72, 3, 138);">
                        dns: {{ item.metadata.stat.dns }}
                    </router-link> -->
                </a-list-item>
            </template>
        </a-list>
    </div>
</div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import {usePcapSelected} from '../../../store';
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { 
    useBreadCumTail,
    usePcapList 
    } from '../../../store';
export default defineComponent({
  setup() {
    const itemSelected = usePcapSelected()
    const route = useRoute()
    const currentRouteName = computed(() => route.name)
    //Update the breadcum woth router
    const brCum = useBreadCumTail()
    const pcapList = usePcapList();
    // console.log(pcapList.getListData[0])
    brCum.updateSelectedTask("")
    //Update breadcum with first value
    if(JSON.stringify(itemSelected.getItemSelected) === "{}") itemSelected.updateSelectedItem(pcapList.getListData[0]); 
    return {
      curSelection: ref(itemSelected.getItemSelected.metadata.originalName),
      list: ref(pcapList.getListData),
      isActive: ref(true),
      itemSelected,
      currentRouteName,
    };
  },
});
</script>

<style scoped>
.list_container {
    height: 100%;
    width: 100%;
}

.list {
    /* background-color: cadetblue; */
    min-height: 300px;
    width: 100%;
}

.list .list_ul .list_li {
    display: flex;
    justify-content: flex-start;
    margin-bottom: 10px;
    height: 40px;
    border-left: 7px solid red;
    border-radius: 4px;
}

.list .list_ul .list_li a {
    display: flex;
    /* height: 40px; */
    width: fit-content;
    align-items: center;
    color: white;
}

.list .list_ul .list_li a:first-child {
    padding-left: 10px;
    border-radius: 4px;
    margin-right: 15px;
}

/* 
.list :deep(list_li) {
    justify-content: flex-start;
} */

.list .list_ul .list_li:hover {
    background: linear-gradient(180deg, #818181 5%, #dddbdb);
    border-radius: 4px;
}

.list .list_ul .list_li:hover a {
    color: black !important;
}

.bubble_item {
    display: flex;
    height: 20px;
    min-width: 50px;
    /* background-color: brown; */
    font-weight: 600;
    font-size: 13px;
    border-radius: 8px;
    padding: 5px;
    margin: 2px 5px 3px 5px;
    color: white;
}

.bubble_item:hover {
    position: relative;
    top: 2px;
}

.li_active {
    background: linear-gradient(180deg, #818181 5%, #dddbdb);
    border-radius: 4px;
}
</style>
