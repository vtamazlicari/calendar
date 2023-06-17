<template>
  <ValidationObserver v-if="internForm" v-slot="{ handleSubmit }">
    <form @submit.prevent="handleSubmit(onSubmit)">
      <ValidationProvider name="title" rules="required" v-slot="{ errors }">
        <div>
          <label for="todo-title"> Title </label>
          <b-form-input
            v-model="internForm.title"
            id="todo-title"
            type="text"
          ></b-form-input>
          <span>{{ errors[0] }}</span>
        </div>
      </ValidationProvider>

      <ValidationProvider name="date" rules="required" v-slot="{ errors }">
        <div>
          <label for="todo-time"> Time </label>
          <b-form-input
            v-model="internForm.date"
            id="todo-time"
            type="time"
          ></b-form-input>
          <span>{{ errors[0] }}</span>
        </div>
      </ValidationProvider>

      <ValidationProvider
        name="descriptions"
        rules="required"
        v-slot="{ errors }"
      >
        <div>
          <label for="todo-description"> Description </label>
          <b-form-textarea
            v-model="internForm.descriptions"
            id="todo-description"
            placeholder="Enter something..."
            rows="3"
            max-rows="6"
          ></b-form-textarea>
          <span>{{ errors[0] }}</span>
        </div>
      </ValidationProvider>

      <b-button type="submit" variant="success" class="mt-3">Submit</b-button>
    </form>
  </ValidationObserver>
</template>

<script>
import dayjs from "dayjs";
import { ValidationProvider, ValidationObserver } from "vee-validate";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  props: {
    form: {
      type: Object,
      default: () => ({
        title: "",
        descriptions: "",
        date: "",
      }),
    },
  },
  data() {
    return {
      internForm: null,
    };
  },
  created() {
    this.internForm = { ...this.form };
  },
  computed: {
    ...mapGetters("todos", ["selectedDate"]),
  },
  methods: {
    ...mapActions("todos", ["addTodo"]),
    onSubmit() {
      const [hour, min] = this.internForm.date.split(":");
      const payload = {
        ...this.internForm,
        date: dayjs(this.selectedDate)
          .set("hour", +hour)
          .set("minute", +min)
          .toISOString(),
      };

      this.$emit("submit", payload);
    },
  },
};
</script>
