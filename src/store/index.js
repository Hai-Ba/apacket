import { defineStore } from "pinia";
import axios from "axios";

export const usePcapSelected = defineStore('selectedItem', {
    state: () => ({
        //State here(key:value)
        item: {},
    }),
    actions: {
        //Action here(funtion)
        async updateSelectedItem(uuid) {
            console.log(uuid)
            await axios.get(`https://apackets.com/api/v1/pcaps/public/data/${uuid}`)
            .then((res) => {
                console.log(res.data);
                this.item = res.data;
            })
        }
    },
    getters: {
        //Getter here(function)
        getItemSelected() {
            return this.item;
        }
    }
})

export const useBreadCumTail = defineStore('selectedTask', {
    state: () => ({
        //State here(key:value)
        task: "",
    }),
    actions: {
        //Action here(funtion)
        updateSelectedTask(taskStr) {
            this.task = taskStr;
        }
    },
    getters: {
        //Getter here(function)
        getTaskSelected() {
            return this.task;
        }
    }
})

export const usePcapList = defineStore('pcapList', {
    state: () => ({
        //Pcap arr
        listPcap: [],
    }),
    actions: {
        async updatePcapList() {
            await axios.get('https://apackets.com/api/v1/pcaps/public/info')
                .then((res) => {
                    this.listPcap = res.data.pcaps;
                    console.log(this.listPcap)
                })
        }
    },
    getters: {
        getListData() {
            return this.listPcap;
        }
    }
})