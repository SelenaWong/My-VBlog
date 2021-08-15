<template>
    <div style="border-top: 1px #e1e4e8 solid !important;padding: 45px 0px 45px 0px;">
        <el-row>
            <el-col :span="10">
                <div>
                    © 2018 GitHub-Laziji&emsp;&emsp;
                    <g-link to="https://github.com/GitHub-Laziji" target="_blank">Profile</g-link>&emsp;&emsp;
                    <g-link to="https://github.com/GitHub-Laziji/vblog" target="_blank">VBlog</g-link>
                </div>
            </el-col>
            <el-col :span="4">
                <div style="text-align: center;font-size: 18px">
                    <i class="el-icon-location-outline"></i>
                </div>
            </el-col>
            <el-col :span="10">
                <div style="float: right;">
                    <g-link to="https://developer.github.com" target="_blank">GitHub-API</g-link>&emsp;&emsp;
                    <g-link to="https://cn.vuejs.org/" target="_blank">Vue.js</g-link>&emsp;&emsp;
                    <g-link to="http://element.eleme.io/" target="_blank">Element</g-link>

                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    export default {
        name: 'Foot',
        data() {
            return {}
        },
        methods: {}
    }
</script>
