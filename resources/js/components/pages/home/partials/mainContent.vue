<template>
  <div class="m-auto my-4" v-if="tab == 1">
    
    <div class="Polaris-Layout">

      <div class="Polaris-Layout__Section Polaris-Layout__Section--oneHalf">
        <div class="Polaris-Card height_adjust">
          <div class="Polaris-Card__Header">
            <div class="Polaris-Stack Polaris-Stack--alignmentBaseline">
              <div class="Polaris-Stack__Item Polaris-Stack__Item--fill">
                <h2 class="Polaris-Heading">TikTok Pixel Settings</h2>
              </div>

              <div class="Polaris-Stack__Item">
                <div class="Polaris-ButtonGroup">
                  <div class="dropdown">
                    <div class="Polaris-ButtonGroup__Item Polaris-ButtonGroup__Item--plain">
                      <a
                        class="Polaris-Link"
                        :href="`https://${shopName}/?pixelPreview=true`"
                        target="_blank"
                      >Test the Pixel in your store<span class="Polaris-Link__IconLockup"><span class="Polaris-Link__IconLayout"><span
                              class="Polaris-Icon"
                              aria-label="(opens a new window)"
                            ><svg
                                viewBox="0 0 20 20"
                                class="Polaris-Icon__Svg"
                                focusable="false"
                                aria-hidden="true"
                              >
                                <path d="M13 12a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H6c-.575 0-1-.484-1-1V7a1 1 0 0 1 1-1h1a1 1 0 0 1 0 2v5h5a1 1 0 0 1 1-1zm-2-7h4v4a1 1 0 1 1-2 0v-.586l-2.293 2.293a.999.999 0 1 1-1.414-1.414L11.586 7H11a1 1 0 0 1 0-2z"></path>
                              </svg></span></span></span></a><br>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="Polaris-Card__Section">
            <div class="Polaris-FormLayout">
              <div class="Polaris-FormLayout__Item">
                <div class="Polaris-Labelled__LabelWrapper">
                  <div class="Polaris-Label">
                    <label
                      class="Polaris-Label__Text"
                      for="pixel_status"
                    ><b>Pixel Tracking Enabled</b></label>
                    <label class="switch">
                      <input
                        type="checkbox"
                        id="pixel_status"
                        @click="(data.pixel_tracking_enabled == true) ? data.pixel_tracking_enabled = false : data.pixel_tracking_enabled = true "
                        :checked="data.pixel_tracking_enabled == true ? 'checked' : ''"
                        name="pixel_status"
                      >
                      <span
                        class="slider round"
                        id="grumble"
                      ></span>
                    </label>
                  </div>
                </div>
              </div>
              <div class="Polaris-FormLayout__Item">
                <div class="Polaris-Labelled__LabelWrapper">
                  <div class="Polaris-Label">
                    <label
                      class="Polaris-Label__Text"
                      for="pixel_status"
                    ><b>Pixel Code</b></label>
                    <div class="Polaris-TextField Polaris-TextField--hasValue Polaris-TextField--multiline"><textarea
                        maxlength="4000"
                        placeholder="Paste your TikTok Pixel code here"
                        class="Polaris-TextField__Input text_area"
                        aria-multiline="true"
                        style=""
                        id="pixel_code"
                        v-model="data.pixel_code"
                      ></textarea>
                      <div class="Polaris-TextField__Backdrop"></div>
                    </div>

                    <div>
                      <a
                        href="#"
                        class="Polaris-Link"
                        @click="showTiktokIdModal()"
                      >⚠ I only have the Pixel ID (Example: C3GTB5EPKKNB3CA8AU)</a>
                      <div id="PolarisPortalsContainer"></div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="Polaris-Layout__Section Polaris-Layout__Section--oneHalf ">
        <div class="Polaris-Card height_adjust">
          <div class="Polaris-Card__Header">
            <div class="Polaris-Stack Polaris-Stack--alignmentBaseline ">
              <div class="Polaris-Stack__Item Polaris-Stack__Item--fill">
                <h2 class="Polaris-Heading">Event Settings</h2>
              </div>
            </div>
          </div>

          <div class="Polaris-Card__Section">
            <div class="Polaris-FormLayout">
              <div class="Polaris-FormLayout__Item">
                <div class="Polaris-Labelled__LabelWrapper">
                  <div class="Polaris-Label">
                    <div style="--top-bar-background:#00848e; --top-bar-background-lighter:#1d9ba4; --top-bar-color:#f9fafb; --p-frame-offset:0px;">
                      <label class="Polaris-Choice">
                        <span class="Polaris-Choice__Control">
                          <span class="Polaris-Checkbox">
                            <input
                              id="pixel_pv_event"
                              name="pixel_pv_event"
                              type="checkbox"
                              @click="productDetailChange()"
                              :checked="data.track_Product_details_page_view == true ? 'checked' : ''"
                              class="Polaris-Checkbox__Input"
                              aria-invalid="false"
                              role="checkbox"
                              aria-checked="false"
                            >
                            <span class="Polaris-Checkbox__Backdrop"></span>
                            <span class="Polaris-Checkbox__Icon">
                              <span class="Polaris-Icon">
                                <svg
                                  viewBox="0 0 20 20"
                                  class="Polaris-Icon__Svg"
                                  focusable="false"
                                  aria-hidden="true"
                                >
                                  <path d="M8.315 13.859l-3.182-3.417a.506.506 0 0 1 0-.684l.643-.683a.437.437 0 0 1 .642 0l2.22 2.393 4.942-5.327a.437.437 0 0 1 .643 0l.643.684a.504.504 0 0 1 0 .683l-5.91 6.35a.437.437 0 0 1-.642 0"></path>
                                </svg>
                              </span>
                            </span>
                          </span>
                        </span>
                        <span class="Polaris-Choice__Label"><b>Track 'Product Details Page View' Events</b>
                          <label class="Polaris-Choice">
                            <span class="Polaris-Choice__Control">
                              <span class="Polaris-Checkbox">
                                <input
                                  id="pixel_pv_event_homepage"
                                  name="pixel_pv_event_homepage"
                                  type="checkbox"
                                  :disabled="!data.track_Product_details_page_view"
                                  class="Polaris-Checkbox__Input"
                                  @click="(data.track_Product_details_page_view_homepage == true) ? data.track_Product_details_page_view_homepage = false : data.track_Product_details_page_view_homepage = true"
                                  :checked="(data.track_Product_details_page_view_homepage == true) ? 'checked' : ''"
                                  aria-invalid="false"
                                  role="checkbox"
                                  aria-checked="false"
                                >
                                <span class="Polaris-Checkbox__Backdrop"></span>
                                <span class="Polaris-Checkbox__Icon">
                                  <span class="Polaris-Icon">
                                    <svg
                                      viewBox="0 0 20 20"
                                      class="Polaris-Icon__Svg"
                                      focusable="false"
                                      aria-hidden="true"
                                    >
                                      <path d="M8.315 13.859l-3.182-3.417a.506.506 0 0 1 0-.684l.643-.683a.437.437 0 0 1 .642 0l2.22 2.393 4.942-5.327a.437.437 0 0 1 .643 0l.643.684a.504.504 0 0 1 0 .683l-5.91 6.35a.437.437 0 0 1-.642 0"></path>
                                    </svg>
                                  </span>
                                </span>
                              </span>
                            </span>
                            <span class="Polaris-Choice__Label">Trigger the 'Product Details Page View' event in the homepage as well <span class="Polaris-Badge Polaris-Badge--statusSuccess"><span class="Polaris-Badge__Content">New</span></span></span>
                          </label>
                          <i>Triggers when customers view products pages</i>
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div class="Polaris-FormLayout__Item">
                <div class="Polaris-Labelled__LabelWrapper">
                  <div class="Polaris-Label">
                    <div style="--top-bar-background:#00848e; --top-bar-background-lighter:#1d9ba4; --top-bar-color:#f9fafb; --p-frame-offset:0px;">
                      <label class="Polaris-Choice">
                        <span class="Polaris-Choice__Control">
                          <span class="Polaris-Checkbox">
                            <input
                              id="pixel_atc_event"
                              name="pixel_atc_event"
                              type="checkbox"
                              @click="(data.track_add_to_cart == true) ? data.track_add_to_cart = false : data.track_add_to_cart = true"
                              :checked="data.track_add_to_cart == true ? 'checked' : ''"
                              class="Polaris-Checkbox__Input"
                              aria-invalid="false"
                              role="checkbox"
                              aria-checked="false"
                            >
                            <span class="Polaris-Checkbox__Backdrop"></span>
                            <span class="Polaris-Checkbox__Icon">
                              <span class="Polaris-Icon">
                                <svg
                                  viewBox="0 0 20 20"
                                  class="Polaris-Icon__Svg"
                                  focusable="false"
                                  aria-hidden="true"
                                >
                                  <path d="M8.315 13.859l-3.182-3.417a.506.506 0 0 1 0-.684l.643-.683a.437.437 0 0 1 .642 0l2.22 2.393 4.942-5.327a.437.437 0 0 1 .643 0l.643.684a.504.504 0 0 1 0 .683l-5.91 6.35a.437.437 0 0 1-.642 0"></path>
                                </svg>
                              </span>
                            </span>
                          </span>
                        </span>
                        <span class="Polaris-Choice__Label"><b>Track 'Add to Cart' Events</b><br><i>Triggers when customers add products to the cart</i></span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="Polaris-FormLayout__Item">
                <div class="Polaris-Labelled__LabelWrapper">
                  <div class="Polaris-Label">
                    <div style="--top-bar-background:#00848e; --top-bar-background-lighter:#1d9ba4; --top-bar-color:#f9fafb; --p-frame-offset:0px;">
                      <label class="Polaris-Choice">
                        <span class="Polaris-Choice__Control">
                          <span class="Polaris-Checkbox">
                            <input
                              id="pixel_pao_event"
                              name="pixel_pao_event"
                              @click="(data.track_initiate_checkout == true) ? data.track_initiate_checkout = false : data.track_initiate_checkout = true"
                              :checked="data.track_initiate_checkout == true ? 'checked' : ''"
                              type="checkbox"
                              class="Polaris-Checkbox__Input"
                              aria-invalid="false"
                              role="checkbox"
                              aria-checked="false"
                            >
                            <span class="Polaris-Checkbox__Backdrop"></span>
                            <span class="Polaris-Checkbox__Icon">
                              <span class="Polaris-Icon">
                                <svg
                                  viewBox="0 0 20 20"
                                  class="Polaris-Icon__Svg"
                                  focusable="false"
                                  aria-hidden="true"
                                >
                                  <path d="M8.315 13.859l-3.182-3.417a.506.506 0 0 1 0-.684l.643-.683a.437.437 0 0 1 .642 0l2.22 2.393 4.942-5.327a.437.437 0 0 1 .643 0l.643.684a.504.504 0 0 1 0 .683l-5.91 6.35a.437.437 0 0 1-.642 0"></path>
                                </svg>
                              </span>
                            </span>
                          </span>
                        </span>
                        <span class="Polaris-Choice__Label"><b>Track 'Initiate Checkout' Events</b><br><i>Triggers when customers click on the checkout button</i></span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="Polaris-FormLayout__Item">
                <div class="Polaris-Labelled__LabelWrapper">
                  <div class="Polaris-Label">
                    <div style="--top-bar-background:#00848e; --top-bar-background-lighter:#1d9ba4; --top-bar-color:#f9fafb; --p-frame-offset:0px;">
                      <label class="Polaris-Choice">
                        <span class="Polaris-Choice__Control">
                          <span class="Polaris-Checkbox">
                            <input
                              id="pixel_cp_event"
                              name="pixel_cp_event"
                              @click="trackPaymentChanged('parent')"
                              :checked="data.track_complate_payment == true ? 'checked' : ''"
                              type="checkbox"
                              class="Polaris-Checkbox__Input"
                              aria-invalid="false"
                              role="checkbox"
                              aria-checked="false"
                            >
                            <span class="Polaris-Checkbox__Backdrop"></span>
                            <span class="Polaris-Checkbox__Icon">
                              <span class="Polaris-Icon">
                                <svg
                                  viewBox="0 0 20 20"
                                  class="Polaris-Icon__Svg"
                                  focusable="false"
                                  aria-hidden="true"
                                >
                                  <path d="M8.315 13.859l-3.182-3.417a.506.506 0 0 1 0-.684l.643-.683a.437.437 0 0 1 .642 0l2.22 2.393 4.942-5.327a.437.437 0 0 1 .643 0l.643.684a.504.504 0 0 1 0 .683l-5.91 6.35a.437.437 0 0 1-.642 0"></path>
                                </svg>
                              </span>
                            </span>
                          </span>
                        </span>
                        <span class="Polaris-Choice__Label"><b>Track 'Complete Payment' Events</b><br>
                          <label class="Polaris-Choice">
                            <span class="Polaris-Choice__Control">
                              <span class="Polaris-Checkbox">
                                <input
                                  id="pixel_cp_event_details"
                                  name="pixel_cp_event_details"
                                  :disabled="!data.track_complate_payment"
                                  @click="trackPaymentChanged('child')"
                                  :checked="data.track_order_value_currency == true ? 'checked' : ''"
                                  type="checkbox"
                                  class="Polaris-Checkbox__Input"
                                  aria-invalid="false"
                                  role="checkbox"
                                  aria-checked="false"
                                >
                                <span class="Polaris-Checkbox__Backdrop"></span>
                                <span class="Polaris-Checkbox__Icon">
                                  <span class="Polaris-Icon">
                                    <svg
                                      viewBox="0 0 20 20"
                                      class="Polaris-Icon__Svg"
                                      focusable="false"
                                      aria-hidden="true"
                                    >
                                      <path d="M8.315 13.859l-3.182-3.417a.506.506 0 0 1 0-.684l.643-.683a.437.437 0 0 1 .642 0l2.22 2.393 4.942-5.327a.437.437 0 0 1 .643 0l.643.684a.504.504 0 0 1 0 .683l-5.91 6.35a.437.437 0 0 1-.642 0"></path>
                                    </svg>
                                  </span>
                                </span>
                              </span>
                            </span>
                            <span class="Polaris-Choice__Label">Track the Order's Total Value and Currency type <span class="Polaris-Badge Polaris-Badge--statusSuccess"><span class="Polaris-Badge__Content">New</span></span></span>
                          </label>
                          <br>
                          <i>Triggers when customers reach to the "Thank you" page after payment</i></span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>

  </div>
