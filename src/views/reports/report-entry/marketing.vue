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
        <b-form-group label="Team" label-for="mc-team">
          <b-form-select
            v-model="team.selected"
            :options="team.data"
            id="mc-team"
          />
        </b-form-group>
      </b-col>
      <b-col md="6">
        <b-form-group label="Chi nhánh" label-for="mc-branch">
          <b-form-select
            v-model="branch.selected"
            :options="branch.data"
            id="mc-branch"
          />
        </b-form-group>
      </b-col>
      <b-col md="6">
        <b-form-group label="Ngày báo cáo" label-for="mc-date">
          <b-form-input
            v-model="date"
            id="mc-date"
            type="date"
            placeholder="Ngày báo cáo"
          />
        </b-form-group>
      </b-col>
      <b-col md="6">
        <b-form-group label="Doanh số thực tế" label-for="mc-income">
          <div class="form-label-group">
            <b-form-input
              v-model="income"
              id="mc-income"
              type="number"
              placeholder="Doanh số thực tế"
            />
          </div>
        </b-form-group>
      </b-col>
      <b-col md="6">
        <b-form-group label="Chi phí ads thực tế" abel-for="mc-ads">
          <div class="form-label-group">
            <b-form-input
              v-model="ads"
              id="mc-ads"
              type="number"
              placeholder="Chi phí ads thực tế"
            />
          </div>
        </b-form-group>
      </b-col>

      <b-col md="12">
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
      date: null,
      income: null,
      ads: null,
      team: {
        selected: null,
        data: [
          { value: null, text: "Chọn team", disabled: true },
          { value: "Team A", text: "Team A" },
          { value: "Team B", text: "Team B" },
          { value: "Team C", text: "Team C" },
        ],
      },
      branch: {
        selected: null,
        data: [
          { value: null, text: "Chọn chi nhánh", disabled: true },
          { value: "Chi nhánh A", text: "Chi nhánh A" },
          { value: "Chi nhánh B", text: "Chi nhánh B" },
          { value: "Chi nhánh C", text: "Chi nhánh C" },
        ],
      },
    };
  },
};
</script>
