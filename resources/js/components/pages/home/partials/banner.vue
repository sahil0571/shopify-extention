<template>
  <div>

    <div p-color-scheme="light" v-if="loading">
      <div class="Polaris-SkeletonPage__Page" role="status" aria-label="Page loading">
        <div class="Polaris-SkeletonPage__Header">
          <div class="Polaris-SkeletonPage__TitleAndPrimaryAction">
            <div class="Polaris-SkeletonPage__TitleWrapper">
              <div class="Polaris-SkeletonPage__SkeletonTitle"></div>
            </div>
            <div class="Polaris-SkeletonPage__PrimaryAction">
              <div class="Polaris-SkeletonDisplayText__DisplayText Polaris-SkeletonDisplayText--sizeLarge"></div>
            </div>
          </div>
        </div>
        <div class="Polaris-SkeletonPage__Content">
          <div class="Polaris-Layout">
            <div class="Polaris-Layout__Section">
              <div class="Polaris-Card">
                <div class="Polaris-Card__Section">
                  <div class="Polaris-SkeletonBodyText"></div>
                  <div class="Polaris-SkeletonBodyText"></div>
                  <div class="Polaris-SkeletonBodyText"></div>
                </div>
              </div>
              <div class="Polaris-Card">
                <div class="Polaris-Card__Section">
                  <div class="Polaris-TextContainer">
                    <div class="Polaris-SkeletonDisplayText__DisplayText Polaris-SkeletonDisplayText--sizeSmall"></div>
                    <div class="Polaris-SkeletonBodyText"></div>
                    <div class="Polaris-SkeletonBodyText"></div>
                    <div class="Polaris-SkeletonBodyText"></div>
                  </div>
                </div>
              </div>
              <div class="Polaris-Card">
                <div class="Polaris-Card__Section">
                  <div class="Polaris-TextContainer">
                    <div class="Polaris-SkeletonDisplayText__DisplayText Polaris-SkeletonDisplayText--sizeSmall"></div>
                    <div class="Polaris-SkeletonBodyText"></div>
                    <div class="Polaris-SkeletonBodyText"></div>
                    <div class="Polaris-SkeletonBodyText"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="Polaris-Layout__Section Polaris-Layout__Section--secondary">
              <div class="Polaris-Card">
                <div class="Polaris-Card__Section">
                  <div class="Polaris-TextContainer">
                    <div class="Polaris-SkeletonDisplayText__DisplayText Polaris-SkeletonDisplayText--sizeSmall"></div>
                    <div class="Polaris-SkeletonBodyText"></div>
                    <div class="Polaris-SkeletonBodyText"></div>
                  </div>
                </div>
                <div class="Polaris-Card__Section">
                  <div class="Polaris-SkeletonBodyText"></div>
                </div>
              </div>
              <div class="Polaris-Card Polaris-Card--subdued">
                <div class="Polaris-Card__Section">
                  <div class="Polaris-TextContainer">
                    <div class="Polaris-SkeletonDisplayText__DisplayText Polaris-SkeletonDisplayText--sizeSmall"></div>
                    <div class="Polaris-SkeletonBodyText"></div>
                    <div class="Polaris-SkeletonBodyText"></div>
                  </div>
                </div>
                <div class="Polaris-Card__Section">
                  <div class="Polaris-SkeletonBodyText"></div>
                  <div class="Polaris-SkeletonBodyText"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="PolarisPortalsContainer"></div>
    </div>

    <div class="m-auto" v-if="!loading">
      <h1 class="main_title mb-5">
        TikPix - Tiktok tracking pixel
      </h1>

      <div
        class="Polaris-Banner Polaris-Banner--statusInfo Polaris-Banner--hasDismiss Polaris-Banner--withinPage tiktok_box"
        style="background: rgb(235 235 235);box-shadow: rgb(186 191 195) 0px 1px 0px 0px inset, rgb(186 191 195) 0px 0px 0px 1px inset;"
        tabindex="0" role="status" aria-live="polite" aria-labelledby="PolarisBanner8Heading"
        aria-describedby="PolarisBanner8Content">
        <div class="Polaris-Banner__Ribbon"><span
            class="Polaris-Icon Polaris-Icon--colorHighlight Polaris-Icon--applyColor"><span
              class="Polaris-VisuallyHidden"></span>
            <svg viewBox="0 0 20 20" class="Polaris-Icon__Svg" focusable="false" aria-hidden="true" fil="#5c5f62">
              <path fill-rule="evenodd"
                d="M10 20c5.514 0 10-4.486 10-10S15.514 0 10 0 0 4.486 0 10s4.486 10 10 10zm1-6a1 1 0 1 1-2 0v-4a1 1 0 1 1 2 0v4zm-1-9a1 1 0 1 0 0 2 1 1 0 0 0 0-2z">
              </path>
            </svg></span></div>
        <div class="Polaris-Banner__ContentWrapper">
          <div class="Polaris-Banner__Heading" id="PolarisBanner8Heading">
            <p class="Polaris-Heading">Important: for the app to work you must <b> enable it in the theme settings</b>.
            </p>
          </div>
          <div class="Polaris-Banner__Content" id="PolarisBanner8Content">
            Follow the below instructions:<br>

            1. Click <a target="blank"
              :href="themeId == null ? `https://${shopName}/admin/themes` : `https://${shopName}/admin/themes/${themeId}/editor?context=apps`">
              here </a> (It will take you to Online store > Themes > Customize > Theme settings > App embeds).<br>
            2. Enable the Tikpix-Tiktok Installer toggle button and click save.<br>


            <!-- 1. Go to the <a target="blank"
              :href="themeId == null ? `https://${shopName}/admin/themes` : `https://${shopName}/admin/themes/${themeId}/editor?context=apps`">
              Themes </a>
            page of your admin
            dashboard. <br>
            2. Click <b> Customize </b> Button at the current theme. <br>
            3. Click <b> Theme Settings </b> at the bottom left of the screen. <br>
            4. After you can find two tabs in the theme settings at the right side of the page.<br>
            5. Click on the App embeds and enable the Tikpix-Tiktok Installer option and click save.<br> -->
            Great, You are now good to go 👍<br>
          </div>
        </div>
      </div>

      <div
        class="Polaris-Banner Polaris-Banner--statusInfo Polaris-Banner--hasDismiss Polaris-Banner--withinPage tiktok_box"
        style="background: rgb(235 235 235);box-shadow: rgb(186 191 195) 0px 1px 0px 0px inset, rgb(186 191 195) 0px 0px 0px 1px inset;"
        tabindex="0" role="status" aria-live="polite" aria-labelledby="PolarisBanner8Heading"
        aria-describedby="PolarisBanner8Content">
        <div class="Polaris-Banner__Ribbon"><span
            class="Polaris-Icon Polaris-Icon--colorHighlight Polaris-Icon--applyColor"><span
              class="Polaris-VisuallyHidden"></span>
            <svg viewBox="0 0 20 20" class="Polaris-Icon__Svg" focusable="false" aria-hidden="true" fil="#5c5f62">
              <path fill-rule="evenodd"
                d="M10 20c5.514 0 10-4.486 10-10S15.514 0 10 0 0 4.486 0 10s4.486 10 10 10zm1-6a1 1 0 1 1-2 0v-4a1 1 0 1 1 2 0v4zm-1-9a1 1 0 1 0 0 2 1 1 0 0 0 0-2z">
              </path>
            </svg></span></div>
        <div class="Polaris-Banner__ContentWrapper">
          <div class="Polaris-Banner__Heading" id="PolarisBanner8Heading">
            <p class="Polaris-Heading">How to create the Tiktok pixel?</p>
          </div>
          <div class="Polaris-Banner__Content" id="PolarisBanner8Content">
            1. Login to your <a target="blank" href="https://ads.tiktok.com/"> account</a>, go to Assets, then click
            Events in the dropdown menu. <br>
            <!-- 2. Click <b> Manage </b> under <b>Web Events</b>. Then hit <b>Set Up Web Events</b>. <br> -->
            2. In the Events manager section, click <b> Manage </b> under Web Events, then click <b> Create
              Pixel</b>.<br>
            3. Hit <b>TikTok Pixel</b>, fill in the <b>Pixel Name</b> and choose <b>Manually install pixel code</b> in
            the Installation Type setting. Click <b>Next</b>.<br>
            4. Choose <b>Developer Mode</b> and click <b>Create</b>. <b>Copy</b> the generated Pixel Code and click on
            the blue <b>Next</b> button , then click Complete setup. <br>
            5. <b>Paste</b> the pixel code you've copied to the <b>Pixel Code</b> field here on this page and click
            <b>Save</b>.<br>
            6. You’re all set, it may take a few minutes for the pixel data to display in your TikTok dashboard. <br>
          </div>
        </div>
      </div>

      <div class="Polaris-Banner Polaris-Banner--statusSuccess Polaris-Banner--withinContentContainer event_box my-4"
        tabindex="0" role="status"
        style="background: rgb(235 235 235);box-shadow: rgb(186 191 195) 0px 1px 0px 0px inset, rgb(186 191 195) 0px 0px 0px 1px inset;"
        aria-live="polite" aria-describedby="Banner10Content">
        <div class="Polaris-Banner__Ribbon"><span
            class="Polaris-Icon Polaris-Icon--colorSuccess Polaris-Icon--applyColor"><span
              class="Polaris-VisuallyHidden"></span><svg viewBox="0 0 20 20" class="Polaris-Icon__Svg" focusable="false"
              aria-hidden="true">
              <path fill-rule="evenodd"
                d="M0 10a10 10 0 1 0 20 0 10 10 0 0 0-20 0zm15.2-1.8a1 1 0 0 0-1.4-1.4L9 11.6 6.7 9.3a1 1 0 0 0-1.4 1.4l3 3c.4.4 1 .4 1.4 0l5.5-5.5z">
              </path>
            </svg></span></div>

        <div class="Polaris-Banner__ContentWrapper">
          <div class="Polaris-Banner__Heading" id="PolarisBanner8Heading">
            <p class="Polaris-Heading">The App Automatically Triggers Events</p>
          </div>

          <div class="Polaris-Banner__Content" id="Banner10Content">
            <div>You don't need to manually set event rules in your TikTok Ads Manager - the app does it for you. If you
              do set events manually, untick the events checkboxes here.</div>
          </div>
        </div>

      </div>

      <div
        class="Polaris-Banner Polaris-Banner--statusInfo Polaris-Banner--hasDismiss Polaris-Banner--withinPage tiktok_box"
        style="background: rgb(235 235 235);box-shadow: rgb(186 191 195) 0px 1px 0px 0px inset, rgb(186 191 195) 0px 0px 0px 1px inset;"
        tabindex="0" role="status" aria-live="polite" aria-labelledby="PolarisBanner8Heading"
        aria-describedby="PolarisBanner8Content">
        <div class="Polaris-Banner__Ribbon"><span
            class="Polaris-Icon Polaris-Icon--colorHighlight Polaris-Icon--applyColor"><span
              class="Polaris-VisuallyHidden"></span>
            <svg viewBox="0 0 20 20" class="Polaris-Icon__Svg" focusable="false" aria-hidden="true" fil="#5c5f62">
              <path fill-rule="evenodd"
                d="M10 20c5.514 0 10-4.486 10-10S15.514 0 10 0 0 4.486 0 10s4.486 10 10 10zm1-6a1 1 0 1 1-2 0v-4a1 1 0 1 1 2 0v4zm-1-9a1 1 0 1 0 0 2 1 1 0 0 0 0-2z">
              </path>
            </svg></span></div>
        <div class="Polaris-Banner__ContentWrapper">
          <div class="Polaris-Banner__Heading" id="PolarisBanner8Heading">
            <p class="Polaris-Heading">How to set up a Tiktok remarketing audience using the pixel?</p>
          </div>
          <div class="Polaris-Banner__Content" id="PolarisBanner8Content">

            1. Go to the Audience section under Assets. <br>
            2. Click on <b>Create Audience</b>, choose <b>Custom Audience</b> and select <b>Website Traffic</b>. <br>
            3. Under Include, select the type of event and time period (TIktok provides various lookback windows) and
            pixel name (from the earlier setup process). <br>
            4. Click the <b>Add more rules</b> icon and choose <b>Broaden Audience</b> or <b>Narrow Audience</b>.
            Broaden Audience allows you to create an audience with one event type OR another event type, whereas Narrow
            Audience allows you to create an audience with one event type AND another event type.<br>
            5. Click <b>Exclude People</b> and enter the event type and time period if you want to exclude certain users
            from being added to your list. You can skip this step if you want to include everyone.<br>
            6. Toggle <b> Auto-Refresh </b>. <br>
            7. Name your audience. <br>
            8. Click <b>Confirm</b> to create the audience. <br>
          </div>
        </div>
      </div>

      <div id="PolarisPortalsContainer"></div>
    </div>
  </div>
</template>

<script>
import instance from '../../../../axios';

export default {
  props: ["shopName"],
  data() {
    return {
      themeId: null,
      loading: true,
    }
  },
  methods: {
    getTheme() {
      instance({
        url: '/api/get-theme',
        method: 'GET'
      })
        .then((res) => {
          if (res.data?.success) {
            this.themeId = res.data.themeId;
          }
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          this.loading = false;
        })
    }
  },
  created() {
    this.getTheme()
  }
};
</script>

<style scoped>
.Polaris-Icon--colorHighlight svg {
  fill: #5c5f62 !important;
}

.Polaris-Icon--colorSuccess svg {
  fill: #5c5f62 !important;
}

/* .main_title{
    font-size: 2.8rem !important;
    line-height: 3.2rem;
    font-weight: 600;
  }
  .tiktok_box{
    box-shadow: inset 0 0.1rem 0 0 #5c5f62, inset 0 0 0 0.1rem #5c5f62 !important;
    border-radius: 0 0 3px 3px !important;
    padding: 1.6rem;
  } */
</style>