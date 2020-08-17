<template>
  <div>
    <section class="banner-home" v-if="menu">
      <div class="container">
        <div class="row">
          <div class="col-md-9 col-sm-12">
            <section class="regular1 slider">
              <div class="items-1"> 
                <nuxt-link :to="{name: 'tin-tuc-id-slug', params: { id: menu.topTrending[0].id,slug:menu.topTrending[0].slug } }" class="pic-prd">
                  <img :src="$store.state.api+'/img/'+ menu.topTrending[0].image" :alt="menu.topTrending[0].name" :title="menu.topTrending[0].name">
                </nuxt-link>
                <nuxt-link :to="{name: 'tin-tuc-id-slug', params: { id:menu.topTrending[0].id,slug:menu.topTrending[0].slug } }">
                  <h4 :title="menu.topTrending[0].name">{{menu.topTrending[0].name}}</h4>
                </nuxt-link>
              </div>
            </section>
          </div>
          <div class="col-md-3 col-sm-12">
            <div class="row" v-if="menu && menu.topTrending">
              <div class="col-md-12 col-xs-12 col-sm-6">
                <div class="box-prod">
                  <nuxt-link :to="{name: 'tin-tuc-id-slug', params: { id:menu.topTrending[1].id,slug:menu.topTrending[1].slug } }" class="pic-prd">
                    <img :src="$store.state.api+'/img/'+menu.topTrending[1].image" :alt="menu.topTrending[1].name" :title="menu.topTrending[1].name">
                  </nuxt-link>
                  <div class="txt-prd">
                    <nuxt-link :to="{name: 'tin-tuc-id-slug', params: { id:menu.topTrending[1].id,slug:menu.topTrending[1].slug } }">
                      <h4 :title="menu.topTrending[1].name">{{menu.topTrending[1].name}}</h4>
                    </nuxt-link>
                  </div>
                </div>
              </div>
              <div class="col-md-12 col-xs-12 col-sm-6">
                <div class="box-prod">
                  <nuxt-link :to="{name: 'tin-tuc-id-slug', params: { id:menu.topTrending[2].id,slug:menu.topTrending[2].slug } }" class="pic-prd">
                    <img :src="$store.state.api+'/img/'+menu.topTrending[2].image" :alt="menu.topTrending[2].name" :title="menu.topTrending[2].name">
                  </nuxt-link>
                  <div class="txt-prd">
                    <nuxt-link :to="{name: 'tin-tuc-id-slug', params: { id:menu.topTrending[2].id,slug:menu.topTrending[2].slug } }">
                      <h4 :title="menu.topTrending[2].name">{{menu.topTrending[2].name}}</h4>
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
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