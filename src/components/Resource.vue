<template>
  <div class="resource">
      <h1>Users</h1>

      <ul>
        <li v-for="user in users">
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
        name: 'resource',
        data(){
            return {
                newUser: {},
                users: []
            }
        },
        methods: {
            addUser: function(e){
                this.users.push({
                    name:this.newUser.name,
                    email:this.newUser.email,
                    contacted: false
                });
                console.log('add');
                e.preventDefault();
            },
            deleteUser:function(user){
                this.users.splice(this.users.indexOf(user),1);
            }
        },
        created: function(){
            this.$http.get('https://jsonplaceholder.typicode.com/users').then(
                function(response){
                    this.users = response.data;
                }
            );
        }
    }
</script>

<style scoped>
    li {list-style-type: none;}
    .contacted {text-decoration:line-through;}
</style>

