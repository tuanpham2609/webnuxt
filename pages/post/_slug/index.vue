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
                    <div class="col-md-3 col-sm-4">
                        <div class="left-news">
                            <ul class="category-news">
                                <h4>Danh mục tin tức</h4>
                                <li class="has-submenu">
                                    <a href="product.html">Tin tức mới nhất <i class="fa fa-angle-down icon-first-submenu"></i></a>
                                    <ul class="submenu-1 ed-ul">
                                        <li class="has-second-submenu"><a href="product.php">Tin tức mới nhất <i class="fa fa-angle-down icon-second-submenu"></i></a>
                                            <ul class="submenu-2 ed-ul">
                                                <li><a href="product.php"> Tin tức mới nhất 1</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-second-submenu"><a href="product.php">Tin tức gần đây <i class="fa fa-angle-down icon-second-submenu"></i></a>
                                            <ul class="submenu-2 ed-ul">
                                                <li><a href="product.php"> Tin tức gần đây 1</a></li>
                                                <li><a href="product.php"> Tin tức gần đây 2</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="product.php">Tin tức khác </a></li>
                                    </ul>
                                </li>
                                <li class="has-submenu">
                                    <a href="product.html">Tin tức đọc nhiều nhất <i class="fa fa-angle-down icon-first-submenu"></i></a>
                                    <ul class="submenu-1 ed-ul">
                                        <li class="has-second-submenu"><a href="product.php">Tin tức mới nhất <i class="fa fa-angle-down icon-second-submenu"></i></a>
                                            <ul class="submenu-2 ed-ul">
                                                <li><a href="product.php"> Tin tức mới nhất 1</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-second-submenu"><a href="product.php">Tin tức gần đây <i class="fa fa-angle-down icon-second-submenu"></i></a>
                                            <ul class="submenu-2 ed-ul">
                                                <li><a href="product.php"> Tin tức gần đây 1</a></li>
                                                <li><a href="product.php"> Tin tức gần đây 2</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="product.php">Tin tức khác </a></li>
                                    </ul>
                                </li>
                                <li class="has-submenu">
                                    <a href="product.html">Tin tức xem nhiều</a>
                                </li>
                                <li class="has-submenu">
                                    <a href="product.html">Tin tức đọc nhiều</a>
                                </li>
                            </ul>

                            <div class="news-highlights" v-if="categories">
                                <h4>Tin tức nổi bật</h4>
                                <div class="box-news-hl-full">
                                    <nuxt-link :to="{name: 'post-slug', params: { id:item.id,slug:item.slug } }" class="box-news-hl" 
                                        v-for="(item, index) in categories" :key="index">
                                        <div class="ed-img-news-hl">
                                            <img :src="$store.state.api+'/img/'+item.image" alt="item.name">
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
                    <div class="col-md-9 col-sm-8" v-if="news"> 
                        <div class="right-news-detail">
                            <div class="box-news-page">
                                <img v-if="news.image" :src="$store.state.api+'/img/'+news.image" class="img-responsive">
                                <ul class="date-box-news-page">
                                    <li>
                                        {{(news.created_at)?$dateFns.format(news.created_at, 'dd'):null}}
                                    </li>
                                    <li>Tháng {{(news.created_at)?$dateFns.format(news.created_at, 'MM'):null}}</li>
                                </ul>
                                <div class="txt-box-news-page">
                                    <h4>{{news.name}}</h4>
                                    <ul>
                                        <li>Đăng bởi: Anh Tài</li>
                                        <li>Ngày đăng: {{(news.created_at)?$dateFns.format(news.created_at, 'dd-MM-yyyy/hh:mm:ss'):null}}</li>
                                    </ul>
                                </div>
                                <article class="page-content" v-html="news.description"></article>
                                <div class="tag-share">
                                    <ul class="ed-tags">
                                        <li><i class="fa fa-tags"></i></li>
                                        <li><a href="#">Apple</a></li>
                                        <li><a href="#">Electronic</a></li>
                                        <li><a href="#">Hot</a></li>
                                        <li><a href="#">Imac</a></li>
                                    </ul>

                                    <div class="ed-share">
                                        <h4>Share: </h4>
                                        <div id="share"></div>
                                    </div>
                                </div>

                                <!-- <div class="customer-comment">
                                    <h4>Ý kiến khách hàng</h4>

                                    <div class="box-comment">
                                        <div class="avar-comment">
                                            <img src="/images/avartar/avartar-1.jpg" alt="">
                                        </div>
                                        <div class="txt-comment">
                                            <h5>Anh Tai</h5>
                                            <h6>03/07/2018 - 15h30 <a href="#"><i class="fa fa-mail-reply" data-toggle="tooltip" title="Trả lời"></i></a></h6>
                                            <p>Hy vọng với những chia sẻ đó của chúng tôi, các bạn đã hiểu biết thêm được phần nào về các dịch vụ thiết bị nội thất Hà Nội. Chúc các bạn sớm tìm được cho mình một dịch vụ ưng ý.</p>
                                        </div>
                                    </div>
                                    <div class="rep-comment">
                                        <div class="box-comment">
                                            <div class="avar-comment">
                                                <img src="/images/avartar/avartar-1.jpg" alt="">
                                            </div>
                                            <div class="txt-comment">
                                                <h5>Anh Tai</h5>
                                                <h6>03/07/2018 - 15h30</h6>
                                                <p>Hy vọng với những chia sẻ đó của chúng tôi, các bạn đã hiểu biết thêm được phần nào về các dịch vụ thiết bị nội thất Hà Nội. Chúc các bạn sớm tìm được cho mình một dịch vụ ưng ý.</p>
                                            </div>
                                        </div>

                                        <div class="form-rep">
                                            <form>
                                                <div class="form-group">
                                                    <textarea class="form-control" rows="3" placeholder="Nhập nội dung" id="comment"></textarea>
                                                </div>
                                                <button type="submit" class="">Gửi</button>
                                            </form>
                                        </div>
                                    </div>
                                    

                                    <div class="box-comment">
                                        <div class="avar-comment">
                                            <img src="/images/avartar/avartar-1.jpg" alt="">
                                        </div>
                                        <div class="txt-comment">
                                            <h5>Anh Tai</h5>
                                            <h6>03/07/2018 - 15h30 <a href="#"><i class="fa fa-mail-reply" data-toggle="tooltip" title="Trả lời"></i></a></h6>
                                            <p>Hy vọng với những chia sẻ đó của chúng tôi, các bạn đã hiểu biết thêm được phần nào về các dịch vụ thiết bị nội thất Hà Nội. Chúc các bạn sớm tìm được cho mình một dịch vụ ưng ý.</p>
                                        </div>
                                    </div>
                                    <div class="rep-comment">
                                        <div class="form-rep">
                                            <form>
                                                <div class="form-group">
                                                    <textarea class="form-control" rows="3" placeholder="Nhập nội dung" id="comment"></textarea>
                                                </div>
                                                <button type="submit" class="">Gửi</button>
                                            </form>
                                        </div>
                                    </div>
                                    <div class="ed-pagination">
                                        <ul class="pagination setting-ul">
                                            <li class="disabled"><span><i class="fa fa-long-arrow-left"></i></span></li>
                                            <li class="active"><span>1</span></li>
                                            <li><a href="#">2</a></li>
                                            <li><a href="#">3</a></li>
                                            <li><a href="#" rel="next"><i class="fa fa-long-arrow-right"></i></a></li>
                                        </ul>
                                    </div>


                                    <div class="write-comment">
                                        <h4>Viết bình luận</h4>

                                        <div class="login-to-comment">
                                            <p>Bạn phải <a href="#">Đăng nhập</a> mới có thể bình luận bài viết của chúng tôi.</p>
                                        </div>

                                        <div class="comment-full-page">
                                            <div class="form-rep">
                                                <form>
                                                    <div class="form-group">
                                                        <textarea class="form-control" rows="3" placeholder="Nhập nội dung" id="comment"></textarea>
                                                    </div>
                                                    <button type="submit" class="">Gửi</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="news-related-detail">
                                    <h4>Tin tức liên quan</h4>
                                    <section class="regular3 slider">
                                        <div class="items-3">
                                            <div class="news-box-home">
                                                <a href="news-detail.php" class="pic-news-home">
                                                    <img src="/images/news/news-1.jpg" class="img-responsive" alt="">
                                                    <ul>
                                                        <li>19</li>
                                                        <li>T.7</li>
                                                    </ul>
                                                </a>
                                                <a href="news-detail.php">
                                                    <h4>Những cuốn sách tốt bên những người bạn</h4>
                                                </a>
                                                <p>Những cuốn sách mà bút lực của người viết đã vượt qua giới hạn của thể loại và đối tượng độc giả...</p>
                                            </div>
                                        </div>
                                        <div class="items-3">
                                            <div class="news-box-home">
                                                <a href="news-detail.php" class="pic-news-home">
                                                    <img src="/images/news/news-2.jpg" class="img-responsive" alt="">
                                                    <ul>
                                                        <li>19</li>
                                                        <li>T.7</li>
                                                    </ul>
                                                </a>
                                                <a href="news-detail.php">
                                                    <h4>Những cuốn sách tốt bên những người bạn</h4>
                                                </a>
                                                <p>Những cuốn sách mà bút lực của người viết đã vượt qua giới hạn của thể loại và đối tượng độc giả...</p>
                                            </div>
                                        </div>
                                        <div class="items-3">
                                            <div class="news-box-home">
                                                <a href="news-detail.php" class="pic-news-home">
                                                    <img src="/images/news/news-3.jpg" class="img-responsive" alt="">
                                                    <ul>
                                                        <li>19</li>
                                                        <li>T.7</li>
                                                    </ul>
                                                </a>
                                                <a href="news-detail.php">
                                                    <h4>Những cuốn sách tốt bên những người bạn</h4>
                                                </a>
                                                <p>Những cuốn sách mà bút lực của người viết đã vượt qua giới hạn của thể loại và đối tượng độc giả...</p>
                                            </div>
                                        </div>
                                        <div class="items-3">
                                            <div class="news-box-home">
                                                <a href="news-detail.php" class="pic-news-home">
                                                    <img src="/images/news/news-2.jpg" class="img-responsive" alt="">
                                                    <ul>
                                                        <li>19</li>
                                                        <li>T.7</li>
                                                    </ul>
                                                </a>
                                                <a href="news-detail.php">
                                                    <h4>Những cuốn sách tốt bên những người bạn</h4>
                                                </a>
                                                <p>Những cuốn sách mà bút lực của người viết đã vượt qua giới hạn của thể loại và đối tượng độc giả...</p>
                                            </div>
                                        </div>
                                    </section>
                                </div> -->

                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    </div>
</template> 
<script>

export default {
    data(){
        return {
            news:{},
            categories:[]
        }
    },
    created(){
        this.getNews();
    },
    methods:{
        getNews(){
            var vm = this;
            vm.$axios.get(`${vm.$store.state.api}/web/post/${vm.$route.params.id}`)
                .then(res => {
                    vm.news = res.data.post;
                    vm.categories = res.data.category;
                    console.log(vm.news)
                    console.log(vm.categories)
                });
        }
    }
}
</script>