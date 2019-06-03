import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
    strict: true,
    state: {
        token : localStorage.getItem('token') || null,
        user : JSON.parse(localStorage.getItem('user')) || '',
/*         isUserLoggedIn : false, */
        departments : [
            "Marketing",
            "HR",
            "Development",
            "UI/UX"
        ]
    },

    getters:{
        getUser: state => {
            return state.user.name;
        },
        getUserDepartment : state => {
            return state.user.department;
        },
        getUserBirthday: state => {
            return state.user.birthday;
        },
        getUserEmail : state => {
            return state.user.email;
        },
        getDepartments: state => {
            return state.departments;
        }
    },
    
    mutations:{
        auth_success(state, {token, user}){
            state.token = token;
            state.user = user;
        },
        deleteAccount(state){
            state.token = null;
            state.user = "";
            localStorage.removeItem('token');
            localStorage.removeItem('user');
        },
        setUser(state, user){
            state.user = user;
        },
        logout(state){
            state.isUserLoggedIn = false;
            state.user = '';
            localStorage.removeItem('token');
            localStorage.removeItem('user');
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
                console.log(response);
                    const user = await response.data.user;
                    const token = await response.data.token;
                    localStorage.setItem('token', JSON.stringify(token));
                    Axios.defaults.headers.common['Authorization'] = token;
                    commit('auth_success', {token, user});
                }
                catch(error){
                    console.log(error.response);
                    error.response.data.message = "Email already used!";
                throw error;                 
            }  
        },
        async loginUser({commit}, datas) {
            try {
                const response = await Axios.post("http://localhost:3000/api/auth/login", {
                    email : datas.email,
                    password : datas.password
                });
                    const token = await response.data.token;
                    const user = await response.data.user;
                    localStorage.setItem('token', JSON.stringify(token));
                    Axios.defaults.headers.common['Authorization'] = token;
                    commit('auth_success', {user, token});
           
                }
                catch (error){
                    error.response.data.message = "Email and password do not match!"
                    throw error;
                                      
            }  
        },

        /* is working */
        async deleteAccount({commit}){            
            try {
                /* if a user is connected */
                await Axios.delete(`http://localhost:3000/api/auth/user/` + this.state.user._id);
                commit('deleteAccount');
                }
                catch (error){
                console.log(error);            
            }   
        }
    }
});


