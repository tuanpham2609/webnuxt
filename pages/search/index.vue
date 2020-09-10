<template>
    <div>
        <div class="link-back-home">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                        <h4><a href="index.php">Home</a> Tìm kiếm</h4>
                    </div>
                </div>
            </div>
        </div>
        <div class="news-page">
            <div class="container">
                <div class="row row-flex" v-if="search && search.length > 0">
                    <div class="col-md-4 col-sm-3 col-xs-12" v-for="(item, index) in search" :key="index">
                        <div class="right-news">
                            <div class="box-news-page">
                                <nuxt-link :to="{name: 'news', params: { id:item.id,slug:item.slug } }" class="pic-news-page">
                                    <img v-if="item.image" :src="$store.state.api+'/img/'+item.image" class="img-responsive">
                                </nuxt-link>
                                <ul class="date-box-news-page">
                                    <li>{{(item.created_at)?$dateFns.format(item.created_at, 'dd'):null}}</li>
                                    <li>Tháng {{(item.created_at)?$dateFns.format(item.created_at, 'MM'):null}}</li>
                                </ul>
                                <div class="txt-box-news-page">
                                    <nuxt-link :to="{name: 'news', params: { id:item.id,slug:item.slug } }"><h4>{{item.name}}</h4></nuxt-link>
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
                    <!-- <div class="col-md-3 col-sm-4">
                        <div class="left-news">
                            <div class="news-highlights" v-if="siderbar">
                                <h4>Tin tức nổi bật</h4>
                                <div class="box-news-hl-full">
                                    <nuxt-link :to="{name: 'news', params: { id:item.id,slug:item.slug } }" class="box-news-hl" 
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
                    </div> -->
                </div>
                <div class="row" v-else>
                    <div class="col-sm-12">
                        <h4>Không tìm thấy dữ liệu nào !!!</h4>
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
            search:[],
            list_post: {
                current_page: 1,
                last_page: 0,
                total: 0,
                per_page: 0
            },
        }
    },
    created(){
        this.loadSearch();
    },
    methods: {
        loadSearch(){
            var vm = this;
            vm.$store.state.loading = true;
            vm.$axios.post(`${vm.$store.state.api}/web/post`,{keysearch: vm.$route.query.name})
                .then(res => {
                    vm.search = res.data.post.data;
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