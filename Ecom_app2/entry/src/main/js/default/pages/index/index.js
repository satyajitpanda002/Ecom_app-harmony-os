// xxx.js
import router from '@system.router';
export default {
    data: {
        toggle_list: [
            { "id":"1001", "name":"shoes", "checked":true },
            { "id":"1002", "name":"Table", "checked":false },
            { "id":"1003", "name":"Cupboard", "checked":false },
            { "id":"1004", "name":"Sofa", "checked":false },
        ],

        idx: ""
    },
    allclick(arg) {
        this.idx = arg
    },
    allchange(e) {
        if (e.checked === true) {
            for (var i = 0; i < this.toggle_list.length; i++) {
                if (this.toggle_list[i].id === this.idx) {
                    this.toggle_list[i].checked = true
                } else {
                    this.toggle_list[i].checked = false
                }
            }
        }
    },

    detailPage: function(){
        router.push({
            uri:"pages/detail/detail"
        })
    },
    filterPage: function(){
        router.push({
            uri:"pages/filter/filter"
        })
    },
}