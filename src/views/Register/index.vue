<template>
    <section class="section pt-50">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title">
                        <h5>注册</h5>
                    </div>
                </div>
            </div>

            <div class="row mb-20">
                <div class="col-lg-8 mt-30">
                    <div class="contact">
                        <div class="google-map"></div>
                        <form action="assets/php/mail.php" class="widget-form contact_form" method="POST"
                            id="main_contact_form">
                            <div class="form-group">
                                <input type="email" name="email" id="email" v-model="email" class="form-control"
                                    placeholder="邮箱*" required="required" />
                            </div>

                            <div class="form-group">
                                <input type="password" name="password" id="password" v-model="password"
                                    class="form-control" placeholder="密码*" required="required" />
                            </div>

                            <div class="form-group">
                                <input type="password" name="confirm_password" id="confirm_password"
                                    v-model="confirm_password" class="form-control" placeholder="确认密码*"
                                    required="required" />
                            </div>

                            <button type="button" name="submit" @click="register" class="btn-custom">
                                注册
                            </button>

                            <span class="to-register">
                                已有账号?
                                <router-link class="go" to="/login">去登录</router-link>
                            </span>
                        </form>
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
            email: '',
            password: '',
            confirm_password: ''
        };
    },
    methods: {
        register() {
            const { email, password, confirm_password } = this;
            console.log(email, password, confirm_password);
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