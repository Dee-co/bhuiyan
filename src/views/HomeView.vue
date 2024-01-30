<template>
  <div>
    <div class="hero_section d-flex align-center justify-center">
      <div>
        <p class="text-h6 text-lg-h2 font-weight-bold">We will help you find</p>
        <p class="text-h6 text-lg-h2 font-weight-bold">
          your <span class="text-red">Wonderful</span> home
        </p>
        <p class="mt-3">
          A great platform to buy, sell, and rent your properties without any
          agent or commissions.
        </p>
      </div>
    </div>
    <div class="search_section mx-8">
      <v-card class="px-4 py-5">
        <v-row class="ma-0 pa-0">
          <v-col cols="12" sm="12" lg="6" md="6">
            <v-tabs v-model="tabs" color="#2d3bc4" grow>
              <v-tab :value="1">
                <v-icon>mdi-home-circle</v-icon> &nbsp; Home
              </v-tab>

              <v-tab :value="2">
                <v-icon>mdi-domain</v-icon> &nbsp;Building
              </v-tab>

              <v-tab :value="3">
                <v-icon>mdi-bag-personal</v-icon> &nbsp;Proprties
              </v-tab>
            </v-tabs>
          </v-col>
          <v-col cols="12" sm="12" lg="3" md="6">
            <v-text-field
              density="compact"
              class="mt-1 lg:mt-4"
              variant="outlined"
              label="Search"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="12" lg="3" md="12">
            <v-select
              density="compact"
              class="mt-1 lg:mt-4"
              label="Select Locality"
              :items="['Raipur', 'Korba', 'Janjgir-Champa']"
              variant="outlined"
            ></v-select>
          </v-col>
          <v-col cols="12" sm="12" lg="3" md="12"> </v-col>
        </v-row>
        <v-row class="ma-0 pa-0">
          <v-col cols="12" sm="12" lg="3" md="12">
            <v-select
              density="compact"
              class="mt-1 lg:mt-4"
              label="Select Categories"
              :items="categories"
              variant="outlined"
            ></v-select>
          </v-col>
          <v-col cols="12" sm="12" lg="3" md="12">
            <v-select
              density="compact"
              class="mt-1 lg:mt-4"
              variant="outlined"
              label="Min Price"
              :items="price_options"
            ></v-select>
          </v-col>
          <v-col cols="12" sm="12" lg="3" md="12">
            <v-select
              density="compact"
              class="mt-1 lg:mt-4"
              label="Max Price"
              :items="price_options"
              variant="outlined"
            ></v-select>
          </v-col>
          <v-col cols="12" sm="12" lg="3" md="12">
            <v-btn
              block
              density="compact"
              class="mt-1 lg:mt-4"
              style=""
              height="39"
              color="#2d3bc4"
              >Search</v-btn
            >
          </v-col>
        </v-row>
      </v-card>
    </div>
    <div class="">
      <h1 class="text-center text-primary">Featured Properties</h1>
      <p class="text-center">
        A great plateform to buy, sell and rent your properties without any
        agent or commisions.
      </p>
    </div>
    <PropertyComponent :property_data="property_items"></PropertyComponent>
    <div class="my-12">
      <v-row class="mx-12">
        <v-col cols="12" sm="12" md="6" lg="6" class="d-flex justify-center">
          <div>
            <dotlottie-player
              src="https://lottie.host/848df121-097d-42a9-b7e6-52233e8c49ca/Zn3xsYO6Ns.json"
              background="transparent"
              speed="1"
              style="width: 300px; height: 300px"
              loop
              autoplay
            ></dotlottie-player>
          </div>
        </v-col>
        <v-col
          cols="12"
          sm="12"
          md="6"
          lg="6"
          class="d-flex justify-start align-center"
        >
          <div class="">
            <h2
              class="text-center text-lg-start text-md-start"
              style="color: #2d3bc4"
            >
              Efficiency. Transparency. Control.
            </h2>
            <p class="text-center text-lg-start text-md-start my-6">
              Hously developed a platform for the Real Estate marketplace that
              allows buyers and sellers to easily execute a transaction on their
              own. The platform drives efficiency, cost transparency and control
              into the hands of the consumers. Hously is Real Estate Redefined.
            </p>
            <div class="text-center text-lg-start text-md-start">
              <v-btn color="#2d3bc4"> Learn More </v-btn>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
    <div class="">
      <h1 class="text-center text-primary">How It Works</h1>
      <p class="text-center mt-2">
        A great plateform to buy, sell and rent your properties without any
        agent or commisions.
      </p>
    </div>
    <div>
      <v-row class="mx-4 mt-8 mb-6">
        <v-col
          cols="12"
          sm="12"
          lg="4"
          md="4"
          v-for="(detail, index) in details"
          :key="index"
        >
          <div class="mx-4">
            <p class="d-flex justify-center">
              <v-btn :icon="detail.icon" size="x-large" color="#F4FAF7"></v-btn>
            </p>
            <h3 class="text-center mt-4 mb-2">{{ detail.title }}</h3>
            <p class="text-center">{{ detail.content }}</p>
          </div>
        </v-col>
      </v-row>
    </div>
    <div class="" ref="contact_section">
      <h1 class="text-center text-primary">Have Question ? Get in touch!</h1>
      <p class="text-center mt-2">
        A great plateform to buy, sell and rent your properties without any agent or commisions.
      </p>
      <div class="text-center">
    <v-btn class="mt-4"
      prepend-icon="mdi-phone" color="#2d3bc4"
    >
      <template v-slot:prepend>
        <v-icon color="white"></v-icon>
      </template>
      Contact Us
    </v-btn>
  </div>

    </div>
    <div class="feedback_section mx-8">
      <v-card class="px-4 py-5">
        <v-row class="">
          <v-col cols="12" sm="12" lg="6" md="6">
            <p
              class="text-h5 font-weight-bold text-center text-lg-start text-md-start"
              style="color: #2d3bc4"
            >
              Feedback
            </p>
            <p class="mt-2 text-center text-lg-start text-md-start">
              "Share your valuable feedback with us and help us grow!".
            </p>
          </v-col>
          <v-col
            cols="12"
            sm="12"
            lg="6"
            md="6"
            class="mt-3 d-block d-lg-flex d-md-flex align-center"
          >
            <v-text-field
              variant="outlined"
              label="Share Feedback"
              hide-details="auto"
              density="compact"
              class="mt-1"
            ></v-text-field>

            <div class="text-center text-lg-start text-md-start">
              <v-btn class="mx-2 mt-1" color="#2d3bc4">Submit</v-btn>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </div>
  </div>
