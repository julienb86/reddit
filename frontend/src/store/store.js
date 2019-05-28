import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';

Vue.use(Vuex);

export const store =  new Vuex.Store({
    state: {
        token : null,
        name : '',
        email : '',
        department : '',
        birthday: '',
        isUserLoggedIn : false,
        departments : [
            "Marketing",
            "HR",
            "Development",
            "UI/UX"
        ]
    },

    getters:{
        getName: state => {
            return state.name;
        },
        getDepartments: state => {
            return state.departments;
        }
    },
    
    mutations:{
        setToken(state, token){
            state.token = token;
            if(token){
                state.isUserLoggedIn = true;
            }else{
                state.isUserLoggedIn = false;
            }
        },
        setName(state, name){
            state.name = name;
        }
    },
    actions:{
        async registerUser({commit}, datas) {
            try {
                const response = await Axios.post("http://localhost:3000/api/auth/signup", {
                    name : datas.name,
                    email : datas.email,
                    department : datas.department,
                    birthday: datas.birthday,
                    password : datas.password
                });
                const allDatas = await response.data;
                console.log(allDatas);
                commit('setToken', allDatas);
                commit('setName', allDatas.user.name);
                }
                catch (error){
                console.log(error);                     
            }  
        },
        async loginUser({commit}, datas) {
            try {
                const response = await Axios.post("http://localhost:3000/api/auth/login", {
                    email : datas.email,
                    password : datas.password
                });
                const allDatas = await response.data;
                console.log(allDatas);
                commit('setToken', allDatas.token);
                commit('setName', allDatas.user.name);                
                }
                catch (error){
                console.log(error);                      
            }  
        }
    }
});


