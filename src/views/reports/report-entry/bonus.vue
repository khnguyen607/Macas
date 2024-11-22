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
        <b-form-group label="Bộ phận" label-for="mc-department">
          <b-form-input
            v-model="department"
            id="mc-department"
            type="text"
            placeholder="Bộ phận"
          />
        </b-form-group>
      </b-col>
      <b-col md="6">
        <b-form-group label="Ngày ra quyết định" label-for="mc-date">
          <b-form-input
            v-model="date"
            id="mc-date"
            type="date"
            placeholder="Ngày ra quyết định"
          />
        </b-form-group>
      </b-col>
      <b-col md="6">
        <b-form-group label="Kỳ áp dụng" label-for="mc-tern">
          <b-form-input
            v-model="tern"
            id="mc-tern"
            type="month"
            placeholder="Kỳ áp dụng"
          />
        </b-form-group>
      </b-col>
      <b-col md="6">
        <b-form-group label="Mã quyết định/ biên bản" label-for="mc-record">
          <b-form-input
            v-model="record"
            id="mc-record"
            type="text"
            placeholder="Mã quyết định/ biên bản"
          />
        </b-form-group>
      </b-col>
      <b-col md="6">
        <b-form-group label="Nội dung" label-for="mc-content">
          <b-form-input
            v-model="content"
            id="mc-content"
            type="text"
            placeholder="Nội dung"
          />
        </b-form-group>
      </b-col>

      <b-col md="6">
        <b-form-group
          label="Văn bản tham chiếu"
          label-for="mc-document-reference"
        >
          <b-form-input
            v-model="documentReference"
            id="mc-document-reference"
            type="text"
            placeholder="Văn bản tham chiếu"
          />
        </b-form-group>
      </b-col>
      <b-col md="6">
        <b-form-group label="Tiền thưởng" label-for="mc-bonus">
          <div class="form-label-group">
            <b-form-input
              v-model="bonus"
              id="mc-bonus"
              type="number"
              placeholder="Tiền thưởng"
            />
          </div>
        </b-form-group>
      </b-col>
      <b-col md="6">
        <b-form-group label="Tiền phạt" label-for="mc-penalty">
          <div class="form-label-group">
            <b-form-input
              v-model="penalty"
              id="mc-penalty"
              type="number"
              placeholder="Tiền phạt"
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
      department: null,
      date: null,
      tern: null,
      record: null,
      content: null,
      documentReference: null,
      bonus: null,
      penalty: null,
    };
  },
};
</script>
