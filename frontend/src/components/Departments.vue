<template>

        <div class="col-md-2 left">
            <ul class="col-md-6 offset-3" v-for="depart in getDepartments" :key="depart.id">
                <li>{{ depart }}</li>
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
