<template>
    <div>
        day la cho de search
        {{$route.query.name}}
    </div>
</template>
<script>
export default {
    created(){
        this.loadSearch();
    },
    methods: {
        loadSearch(){
            var vm = this;
            vm.$store.state.loading = true;
            vm.$axios.post(`${vm.$store.state.api}/web/post`,{keysearch: vm.$route.query.name})
                .then(res => {
                    console.log(res.data);
                    vm.$store.state.loading = false;
                });
        }
    },
    watch: {
        '$route.query.name':function() {
            this.loadSearch();
        }
    }
}
</script>