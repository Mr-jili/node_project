<template>
  <div id="app">
    <div class="layout">
      <Layout>
        <Header>
          <Menu mode="horizontal" theme="dark" active-name="1">
            <div class="node_img">
              <a href="/">
                <img :src="nodeImg">
              </a>
            </div>
            <Input
              v-model="value"
              clearable
              style="width: 300px;float:left;margin:16px 0 0 12px;border-radius: 12px;"
            >
              <Icon type="ios-search" slot="prefix"/>
            </Input>
            <div class="layout-nav">
              <MenuItem name="1">
                <router-link to="/">首页</router-link>
              </MenuItem>
              <MenuItem name="2">
                <router-link to="/getstart">新手入门</router-link>
              </MenuItem>
              <MenuItem name="3">
                <router-link to="/api">API</router-link>
              </MenuItem>
              <MenuItem name="4">
                <router-link to="/about">关于</router-link>
              </MenuItem>
              <MenuItem name="5">
                <router-link to="/register">注册</router-link>
              </MenuItem>
              <MenuItem name="6">
                <router-link to="/user">登录</router-link>
              </MenuItem>
            </div>
          </Menu>
        </Header>
      </Layout>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nodeImg: "https://static2.cnodejs.org/public/images/cnodejs_light.svg",
      value: ""
    };
  }
};
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
.layout {
  width: 100%;
  background: #444;
  position: relative;
  overflow: hidden;
  input{
    border-radius: 12px;
  }
}
.layout-logo {
  width: 100px;
  height: 30px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-nav {
  width: 450px;
  margin: 0 auto;
  margin-right: 20px;
  a {
    color: #ccc;
    &:hover {
      color: #fff;
    }
    &.router-link-exact-active {
      color: #fff;
    }
  }
}
.layout-footer-center {
  text-align: center;
}
.node_img {
  float: left;
  margin-top: 16px;
  a {
    display: block;
    width: 120px;
    height: 34px;
    line-height: 34px;
    color: #ccc;
    font-weight: 700;
  }
  ul,
  li {
    list-style: none;
  }
}
</style>
