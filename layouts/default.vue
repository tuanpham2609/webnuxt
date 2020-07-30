<template>
  <div>
    <section class="main">
      <HeaDer />
      <section class="wrapper">
        <Nuxt />
      </section>
      <FooTer />
    </section>
  </div>
</template>
<script>
import HeaDer from "../components/header";
import FooTer from "../components/footer";

export default {
  components: {
    HeaDer,FooTer
  }
}
</script>
