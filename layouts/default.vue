<template>
  <div>
    <div id="loading-box" class="text-center" v-if="$store.state.loading">
      <img src="/images/loading.gif" />
    </div>
    <section class="main">
      <HeaDer />
      <section class="wrapper">
        <Nuxt />
      </section>
      <FooTer />
    </section>
  </div>
</template>
<style  scope>
  #loading-box{
    z-index: 100000000000;
    background: #ffffff78;
    position: fixed;
    height: 100%;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50% , -50%);
    transition: all .4s ease-out;
    opacity: 1;
    height: 100%;
  }
  #loading-box img{
    max-width: 120px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  #loading-box.close{
    opacity: 0;
    display: none;
  }
</style>
<script>
import HeaDer from "../components/header";
import FooTer from "../components/footer";

export default {
  components: {
    HeaDer,FooTer 
  }
}
</script>
