<!--  -->
<template>
  <div class="register">
    <div class="auth-form-body">
      <div class="border-bottom border-gray-light">
        <div style="background-color: #ffffff" class="CircleBadge CircleBadge--medium mx-auto">
          <img
            class="CircleBadge-icon"
            alt="cnode logo"
            width="50"
            height="50"
            src="https://avatars0.githubusercontent.com/oa/72806?s=120&amp;u=edd4b1f1b0a583daeeaf69ccf62e621b1b36e680&amp;v=4"
          >
        </div>
        <p>
          Sign in to
          <strong>GitHub</strong>
          <br>to continue to
          <strong>cnode</strong>
        </p>
      </div>
      <Form ref="formInline" :model="formInline" :rules="ruleInline">
        <FormItem label="Username" prop="user" style="margin-bottom:15px;">
          <Input type="text" v-model="formInline.user"/>
        </FormItem>
        <FormItem
          label="email address"
          prop="mail"
          class="marginBottom"
          style="margin-bottom:15px;"
        >
          <Input v-model="formInline.mail"></Input>
        </FormItem>
        <FormItem label="Password" prop="password" class="marginBottom" style="margin-bottom:15px;">
          <Input type="password" v-model="formInline.password"/>
        </FormItem>
        <FormItem>
          <Button
            type="primary"
            style="margin-top: 18px;"
            @click="handleSubmit('formInline')"
            long
          >Sign in</Button>
        </FormItem>
      </Form>
    </div>

    <div class="githup_link">
      <a class="header-logo" href="https://github.com/">
        <svg
          height="48"
          class="octicon octicon-mark-github"
          viewBox="0 0 16 16"
          version="1.1"
          width="48"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
          ></path>
        </svg>
      </a>
    </div>
  </div>
</template>

<script>
import axios from "@/api/index";
export default {
  data() {
    return {
      formInline: {
        user: "",
        mail: "",
        password: ""
      },
      ruleInline: {
        user: [
          {
            required: true,
            message: "Please fill in the user name",
            trigger: "blur"
          }
        ],
        mail: [
          {
            required: true,
            message: "Mailbox cannot be empty",
            trigger: "blur"
          },
          { type: "email", message: "Incorrect email format", trigger: "blur" }
        ],
        password: [
          {
            required: true,
            message: "Please fill in the password.",
            trigger: "blur"
          },
          {
            type: "string",
            min: 6,
            message: "The password length cannot be less than 6 bits",
            trigger: "blur"
          }
        ]
      }
    };
  },
  created() {},
  methods: {
    handleSubmit(name) {
      console.log(this.formInline.password)
      this.$refs[name].validate(valid => {
        if (valid) {
          axios
            .post("./register", {
              nickname: this.formInline.user,
              email: this.formInline.mail,
              passworld: this.formInline.password
            })
            .then(res => {
              if (res.data.result_code == 0) {
                this.$Message.success(res.data.result_msg)
              }
            });
        } else {
          this.$Message.error("请填全注册信息!");
        }
      });
    }
  }
};
</script>
<style lang="less">
.register {
  margin: 130px auto;
  width: 266px;
  height: 460px;
  border: 2px solid #eee;
  .auth-form-body {
    width: 266px;
    height: 164px;
    padding: 20px 20px;
    text-align: center;
    .border-gray-light {
      padding: 16px 0;
    }
  }
  .githup_link {
    position: absolute;
    top: 100px;
    left: 50%;
    a {
      margin-left: -24px;
    }
  }
  label {
    font-weight: bold;
  }
}
</style>