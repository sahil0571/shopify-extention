<template>
  <div v-if="this.helpModalShow">
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
                        <h2 class="Polaris-DisplayText Polaris-DisplayText--sizeSmall">Help</h2>
                      </div><button
                        class="Polaris-Modal-CloseButton"
                        @click="hideHelp()"
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
                              <div class="mb_-2 mt-2 ">
                                <h1 class="fw-500 c-green">No Worries</h1>
                              </div>
                              <div class="f-22 lh-32">
                                <br>
                                Some themes require a minor adjustment in order to <br>
                                perfectly work with the app.<br>
                                <b>Don't worry, we'll get it fixed for you in no time!</b> <br>

                                <PButton primary @click="hideHelp()">Ask for help.</PButton>
                              </div>
                            </div>
                        </section>
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
    props : ['helpModalShow'],
    methods : {
        hideHelp(){
            this.$parent.helpModalShow = false;
        }
    }
};
</script>