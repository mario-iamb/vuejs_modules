<template>
  <div class="users">
    <h1>Users</h1>

    <form v-on:submit='addUser'>
        <input type="text" v-model="newUser.name" placeholder="Enter Name">
        <br>
        <input type="text" v-model="newUser.email" placeholder="Enter Email">
        <br><br>
        <input type="submit" value="Submit">
    </form>
    
    <ul>
        <li v-for="user in users" :key="user.id">
            <input type="checkbox" class="toggle" v-model="user.contacted">
            <span :class="{contacted: user.contacted}">
                {{user.name}}: {{user.email}} <button v-on:click="deleteUser(user)">X</button>
            </span>
        </li>
    </ul>
  </div>
</template>



<script>
    export default {
        name: 'users',
        data(){
            return {
                newUser: {},
                users: [
                    {
                        name: 'Mario Simaska',
                        email: 'mario@gmail.com',
                        contacted: false
                    },
                    {
                        name: 'Andrew Simaska',
                        email: 'andrew@gmail.com',
                        contacted: false
                    },
                    {
                        name: 'John Smith',
                        email: 'john.smith@gmail.com',
                        contacted: false
                    }
                ]
            }
        },
        methods: {
            addUser: function(e){
                this.users.push({
                    name:this.newUser.name,
                    email:this.newUser.email,
                    contacted: false
                });
                //console.log('add');
                e.preventDefault();
            },
            deleteUser:function(user){
                this.users.splice(this.users.indexOf(user),1);
            }
        },
        created: function(){
            this.$http.get('https://jsonplaceholder.typicode.com/users').then(
                function(response){
                    //console.log(response.data);
                }
            );
        }
    }
</script>


<style scoped>
    li {list-style-type: none;}
    .contacted {text-decoration:line-through;}
</style>
