<template>
<div class="pcap">
    <div class="side_bar">
        <input type="checkbox" id="toggle-side-bar" style="display: none;">
        <label title="Minimize/Maximize" class="sidebar_btn pcap_item" for="toggle-side-bar">
            <font-awesome-icon class="pcap_icon" icon="fa-solid fa-arrow-right-arrow-left" /> <span class="item_text">Minimize</span></label>
        <ul>
            <li title="Pcap list">
                <router-link class="pcap_item" to="/pcaps/list">
                    <font-awesome-icon class="pcap_icon" icon="fa-solid fa-list" /> <span class="item_text">Pcaps List</span></router-link>
            </li>
            <li title="Overview">
                <router-link class="pcap_item" to="/pcaps/charts">
                    <font-awesome-icon class="pcap_icon" icon="fa-solid fa-chart-pie" /> <span class="item_text">Overview</span></router-link>
            </li>
            <li title="Credentials">
                <router-link class="pcap_item" to="/pcaps/creds">
                    <font-awesome-icon class="pcap_icon" icon="fa-solid fa-key" /> 
                    <span class="item_text">
                        Credentials
                        <span v-if="itemSelected.getItemSelected.metadata.stat.Creds > 0" class="span_item_number">
                            {{itemSelected.getItemSelected.metadata.stat.Creds }}
                        </span>
                    </span>
                </router-link>
            </li>
            <li title="DNS">
                <router-link class="pcap_item" to="/pcaps/dns">
                    <font-awesome-icon class="pcap_icon" icon="fa-solid fa-database" /> <span class="item_text">
                        DNS
                        <span v-if="itemSelected.getItemSelected.metadata.stat.dns > 0" class="span_item_number">
                            {{itemSelected.getItemSelected.metadata.stat.dns }}
                        </span>
                    </span>
                </router-link>
            </li>
            <li title="HTTP Headers">
                <router-link class="pcap_item" to="/pcaps/http">
                    <font-awesome-icon class="pcap_icon" icon="fa-solid fa-h" /> <span class="item_text">
                        HTTP Headers
                        <span v-if="itemSelected.getItemSelected.metadata.stat.http > 0" class="span_item_number">
                            {{itemSelected.getItemSelected.metadata.stat.http }}
                        </span> 
                    </span>
                </router-link>
            </li>
            <li title="Connections">
                <router-link class="pcap_item" to="/pcaps/ip">
                    <font-awesome-icon class="pcap_icon" icon="fa-solid fa-left-right" /> <span class="item_text">
                        Connections
                        <span v-if="itemSelected.getItemSelected.metadata.stat.ip > 0" class="span_item_number">
                            {{itemSelected.getItemSelected.metadata.stat.ip }}
                        </span>
                    </span>
                </router-link>
            </li>
            <li title="Open Ports">
                <router-link class="pcap_item" to="/pcaps/ports">
                    <font-awesome-icon class="pcap_icon" icon="fa-solid fa-fingerprint" /> <span class="item_text">
                        Open Ports
                        <span v-if="itemSelected.getItemSelected.result.Ports.length > 0" class="span_item_number">
                            {{itemSelected.getItemSelected.result.Ports.length }}
                        </span>
                    </span>
                </router-link>
            </li>
            <li title="SSL/TLS">
                <router-link class="pcap_item" to="/pcaps/tls">
                    <font-awesome-icon class="pcap_icon" icon="fa-solid fa-lock" /> <span class="item_text">
                        SSL/TLS
                        <span v-if="itemSelected.getItemSelected.metadata.stat.TLS > 0" class="span_item_number">
                            {{itemSelected.getItemSelected.metadata.stat.TLS }}
                        </span>
                    </span></router-link>
            </li>
            <li title="Pictures">
                <router-link class="pcap_item" to="/pcaps/images">
                    <font-awesome-icon class="pcap_icon" icon="fa-solid fa-image" /> <span class="item_text">
                        Pictures
                        <span v-if="itemSelected.getItemSelected.metadata.stat.images > 0" class="span_item_number">
                            {{itemSelected.getItemSelected.metadata.stat.images }}
                        </span>
                    </span></router-link>
            </li>
            <li title="HTTP">
                <router-link class="pcap_item" to="/pcaps/flows">
                    <font-awesome-icon class="pcap_icon" icon="fa-solid fa-computer" /> <span class="item_text">
                        HTTP
                        <span v-if="itemSelected.getItemSelected.metadata.stat.http > 0" class="span_item_number">
                            {{itemSelected.getItemSelected.metadata.stat.http }}
                        </span>
                    </span></router-link>
            </li>
            <li title="SMB">
                <router-link class="pcap_item" to="/pcaps/smb">
                    <font-awesome-icon class="pcap_icon" icon="fa-solid fa-folder" /> <span class="item_text">
                        SMB
                        <span v-if="itemSelected.getItemSelected.metadata.stat.SMB > 0" class="span_item_number">
                            {{itemSelected.getItemSelected.metadata.stat.SMB }}
                        </span>
                    </span></router-link>
            </li>
            <li title="Servers">
                <router-link class="pcap_item" to="/pcaps/servers">
                    <font-awesome-icon class="pcap_icon" icon="fa-solid fa-server" /> <span class="item_text">Servers</span></router-link>
            </li>
            <li title="Documents">
                <router-link class="pcap_item" to="/pcaps/docs">
                    <font-awesome-icon class="pcap_icon" icon="fa-solid fa-briefcase" /> <span class="item_text">Documents</span></router-link>
            </li>
            <li title="Network">
                <router-link class="pcap_item" to="/pcaps/graph">
                    <font-awesome-icon class="pcap_icon" icon="fa-solid fa-network-wired" /> <span class="item_text">Network</span></router-link>
            </li>
            <li title="FTP">
                <router-link class="pcap_item" to="/pcaps/ftp">
                    <font-awesome-icon class="pcap_icon" icon="fa-solid fa-download" /> <span class="item_text">
                        FTP
                        <span v-if="itemSelected.getItemSelected.metadata.stat.Ftp > 0" class="span_item_number">
                            {{itemSelected.getItemSelected.metadata.stat.Ftp }}
                        </span>
                    </span></router-link>
            </li>
            <li title="Telnet">
                <router-link class="pcap_item" to="/pcaps/tel">
                    <font-awesome-icon class="pcap_icon" icon="fa-solid fa-terminal" /> <span class="item_text">
                        Telnet
                        <span v-if="itemSelected.getItemSelected.metadata.stat.Telnet > 0" class="span_item_number">
                            {{itemSelected.getItemSelected.metadata.stat.Telnet }}
                        </span>
                    </span></router-link>
            </li>
            <li title="SSDP">
                <router-link class="pcap_item" to="/pcaps/ssdp">
                    <font-awesome-icon class="pcap_icon" icon="fa-solid fa-broadcast-tower" /> <span class="item_text">
                        SSDP
                        <span v-if="itemSelected.getItemSelected.metadata.stat.SSDP > 0" class="span_item_number">
                            {{itemSelected.getItemSelected.metadata.stat.SSDP }}
                        </span>
                    </span></router-link>
            </li>
            <li title="SIP">
                <router-link class="pcap_item" to="/pcaps/sip">
                    <font-awesome-icon class="pcap_icon" icon="fa-solid fa-phone-alt" /> <span class="item_text">
                        SIP
                        <span v-if="itemSelected.getItemSelected.metadata.stat.SIP > 0" class="span_item_number">
                            {{itemSelected.getItemSelected.metadata.stat.SIP }}
                        </span>
                    </span></router-link>
            </li>
            <li title="ARP">
                <router-link class="pcap_item" to="/pcaps/arp">
                    <font-awesome-icon class="pcap_icon" icon="fa-solid fa-random" /> <span class="item_text">
                        ARP
                        <span v-if="itemSelected.getItemSelected.metadata.stat.ARP > 0" class="span_item_number">
                            {{itemSelected.getItemSelected.metadata.stat.ARP }}
                        </span>
                    </span></router-link>
            </li>
            <li title="Ethernet">
                <router-link class="pcap_item" to="/pcaps/ethernet">
                    <font-awesome-icon class="pcap_icon" icon="fa-solid fa-ethernet" /> <span class="item_text">
                        Ethernet
                        <span v-if="itemSelected.getItemSelected.metadata.stat.ARP > 0" class="span_item_number">
                            {{itemSelected.getItemSelected.metadata.stat.ARP }}
                        </span>
                    </span></router-link>
            </li>
            <li title="Wifi">
                <router-link class="pcap_item" to="/pcaps/wifi">
                    <font-awesome-icon class="pcap_icon" icon="fa-solid fa-wifi" /> <span class="item_text">
                        Wifi
                        <span v-if="itemSelected.getItemSelected.metadata.stat.Wifi > 0" class="span_item_number">
                            {{itemSelected.getItemSelected.metadata.stat.Wifi }}
                        </span>
                    </span></router-link>
            </li>
            <li title="Hosts">
                <router-link class="pcap_item" to="/pcaps/host">
                    <font-awesome-icon class="pcap_icon" icon="fa-solid fa-stream" /> <span class="item_text">Hosts</span></router-link>
            </li>
        </ul>
    </div>
    <div class="container">
        <!-- Bread cum change -->
        <div class="bread_cum_container">
            <ul class="bread_cum">
                <li>
                    <router-link to="/pcaps/list">
                        <font-awesome-icon class="pcap_icon" icon="fa-solid fa-list" />
                    </router-link>
                </li>
                <!-- Gia tri se thay doi theo state trong Pinia store -->
                <li>
                    <router-link to="/pcaps/charts" class="bread_cum_item">
                        {{itemSelected.getItemSelected.metadata.originalName }}
                    </router-link>
                </li>
                <li class="bread_cum_item_tail">{{ breadcumTail.getTaskSelected }}</li>
            </ul>
            <div class="bread_cum_btn" v-if="breadcumTail.getTaskSelected != ''">
                <main-button text="CopyLink" class="btn_brc" />
                <main-button text="Download(Kb)" class="btn_brc" />
            </div>
        </div>
        <div class="pcap_content">
            <router-view></router-view>
        </div>
    </div>
