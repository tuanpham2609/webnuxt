<template>
    <div>
        <div class="link-back-home">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                        <h4><a href="index.php">Home</a> Liên hệ</h4>
                    </div>
                </div>
            </div>
        </div>
        <div class="contact-page">
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-sm-offset-3">
                        <form class="form-contact" ref="contactForm">
                            <div class="form-group">
                                <label for="">Họ tên:</label>
                                <ValidationProvider rules="required" v-slot="{ errors }">
                                    <input type="text" placeholder="Nhập tên" class="form-control" v-model="contact.name">
                                    <span>{{ errors[0] }}</span>
                                </ValidationProvider>
                            </div>
                            <div class="form-group">
                                <label for="">Email:</label>
                                <ValidationProvider rules="required|email" v-slot="{ errors }">
                                    <input type="email" placeholder="Nhập email" class="form-control" v-model="contact.email">
                                    <span>{{ errors[0] }}</span>
                                </ValidationProvider>
                            </div>
                            <div class="form-group">
                                <label for="">Nội dung:</label>
                                <ValidationProvider rules="required" v-slot="{ errors }">
                                    <textarea placeholder="Nội dung" cols="30" rows="10" class="form-control" v-model="contact.content"></textarea>
                                    <span>{{ errors[0] }}</span>
                                </ValidationProvider>
                            </div>
                            <div class="text-center">
                                <button type="button" class="btn btn-default" @click.stop.prevent="addNewContact()">GỬI NGAY</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <div class="title-about-page">
                            <h4>Địa chỉ liên hệ</h4>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="contact-address">
                            <i class="fa fa-map-marker"></i>
                            <p>Tầng 12A - Tòa nhà Pico Plaza, 20 Cộng Hòa, Phường 12, Quận Tân Bình, TP Hồ Chí Minh</p>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="contact-address">
                            <i class="fa fa-phone"></i>
                            <p>028 62613377 - 028 38111144</p>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="contact-address">
                            <i class="fa fa-envelope"></i>
                            <p>info@polarisvietnam.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { ValidationProvider } from "vee-validate";

export default {
    components: { ValidationProvider },
    data(){
        return{
            contact:{
                name:'',
                email:'',
                content:'',
            }
        }
    },
    methods:{
        addNewContact(){
            var vm = this;
            vm.$axios.post(`${vm.$store.state.api}/web/contact`,vm.contact)
                .then(res => {
                    console.log(res)
                });
        }
    }
}
</script>