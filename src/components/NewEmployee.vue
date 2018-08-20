<template>
  <div id="new-employee">
    <h3>Add New Emplyee</h3>
    <form @submit.prevent="saveEmployee">
        <div class="row">
            <div class="input-field">
                <label for="">Employee ID </label>
                <input type="text" v-model="employee_id" requered>
            </div>
        </div>

        <div class="row">
            <div class="input-field">
                <label for="">Name </label>
                <input type="text" v-model="name" requered>
            </div>
        </div>

        <div class="row">
            <div class="input-field">
                <label for="">Department </label>
                <input type="text" v-model="dept" requered>
            </div>
        </div>

        <div class="row">
            <div class="input-field">
                <label for="">Position </label>
                <input type="text" v-model="position" requered>
            </div>
        </div>

        <button type="submit" class="btn">Submit</button>
        <router-link to='/Dashboard' >Cancel</router-link>
    </form>
  </div>
</template>


<script>
    import db from './firebaseInit'
    export default {
        name: 'new-employee',
        data(){
            return{
                employee_id: null,
                name: null,
                dept: null,
                position: null
            }
        },
        methods: {
            saveEmployee () {
                db.collection('employees').add({
                    employee_id: this.employee_id,
                    name: this.name,
                    dept: this.dept,
                    position: this.position
                })
                .then(docRef => this.$router.push('/Dashboard'))
                .catch(error => console.log(err))
            }
        }
    }
</script>


<style scoped>

</style>