</div>
</template>

<script>
import MainButton from '../components/buttons/MainButton.vue';
import {
    usePcapSelected,
    useBreadCumTail,
    usePcapList
} from '../store';

export default {
    components: {
        MainButton,
    },
    async setup() {
        const itemSelected = usePcapSelected();
        const breadcumTail = useBreadCumTail();
        const pcapList = usePcapList();
        let getSelectedUUID;
        //Get list pcap
        await pcapList.updatePcapList();
        //Get first pcap selected item
        getSelectedUUID = pcapList.getListData[0].metadata.uuid;
        await itemSelected.updateSelectedItem(getSelectedUUID);
        // await axios.get('https://apackets.com/api/v1/pcaps/public/info')
        //     .then((res) => {
        //         // console.log(res.data);
        //         pcapList.updatePcapList(res.data.pcaps)
        //         getSelectedUUID = res.data.pcaps[0].metadata.uuid
        //     })
        // await axios.get(`https://apackets.com/api/v1/pcaps/public/data/${getSelectedUUID}`)
        //     .then((res) => {
        //         // console.log(res.data);
        //         itemSelected.updateSelectedItem(res.data);
        //     })
        return {
            itemSelected,
            breadcumTail,
            pcapList
        }
    },
}
</script>

<style scoped>
.pcap {
    display: flex;
    /* min-height: 825px; */
    width: 100vw;
}

