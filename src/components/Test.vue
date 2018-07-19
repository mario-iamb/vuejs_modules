<template>
    <div class='test'>
        
        <!-- simple DIRECTIVES -->
        <h1 class="red">{{title}}</h1>
        <p class="red" v-text='user.firstName'></p>
        <span class="red" v-html='msgOne'></span>

        <!-- conditional DIRECTIVES -->
        <p class='blue' v-if="showName">{{user.firstName}}</p>
        <p class='blue' v-else>Nobody</p>
        
        <!-- loop DIRECTIVES -->
        <ul>
          <li class="green" v-for="item in items" :key="item.id">{{item.title}}</li>
        </ul>

        <!-- input binding -->
        <input type="text" v-model="title"><br><br>

        <!-- events -->
        <button v-on:click="greet">Say Greetings</button><br><br>
        <input type="text" v-on:keyup="pressKey"><br><br>
        <input type="text" v-on:keyup="typeKey" v-on:keyup.enter="hitEnter"><br><br>

        <!-- events with parameters -->
        <button v-on:click="greet2('Hello world')">Say Greetings</button>

        <hr/><br><br>

        <!-- Computed properties -->
        <label>First Name:</label>
        <input type="text" v-model="user.firstName">
        <br>
        <label>Last Name:</label>
        <input type="text" v-model="user.lastName">
        <h3>{{fullname}}</h3>

        <hr/><br>

        <!-- Component properties -->
        <h2>{{msg}}</h2>

    </div>  
</template>

<script>
    export default {
        name: 'test',
        props: {
            msg: {
                type: String,
                default:'Foobar'
            }
        },
        data(){
            return {
                msgOne: '<h1>parsing html</h1>',
                user: {
                    firstName: 'John',
                    lastName:'Smith'
                },
                showName: true,

                items: [
                    {title:'List Item 1'},
                    {title:'List Item 2'},
                    {title:'List Item 3'}
                ],
                title: 'Mario title'
            }
        },
        methods: {
            greet: function(){
                alert('Hello');
            },
            greet2: function(greeting){
                alert(greeting);
            },
            pressKey: function(){
                console.log('pressed key');
            },
            typeKey: function(e){
                console.log(e.target.value);
            },
            hitEnter: function(){
                console.log('you hit enter');
            }
        },
        computed: {
            fullname: function(){
                return this.user.firstName+ ' ' +this.user.lastName;
            }
        }
    }
</script>



<style scoped>
    .red { color:red;  }
    .blue {color:blue;}
    .green {color:green;}

</style>