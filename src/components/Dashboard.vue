<template>
  <div id="dashboard">
    <h3>Dashboard</h3>
    <ul class="collection">
        <li class="collection-header"><h4>All Employees</h4></li>
        <li v-for='employee in employees' v-bind:key="employee.id">
            {{employee.dept}} : {{employee.employee_id}} : {{employee.name}}
            <router-link class="edit-employee" v-bind:to="{name:'view-employee', params:{employee_id: employee.employee_id}}" >View</router-link>
        </li>
    </ul>

    <div class="fixed-action-btn">
        <router-link to="/new" class="add-new-btn">ADD NEW EMPLOYEE</router-link>
    </div>
  </div>
</template>


<script>

    import db from './firebaseInit'
    export default {
        name: 'dashboard',
        data(){
            return{
                employees:[]
            }
        },
        created() {
            db.collection('employees').get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    //console.log(doc.data());
                    const data = {
                        'id': doc.id,
                        'employee_id' : doc.data().employee_id,
                        'name': doc.data().name,
                        'dept': doc.data().dept,
                        'position': doc.data().position
                    }
                    this.employees.push(data)
                })
            })
        }
    }
</script>


<style lang="scss" scoped>
    .add-new-btn {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        font-weight: bold;
        text-decoration: none;
        font-size: 12px;
        color: red;
        transition: color 0.2s ease-in;

        &:hover {
            color: blue;
            transition: color 0.2s ease-in;
        }
    }

    li {
        list-style-type: none;
        //border: 1px dotted grey;
    }

    .edit-employee {
        font-size: 11px;
        color: black;
        padding-left: 30px;
    }
</style>
