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
      type: Number,
      default: 0
    },
    label: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      min: 0,
      max: 9999999
    };
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
        ...this.$attrs,
        min: this.min,
        max: this.max
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
        type="number"
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
