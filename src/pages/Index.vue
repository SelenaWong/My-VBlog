<template>
    <Layout>
<!--        <section class="main-content">-->
<!--            <el-row>-->
<!--                <el-col :span="6" style="padding-right:10px">-->
<!--                    <sidebar></sidebar>-->
<!--                </el-col>-->
<!--                <el-col :span="18" style="padding-left:10px">-->
<!--                  -->
<!--                </el-col>-->
<!--            </el-row>-->
<!--        </section>-->
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

        }
    }
</script>

<style>
    .home-links a {
        margin-right: 1rem;
    }
</style>
