<template>
  <div>
    <div>
      <div style="--p-background:rgba(246, 246, 247, 1); --p-background-hovered:rgba(241, 242, 243, 1); --p-background-pressed:rgba(237, 238, 239, 1); --p-background-selected:rgba(237, 238, 239, 1); --p-surface:rgba(255, 255, 255, 1); --p-surface-neutral:rgba(228, 229, 231, 1); --p-surface-neutral-hovered:rgba(219, 221, 223, 1); --p-surface-neutral-pressed:rgba(201, 204, 208, 1); --p-surface-neutral-disabled:rgba(241, 242, 243, 1); --p-surface-neutral-subdued:rgba(246, 246, 247, 1); --p-surface-subdued:rgba(250, 251, 251, 1); --p-surface-disabled:rgba(250, 251, 251, 1); --p-surface-hovered:rgba(246, 246, 247, 1); --p-surface-pressed:rgba(241, 242, 243, 1); --p-surface-depressed:rgba(237, 238, 239, 1); --p-surface-search-field:rgba(241, 242, 243, 1); --p-backdrop:rgba(0, 0, 0, 0.5); --p-overlay:rgba(255, 255, 255, 0.5); --p-shadow-from-dim-light:rgba(0, 0, 0, 0.2); --p-shadow-from-ambient-light:rgba(23, 24, 24, 0.05); --p-shadow-from-direct-light:rgba(0, 0, 0, 0.15); --p-hint-from-direct-light:rgba(0, 0, 0, 0.15); --p-border:rgba(140, 145, 150, 1); --p-border-neutral-subdued:rgba(186, 191, 195, 1); --p-border-hovered:rgba(153, 158, 164, 1); --p-border-disabled:rgba(210, 213, 216, 1); --p-border-subdued:rgba(201, 204, 207, 1); --p-border-depressed:rgba(87, 89, 89, 1); --p-border-shadow:rgba(174, 180, 185, 1); --p-border-shadow-subdued:rgba(186, 191, 196, 1); --p-divider:rgba(225, 227, 229, 1); --p-icon:rgba(92, 95, 98, 1); --p-icon-hovered:rgba(26, 28, 29, 1); --p-icon-pressed:rgba(68, 71, 74, 1); --p-icon-disabled:rgba(186, 190, 195, 1); --p-icon-subdued:rgba(140, 145, 150, 1); --p-text:rgba(32, 34, 35, 1); --p-text-disabled:rgba(140, 145, 150, 1); --p-text-subdued:rgba(109, 113, 117, 1); --p-interactive:rgba(44, 110, 203, 1); --p-interactive-disabled:rgba(189, 193, 204, 1); --p-interactive-hovered:rgba(31, 81, 153, 1); --p-interactive-pressed:rgba(16, 50, 98, 1); --p-icon-interactive:rgba(44, 110, 203, 1); --p-focused:rgba(69, 143, 255, 1); --p-surface-selected:rgba(242, 247, 254, 1); --p-surface-selected-hovered:rgba(237, 244, 254, 1); --p-surface-selected-pressed:rgba(229, 239, 253, 1); --p-icon-on-interactive:rgba(255, 255, 255, 1); --p-text-on-interactive:rgba(255, 255, 255, 1); --p-action-secondary:rgba(255, 255, 255, 1); --p-action-secondary-disabled:rgba(255, 255, 255, 1); --p-action-secondary-hovered:rgba(246, 246, 247, 1); --p-action-secondary-pressed:rgba(241, 242, 243, 1); --p-action-secondary-depressed:rgba(109, 113, 117, 1); --p-action-primary:rgba(0, 128, 96, 1); --p-action-primary-disabled:rgba(241, 241, 241, 1); --p-action-primary-hovered:rgba(0, 110, 82, 1); --p-action-primary-pressed:rgba(0, 94, 70, 1); --p-action-primary-depressed:rgba(0, 61, 44, 1); --p-icon-on-primary:rgba(255, 255, 255, 1); --p-text-on-primary:rgba(255, 255, 255, 1); --p-text-primary:rgba(0, 123, 92, 1); --p-text-primary-hovered:rgba(0, 108, 80, 1); --p-text-primary-pressed:rgba(0, 92, 68, 1); --p-surface-primary-selected:rgba(241, 248, 245, 1); --p-surface-primary-selected-hovered:rgba(179, 208, 195, 1); --p-surface-primary-selected-pressed:rgba(162, 188, 176, 1); --p-border-critical:rgba(253, 87, 73, 1); --p-border-critical-subdued:rgba(224, 179, 178, 1); --p-border-critical-disabled:rgba(255, 167, 163, 1); --p-icon-critical:rgba(215, 44, 13, 1); --p-surface-critical:rgba(254, 211, 209, 1); --p-surface-critical-subdued:rgba(255, 244, 244, 1); --p-surface-critical-subdued-hovered:rgba(255, 240, 240, 1); --p-surface-critical-subdued-pressed:rgba(255, 233, 232, 1); --p-surface-critical-subdued-depressed:rgba(254, 188, 185, 1); --p-text-critical:rgba(215, 44, 13, 1); --p-action-critical:rgba(216, 44, 13, 1); --p-action-critical-disabled:rgba(241, 241, 241, 1); --p-action-critical-hovered:rgba(188, 34, 0, 1); --p-action-critical-pressed:rgba(162, 27, 0, 1); --p-action-critical-depressed:rgba(108, 15, 0, 1); --p-icon-on-critical:rgba(255, 255, 255, 1); --p-text-on-critical:rgba(255, 255, 255, 1); --p-interactive-critical:rgba(216, 44, 13, 1); --p-interactive-critical-disabled:rgba(253, 147, 141, 1); --p-interactive-critical-hovered:rgba(205, 41, 12, 1); --p-interactive-critical-pressed:rgba(103, 15, 3, 1); --p-border-warning:rgba(185, 137, 0, 1); --p-border-warning-subdued:rgba(225, 184, 120, 1); --p-icon-warning:rgba(185, 137, 0, 1); --p-surface-warning:rgba(255, 215, 157, 1); --p-surface-warning-subdued:rgba(255, 245, 234, 1); --p-surface-warning-subdued-hovered:rgba(255, 242, 226, 1); --p-surface-warning-subdued-pressed:rgba(255, 235, 211, 1); --p-text-warning:rgba(145, 106, 0, 1); --p-border-highlight:rgba(68, 157, 167, 1); --p-border-highlight-subdued:rgba(152, 198, 205, 1); --p-icon-highlight:rgba(0, 160, 172, 1); --p-surface-highlight:rgba(164, 232, 242, 1); --p-surface-highlight-subdued:rgba(235, 249, 252, 1); --p-surface-highlight-subdued-hovered:rgba(228, 247, 250, 1); --p-surface-highlight-subdued-pressed:rgba(213, 243, 248, 1); --p-text-highlight:rgba(52, 124, 132, 1); --p-border-success:rgba(0, 164, 124, 1); --p-border-success-subdued:rgba(149, 201, 180, 1); --p-icon-success:rgba(0, 127, 95, 1); --p-surface-success:rgba(174, 233, 209, 1); --p-surface-success-subdued:rgba(241, 248, 245, 1); --p-surface-success-subdued-hovered:rgba(236, 246, 241, 1); --p-surface-success-subdued-pressed:rgba(226, 241, 234, 1); --p-text-success:rgba(0, 128, 96, 1); --p-decorative-one-icon:rgba(126, 87, 0, 1); --p-decorative-one-surface:rgba(255, 201, 107, 1); --p-decorative-one-text:rgba(61, 40, 0, 1); --p-decorative-two-icon:rgba(175, 41, 78, 1); --p-decorative-two-surface:rgba(255, 196, 176, 1); --p-decorative-two-text:rgba(73, 11, 28, 1); --p-decorative-three-icon:rgba(0, 109, 65, 1); --p-decorative-three-surface:rgba(146, 230, 181, 1); --p-decorative-three-text:rgba(0, 47, 25, 1); --p-decorative-four-icon:rgba(0, 106, 104, 1); --p-decorative-four-surface:rgba(145, 224, 214, 1); --p-decorative-four-text:rgba(0, 45, 45, 1); --p-decorative-five-icon:rgba(174, 43, 76, 1); --p-decorative-five-surface:rgba(253, 201, 208, 1); --p-decorative-five-text:rgba(79, 14, 31, 1); --p-border-radius-slim:0.2rem; --p-border-radius-base:0.4rem; --p-border-radius-wide:0.8rem; --p-border-radius-full:50%; --p-card-shadow:0px 0px 5px var(--p-shadow-from-ambient-light), 0px 1px 2px var(--p-shadow-from-direct-light); --p-popover-shadow:-1px 0px 20px var(--p-shadow-from-ambient-light), 0px 1px 5px var(--p-shadow-from-direct-light); --p-modal-shadow:0px 26px 80px var(--p-shadow-from-dim-light), 0px 0px 1px var(--p-shadow-from-dim-light); --p-top-bar-shadow:0 2px 2px -1px var(--p-shadow-from-direct-light); --p-button-drop-shadow:0 1px 0 rgba(0, 0, 0, 0.05); --p-button-inner-shadow:inset 0 -1px 0 rgba(0, 0, 0, 0.2); --p-button-pressed-inner-shadow:inset 0 1px 0 rgba(0, 0, 0, 0.15); --p-override-none:none; --p-override-transparent:transparent; --p-override-one:1; --p-override-visible:visible; --p-override-zero:0; --p-override-loading-z-index:514; --p-button-font-weight:500; --p-non-null-content:&quot;&quot;; --p-choice-size:2rem; --p-icon-size:1rem; --p-choice-margin:0.1rem; --p-control-border-width:0.2rem; --p-banner-border-default:inset 0 0.1rem 0 0 var(--p-border-neutral-subdued), inset 0 0 0 0.1rem var(--p-border-neutral-subdued); --p-banner-border-success:inset 0 0.1rem 0 0 var(--p-border-success-subdued), inset 0 0 0 0.1rem var(--p-border-success-subdued); --p-banner-border-highlight:inset 0 0.1rem 0 0 var(--p-border-highlight-subdued), inset 0 0 0 0.1rem var(--p-border-highlight-subdued); --p-banner-border-warning:inset 0 0.1rem 0 0 var(--p-border-warning-subdued), inset 0 0 0 0.1rem var(--p-border-warning-subdued); --p-banner-border-critical:inset 0 0.1rem 0 0 var(--p-border-critical-subdued), inset 0 0 0 0.1rem var(--p-border-critical-subdued); --p-badge-mix-blend-mode:luminosity; --p-thin-border-subdued:0.1rem solid var(--p-border-subdued); --p-text-field-spinner-offset:0.2rem; --p-text-field-focus-ring-offset:-0.4rem; --p-text-field-focus-ring-border-radius:0.7rem; --p-button-group-item-spacing:-0.1rem; --p-duration-1-0-0:100ms; --p-duration-1-5-0:150ms; --p-ease-in:cubic-bezier(0.5, 0.1, 1, 1); --p-ease:cubic-bezier(0.4, 0.22, 0.28, 1); --p-range-slider-thumb-size-base:1.6rem; --p-range-slider-thumb-size-active:2.4rem; --p-range-slider-thumb-scale:1.5; --p-badge-font-weight:400; --p-frame-offset:0px;">
        <div
          class="Polaris-Frame Polaris-Frame--hasTopBar"
          data-polaris-layer="true"
        >
          <div class="Polaris-Frame__Skip"><a href="#AppFrameMain">Skip to content</a></div>
          <h1>
          </h1>
          <topbar
            :submit="submit"
            :disableRemovePixel="disableRemovePixel"
            :loading="loading"
            :tab="tab"
          />

          <main
            class="Polaris-Frame__Main"
            id="AppFrameMain"
            data-has-global-ribbon="false"
          >
            <div class="Polaris-Frame__Content">
              <div class="my-5 container">

                <banner v-if="tab == 0" :shopName="shopName"/>
                <faq v-if="tab == 2"/>
                <main-content
                  :tiktokIdModalShow="tiktokIdModalShow"
                  :data="data"
                  :tab="tab"
                  :shopName="shopName"
                />
                <tiktok-id-modal
                  v-if="tiktokIdModalShow"
                  :tiktokIdModalShow="tiktokIdModalShow"
                  :data="data"
                />
                <tutorial-modal
                  :data="data"
                  :tutorialShow="tutorialShow"
                  :thankyouModalShow="thankyouModalShow"
                  :helpModalShow="helpModalShow"
                  :shopName="shopName"
                />
                <thankyou-modal :thankyouModalShow="thankyouModalShow" />
                <help-modal :helpModalShow="helpModalShow" />
                <remove-pixel-modal :removePixelModalShow="removePixelModalShow" />
                <save-modal :saveModalShow="saveModalShow" />
                <error-modal
                  :errorModalShow="errorModalShow"
                  :errorMessage="errorMessage"
                />
              </div>
            </div>
          </main>

        </div>
        <div id="PolarisPortalsContainer">
          <div data-portal-id="popover-Polarisportal2"></div>
          <div data-portal-id="popover-Polarisportal3"></div>
          <div data-portal-id="Polarisportal1">
            <div
              class="Polaris-Frame-ToastManager"
              aria-live="assertive"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="Polaris-Frame-ToastManager"
      aria-live="assertive"
    ></div>
  </div>
