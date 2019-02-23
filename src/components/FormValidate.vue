<script>
export default {
  data() {
    return {
      startValue: 0,
      message: ""
    };
  }
};
</script>

<template>
  <form action="/api/events" method="post">
    <text-input name="txtMessage" label="Message" v-model="message" v-validate="'required'"></text-input>
    <numeric-input
      name="nmrcStartValue"
      label="Start Value"
      v-model.number="startValue"
      v-validate="'required|min_value:4'"
    ></numeric-input>
  </form>
</template>

