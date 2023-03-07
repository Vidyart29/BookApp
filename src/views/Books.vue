<script setup>
import { bookStore } from '../stores/store.js';

const books = bookStore()

</script>
<template>
    <table id="books">
        <thead>
            <th>Id</th>
            <th>Name</th>
            <th>Author</th>
            <th colspan="2">Action</th>
        </thead>
        <tbody>
            <tr v-for="(item, counter) in books.getBookList">
                <td>{{ item.id }}</td>
                <td>{{ item.name }} </td>
                <td>{{ item.author }}</td>
                <td>
                    <button v-on:click="books.deleteBook(counter)">Delete</button>
                </td>
                <td>
                    <button><router-link :to="{ 
                        name: 'EditBooks', 
                        params: { 
                            id: item.id
                             } 
                             }"> Edit</router-link></button>
                </td>
            </tr>
        </tbody>
    </table><br>
 <router-link :to="{ name: 'AddBooks' }">Add</router-link>
</template>

<style>
#books {
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
}

#books td,
#books th {
    border: 1px solid #ddd;
    padding: 8px;
}

#books tr:nth-child(even) {
    background-color: #f2f2f2;
}

/* #customers tr:hover {background-color: #ddd;} */

#books th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #04AA6D;
    color: white;
}
</style>