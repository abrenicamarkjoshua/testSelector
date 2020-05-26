<template>
  <div>
    <v-selectpage
      data="https://www.mocky.io/v2/5b3777a72e0000570036c7a5"
      key-field="id"
      show-field="name"
      search-field="userName"
      v-model="data"
      :result-format="resultFormat"
      @values="asd"
      @removed="dsa"
    ></v-selectpage>

    <hr>

    <pre>{{data}}</pre>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      data: "",
      list: [
        { id: 1, name: "Chicago Bulls", desc: "芝加哥公牛" },
        { id: 2, name: "Cleveland Cavaliers", desc: "克里夫兰骑士" }
      ]
    };
  },
  methods: {
    asd(e) {
      console.log(e);
    },
    dsa(e) {
      console.log(e);
    },
    resultFormat(resp) {
      if (resp && resp.data) return resp.data.values.gridResult;
    }
  }
};
</script>
