<template>
  <!-- destructuring doesn't work on IE 11 so use props instead of {}  -->
  <validation-observer ref="obs" v-slot="props">
    <slot
      :invalid="props.invalid"
      :passes="props.passes"
      :errors="props.errors"
      :validate="validate"
    ></slot>
    <!-- <validator
        rules="required"
        :label="`div_q${question.id}`"
        :customMessages="renderCustomMessObj(question)"
        v-slot="props"
      >
        <v-checkbox
          class="mt-n6"
          v-for="answer in answers"
          :key="answer.id"
          :value="answer.id"
          :error="props.hasErrors"
          v-model="answerChoices"
        >
          <template v-slot:label>
            <span class="question--answers">{{ answer.answer }}</span>
          </template>
        </v-checkbox>
      </validator> -->
  </validation-observer>
</template>
<script>
export default {
  name: "ValidatorObserver",
  components: {},
  props: {},
  methods: {
    async validate(cb) {
      const valid = await this.$refs.obs.validate();
      if (valid) {
        cb();
      }
    },
  },
};
</script>
