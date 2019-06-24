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
            "UI-UX"
        ],
        articles : [],
        unReadPosts : false,
        department : []
    },

    getters:{
        getUser: (state) => {
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
        },
        getArticlesByDepartment: (state) => (department) => {
            return state.articles
            .filter(article => article.department === department)
            .sort((a,b) => new Date(b.created) - new Date(a.created));                   
        },
        getToken : state => {
            return state.token;
        },
        getUnReadPosts : state => {
            return state.unReadPosts;
        },
        getDepartment : state => {
            return state.department;
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
        setNewArticle(state, articles){
            state.articles.push(articles);
        },
        setUnReadPosts(state, department){
            state.unReadPosts = true;
            state.department.push(department);
        },
        setDepartment(state, department){
            
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
                commit('setNewArticle', formData);
                commit('setUnReadPosts', formData);
            } catch (error) {
                console.log(error);
            }
        },
        async getArticles({commit}){            
            Axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.state.token;
            try{
                const response = await Axios.get('http://localhost:3000/api/articles');
                const articles = await response.data;
                /* const unReadPosts = await response.data.length; */
                commit('setArticles', articles);
                /* commit('setUnReadPosts', unReadPosts); */
                
            }catch(error){
                console.log(error);  
            }
        },
    }
});