</template>
<script>
import { onMounted, ref ,inject} from "vue";
import ApiServices from "../../ApiServices";
import PropertyComponent from "@/components/PropertyComponent.vue";
export default {
  components: {
    PropertyComponent,
  },
  setup() {
    const eventBus = inject("eventBus");
    const property_items = ref([]);
    const contact_section = ref(null);
    const tabs = ref(1);
    const price_options = ref([
      "₹ 5 Lac",
      "₹ 10 Lac",
      "₹ 20 Lac",
      "₹ 30 Lac",
      "₹ 40 Lac",
      "₹ 50 Lac",
      "₹ 60 Lac",
      "₹ 70 Lac",
      "₹ 80 Lac",
      "₹ 90 Lac",
      "₹ 1 Cr",
      "₹ 1.2 Cr",
      "₹ 1.4 Cr",
      "₹ 1.6 Cr",
      "₹ 1.8 Cr",
      "₹ 2 Cr",
      "₹ 2.3 Cr",
      "₹ 2.6 Cr",
      "₹ 3 Cr",
      "₹ 3.5 Cr",
      "₹ 4 Cr",
      "₹ 4.5 Cr",
      "₹ 5 Cr",
      "₹ 10 Cr",
      "₹ 20 Cr",
    ]);
    const categories = ref([
      "House/Villa",
      "Flat",
      "Plot",
      "1 Bhk",
      "2 Bhk",
      "3 Bhk",
      "4+ Bhk",
      "Office Space",
      "Shop/Showroom",
      "Commercial Land",
      "Warehouse/Godown",
      "Industrial Building",
      "Industrial Shed",
      "Agricultural Land",
      "Farm House",
    ]);
    const details = ref([
      {
        icon: "mdi-home-account",
        title: "Evaluate Property",
        content:
          "If the distribution of letters and 'words' is random, the reader will not be distracted from making.",
      },
      {
        icon: "mdi-account-box-multiple",
        title: "Meeting with Agent",
        content:
          "If the distribution of letters and 'words' is random, the reader will not be distracted from making.",
      },
      {
        icon: "mdi-key",
        title: "Close the Deal",
        content:
          "If the distribution of letters and 'words' is random, the reader will not be distracted from making.",
      },
    ]);
    const getAllProperties = async () => {
      try {
        const get_response = await ApiServices.getAllProperties();
        console.log("fjkdfjkdsjfksf", get_response);
        property_items.value = get_response.result;
      } catch (error) {
        console.log(error);
      }
    };
    onMounted(() => {
      getAllProperties();
      eventBus.on('scroll_contactUs', () => {
      if (contact_section.value) {
        const startPosition = window.pageYOffset;
        const targetPosition = contact_section.value.getBoundingClientRect().top + window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 1000; // Adjust this value to change the duration of the animation

        const startTime = performance.now();
        const easeInOutQuad = (t) => t<.5 ? 2*t*t : -1+(4-2*t)*t;

        const animateScroll = (currentTime) => {
          const elapsedTime = currentTime - startTime;
          const scrollProgress = easeInOutQuad(Math.min(elapsedTime / duration, 1));
          window.scrollTo(0, startPosition + distance * scrollProgress);

          if (elapsedTime < duration) {
            requestAnimationFrame(animateScroll);
          }
        };

        requestAnimationFrame(animateScroll);
      }
      });
    });
    return {
      property_items,
      price_options,
      details,
      eventBus,
      categories,
      getAllProperties,
      contact_section,
      tabs,
    };
  },
};
</script>
<style>
.hero_section {
  height: 470px;
  background: url("../../public/hero-bg.jpg");
  background-size: cover;
  background-position: center;
  overflow: hidden;
  color: white;
  text-align: center;
  position: relative;
}

.search_section {
  position: relative;
  top: -50px;
  left: 0;
}
.v-input__details {
  display: none !important;
}
.feedback_section {
  position: relative;
  bottom: -20px;
  z-index: 20;
}
</style>
