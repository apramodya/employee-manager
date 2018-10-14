<template>
  <div class="edit-employee">
    <h3>Edit Employee</h3>
    <div class="row">
      <form @submit.prevent="updateEmployee" class="col s12">
        <div class="input-field col s12">
          <input type="text" v-model="employee_id" id="employee_id" placeholder="Employee id" disabled>
        </div>
        <div class="input-field col s12">
          <input type="text" v-model="name" id="name" placeholder="Employee name">
        </div>
        <div class="input-field col s12">
          <input type="text" v-model="position" id="position" placeholder="Employee position">
        </div>
        <div class="input-field col s12">
          <input type="text" v-model="dept" id="dept" placeholder="Employee dept">
        </div>
        <button class="btn" type="submit">Submit</button>
        <router-link class="btn grey" to="/">Cancel</router-link>
      </form>
    </div>
  </div>
</template>

<script>
  import db from './firebaseInit'

  export default {
    name: 'edit-employee',
    data() {
      return {
        employee_id: null,
        name: null,
        dept: null,
        position: null
      }
    },
    beforeRouteEnter(to, from, next) {
      db.collection('employees').where('id', '==', to.params.id)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            next(vm => {
              vm.employee_id = doc.data().id
              vm.name = doc.data().name
              vm.dept = doc.data().dept
              vm.position = doc.data().position
            })
          })
        })
    },
    watch: {
      '$route': 'fetchData'
    },
    methods: {
      fetchData() {
        db.collection('employees').where('id', '==', this.$route.params.id)
          .get()
          .then(
            querySnapshot => {
              querySnapshot.forEach(doc => {
                this.employee_id = doc.data().id
                this.name = doc.data().name
                this.dept = doc.data().dept
                this.position = doc.data().position
              })
            }
          )
      },
      updateEmployee() {
        db.collection('employees').where('id', '==', this.$route.params.id)
          .get()
          .then(querySnapshot => {
            querySnapshot.forEach(doc => {
              doc.ref.update({
                name: this.name,
                dept: this.dept,
                position: this.position
              })
                .then(() => {
                  this.$router.push({name: 'view-employee', params: {id: this.employee_id}})
                })
            })
          })
      }
    }
  }
</script>

<style scoped>

</style>
