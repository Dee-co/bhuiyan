<template>
  <div class="mt-7">
    <swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="10"
      :breakpoints="{
        '320': {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        '640': {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        '768': {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        '1024': {
          slidesPerView: 4,
          spaceBetween: 10,
        },
      }"
      class="mx-3 my-3"
    >
      <swiper-slide
        v-for="(item, index) in property_data"
        :key="index"
        :style="{
          border: index == activeIndex ? '1px solid green' : 'initial',
        }"
        class="rounded"
      >
        <div @click="setActive(index, item)" class="border rounded">
          <img
            v-if="item.pi_name != null"
            :src="`http://54.82.47.83:5000/api/property/accessPropertyImages/${getPiName(
              item
            )}`"
            alt=""
            width="100%"
            height="200px"
          />
          <img
            v-else
            :src="`https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg`"
            alt=""
            width="100%"
            height="200px"
          />

          <!-- <p
          class="text-center font-weight-bold"
          :style="{ color: index == activeIndex ? 'green' : 'initial' }"
        >
          {{ item.name }}
        </p> -->
          <div class="px-4 mt-0 pointer">
            <p class="font-weight-bold" style="text-transform: capitalize">
              {{ item.property_name }}
            </p>
            <p style="text-transform: capitalize" class="text-font my-1">
              <v-icon
                size="small"
                color="blue-darken-2"
                icon="mdi-map-marker"
              ></v-icon
              >{{ item.property_address }}
            </p>
            <p class="text-font font-weight-bold mx-1 mt-1" style="color: blue">
              &#8377;{{ formatCurrency(item.property_price) }}
            </p>

            <v-rating
              half-increments
              hover
              readonly
              :length="5"
              size="x-small"
              :model-value="item.property_rating"
              color="black"
              active-color="yellow-accent-4"
            />
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
      <script>
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
export default {
  emits: ["getActiveId"],
  props: {
    property_data: {
      type: Array,
      required: true,
    },
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const getPiName = (item) => {
      return item.pi_name.split(",")[0];
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    const formatCurrency = (amount) => {
      if (amount >= 10000000) {
        const crore = Math.floor(amount / 10000000);
        const remainder = amount % 10000000;
        const formattedAmount =
          crore + " cr" + (remainder ? " " + formatCurrency(remainder) : "");
        return formattedAmount;
      } else if (amount >= 100000) {
        const lakh = Math.floor(amount / 100000);
        const remainder = amount % 100000;
        const formattedAmount =
          lakh + " Lakh" + (remainder ? " " + formatCurrency(remainder) : "");
        return formattedAmount;
      } else if (amount >= 1000) {
        const thousand = Math.floor(amount / 1000);
        const remainder = amount % 1000;
        const formattedAmount =
          thousand + "k" + (remainder ? " " + formatCurrency(remainder) : "");
        return formattedAmount;
      } else {
        return amount.toString();
      }
    };
    return {
      quantity: 1,
      onSwiper,
      getPiName,
      onSlideChange,
      formatCurrency,
      activeIndex: null,
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },
  mounted() {},
  methods: {
    setActive(index, detail) {
      this.activeIndex = index;
    },
    truncatedata(data) {
      const final_data = data.slice(0, 50);
      return final_data + " ...";
    },
  },
};
</script>
    <style>
.active-slide {
  border: 1px solid green;
}

.text-green {
  color: green;
}
.text-font {
  font-size: small;
  font-weight: 400;
  color: #000;
}
</style>