</template>

<script>
import Topbar from "./partials/topbar.vue";
import Banner from "./partials/banner.vue";
import MainContent from "./partials/mainContent.vue";
import TiktokIdModal from "./partials/tiktokIdModal.vue";
import instance from "../../../axios.js";
import TutorialModal from "./partials/tutorialModal.vue";
import ThankyouModal from "./partials/thankyouModal.vue";
import HelpModal from "./partials/helpModal.vue";
import RemovePixelModal from "./partials/removePixelModal.vue";
import SaveModal from "./partials/saveModal.vue";
import ErrorModal from "./partials/errorModal.vue";
import Faq from './partials/faq.vue';

export default {
  components: {
    Topbar,
    Banner,
    MainContent,
    TiktokIdModal,
    TutorialModal,
    ThankyouModal,
    HelpModal,
    RemovePixelModal,
    SaveModal,
    ErrorModal,
    Faq,
  },
  data() {
    return {
      data: {
        pixel_code: "",
        pixel_tracking_enabled: false,
        track_Product_details_page_view: false,
        track_Product_details_page_view_homepage: false,
        track_add_to_cart: false,
        track_initiate_checkout: false,
        track_complate_payment: false,
        track_order_value_currency: false,
        tiktokId: "",
        tutorial: false,
      },
      shopName : '',
      tiktokIdModalShow: false,
      tutorialShow: false,
      saveModalShow: false,
      errorModalShow: false,
      thankyouModalShow: false,
      helpModalShow: false,
      removePixelModalShow: false,
      errorMessage: "",
      disableRemovePixel: true,
      loading : false,
      tab : 0,
    };
  },
  methods: {
    submit() {
      let base = this;
      
      if (
        (this.data.pixel_code == null ||
        this.data.pixel_code == "" ||
        this.data.pixel_code.length == "0")
      ) {
        base.errorMessage = "The Pixel Code field cannot be empty!";
        base.errorModalShow = true;
      } else {
        callSaveMetod();
      }

      function callSaveMetod() {
        base.loading = true;
        instance({
          url: "/save-settings",
          data: base.data,
          method: "POST",
        })
          .then((res) => {
            // console.log(res);
            if (res.data.success == true) {
              if(res.data.tutorial == true){
                base.tutorialShow = true;
              }else{
                base.saveModalShow = true;
              }
              base.fetchData();
            } else if (res.data.success == false) {
              base.errorMessage = res.data.message;
              base.errorModalShow = true;
            }
          })
          .catch((err) => {
            // console.log(err);
          })
          .finally(()=>{
            base.loading = false;
          })
      }
    },
    changeModalState(type, action) {
      if (type == "tiktokIdModalShow" && action == "show") {
        this.tiktokIdModalShow = true;
      }
      if (type == "tiktokIdModalShow" && action == "hide") {
        this.tiktokIdModalShow = false;
      }
    },
    fetchData() {
      let base = this;
      this.loading = true;
      instance({
        url: "/get-settings",
        method: "GET",
      })
        .then((res) => {
          // console.log("responce : ", res.data.data);
          // console.log('data : ',base.data);
          this.data = JSON.parse(JSON.stringify(res.data.data));
          this.shopName = res.data.shopName;
          if (
            this.data.pixel_tracking_enabled == true ||
            this.data.pixel_code.length > 0
          ) {
            this.disableRemovePixel = false;
          } else {
            this.disableRemovePixel = true;
          }
        })
        .catch((err) => {
          console.log(res);
        })
        .finally(()=>{
          base.loading = false;
        })
    },
    removePixelCode() {
      this.data.pixel_code = "";
      this.data.pixel_tracking_enabled = false;
      let base = this;
      // this.submit();
      instance({
        url: "/remove-pixel",
        method: "POST",
      })
        .then((res) => {
          // console.log(res);
          base.errorMessage = res.data.message;
          base.errorModalShow = true;
          this.fetchData();
        })
        .catch((err) => {
          console.log(err);
        });
      // console.log(this.data);
    },
  },
  created() {
    this.fetchData();
    this.tiktokIdModalShow = this.tiktokIdModalShow;
  },
  watch: {
    data: {
      handler: function (val, oldVal) {
        // console.log(this.data);
      },
      deep: true,
    },
  },
};
</script>