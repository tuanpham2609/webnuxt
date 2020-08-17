<style>
    .btn-search {
        display: block;
        color: #fafafa;
        position: relative;
        padding: 5px;
    }
    .form-search {
        position: absolute;
        top: 100%;
        right: 0;
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
        opacity: 0;
        visibility: hidden;
        -webkit-transform: translateY(30px);
        transform: translateY(30px);
    }
    .form-search form {
        display: flex;
        width: 250px;
        position: relative;
    }
    .form-search form input {
        width: calc(100% - 34px);
        border-radius: 0;
    }
    .form-search form button {
        width: 34px;
        background: #ff7e5f;
        color: #fff;
        border-color: #ff7e5f;
        border-radius: 0;
        border-color: #eee;
    }
    .form-search.active {
        -webkit-transform: none;
        transform: none;
        opacity: 1;
        visibility: visible;
    }
</style>
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
                                    <a href="javascript:void(0)" class="btn-search" id="btn-search">
                                        <i class="fa fa-search"></i>
                                    </a>
                                    <div id="search" class="form-search">
                                        <form >
                                            <input type="text" class="form-control" placeholder="Nhập từ khóa cần tìm ..." v-model="keysearch">
                                            <button type="button" class="btn btn-search" @click="SearchPost()"><i class="fa fa-search"></i></button>
                                        </form>
                                    </div>
                                </li>
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
    updated(){
        $('#btn-search').on('click', function(){
            $('#search').toggleClass('active');
            setTimeout( function(){
                $('#search input').focus();
            }, 500);
        })
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