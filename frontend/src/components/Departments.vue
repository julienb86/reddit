<template>
        <div class="col-md-2 col-xm-4 left">
            <ul class="col-5 offset-2" v-for="depart in getDepartments" :key="depart.id">
                <li><a @click="getArticles()" href="#">{{ depart }}</a></li>
            </ul>
        </div>
</template>

<script>
import {mapGetters} from 'vuex';
import Axios from 'axios';

export default {
        computed : {
        ...mapGetters([
            'getDepartments'
        ]),

    },
    methods : {
        /* move it to the store */
        async getArticles(){
            const response = await Axios.get("http://localhost:3000/api/articles");
            console.log(response);
            this.$router.push('/articles');
        }
    }
}
</script>

<style scoped>

.left{
    background-color:#EAE8E6;
    height: 100vh;
}

</style>
