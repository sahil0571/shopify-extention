<template>
  <div>
    <h1>Hello From tikpix.</h1>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      hello: "",
    };
  },
  methods: {
    fetchData() {
      let mixurl = process.env.MIX_APP_URL;
      let domain = window.location.hostname;

      axios({
        url: mixurl + "/api/get-settings/" + domain,
        method: "GET",
      })
        .then((res) => {
          console.log(res);
          if (res.data.success == true && res.data.data.pixel_tracking_enabled) {
            // console.log(res.data.data.pixel_code);
            this.addScript(res.data.data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    addScript(data) {
      console.log("script :", data);
      let scriptData = data.pixel_code;
      let script = document.createElement("SCRIPT");
      script.innerText = scriptData;
      document.head.appendChild(script);

      // document.getElementsByTagName("HEAD")[0].appendChild(script);
      // alert('hello');
    },
  },
  created() {
    console.log("----------- log from component --------------");
    this.fetchData();
  },
};
</script>