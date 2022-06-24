<template>

  <div>
    <div>
      <div>
        <div id="PolarisPortalsContainer">
          <div data-portal-id="modal-Polarisportal12">
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
                    aria-labelledby="Polarismodal-header12"
                    tabindex="-1"
                    class="Polaris-Modal-Dialog"
                  >
                    <div class="Polaris-Modal-Dialog__Modal">
                      <div class="Polaris-Modal-Header">
                        <div
                          id="Polarismodal-header12"
                          class="Polaris-Modal-Header__Title"
                        >
                          <h2 class="Polaris-DisplayText Polaris-DisplayText--sizeSmall">I only have the TikTok Pixel ID (and not the code)</h2>
                        </div><button
                          class="Polaris-Modal-CloseButton"
                          @click="hideModal()"
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
                            <div class="Polaris-Stack Polaris-Stack--vertical">

                              <div class="Polaris-Stack__Item Polaris-Stack__Item--fill">
                                <div class="">
                                  <div class="Polaris-Labelled__LabelWrapper">
                                    <div class="Polaris-Label"><label
                                        id="PolarisTextField2Label"
                                        for="PolarisTextField2"
                                        class="Polaris-Label__Text"
                                      >Paste your TikTok Pixel ID:</label></div>
                                  </div>

                                  <div class="Polaris-Connected">
                                    <div class="Polaris-Connected__Item Polaris-Connected__Item--primary">
                                      <div
                                        class="Polaris-TextField Polaris-TextField--hasValue"
                                        :class="tiktokIdErrorShow ? 'Polaris-TextField--error' : ''"
                                      ><input
                                          id="PolarisTextField2"
                                          autocomplete="off"
                                          class="Polaris-TextField__Input"
                                          aria-labelledby="PolarisTextField2Label"
                                          aria-invalid="false"
                                          v-model="mutatedData.tiktokId"
                                        >
                                        <div class="Polaris-TextField__Backdrop"></div>
                                      </div>
                                    </div>
                                  </div>

                                  <div
                                    class="Polaris-Labelled__Error"
                                    v-if="tiktokIdErrorShow"
                                  >
                                    <div
                                      id="PolarisTextField4Error"
                                      class="Polaris-InlineError"
                                    >
                                      <div class="Polaris-InlineError__Icon"><span class="Polaris-Icon"><span class="Polaris-VisuallyHidden"></span><svg
                                            viewBox="0 0 20 20"
                                            class="Polaris-Icon__Svg"
                                            focusable="false"
                                            aria-hidden="true"
                                          >
                                            <path d="M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zM9 9a1 1 0 0 0 2 0V7a1 1 0 1 0-2 0v2zm0 4a1 1 0 1 0 2 0 1 1 0 0 0-2 0z"></path>
                                          </svg></span></div>{{tiktokIdError}}
                                    </div>
                                  </div>
                                  <div id="PolarisPortalsContainer"></div>

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
                                    @click="hideModalWithSave()"
                                    class="Polaris-Button Polaris-Button--primary"
                                    type="button"
                                  ><span class="Polaris-Button__Content"><span class="Polaris-Button__Text">Add Pixel</span></span></button></div>
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

      <div class="Polaris-Backdrop"></div>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    data: Object,
    tiktokIdModalShow: Boolean,
  },
  data() {
    return {
      mutatedData: this.data,
      mutatedtiktokIdModalShow: this.tiktokIdModalShow,
      tiktokIdError: "Pixel id is required.",
      tiktokIdErrorShow: false,
    };
  },
  methods: {
    hideModal() {
      this.$parent.changeModalState("tiktokIdModalShow", "hide");
    },
    hideModalWithSave() {
      if (this.data.tiktokId == null || this.data.tiktokId == "") {
        this.tiktokIdError = "Pixel id is required.";
        this.tiktokIdErrorShow = true;
      } else {
        this.tiktokIdError = "";
        this.tiktokIdErrorShow = false;
        if (this.data.tiktokId.match(/^([a-zA-Z0-9]{10,})$/)) {
          this.tiktokIdError = "";
          this.tiktokIdErrorShow = false;

          let firstPart = `<script>
            !function (w, d, t) {
              w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=i+"?sdkid="+e+"&lib="+t;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)}; \n`;

          let lastPart = `ttq.load('${this.data.tiktokId}'); \n`+
          "ttq.page(); \n"+
          "}(window, document, 'ttq');\n"+`</scr`+`ipt>`;
          
          this.$parent.data.pixel_code = firstPart + lastPart;
          this.$parent.data.pixel_tracking_enabled = true;
          this.$parent.changeModalState("tiktokIdModalShow", "hide");
          this.$parent.submit();

        } else {
          this.tiktokIdError = "Please enter a valid Pixel id.";
          this.tiktokIdErrorShow = true;
        }
      }
    },
  },
  watch: {
    mutatedData: {
      handler: function (val, oldVal) {
        
      },
      deep: true,
    },
    mutatedtiktokIdModalShow: {
      handler: function (val, oldVal) {
        // console.log(this.mutatedtiktokIdModalShow);
      },
    },
  },
};
</script>