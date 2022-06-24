<template>
  <div>
    <div
      class="Polaris-Frame__TopBar"
      data-polaris-layer="true"
      data-polaris-top-bar="true"
      id="AppFrameTopBar"
    >
      <div class="Polaris-TopBar">

        <div class="Polaris-TopBar__Contents">
          <div
            class="container"
            style="padding-left: 0px !important"
          >
            <ul
              role="tablist"
              class="Polaris-Tabs listItem container"
            >
              <li
                class="Polaris-Tabs__TabContainer"
                role="presentation"
              ><button
                  id="all-customers-1"
                  role="tab"
                  type="button"
                  tabindex="0"
                  class="Polaris-Tabs__Tab "
                  :class="tab == 0 ? 'Polaris-Tabs__Tab--selected' : ''"
                  @click="changeTab(0)"
                  aria-selected="true"
                  aria-controls="all-customers-content-1"
                  aria-label="All customers"
                ><span class="Polaris-Tabs__Title">Instructions</span></button></li>

              <li
                class="Polaris-Tabs__TabContainer"
                role="presentation"
              ><button
                  id="all-customers-1"
                  role="tab"
                  type="button"
                  tabindex="0"
                  class="Polaris-Tabs__Tab "
                  :class="tab == 1 ? 'Polaris-Tabs__Tab--selected' : ''"
                  @click="changeTab(1)"
                  aria-selected="true"
                  aria-controls="all-customers-content-1"
                  aria-label="All customers"
                ><span class="Polaris-Tabs__Title">Pixel Setup</span></button></li>

              <li
                class="Polaris-Tabs__TabContainer"
                role="presentation"
              ><button
                  id="all-customers-1"
                  role="tab"
                  type="button"
                  tabindex="0"
                  class="Polaris-Tabs__Tab beforeNone"
                  aria-selected="true"
                  aria-controls="all-customers-content-1"
                  aria-label="All customers"
                ><span class="Polaris-Tabs__Title ">Support ? Use the chat (blue icon)</span></button></li>

            </ul>
            <div class="Polaris-TopBar__SecondaryMenu">

            </div>
            <div class="pixelDiv">
              <div class="Polaris-TopBar-Menu__ActivatorWrapper">
                <div class="Polaris-Stack__Item">

                  <div><button
                      class="Polaris-Button mr-3 Polaris-Button--destructive"
                      :class="[disableRemovePixel == true ? 'Polaris-Button--disabled' : '' , loading ? 'Polaris-Button--loading' : ''] "
                      type="button"
                      @click="removePixelCode()"
                    ><span class="Polaris-Button__Content">
                        <span
                          v-if="loading"
                          class="Polaris-Button__Spinner"
                        ><span class="Polaris-Spinner Polaris-Spinner--sizeSmall"><svg
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M7.229 1.173a9.25 9.25 0 1011.655 11.412 1.25 1.25 0 10-2.4-.698 6.75 6.75 0 11-8.506-8.329 1.25 1.25 0 10-.75-2.385z"></path>
                            </svg></span><span role="status"><span class="Polaris-VisuallyHidden">Loading</span></span></span>
                        <span class="Polaris-Button__Text">Remove Pixel Code</span>
                      </span></button>
                    <div id="PolarisPortalsContainer"></div>
                  </div>
                </div>

                <div class="Polaris-Stack__Item">
                  <div><button
                      @click="changeTab(2)"
                      class="Polaris-Button mr-3"
                      :class="loading ? 'Polaris-Button--loading' : ''"
                      type="button"
                    ><span class="Polaris-Button__Content">
                        <span
                          v-if="loading"
                          class="Polaris-Button__Spinner"
                        ><span class="Polaris-Spinner Polaris-Spinner--sizeSmall"><svg
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M7.229 1.173a9.25 9.25 0 1011.655 11.412 1.25 1.25 0 10-2.4-.698 6.75 6.75 0 11-8.506-8.329 1.25 1.25 0 10-.75-2.385z"></path>
                            </svg></span><span role="status"><span class="Polaris-VisuallyHidden">Loading</span></span></span>
                        <span class="Polaris-Button__Text">FAQ</span>
                      </span></button>
                    <div id="PolarisPortalsContainer"></div>
                  </div>
                </div>

                <div class="Polaris-Stack__Item">
                  <div><button
                      class="Polaris-Button mr-5 Polaris-Button--primary"
                      :class="loading ? 'Polaris-Button--loading' : ''"
                      type="button"
                      @click="this.submit"
                    ><span class="Polaris-Button__Content">
                        <span
                          v-if="loading"
                          class="Polaris-Button__Spinner"
                        ><span class="Polaris-Spinner Polaris-Spinner--sizeSmall"><svg
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M7.229 1.173a9.25 9.25 0 1011.655 11.412 1.25 1.25 0 10-2.4-.698 6.75 6.75 0 11-8.506-8.329 1.25 1.25 0 10-.75-2.385z"></path>
                            </svg></span><span role="status"><span class="Polaris-VisuallyHidden">Loading</span></span></span>
                        <span class="Polaris-Button__Text">Save</span>
                      </span></button>
                    <div id="PolarisPortalsContainer"></div>
                  </div>
                </div>

                <!-- <div><button
                    class="Polaris-Button mr-5 Polaris-Button--primary"
                    :class="loading ? 'Polaris-Button--loading' : ''"
                    type="button"
                    @click="this.submit"
                    aria-busy="true"
                  ><span class="Polaris-Button__Content"><span v-if="loading" class="Polaris-Button__Spinner"><span class="Polaris-Spinner Polaris-Spinner--sizeSmall"><svg
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M7.229 1.173a9.25 9.25 0 1011.655 11.412 1.25 1.25 0 10-2.4-.698 6.75 6.75 0 11-8.506-8.329 1.25 1.25 0 10-.75-2.385z"></path>
                          </svg></span><span role="status"><span class="Polaris-VisuallyHidden">Loading</span></span></span><span class="Polaris-Button__Text">Save</span></span></button>
                  <div id="PolarisPortalsContainer"></div>
                </div> -->

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    submit: Function,
    disableRemovePixel: Boolean,
    loading: Boolean,
    tab: Number,
  },
  methods: {
    removePixelCode() {
      // this.$parent.removePixelCode();
      this.$parent.removePixelModalShow = true;
    },
    changeTab(tab) {
      this.$parent.tab = tab;
    },
  },
};
</script>

<style>
.listItem {
  margin-left: 0 !important;
  position: relative;
  left: -20px;
}
.pixelDiv {
  position: absolute;
  right: 0;
  top: 0;
}
.Polaris-Tabs__Tab.beforeNone:hover .Polaris-Tabs__Title::before {
    display: none !important;
}
</style>