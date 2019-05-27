import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store =  new Vuex.Store({
    state: {
        token : null,
        email : '',
        name : '',
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
        },
        setName(state, name){
            state.name = name;
        }
    },
    actions:{

    }
});


