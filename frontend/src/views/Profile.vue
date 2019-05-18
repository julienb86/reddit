<template>
    <div class="row my-5">
        <div class="card col-md-6 offset-md-3">  
            <form class="form card-body" @submit.prevent="registerUser()">
                <h3 class="text-center my-3">Profile</h3>
                <div class="form-group">
                    <select class="custom-select" v-model="department">
                        <option disabled value="">Select your department page</option>
                        <option value="marketing">Marketing</option>
                        <option value="HR">HR</option>
                        <option value="Development">Development</option>
                        <option value="UX/UI">UX/UI</option>
                    </select>
                </div>
                <datepicker class="form-group" placeholder="Date of birthday" :bootstrap-styling="true" :value="state.date" v-model="state.date" name="calendar"></datepicker>
                <div class="form-group">
                    <button class="btn btn-success form-control">Confirm</button>                    
                </div>
            </form>
        </div>
    </div>
</template>

<script>

import Datepicker from 'vuejs-datepicker';

export default {
    components: {
        Datepicker
    },
    data(){
        return{
            department: '',
            birthday: '',
            state : {
                date: ''
            }
        }
    }
}
</script>
