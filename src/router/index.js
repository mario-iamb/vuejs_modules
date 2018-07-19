import Vue from 'vue'
import Router from 'vue-router'

import Hello from '@/components/Hello'
import Test from '@/components/Test'
import Resource from '@/components/Resource'
import Users from '@/components/Users'

import Dashboard from '@/components/Dashboard'
import NewEmployee from '@/components/NewEmployee'
import ViewEmployee from '@/components/ViewEmployee'
import EditEmployee from '@/components/EditEmployee'

Vue.use(Router)


//add this router to Dashboard component

export default new Router({
    mode: 'history',
    routes: [
        {
            path:'/',
            name: 'Test',
            component: Test
        },
        {
            path:'/Hello',
            name: 'Hello',
            component: Hello
        },
        {
            path:'/Resource',
            name: 'Resource',
            component: Resource
        },
        {
            path:'/Users',
            name: 'Users',
            component: Users
        },
        {
            path:'/Dashboard',
            name: 'Dashboard',
            component: Dashboard
        },
        {
            path:'/new',
            name: 'new-employee',
            component: NewEmployee
        },
        {
            path:'/edit/:employee_id',
            name: 'edit-employee',
            component: EditEmployee
        },
        {
            path:'/:employee_id',
            name: 'view-employee',
            component: ViewEmployee
        }
    ]
}) 