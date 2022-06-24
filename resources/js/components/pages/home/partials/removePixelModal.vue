<template>
  <div v-if="removePixelModalShow">
    <div>
      <div id="PolarisPortalsContainer">
        <div data-portal-id="modal-Polarisportal2">
          <div>
            <div
              class="Polaris-Modal-Dialog__Container"
              data-polaris-layer="true"
              data-polaris-overlay="true"
            >
              <div>
                <div
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="Polarismodal-header2"
                  tabindex="-1"
                  class="Polaris-Modal-Dialog"
                >
                  <div class="Polaris-Modal-Dialog__Modal">

                    <div class="Polaris-Modal-Header">
                      <div
                        id="Polarismodal-header8"
                        class="Polaris-Modal-Header__Title"
                      >
                        <h2 class="Polaris-DisplayText Polaris-DisplayText--sizeSmall">Remove The Pixel Code?</h2>
                      </div><button
                        class="Polaris-Modal-CloseButton"
                        @click="hideremovePixel()"
                        aria-label="Close"
                      ><span class="Polaris-Icon Polaris-Icon--colorBase Polaris-Icon--applyColor"><span class="Polaris-VisuallyHidden"></span><svg
                            viewBox="0 0 20 20"
                            class="Polaris-Icon__Svg"
                            focusable="false"
                            aria-hidden="true"
                          >
                            <path d="m11.414 10 6.293-6.293a1 1 0 1 0-1.414-1.414L10 8.586 3.707 2.293a1 1 0 0 0-1.414 1.414L8.586 10l-6.293 6.293a1 1 0 1 0 1.414 1.414L10 11.414l6.293 6.293A.998.998 0 0 0 18 17a.999.999 0 0 0-.293-.707L11.414 10z"></path>
                          </svg></span></button>
                    </div>

                    <div class="Polaris-Modal__BodyWrapper">
                      <div
                        class="Polaris-Modal__Body Polaris-Scrollable Polaris-Scrollable--vertical"
                        data-polaris-scrollable="true"
                      >
                        <section class="Polaris-Modal-Section">

                          <div class="text-center">
                            <div class="">
                              The pixel code is embeded within the theme files in order to load as fast as possible. Clicking 'Yes' will start an automatic procedure that will remove the pixel from the theme and turn off the app.
                              <br><br>
                              <b>You should only use this option if you are about to uninstall the app.</b>
                              If you are having troubles setting it up - click here and we'll help you ASAP!
                              <br><br>
                            </div>
                          </div>

                        </section>
                      </div>
                    </div>

                    <div class="Polaris-Modal-Footer">
                      <div class="Polaris-Modal-Footer__FooterContent">
                        <div class="Polaris-Stack Polaris-Stack--alignmentCenter">
                          <div class="Polaris-Stack__Item Polaris-Stack__Item--fill"></div>
                          <div class="Polaris-Stack__Item">
                            <div class="Polaris-ButtonGroup">
                              <div class="Polaris-ButtonGroup__Item">
                                <PButton
                                  fullWidth
                                  @click="hideremovePixel()"
                                >Cancel.</PButton>
                              </div>
                              <div class="Polaris-ButtonGroup__Item">
                                <PButton
                                  destructive
                                  fullWidth
                                  @click="removepixel()"
                                >Remove.</PButton>
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
          </div>
          <div class="Polaris-Backdrop"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["removePixelModalShow"],
  methods: {
    removepixel() {
      this.$parent.removePixelCode();
      this.$parent.removePixelModalShow = false;
    },
    hideremovePixel() {
      this.$parent.removePixelModalShow = false;
    },
  },
};
</script>

<style scoped>
.remove-text {
  font-size: 4rem !important;
  /* color: red; */
}
.warining_icon {
  font-size: 10rem;
  border: 4px solid #f8bb86;
  border-radius: 100%;
  width: 100px;
  height: 100px;
  margin: 25px auto;
  color: #f8bb86;
  line-height: 75px;
}
.f-18 {
  font-size: 18px;
}
</style>