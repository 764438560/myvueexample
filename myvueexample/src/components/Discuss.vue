<template>
    <div>
        discuss
      <!--{{discuss}}-->
    </div>
</template>
<script>
    export default {
      // props: ['discuss'],
      mounted () {
        console.log("discuss",this.$route.query.discuss)
      }
    }
</script>
<style>

</style>
