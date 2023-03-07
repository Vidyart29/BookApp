<script setup>
import { reactive ,ref} from 'vue';
import { bookStore } from '../stores/store.js';

const books=bookStore()
const newItem=reactive({name:'',author:''})


</script>
<template>
<div class="">
  <!-- will give me id of book -->
  <p>Book ID: {{ $route.params.id }}</p>
<div>
    <label style="color: black;">Book name </label>
    <input type="text" class="form-control" v-model="newItem.name"/>

    <label style="color: black">Author</label>
    <input type="text" class="form-control" v-model="newItem.author"/><br>

    <button type="submit" v-on:click="books.editBook(newItem,$route.params.id)">Update</button>
</div>
</div>
</template>

<style>

input[type=text], select, textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #534747;
  border-radius: 4px;
  resize: vertical;
  
}

label {
  padding: 12px 12px 12px 0;
  display: inline-block;
  font-size: large;
}

input[type=submit] {
  background-color: #04AA6D;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  float: right;
}

input[type=submit]:hover {
  background-color: #45a049;
}

/* .container {
  border-radius: 5px;
  background-color: #797070;
  padding: 20px;
  align-items: center;
} */

.col-25 {
  float: left;
  width: 25%;
  margin-top: 6px;
}

.col-75 {
  float: left;
  width: 75%;
  margin-top: 6px;
}

/* Clear floats after the columns */
.row::after {
  content: "";
  display: table;
  clear: both;
}
</style>