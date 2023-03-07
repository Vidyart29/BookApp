import {createRouter, createWebHistory} from  'vue-router'

const routes=[
    {
        path: '/', 
        name: 'books' ,
        component:()=>import('../views/books.vue')},

    {
        path: '/add-books', 
        name: 'AddBooks' ,component:()=>import('../views/AddBooks.vue')},
    {
        path: '/edit-books/{:id}',
        props:true,
         name: 'EditBooks' ,
         component:()=>import('../views/EditBooks.vue')}
]

export const router=createRouter({
    history:createWebHistory(),
    routes
})