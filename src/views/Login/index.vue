<template>
    <section class="section pt-50">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title">
                        <h5>登录</h5>
                    </div>
                </div>
            </div>

            <div class="row mb-20">
                <div class="col-lg-8 mt-30">
                    <div class="contact">
                        <div class="google-map"></div>
                        <!-- <form action="assets/php/mail.php" class="widget-form contact_form" method="POST"
                            id="main_contact_form">


                            <div class="form-group">
                                <input type="email" name="email" id="email" v-model="email" class="form-control"
                                    placeholder="邮箱*" required="required" />
                            </div>

                            <div class="form-group">
                                <input type="password" name="password" id="password" v-model="password"
                                    class="form-control" placeholder="密码*" required="required" />
                            </div>

                            <button type="button" name="submit" @click="login" class="btn-custom">
                                登录
                            </button>

                            <span class="to-register">
                                没有账号?
                                <router-link class="go" to="/register">去注册</router-link>
                            </span>
                        </form> -->



                        <el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="100px"
                            class="demo-ruleForm">

                            <el-form-item label="邮箱*" prop="email">
                                <el-input v-model="loginForm.email"></el-input>
                            </el-form-item>
                            <el-form-item label="密码*" prop="password">
                                <el-input v-model="loginForm.password"></el-input>
                            </el-form-item>

                            <el-form-item>
                                <!-- <el-button  @click="loginForm('loginForm')" class="btn-custom">登录
                                </el-button> -->
                                <button type="button" name="submit" @click="loginForm('loginForm')" class="btn-custom">
                                    登录
                                </button>

                                <span class="to-register">
                                    没有账号?
                                    <router-link class="go" to="/register">去注册</router-link>
                                </span>

                            </el-form-item>
                        </el-form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Contact",
    data() {
        return {
            loginForm: {
                email: '',
                password: ''
            },
            rules: {
                email: [
                    { required: true, message: '请输入活动名称', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入活动名称', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ]
            }
        };
    },
    methods: {
        login() {
            const { email, password } = this;
            console.log(email, password);
        }
    }
};
</script>

<style scoped lang="less">
.to-register {
    float: right;
    margin-top: 10px;
    .go {
        text-decoration: underline;
    }
}
</style>