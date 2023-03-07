import { defineStore } from 'pinia';
import {useLocalStorage} from '@vueuse/core'
import { reactive,ref } from 'vue';
export const bookStore = defineStore({
    id:'bookStore',
    state:()=>({
        bookList:useLocalStorage('bookList',reactive([])),
        id:useLocalStorage('id',ref(1))
    }),
    actions:{
        addBook(item){
           item.id=this.id++;
           this.bookList.push(item);
           alert("Book Added")
        },
        deleteBook(counter){
            this.bookList.splice(counter,1);
        },
        editBook(item,id){
            this.bookList.forEach((ele)=>{
                if(ele.id==id)
                {
                    ele.name=item.name;
                    ele.author=item.author;
                }
            });
           alert("Updated") 
        }
    },
    getters:{
        getBookList:(state)=>{
            return state.bookList;
        }
    }
}) 