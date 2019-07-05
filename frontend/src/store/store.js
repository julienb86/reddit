import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';



Vue.use(Vuex);

export const store = new Vuex.Store({
    strict: true,
    state: {
        token : localStorage.getItem('token') || null,
        user : JSON.parse(localStorage.getItem('user')) || '',
        departments : [
            "Marketing",
            "HR",
            "Development",
            "UI-UX"
        ],
        articles : [],
        department :  [],
        unRead : false
    },

    getters:{
        getUser: (state) => {
            return state.user.name;
        },
        getUserId : state => {
            console.log(state.user._id);
            
            return state.user._id;
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
        },
        getArticlesByDepartment: (state) => (department) => {
            return state.articles
            .filter(article => article.department === department)
            .sort((a,b) => new Date(b.created) - new Date(a.created));                   
        },
        getToken : state => {
            return state.token;
        },
        getDepartment : state => {
            return state.department;
            },
        getPostUser : state => {
            return state.postUser;
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
        },
        setArticles(state, articles){
            state.articles = articles;
        },
        setDepartment(state, department){
            department.forEach(dep => {
                state.department.push({depart : dep.department,id:  dep.userId})
            });
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
                    localStorage.setItem('user', JSON.stringify(user));
                    Axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
                    commit('auth_success', {token, user});
                }
                catch(error){
                    
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
                    localStorage.setItem('user', JSON.stringify(user));
                    Axios.defaults.headers.common['Authorization'] = 'Bearer ' +  token;
                    commit('auth_success', {user, token});
                }
                catch (error){
                    throw error;                        
            }  
        },

        async deleteAccount({commit}){ 
            Axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.state.token;           
            try {
                /* if a user is connected */
                await Axios.delete(`http://localhost:3000/api/auth/user/` + this.state.user._id);
                commit('deleteAccount');
                }
                catch (error){
                console.log(error);            
            }   
        },
        async postArticle({commit},datas){
            Axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.state.token;
            const formData = new FormData();
            formData.append('userId', datas.userId);
            formData.append('name', datas.name);
            formData.append('department', datas.department);
            formData.append('content', datas.content);
            formData.append('file', datas.file);
            try {
                await Axios.post('http://localhost:3000/api/articles', formData);
            } catch (error) {
                console.log(error);
            }
        },
        async getArticles({commit}){            
            Axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.state.token;
            try{
                const response = await Axios.get('http://localhost:3000/api/articles');
                const articles = await response.data;
                commit('setArticles', articles);
                commit('setDepartment', articles);
                commit('setId', articles);
            }catch(error){
                console.log(error);  
            }
        },
    }
});