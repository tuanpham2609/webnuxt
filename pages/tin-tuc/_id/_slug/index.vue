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
                                        <li>Đăng bởi: Tuan Pham</li>
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
                                <div class="customer-comment">
                                    <h4>Ý kiến khách hàng</h4>
                                    <div class="box-comment" v-for="(item, index) in comments" :key="index">
                                        <div class="txt-comment">
                                            <h5>{{item.name}}</h5>
                                            <h6 v-if="item.created_at">
                                                {{$dateFns.format(item.created_at, 'dd-MM-yyyy/hh:mm:ss')}} 
                                                <a @click="replyComment(item)"><i class="fa fa-mail-reply" data-toggle="tooltip" title="Trả lời"></i></a>
                                            </h6>
                                            <p>{{item.content}}</p>
                                        </div>
                                        <div class="rep-comment">
                                            <div class="box-comment" v-if="item.commentChild && item.commentChild.length > 0">
                                                <div class="txt-comment" v-for="(commentIndex, _index) in commentsToShow" :key="_index">
                                                    <h5 v-if="item.commentChild[commentIndex - 1]">
                                                        {{item.commentChild[commentIndex - 1].name}}
                                                        <a @click="replyComment(item,item.commentChild[commentIndex - 1].name)" v-if="item.commentChild[commentIndex - 1]">
                                                            <i class="fa fa-mail-reply" data-toggle="tooltip" title="Trả lời"></i>
                                                        </a>
                                                    </h5>    
                                                    <p v-if="item.commentChild[commentIndex - 1]">
                                                        {{item.commentChild[commentIndex - 1].content}}
                                                    </p>
                                                </div>
                                                <div v-if="commentsToShow < item.commentChild.length" class="form-rep">
                                                    <form> <button type="button" @click="addShowChild(item)">Xem thêm</button> </form>
                                                </div>
                                            </div>
                                            <div class="form-rep" v-if="item.reply">
                                                <form>
                                                    <div class="form-group">
                                                        <ValidationProvider rules="required" v-slot="{ errors }">
                                                            <textarea class="form-control" rows="3" placeholder="Nhập nội dung" v-model="item.content_reply"></textarea>
                                                            <span>{{ errors[0] }}</span>
                                                        </ValidationProvider>
                                                    </div>
                                                    <button type="button" data-toggle="modal" data-target="#exampleModal1">Gửi</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="ed-pagination">
                                        <paginate :current="list_post.current_page" v-model="list_post.current_page"
                                            :total="list_post.last_page">
                                        </paginate>
                                    </div>
                                    <div class="write-comment">
                                        <h4>Viết bình luận</h4>
                                        <div class="comment-full-page">
                                            <div class="form-rep">
                                                <form>
                                                    <div class="form-group">
                                                        <ValidationProvider rules="required" v-slot="{ errors }">
                                                            <textarea class="form-control" rows="3" placeholder="Nhập nội dung" v-model="content_description"></textarea>
                                                            <span>{{ errors[0] }}</span>
                                                        </ValidationProvider>
                                                    </div>
                                                    <button type="button" data-toggle="modal" data-target="#exampleModal" :disabled="content_description == ''">Gửi</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel">
                                        <div class="modal-dialog" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                                    <h4 class="modal-title" id="exampleModalLabel">Thông tin người bình luận</h4>
                                                </div>
                                                <template>
                                                    <ValidationObserver v-slot="{ invalid }">
                                                        <div class="modal-body">
                                                            <form>
                                                                <div class="form-group">
                                                                    <label for="recipient-name" class="control-label">Tên:</label>
                                                                    <ValidationProvider rules="required" v-slot="{ errors }">
                                                                        <input type="text" class="form-control" placeholder="Nhập tên..." v-model="comment.name"> 
                                                                        <span>{{ errors[0] }}</span>
                                                                    </ValidationProvider>
                                                                </div>
                                                                <div class="form-group">
                                                                    <label for="recipient-name" class="control-label">Email:</label>
                                                                    <ValidationProvider rules="required|email" v-slot="{ errors }">
                                                                        <input type="text" class="form-control" placeholder="Nhập email..." v-model="comment.email">
                                                                        <span>{{ errors[0] }}</span>
                                                                    </ValidationProvider>
                                                                </div>
                                                            </form>
                                                        </div>
                                                        <div class="modal-footer">
                                                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                                            <button :disabled="invalid" type="button" class="btn btn-primary" @click.stop.prevent="addComment()">Gửi</button>
                                                        </div>
                                                    </ValidationObserver>
                                                </template>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal fade" id="exampleModal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel1">
                                        <div class="modal-dialog" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                                    <h4 class="modal-title" id="exampleModalLabel1">Thông tin người bình luận</h4>
                                                </div>
                                                <ValidationObserver v-slot="{ invalid }">
                                                    <div class="modal-body">
                                                        <form>
                                                            <div class="form-group">
                                                                <label for="recipient-name" class="control-label">Tên:</label>
                                                                <ValidationProvider rules="required" v-slot="{ errors }">
                                                                    <input type="text" class="form-control" placeholder="Nhập tên..." v-model="comment_child.name"> 
                                                                    <span>{{ errors[0] }}</span>
                                                                </ValidationProvider>
                                                            </div>
                                                            <div class="form-group">
                                                                <label for="recipient-name" class="control-label">Email:</label>
                                                                <ValidationProvider rules="required|email" v-slot="{ errors }">
                                                                    <input type="text" class="form-control" placeholder="Nhập email..." v-model="comment_child.email">
                                                                    <span>{{ errors[0] }}</span>
                                                                </ValidationProvider>
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                                        <button :disabled="invalid" type="button" class="btn btn-primary" @click="addCommentChild()">Gửi</button>
                                                    </div>
                                                </ValidationObserver>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-4">
                        <div class="left-news">
                            <div class="news-highlights" v-if="categories">
                                <h4>Tin tức nổi bật</h4>
                                <div class="box-news-hl-full">
                                    <nuxt-link :to="{name: 'tin-tuc-id-slug', params: { id:item.id,slug:item.slug } }" class="box-news-hl" 
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
                </div>
            </div>
        </div>
    </div>
