<template>
  <div v-if="errorModalShow">
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
                        <h2
                          class="Polaris-DisplayText Polaris-DisplayText--sizeSmall"
                          v-if="errorMessage != 'The pixel code has been successfully removed from the theme files.'"
                        >Error!</h2>
                        <h2
                          class="Polaris-DisplayText Polaris-DisplayText--sizeSmall"
                          v-if="errorMessage == 'The pixel code has been successfully removed from the theme files.'"
                        >Success</h2>

                      </div><button
                        class="Polaris-Modal-CloseButton"
                        @click="removeerror()"
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
                          <div class="">
                              {{errorMessage}}
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
                                  @click="removeerror()"
                                >Ok</PButton>
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
  props: ["errorModalShow", "errorMessage"],
  methods: {
    removeerror() {
      this.$parent.errorModalShow = false;
    },
  },
};
</script>


<style scoped>
.save-text {
  font-size: 4rem !important;
  /* color: green; */
}
.f-18 {
  font-size: 18px;
}
.icon {
  width: 110px;

  padding: 27px;
  border-radius: 100%;
  fill: #ee4c4c;
}
.okBtn {
  display: inline-block;
  border-left-color: rgb(48, 133, 214);
  border-right-color: rgb(48, 133, 214);
  border: none;
  width: 70px;
  border: none;
  width: 100px;
  height: 45px;
  border-radius: 5px;
  background: rgb(48, 133, 214);
  color: white;
}
</style>