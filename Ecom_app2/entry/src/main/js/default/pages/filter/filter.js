import router from '@system.router';
export default {
    data: {
        back: " <",
    },
    indexPage: function(){
        router.push({
            uri: "pages/index/index"
        })
    },
}
