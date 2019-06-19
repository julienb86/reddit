<template>
        <div class="col-md-2 col-xm-4 left">
            <ul class="col-12" >
<!--                 <li><a @click="getArticles()" href="#" :id="depart">{{ depart }}</a></li> -->
                <li v-for="depart in getDepartments" :key="depart.id"   >
                    <i class="fas fa-circle p-2" v-if="getUnReadPosts && depart === getDepartment" ></i>
                    <i v-else class="far fa-circle p-2"></i>                    
                    <router-link :to="`${depart}`">{{ depart }}</router-link>
                </li>
            </ul>
        </div>
</template>

<script>
import {mapGetters} from 'vuex';
import Axios from 'axios';

export default {

        computed : {
        ...mapGetters([
            'getDepartments',
            'getUnReadPosts',
            'getDepartment'
        ]),

    }
}
</script>

<style scoped>
*{
    list-style: none;
    text-decoration: none;
}
.left{
    background-color:#EAE8E6;
    height: 100vh;
    position: sticky;
    top: 0;

}
</style>
