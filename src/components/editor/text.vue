<script>
export default {
  inject: {
    $validator: "$validator"
  },
  $_veeValidate: {
    name() {
      return this.label;
    }
  },
  props: {
    name: {
      type: String
    },
    value: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  },
  methods: {
    updateValue(event) {
      this.$emit("input", event.target.value);
    }
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: this.updateValue
      };
    },
    attributes() {
      return {
        ...this.$attrs
      };
    }
  }
};
</script>

<template>
  <div>
    <div>
      <label>{{label}}</label>:
      <input
        type="text"
        v-bind:name="name"
        v-bind:value="value"
        v-bind="attributes"
        v-on="listeners"
      >
    </div>
    <div>
      <span
        v-show="$validator.errors.has(label)"
        class="is-danger"
      >{{ $validator.errors.first(label) }}</span>
    </div>
  </div>
</template>

<style scoped>
input {
  width: 120px;
  text-align: right;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: inline-block;
}

label {
  width: 100px;
  font-weight: bold;
  display: inline-block;
}

.is-danger {
  /* font-size: 1px; */
  color: red;
}
</style>
