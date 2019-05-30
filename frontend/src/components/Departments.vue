<template>
        <div class="col-md-2 col-xm-4 left">
            <ul class="col-5 offset-2" v-for="depart in getDepartments" :key="depart.id">
                <li><router-link to="/marketing">{{ depart }}</router-link></li>
            </ul>
        </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
        computed : {
        ...mapGetters([
            'getDepartments'
        ])
    }
}
</script>

<style scoped>

.left{
    background-color:#EAE8E6;
    height: 100vh;
}

</style>
