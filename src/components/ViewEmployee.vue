<template>
  <div class="view-employee">
    <ul class="collection with-header">
      <li class="collection-header">
        <h4>{{name}}</h4>
      </li>
      <li class="collection-item">Employee Id: {{employee_id}}</li>
      <li class="collection-item">Employee Position: {{position}}</li>
      <li class="collection-item">Employee Dept: {{dept}}</li>
    </ul>
    <router-link class="btn grey" to="/">Back</router-link>
    <button @click="deleteEmployee" class="btn red">Delete</button>
    <div class="fixed-action-btn">
      <router-link v-bind:to="{name:'edit-employee', params:{id:employee_id}}" class="btn-floating btn-large red">
        <i class="fa fa-pencil-alt"></i>
      </router-link>
    </div>
  </div>

</template>

<script>
  import db from './firebaseInit'

  export default {
    name: 'view-employee',
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
      deleteEmployee() {
        if (confirm('Are you sure?')) {
          db.collection('employees').where('id', '==', this.$route.params.id)
            .get()
            .then(querySnapshot => {
              querySnapshot.forEach(doc => {
                doc.ref.delete()
                this.$router.push('/')
              })
            })
        }
      }
    }
  }
</script>

<style scoped>

</style>
