import { debounce } from '@/utils/util'
const index = {
    mounted() {
        this.$nextTick(() => {
            if (!this.$route.query.id) {
                window.scrollTo({
                    behavior:'smooth',
                    top:0,
                    left:0,
                })
            }else{
                setTimeout(() => {
                    this.$refs.tabs.scrollTo(this.$route.query.id);
                }, 50);
            }
        });
    },

    beforeRouteUpdate(to, from, next) {
        console.log('跳转：', this.$refs)
        this.$refs.tabs.scrollTo(to.query.id);
        next();
    },

    methods: {
        onTabsClick(name, title) {
            
        },
    },

    updated() {

    },
}


export {
    index
}