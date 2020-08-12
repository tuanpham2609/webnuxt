<template>
    <div>
        <header class="header">
            <div class="header-navbar">
                <nav class="navbar navbar-inverse getFixed-1" role="navigation">
                    <div class="container" v-if="menu">
                        <div class="ed-toggle-mobile getFixed-1">
                            <ul class="">
                                <li><a href="index.php" class="logo"><img src="/images/logo/logo.png"></a></li>
                                <li>
                                    <div class="navbar-header">
                                        <button type="button" class="navbar-toggle" id="btn-toggle">
                                            <span class="sr-only">Toggle navigation</span>
                                            <span class="icon-bar top-bar"></span>
                                            <span class="icon-bar middle-bar"></span>
                                            <span class="icon-bar bottom-bar"></span>
                                        </button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="navbar-collapse1" id="menu">
                            <ul class="nav navbar-nav ed-ul">
                                <li class="hidden-sm hidden-xs" v-if="menu.logo">
                                    <nuxt-link to="/"><img :src="$store.state.api+'/img/'+menu.logo.image"></nuxt-link>
                                </li>
                                <li v-for="(item , index) in menu.menu" :key="index">
                                    <nuxt-link :to="{name: 'the-loai-id-slug', params: { id:item.id,slug:item.slug } }">
                                        {{item.name}}
                                    </nuxt-link>
                                </li>
                                <li>
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="search" v-model="keysearch">
                                        <button @click="SearchPost()">search</button>
                                    </div>
                                </li>
                                <!--
                                <li>
                                    <nuxt-link to="/post">Tin tức</nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link to="/contact">Liên hệ</nuxt-link>
                                </li> -->
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
    data(){
        return{
            keysearch:""
        }
    },
    created(){
        this.$store.dispatch('getMenu');
    },
    computed: {
        ...mapGetters({
            menu : 'dataHeader',
        })
    },
    methods: {
        SearchPost(){
            if(this.keysearch != ''){
                this.$router.push({ path: '/search', query:{ name: this.keysearch } });
            } else {
                alert('Vui lòng nhập tìm kiếm !!!')
            }
        }
    },
     watch:{
        '$route.path' : function(){
            if(!this.$route.query.hasOwnProperty('keysearch')){
                this.keysearch = ''
            } 
        }
    },
}
</script>