</template>

<script>
import TiktokIdModal from "./tiktokIdModal.vue";
export default {
  components: { TiktokIdModal },
  props: {
    data: Object,
    tiktokIdModalShow: Boolean,
    shopName: String,
    tab : Number
  },
  data() {
    return {
      mutateData: {},
      mutatetiktokIdModalShow: false,
    };
  },
  methods: {
    productDetailChange() {
      this.data.track_Product_details_page_view =
        this.data.track_Product_details_page_view == true ? false : true;
      if (!this.data.track_Product_details_page_view) {
        this.data.track_Product_details_page_view_homepage = false;
      }
    },
    trackPaymentChanged(type) {
      if (type == "parent") {
        this.data.track_complate_payment =
          this.data.track_complate_payment == true ? false : true;
        if (!this.data.track_complate_payment) {
          this.data.track_order_value_currency = false;
        }
      }

      if (type == "child") {
        if (this.data.track_complate_payment) {
          this.data.track_order_value_currency == true
            ? (this.data.track_order_value_currency = false)
            : (this.data.track_order_value_currency = true);
        } else {
          this.data.track_order_value_currency = true;
        }
      }
    },
    showTiktokIdModal() {
      this.$parent.changeModalState("tiktokIdModalShow", "show");
    },
  },
  created() {},
  watch: {
    mutateData: {
      handler: function (val, oldVal) {
        // this.changeData();
        // console.log("changed");
      },
      deep: true,
    },
  },
};
</script>

<style scoped>
.height_adjust {
  height: 40rem;
}

.text_area {
  width: 500px;
  height: 200px;
}
.text_area::-webkit-scrollbar {
  width: 10px;
  background: white;
}
.text_area::-webkit-scrollbar-thumb {
  background: rgba(170, 158, 158, 0.541);
  height: 25px;
  -webkit-border-radius: 3px;
  border-radius: 3px;
}
@media (max-width: 1010px) {
  .text_area {
    width: auto;
  }
}
/* .event_box{
    margin: 0;
    margin-top: 5px;
    border-radius: unset !important;
    border: none !important;
    box-shadow: none !important;
  } */
</style>