</template> 
<script>
import Paginate from '../../../../components/paginate';
import { ValidationProvider , ValidationObserver } from "vee-validate";

export default {
    components: { Paginate, ValidationProvider , ValidationObserver },
    data(){
        return {
            news:{},
            categories:[],
            comment: {
                idPost: null,
                name:'',
                email:'',
                content:'',
                commentChild: [],
            },
            comment_child: {
                name:'',
                email:'',
                content:''
            },
            comments:[],
            list_post: {
                current_page: 1,
                last_page: 0,
                total: 0,
                per_page: 0
            },
            commentsToShow: 5,
            content_description: ''
        }
    },
    created(){
        this.getNews();
        this.getComment();
    },
    methods:{
        getNews(){
            var vm = this;
            vm.$store.state.loading = true;
            vm.$axios.get(`${vm.$store.state.api}/web/post/${vm.$route.params.id}`)
                .then(res => {
                    vm.news = res.data.post;
                    vm.categories = res.data.category;
                    vm.$store.state.loading = false;
                });
        },
        getComment(){
            var vm = this;
            vm.$store.state.loading = true;
            vm.$axios.get(`${vm.$store.state.api}/web/comment/${vm.$route.params.id}?page=${this.list_post.current_page}`)
                .then(res => {
                    vm.comments = res.data.comments.data;
                    vm.list_post.current_page = res.data.comments.current_page;
                    vm.list_post.last_page = res.data.comments.last_page;
                    vm.list_post.total = res.data.comments.total;
                    vm.$store.state.loading = false;
                });
        },
        addComment(){
            var vm = this;
            vm.comment.idPost = vm.news.id;
            vm.comment.content = vm.content_description;
            vm.$axios.post(`${vm.$store.state.api}/web/comment`,vm.comment)
                .then(res => {
                    $('#exampleModal').modal('hide');
                    vm.getComment();
                    vm.comment.idPost  = null;
                    vm.comment.name  = '';
                    vm.comment.email  = '';
                    vm.comment.content  = '';
                    vm.content_description  = '';
                    vm.comment.commentChild  = [];
                });
        },
        replyComment(item,name_child){
            var vm = this;
            vm.comment = item;
            item.reply = true;
            (name_child)?item.content_reply = '@'+name_child+': ': item.content_reply = '@'+item.name+': ';
            vm.$forceUpdate();
        },
        addCommentChild(){
            var vm = this;
            vm.comment_child.content = vm.comment.content_reply;
            vm.comment.commentChild.push(vm.comment_child);
            vm.$axios.post(`${vm.$store.state.api}/web/comment/${vm.comment.id}`, vm.comment)
                .then(res => {
                    $('#exampleModal1').modal('hide');
                    this.getComment();
                    vm.comment_child.name  = '';
                    vm.comment_child.email  = '';
                    vm.comment.content = ''
                });
        },
        addShowChild(item){
            var vm = this; 
            if(vm.commentsToShow > item.commentChild.length - vm.commentsToShow){
                vm.commentsToShow +=  item.commentChild.length - vm.commentsToShow;
            } else { vm.commentsToShow += vm.commentsToShow; }
        }
    },
    mounted() {
        $("#share").jsSocials({
            showLabel: false,
            showCount: false,
            shares: ["twitter", "facebook", "googleplus", "linkedin", "pinterest"]
        });
    },
    watch: {
        'list_post.current_page': function (new_val) {
            this.getComment();
        }
    }
}
</script>