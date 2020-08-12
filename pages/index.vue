<template>
  <div>
    <section class="banner-home">
      <div class="container">
        <div class="row">
          <div class="col-md-9 col-sm-12">
            <section class="regular1 slider">
              <div class="items-1">
                <a href="#"><img src="/images/banner/banner-1.jpg"></a>
              </div>
              <div class="items-1">
                <a href="#"><img src="/images/banner/banner-2.jpg"></a>
              </div>
            </section>
          </div>
          <div class="col-md-3 col-sm-12">
            <div class="row">
              <div class="col-md-12 col-xs-12 col-sm-6">
                <div class="box-prod">
                  <a href="product-detail.php" class="pic-prd">
                    <img src="/images/banner/banner-1.jpg" alt="">
                  </a>
                  <div class="txt-prd">
                    <a href="product-detail.php">
                      <h4>Duyệt bộ sưu tập các sản phẩm bán chạy nhất và hàng đầu của chúng tôi. Bạn chắc chắn sẽ tìm
                        thấy những gì bạn đang tìm kiếm.</h4>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-12 col-xs-12 col-sm-6">
                <div class="box-prod">
                  <a href="product-detail.php" class="pic-prd">
                    <img src="/images/banner/banner-1.jpg" alt="">
                  </a>
                  <div class="txt-prd">
                    <a href="product-detail.php">
                      <h4>Duyệt bộ sưu tập các sản phẩm bán chạy nhất và hàng đầu của chúng tôi. Bạn chắc chắn sẽ tìm
                        thấy những gì bạn đang tìm kiếm.</h4>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="our-product" v-if="menu">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="title-page">
              <h3>Bài viết nổi bật</h3>
            </div>
          </div>
          <div class="col-sm-12">
            <div class="regular3 slider">
              <div class="item" v-for="(item, index) in menu.topTrending" :key="index">
                <div class="box-prods">
                  <nuxt-link :to="{name: 'tin-tuc-id-slug', params: { id:item.id,slug:item.slug } }" class="pic-prd">
                    <img :src="$store.state.api+'/img/'+item.image" :alt="item.name" :title="item.name">
                  </nuxt-link>
                  <div class="txt-prd">
                    <nuxt-link :to="{name: 'tin-tuc-id-slug', params: { id:item.id,slug:item.slug } }">
                      <h4>{{item.name}}</h4>
                    </nuxt-link>
                    <p>{{item.short_content}}</p>
                  </div>
                </div>
              </div>
             </div>
          </div>
          <div class="col-sm-12">
            <a href="#"><img src="/images/quangcao/pic-2.jpg" class="img-responsive" alt=""></a>
          </div>
        </div>
      </div>
    </section>
    <div class="news-home" v-if="menu"> 
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="title-page">
              <h3>DÀNH CHO BẠN</h3>
            </div>
          </div>
          <div class="col-sm-12" v-for="(item, index) in menu.HomePost" :key="index">
            <div class="box-prods">
              <nuxt-link :to="{name: 'tin-tuc-id-slug', params: { id:item.id,slug:item.slug } }" class="pic-prd">
                <img :src="$store.state.api+'/img/'+item.image" :alt="item.name" :title="item.name">
              </nuxt-link>
              <div class="txt-prd">
                <nuxt-link :to="{name: 'tin-tuc-id-slug', params: { id:item.id,slug:item.slug } }">
                  <h4 :title="item.name">{{item.name}}</h4>
                </nuxt-link>
                <p>{{item.short_content}}</p>
              </div>
            </div>
          </div>
          <div class="col-sm-12">
            <a href="#"><img src="/images/quangcao/pic-2.jpg" class="img-responsive" alt=""></a>
          </div>
        </div>
      </div>
    </div>
    <div class="new-books-home" v-if="menu">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="title-page">
              <h3>THEO CHỦ ĐỀ / XÃ HỘI</h3>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6" v-for="(item, index) in menu.XH" :key="index">
            <div class="box-prods1">
              <nuxt-link :to="{name: 'tin-tuc-id-slug', params: { id:item.id,slug:item.slug } }" class="pic-prd1">
                <img :src="$store.state.api+'/img/'+item.image" :alt="item.name" :title="item.name">
              </nuxt-link>
              <div class="txt-prd1">
                <nuxt-link :to="{name: 'tin-tuc-id-slug', params: { id:item.id,slug:item.slug } }">
                  <h4 :title="item.name">{{item.name}}</h4>
                </nuxt-link>
                <p>{{item.short_content}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="new-books-home" v-if="menu">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="title-page">
              <h3>THEO CHỦ ĐỀ / KINH TẾ</h3>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6" v-for="(item, index) in menu.KinhTe" :key="index">
            <div class="box-prods1">
              <nuxt-link :to="{name: 'tin-tuc-id-slug', params: { id:item.id,slug:item.slug } }" class="pic-prd1">
                <img :src="$store.state.api+'/img/'+item.image" :alt="item.name" :title="item.name">
              </nuxt-link>
              <div class="txt-prd1">
                <nuxt-link :to="{name: 'tin-tuc-id-slug', params: { id:item.id,slug:item.slug } }">
                  <h4 :title="item.name">{{item.name}}</h4>
                </nuxt-link>
                <p>{{item.short_content}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="new-books-home" v-if="menu">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="title-page">
              <h3>THEO CHỦ ĐỀ / GIẢI TRÍ</h3>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6" v-for="(item, index) in menu.GiaiTri" :key="index">
            <div class="box-prods1">
              <nuxt-link :to="{name: 'tin-tuc-id-slug', params: { id:item.id,slug:item.slug } }" class="pic-prd1">
                <img :src="$store.state.api+'/img/'+item.image" :alt="item.name" :title="item.name">
              </nuxt-link>
              <div class="txt-prd1">
                <nuxt-link :to="{name: 'tin-tuc-id-slug', params: { id:item.id,slug:item.slug } }">
                  <h4 :title="item.name">{{item.name}}</h4>
                </nuxt-link>
                <p>{{item.short_content}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="new-books-home" v-if="menu">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="title-page">
              <h3>THEO CHỦ ĐỀ / GIÁO DỤC</h3>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6" v-for="(item, index) in menu.GiaoDuc" :key="index">
            <div class="box-prods1">
              <nuxt-link :to="{name: 'tin-tuc-id-slug', params: { id:item.id,slug:item.slug } }" class="pic-prd1">
                <img :src="$store.state.api+'/img/'+item.image" :alt="item.name" :title="item.name">
              </nuxt-link>
              <div class="txt-prd1">
                <nuxt-link :to="{name: 'tin-tuc-id-slug', params: { id:item.id,slug:item.slug } }">
                  <h4 :title="item.name">{{item.name}}</h4>
                </nuxt-link>
                <p>{{item.short_content}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="new-books-home" v-if="menu">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="title-page">
              <h3>THEO CHỦ ĐỀ / CÔNG NGHỆ</h3>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6" v-for="(item, index) in menu.Review" :key="index">
            <div class="box-prods1">
              <nuxt-link :to="{name: 'tin-tuc-id-slug', params: { id:item.id,slug:item.slug } }" class="pic-prd1">
                <img :src="$store.state.api+'/img/'+item.image" :alt="item.name" :title="item.name">
              </nuxt-link>
              <div class="txt-prd1">
                <nuxt-link :to="{name: 'tin-tuc-id-slug', params: { id:item.id,slug:item.slug } }">
                  <h4 :title="item.name">{{item.name}}</h4>
                </nuxt-link>
                <p>{{item.short_content}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  head() {
    return {
      title: 'Review vui | Trang chủ',
      meta: [
        {
          hid: 'trang chủ 1',
          name: 'trang chủ 1',
          content: 'trang chủ 1',
        }
      ]
    }
  },
  mounted(){
    let slider = $('.regular1');
    if( slider.length ){
      slider.on('init', function(event, slick){
          $('.navbar-category .category').css('min-height' , slider.height());
      });
      $(window).on('resize', function(){
          $('.navbar-category .category').css('min-height' , slider.height());
      })
      slider.not('slick-initialized').slick({
        dots: true,
        infinite: true,
        speed: 900,
        prevArrow: false,
        nextArrow: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 1,
                slidesToScroll:1
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll:1
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

        ]
      })
    }   
  },
  updated(){
    $(".regular3").not('slick-initialized').slick({
        dots: false,
        infinite: false,
        speed: 900,
        prevArrow: false,
        nextArrow: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 4,
                slidesToScroll:1
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll:1
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

        ]
    });
  },
  computed: {
    ...mapGetters({
        menu : 'dataHeader',
    })
  },
}
</script>