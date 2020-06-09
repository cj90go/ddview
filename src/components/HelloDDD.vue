<template>
    <el-container>
        <el-header style="text-align: right; font-size: 16px">
            <vue-particles
                    color="#eccc2f"
                    :particleOpacity="0.7"
                    :particlesNumber="80"
                    shapeType="star"
                    :particleSize="4"
                    linesColor="#FFFFFF"
                    :linesWidth="2"
                    :lineLinked="true"
                    :lineOpacity="0.4"
                    :linesDistance="150"
                    :moveSpeed="3"
                    :hoverEffect="true"
                    hoverMode="grab"
                    :clickEffect="true"
                    clickMode="push"
             style="height: 60px;width: 80%"></vue-particles>
            <el-dropdown>
                <i class="el-icon-setting" style="margin-right: 15px;color: white;margin-top: 25px;"></i>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>登陆</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
            <span style="color: white">管理员</span>
        </el-header>
        <el-container class="aaaaa">
            <el-scrollbar>
                <el-aside width="200px">
                    <div class="toggle-button" @click="toggleCollapse">|||</div>
                    <el-menu :default-openeds="[]" unique-opened
                             :collapse="isCollapse"
                             :collapse-transition="false"
                             :router="true" class="el-menu-vertical-demo">
                        <el-submenu index="1">
                            <template slot="title"><i class="el-icon-box"></i>理论</template>
                            <el-menu-item-group>
                                                                <template slot="title"></template>
                                <el-menu-item index="1-1">编辑</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        <el-submenu index="2">
                            <template slot="title"><i class="el-icon-s-tools"></i>设计</template>
                            <el-menu-item-group>
                                <template slot="title"></template>
                                <el-menu-item index="2-1">实体</el-menu-item>
                                <el-menu-item index="2-2">聚合</el-menu-item>
                                <el-menu-item index="2-3">关联上下文</el-menu-item>
                                <el-menu-item index="2-4">领域服务</el-menu-item>
                                <el-menu-item index="2-5">应用服务</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                    </el-menu>
                </el-aside>
            </el-scrollbar>

            <el-main>
                <!--                <el-table height="250" :data="tableData">-->
                <!--                    <el-table-column prop="date" label="日期" width="140">-->
                <!--                    </el-table-column>-->
                <!--                    <el-table-column prop="name" label="姓名" width="120">-->
                <!--                    </el-table-column>-->
                <!--                    <el-table-column prop="address" label="地址">-->
                <!--                    </el-table-column>-->
                <!--                </el-table>-->
                <DDDTheory></DDDTheory>
            </el-main>
        </el-container>
    </el-container>

</template>

<script>
    import DDDTheory from "@/components/DDDTheory";

    export default {
        name: "HelloDDD",
        components: {
            DDDTheory
        },
        data() {
            const item = {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            };
            return {
                tableData: Array(20).fill(item),
                isCollapse: false,
            }
        },
        methods: {
            toggleCollapse() {
                this.isCollapse = !this.isCollapse
            }
        }
    }
</script>

<style scoped>
    .el-header {
        width: 100%;
        height: 60px;
        background-color: black;
    }

    .el-aside {
        display: block;
        height: 100%;
    }

    .el-container {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
    }

    .el-main {
        position: absolute;
        left: 200px;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        overflow-y: auto;
    }

    .aaaaa {
        position: absolute;
        left: 0;
        right: 0;
        top: 60px;
        bottom: 0;
        margin: auto;
    }

    .markdown-body {
        height: 100%;
        width: 100%;
    }

    .toggle-button {
        background-color: gray;
        font-size: 10px;
        line-height: 24px;
        color: #fff;
        text-align: center;
        letter-spacing: 0.2em;
        cursor: pointer;
    }

    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }

</style>