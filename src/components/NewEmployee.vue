<template>
  <div class="new-employee">
    <h3>New employee</h3>
    <div class="row">
      <form @submit.prevent="saveEmployee" class="col s12">
        <div class="input-field col s12">
          <input type="text" v-model="employee_id" id="employee_id">
          <label for="employee_id">Employee Id</label>
        </div>
        <div class="input-field col s12">
          <input type="text" v-model="name" id="name">
          <label for="name">Employee Name</label>
        </div>
        <div class="input-field col s12">
          <input type="text" v-model="position" id="position">
          <label for="position">Employee Position</label>
        </div>
        <div class="input-field col s12">
          <input type="text" v-model="dept" id="dept">
          <label for="dept">Employee Dept</label>
        </div>
        <button class="btn" type="submit">Submit</button>
        <router-link class="btn grey" to="/">Cancel</router-link>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'new-employee',
    data() {
      return {

      }
    },
    methods: {
      saveEmployee(){}
    }
  }
</script>

<style scoped>

</style>
