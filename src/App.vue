<template>
  <v-layout>
    <v-app-bar app>
      <v-toolbar-title>
        <img src="../public/yk_logo.png" class="my_logo" alt="logo" />
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <div class="d-none d-sm-flex" v-for="(item, index) in items" :key="index">
        <v-btn
          class="btn_style"
          variant="plain"
          @click="moveToRouter(item, index)"
          :class="{ 'active-btn': tab === index }"
        >
          {{ item }}
        </v-btn>
      </div>

      <v-app-bar-nav-icon
        @click="drawer = true"
        class="d-flex d-sm-none"
      ></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item v-for="(item, index) in items" :key="index">
          <v-list-item-title
            @click="moveToRouter(item, index)"
            :class="{ 'active-sidebtn': tab === index }"
            style="cursor: pointer"
            >{{ item }}</v-list-item-title
          >
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <div class="mx-4">
        <router-view></router-view>
      </div>
      <FooterViewVue></FooterViewVue>
    </v-main>
  </v-layout>
</template>
<script>
import { ref,inject } from 'vue';
import FooterViewVue from "./views/FooterView.vue";
import { useRouter, useRoute } from "vue-router";
export default {
  el: "#app",
  components: {
    FooterViewVue,
  },
  setup(){
    const eventBus = inject("eventBus");
    const drawer = ref(false);
    const tab = ref(null);
    const router = useRouter();
    const items = ref([
        "Home",
        "Bhuiyan web",
        "EMI Calculator",
        "Blog Post",
        "Contact Us",
      ]);
      const moveToRouter = (item, index)=>{
        tab.value = index;
      if (item === "Home") {
        router.push({ name: "home" });
      } else if (item === "Bhuiyan web") {
        window.location.href = "https://bhuiyan.cg.nic.in/";
      } else if (item === "EMI Calculator") {
        router.push({ name: "emiCalculator" });
      } else if (item === "Blog Post") {
        router.push({ name: "blogPost" });
      } else if (item === "Contact Us") {
        router.push({ name: "home" });
        eventBus.emit("scroll_contactUs");
      }
      }
    return{
      drawer,
      router,
      tab,
      items,
      eventBus,
      moveToRouter
    }
  }
};
</script>
<style>
::-webkit-scrollbar {
  display: none;
}
.btn_style {
  text-transform: capitalize !important;
  background: none;
  color: #2d3bc4 !important;
}
.btn_style:hover {
  background: none;
  color: rgb(131, 77, 246);
}
.my_logo {
  width: 3em;
  position: fixed;
  z-index: 10;
  top: 1px;
  background: black;
  border-radius: 59%;
}
.active-btn {
  color: rgb(3, 69, 100) !important;
}
.active-sidebtn {
  /* background-color: black; */
  color: #2d3bc4 !important;
}
</style>