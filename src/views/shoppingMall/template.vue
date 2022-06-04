<template>
    <div style="height: 100%">
        <shopping-header></shopping-header>
        <router-view></router-view>
        <shopping-footer></shopping-footer>
        <Backtop />

    </div>
</template>

<script>
    import shoppingHeader from "../../components/shoppingMall/Header";
    import shoppingFooter from "../../components/shoppingMall/Footer";
    import Backtop from "../../components/Backtop";
    export default {
        name: "template.vue",
        components:{shoppingHeader, shoppingFooter, Backtop},
    }
</script>

<style scoped>

</style>
