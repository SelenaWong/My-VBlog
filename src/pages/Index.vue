<template>
    <Layout>
        <app-main></app-main>
    </Layout>
</template>

<script>
    import Sidebar from '../components/Sidebar'
    import AppMain from '../components/AppMain'
    import Foot from '../components/Foot'

    export default {
        components: {
            Sidebar,
            AppMain,
            Foot
        },
        metaInfo: {
            title: 'Hello, world!'
        },
        created() {
           this.$router.push('/user/new/main')
        }
    }
</script>

<style>
    .home-links a {
        margin-right: 1rem;
    }
</style>
