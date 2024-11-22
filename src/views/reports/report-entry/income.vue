<template>
  <b-form @submit.prevent>
    <b-row>
      <b-col md="6">
        <b-form-group label="Họ và tên" label-for="mc-name">
          <b-form-input
            v-model="name"
            id="mc-name"
            type="text"
            placeholder="Họ và tên"
          />
        </b-form-group>
      </b-col>
      <b-col md="6">
        <b-form-group label="Vị trí" label-for="mc-position">
          <b-form-input
            v-model="position"
            id="mc-position"
            type="text"
            placeholder="Vị trí"
          />
        </b-form-group>
      </b-col>
      <b-col md="6">
        <b-form-group label="Ngày báo cáo" label-for="mc-tern">
          <b-form-input
            v-model="tern"
            id="mc-tern"
            type="month"
            placeholder="Ngày báo cáo"
          />
        </b-form-group>
      </b-col>
      <b-col md="6">
        <b-form-group label="Doanh số thực" label-for="mc-income">
          <div class="form-label-group">
            <b-form-input
              v-model="newIncome"
              id="mc-income"
              type="number"
              placeholder="Doanh số thực"
            />
          </div>
        </b-form-group>
      </b-col>

      <!-- submit and reset -->
      <b-col>
        <b-button
          v-ripple.400="'rgba(255, 255, 255, 0.15)'"
          type="submit"
          variant="primary"
          class="mr-1"
        >
          Submit
        </b-button>
        <b-button
          v-ripple.400="'rgba(186, 191, 199, 0.15)'"
          type="reset"
          variant="outline-secondary"
        >
          Reset
        </b-button>
      </b-col>
    </b-row>
  </b-form>
</template>

<script>
import {
  BCard,
  BRow,
  BCol,
  BFormGroup,
  BFormInput,
  BFormCheckbox,
  BForm,
  BButton,
  BFormSelect,
} from "bootstrap-vue";
import Ripple from "vue-ripple-directive";

export default {
  components: {
    BCard,
    BRow,
    BCol,
    BFormGroup,
    BFormInput,
    BFormCheckbox,
    BForm,
    BButton,
    BFormSelect,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      name: null,
      position: null,
      tern: null,
      income: null,
    };
  },
};
</script>
