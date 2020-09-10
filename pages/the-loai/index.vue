<template>
    <div>
        <div class="link-back-home">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                        <h4><a href="index.php">Home</a> Tin tức</h4>
                    </div>
                </div>
            </div>
        </div>
        <div class="news-page">
            <div class="container">
                <div class="row">
                    <div class="col-md-9 col-sm-8">
                        <div class="right-news" v-if="categories">
                            <div class="box-news-page" v-for="(item, index) in categories" :key="index">
                                <nuxt-link :to="{name: 'tin-tuc-id-slug', params: { id:item.id,slug:item.slug } }" class="pic-news-page">
                                    <img v-if="item.image" :src="$store.state.api+'/img/'+item.image" class="img-responsive">
                                </nuxt-link>
                                <ul class="date-box-news-page">
                                    <li>{{(item.created_at)?$dateFns.format(item.created_at, 'dd'):null}}</li>
                                    <li>Tháng {{(item.created_at)?$dateFns.format(item.created_at, 'MM'):null}}</li>
                                </ul>
                                <div class="txt-box-news-page">
                                    <nuxt-link :to="{name: 'tin-tuc-id-slug', params: { id:item.id,slug:item.slug } }"><h4>{{item.name}}</h4></nuxt-link>
                                    <ul>
                                        <li>Đăng bởi: Pham duy tuan</li>
                                        <li>Ngày đăng: {{(item.created_at)?$dateFns.format(item.created_at, 'dd-MM-yyyy/hh:mm:ss'):null}}</li>
                                    </ul>
                                    <p>{{item.short_content}}</p>
                                </div>
                            </div>
                        </div>

                        <div class="ed-pagination">
                            <paginate :current="list_post.current_page" v-model="list_post.current_page"
                                :total="list_post.last_page">
                            </paginate>
                        </div>

                    
                    </div>
                    <div class="col-md-3 col-sm-4">
                        <div class="left-news">
                            <div class="news-highlights" v-if="siderbar">
                                <h4>Tin tức nổi bật</h4>
                                <div class="box-news-hl-full">
                                    <nuxt-link :to="{name: 'tin-tuc-id-slug', params: { id:item.id,slug:item.slug } }" class="box-news-hl" 
                                        v-for="(item, index) in siderbar" :key="index">
                                        <div class="ed-img-news-hl">
                                            <img :src="$store.state.api+'/img/'+item.image" :alt="item.name">
                                        </div>
                                        <p>{{item.short_content}}</p>
                                    </nuxt-link>
                                </div>
                            </div>
                            <div class="pic-advertise-news">
                                <a href="#"><img src="/images/quangcao/qc-1.jpg" class="img-responsive"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Paginate from '../../components/paginate';
export default {
    components: { Paginate },
    data(){
        return{
            categories:[],
            siderbar:[],
            list_post: {
                current_page: 1,
                last_page: 0,
                total: 0,
                per_page: 0
            },
        }
    },
    created(){
        this.getCatagory();
    },
    methods:{
        getCatagory(){
            var vm = this;
            vm.$store.state.loading = true;
            vm.$axios.get(`${vm.$store.state.api}/web/category/${vm.$route.params.id}?page=${this.list_post.current_page}`)
                .then(res => {
                    vm.categories = res.data.category.data;
                    vm.siderbar = res.data.siderbar;
                    vm.list_post.current_page = res.data.category.current_page;
                    vm.list_post.last_page = res.data.category.last_page;
                    vm.list_post.total = res.data.category.total;
                    vm.$store.state.loading = false;
                });
        }
    },
    watch: {
        'list_post.current_page': function (new_val) {
            this.getCatagory();
        }
    }
}
</script>