.side_bar {
    height: 100%;
    /* position: fixed;
    left: 0;
    top: 0;
    z-index: 4; */
    /* background-color: red; */
    /* width: 200px; */
    /* padding-top: 30px; */
}


.pcap_icon {
    width: 20px;
    margin-right: 5px;
}

.item_text {
    display: flex;
    gap: 5px;
    width: 150px;
    padding-left: 10px;
    /* display: none; */
}
.span_item_number {
    display: flex;
    background-color: white;
    color: black;
    height: 16px;
    padding: 0 2px;
    font-size: 12px;
    justify-content: center;
    border-radius: 5px;
}

.pcap_item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 45px;
    width: 100%;
    padding: 10px;
}

.pcap_item:hover {
    background: linear-gradient(180deg, #333 5%, #999898);
    border-radius: 4px;
}

.router-link-active {
    background: linear-gradient(180deg, #333 5%, #999898);

}

.sidebar_btn {
    height: 47px;
    border-bottom: 1px solid #ff0000;
}

.sidebar_btn:hover {
    background: linear-gradient(180deg, #c0bfbf 5%, #9b9999);
    color: black;
    cursor: pointer;
}

#toggle-side-bar:checked~.sidebar_btn .item_text,
#toggle-side-bar:checked~ul li .item_text {
    display: none;
}

.container {
    display: flex;
    flex-direction: column;
    /* width: calc(100% - 200px); */
    height: 100%;
    padding-right: 20px;
    flex: 1;
}

.bread_cum_container {
    display: flex;
    height: 54px;
}

.bread_cum {
    display: flex;
    position: relative;
    flex-direction: row;
    padding: 10px 0 10px 10px;
    height: 50px;
    /* width: 100%; */
    /* background-color: aqua; */
    border-radius: 4px;
    /* overflow: hidden; */
}

.bread_cum li {
    /* min-width: 50px; */
    width: fit-content;
    position: relative;
}

.bread_cum li a {
    min-width: 40px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #DDDDDD;
    background-image: linear-gradient(to right, #f5f5f5, #ddd);
    color: black !important;
    font-size: 14px;
    margin: none;
}

.bread_cum li a::after {
    content: "";
    position: absolute;
    right: -15px;
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
    border-left: 15px solid #DDDDDD;
    z-index: 2;
}

.bread_cum li:first-child a {
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;
}

.bread_cum li a:hover {
    background: #fff;
}

.bread_cum li a:hover::after {
    border-left-color: #fff;
    animation: all 3s timing-function delay iteration-count direction fill-mode;
}

.bread_cum_item {
    padding-left: 20px;
    padding-right: 10px;
    background-image: linear-gradient(to right, #f5f5f5, #ddd);
}

.bread_cum_item_tail {
    align-self: center;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    padding-left: 25px;
}

.btn_brc {
    height: 30px;
    min-width: 30px;
    padding: 0 10px;
    margin-left: 10px;
    margin-right: none;
    border-radius: 15px;
}

.bread_cum_btn {
    position: absolute;
    right: 20px;
    align-self: center;
}

.pcap_content {
    padding: 0 0 10px 10px;
    width: 100%;
    border-radius: 4px;
}
</style>
