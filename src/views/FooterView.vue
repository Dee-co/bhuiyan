<template>
  <div>
    <v-footer class="footer_section pt-6">
      <v-row class="mx-3">
        <v-col cols="12" md="3" lg="3" sm="6">
          <div class="footer-brand">
            <v-img
              src="../../public/yk_logo.png"
              max-width="50px"
              style="background-position: center"
            ></v-img>
            <p class="footer-text text-white">
              A great platform to buy, sell, and rent your properties without
              any agent or commissions.
            </p>
          </div>
        </v-col>
        <v-col cols="12" md="3" lg="3" sm="6" >
          <v-list density="compact" style="background-color: transparent">
            <v-list-subheader class="text-white">Company</v-list-subheader>

            <v-list-item
              v-for="(item, i) in companyLinks"
              :key="i"
              :value="item"
              class="text-white"
              color="primary"
            >
              <template v-slot:prepend>
                <v-icon :icon="item.icon" class="text-white"></v-icon>
              </template>

              <v-list-item-title
                v-text="item.text"
                class="text-white"
              ></v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col cols="12" md="3" lg="3" sm="6">
          <v-list density="compact" style="background-color: transparent">
            <v-list-subheader class="text-white">Useful Links</v-list-subheader>

            <v-list-item
              v-for="(item, i) in usefulLinks"
              :key="i"
              :value="item"
              color="primary"
            >
              <template v-slot:prepend>
                <v-icon :icon="item.icon" class="text-white"></v-icon>
              </template>
              <v-list-item-title
                v-text="item.text"
                class="text-white"
              ></v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col cols="12" md="3" lg="3" sm="6">
          <v-list density="compact" style="background-color: transparent">
            <v-list-subheader class="text-white"
              >Contact Details</v-list-subheader
            >

            <v-list-item
              v-for="(item, i) in items"
              :key="i"
              :value="item"
              color="primary"
            >
              <template v-slot:prepend>
                <v-icon :icon="item.icon" class="text-white"></v-icon>
              </template>

              <v-list-item-title
                v-text="item.text"
                class="text-white"
              ></v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-footer>
  </div>
  <div style="background-color: black">
    <v-divider :thickness="3" color="#fff"></v-divider>
    <v-row class=" pt-3">
        <v-col cols="12" md="6" sm="12" lg="6" class="d-flex justify-center lg:justify-start  md:justify-start">
            <p class="text-white">© 2024 . All Right Reserved by ...............</p>
        </v-col>
        <v-col cols="12" md="6" sm="12" lg="6" class="d-flex justify-center lg:justify-end  md:justify-end">
           <div v-for="(icon,index) in socialIcons" :key="index" class="mx-2">
            <v-btn density="comfortable" :icon="icon"></v-btn>
           </div>
        </v-col>
    </v-row>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      companyLinks: [
        { text: "About us", icon: "mdi-information" },
        { text: "Services", icon: "mdi-cogs" },
        { text: "Pricing", icon: "mdi-currency-usd" },
        { text: "Blog", icon: "mdi-newspaper" },
        { text: "Login", icon: "mdi-login" },
      ],
      usefulLinks: [
        { text: "Terms of Services", icon: "mdi-file-document" },
        { text: "Privacy Policy", icon: "mdi-lock" },
        { text: "Listing", icon: "mdi-circle" },
        { text: "Contact", icon: "mdi-phone" },
      ],
      socialIcons: [
        "mdi-facebook",
        "mdi-instagram",
        "mdi-twitter",
        "mdi-linkedin",
      ],
      items: [
        { text: "Raipur", icon: "mdi-map-marker" },
        { text: "contact@gmail.com", icon: "mdi-mail" },
        { text: "+910000000", icon: "mdi-phone" },
      ],
    };
  },
};
</script>
  
  <style >
.v-list-item__prepend {
  width: 30px !important;
}
.footer_section {
  padding-block: 9%;
  background: black !important;
}
</style>
  