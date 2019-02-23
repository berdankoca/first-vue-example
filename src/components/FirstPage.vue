<script>
export default {
  data() {
    return {
      startValue: 0,
      addedValue: 0,
      results: [],
      message: "its really long message and we cut it"
    };
  },
  methods: {
    add: function(event) {
      //   const value = parseInt(this.startValue) + parseInt(this.addedValue);
      this.results.push(this.totalValue);
    }
  },
  computed: {
    totalValue: function() {
      return parseInt(this.startValue) + parseInt(this.addedValue);
    }
  }
};
</script>

<template>
  <div>
    <div class="input">
      <text-input label="Message" v-model="message"></text-input>
    </div>
    <h1>{{message | readMore(10)}}</h1>
    <div class="input">
      <numeric-input label="Start Value" v-model.number="startValue" v-on:keyup.enter.native="add"></numeric-input>
      <numeric-input label="Added Value" v-model.number="addedValue" v-on:keyup.enter.native="add"></numeric-input>
    </div>
    <h1>Start Value: {{startValue}}</h1>
    <h1>Added Value: {{addedValue}}</h1>
    <button v-on:click="add">Add</button>
    <h1>{{totalValue}}</h1>
    <br>
    <h3 v-for="(result, index) in results" :key="index">{{index + 1}} - {{result}}</h3>
  </div>
</template>

<style scoped>
.input {
  margin-top: 10px;
}

button {
  margin-top: 10px;
}
</style>
