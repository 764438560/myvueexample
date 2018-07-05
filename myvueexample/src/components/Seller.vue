<template>
    <div>
      seller
      <!--{{seller}}-->
    </div>
</template>
<script>
    export default {
      // props:[
      //   'seller'
      // ],
      mounted () {
        console.log('seller',this.$route.query.seller)
      }
    }
</script>
<style>

</style>
