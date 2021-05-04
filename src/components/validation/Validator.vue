<template>
  <!-- destructuring doesn't work on IE 11 so use props instead of {}  -->
  <validation-provider
    :mode="mode"
    ref="provider"
    :name="label"
    :rules="rules"
    v-slot="props"
    :custom-messages="customMessages"
  >
    <slot
      :dirty="props.dirty"
      :hasErrors="hasErrors(props.errors, props.dirty)"
      :errors="formatError(props.errors)"
      :valid="props.valid"
    ></slot>
  </validation-provider>
</template>

<script>
export default {
  name: "Validator",
  props: {
    label: {
      type: String,
      required: true,
    },
    rules: {
      default: "required",
    },
    mode: {
      type: [Function, String],
      default: "aggressive",
    },
    customMessages: {
      type: Object,
    },
  },
  methods: {
    formatError(err) {
      return err.join(" \n ");
    },
    hasErrors(err, dirty) {
      return dirty && err.length > 0;
    },
  },
};
</script>