<template>
  <div v-if="this.tutorialShow">
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
                        id="Polarismodal-header2"
                        class="Polaris-Modal-Header__Title"
                      >
                        <h2 class="Polaris-DisplayText Polaris-DisplayText--sizeSmall">Let's Make Sure Everything Works Great!</h2>
                      </div><button
                        class="Polaris-Modal-CloseButton"
                        @click="hideTutorial()"
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

                          <div class="my-1">
                            <div class="steps">
                              <div class="step_1 ">
                                <div
                                  class="number"
                                  :class="[(page == 1) ? 'active' : 'success']"
                                >1</div>
                              </div>
                              <div class="step_1 ">
                                <div
                                  class="number"
                                  :class="[(page == 2) ? 'active' : '', (page == 3) ? 'success' : '' ]"
                                >2</div>
                              </div>
                              <div class="step_1 ">
                                <div
                                  class="number"
                                  :class="[(page == 3) ? 'active' : '']"
                                >3</div>
                              </div>
                            </div>
                          </div>

                          <div v-if="page == 1">
                            <div class="text-center">
                              <div class="text-center mt-2 c-green ">
                                <h1 class="fw-500">Succes !</h1>
                                <h1 class="fw-500">Changes Saved Succesfully.</h1>
                              </div>
                              <div class="">
                                <br>
                                It may take up to <u>30 seconds</u> for the changes to appear in your store. <br>
                                Now let's make sure that the Pixel is properly installed in your store!
                              </div>
                            </div>
                          </div>

                          <div v-if="page == 2">
                            <div class="text-center">
                              <div class="text-center mb_-2 mt-2 ">
                                <h1 class="fw-500">Open Your Store And Look For a Pop Up</h1>
                              </div>
                              <div class="my-4">
                                <br>
                                Open your store and look for a pop up message that will
                                appear. <br>
                                When you're done - return back to this window and click
                                "Next". <br>
                              </div>
                              <div class="">
                                <PButton
                                  primary
                                  @click="openStore()"
                                >Open Your Store</PButton>
                              </div>
                            </div>
                          </div>

                          <div v-if="page == 3">
                            <div class="text-center">
                              <div class="mb_-2 mt-2 ">
                                <h1 class="fw-500">Did you see it?</h1>
                              </div>
                              <div class="my-4">
                                <br>
                                Did the pop up message you saw said that the Pixel is
                                properly working?
                              </div>
                              <div>
                                <PButton
                                  primary
                                  @click="showThankyou()"
                                >Yes thank you!!</PButton>
                                <PButton
                                  destructive
                                  @click="showHelp()"
                                  :primary="false"
                                >No, Help Please</PButton>
                              </div>
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
                              <div class="Polaris-ButtonGroup__Item"><button
                                  class="Polaris-Button"
                                  @click="decrementPage()"
                                  type="button"
                                ><span class="Polaris-Button__Content"><span class="Polaris-Button__Text">Back</span></span></button></div>
                              <div class="Polaris-ButtonGroup__Item"><button
                                  class="Polaris-Button Polaris-Button--primary"
                                  @click="incrementPage()"
                                  type="button"
                                ><span class="Polaris-Button__Content"><span class="Polaris-Button__Text">Next</span></span></button></div>
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
  props: [
    "data",
    "tutorialShow",
    "thankyouModalShow",
    "helpModalShow",
    "shopName",
  ],
  data() {
    return {
      page: 1,
    };
  },
  methods: {
    incrementPage() {
      if (this.page < 3) {
        this.page++;
      }
    },
    decrementPage() {
      if (this.page > 1) {
        this.page--;
      }
    },
    hideTutorial() {
      this.$parent.tutorialShow = false;
    },
    showThankyou() {
      this.$parent.tutorialShow = false;
      this.$parent.thankyouModalShow = true;
    },
    showHelp() {
      this.$parent.tutorialShow = false;
      this.$parent.helpModalShow = true;
    },
    openStore() {
      let link = `https://${this.shopName}/?pixelPreview=true&fromTutorial=true`;
      window.open(link, "_blank", "Tikpix pixel preview.");
    },
  },
};
</script>


<style scoped>
.steps {
  display: flex;
  align-items: center;
}
.step_1 {
  width: 33.33%;
  font-size: 26px;
  position: relative;
}
.number {
  width: 1.7em;
  height: 1.7em;
  background-color: #dedede;
  color: #5a5a5a;
  margin-left: calc(50% - 1.7em / 2);
  border: 4px solid #dedede;
  border-radius: 1.7em;
  text-align: center;
  line-height: 1.3;
}
.number::before {
  content: " ";
  position: absolute;
  border: 4px solid #dedede;
  border-radius: 4px;
  left: -4px;
  right: calc(50% + 1.4em / 2);
  top: calc(1.5em / 2);
}
.number:after {
  content: " ";
  position: absolute;
  border: 4px solid #dedede;
  border-radius: 4px;
  left: calc(50% + 1.4em / 2);
  right: -4px;
  top: calc(1.5em / 2);
}
.success {
  background-color: #006e52;
  border: 4px solid #006e52;
  color: white;
}
.active {
  background-color: #9d9fa1;
  border: 4px solid #9d9fa1;
  color: white;
}
.success::before {
  border: 4px solid #006e52;
}
.success:after {
  border: 4px solid #006e52;
}
.active::before {
  border: 4px solid #9d9fa1;
}
.active::after {
  border: 4px solid #9d9fa1;
}
</style>
