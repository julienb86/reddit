<template>
    <div class="card my-3">
        <div class="card-body">
            <p v-if="article.content">{{article.content}}</p>
            <img v-if="article.imageUrl" :src="article.imageUrl" alt="image" class="image">
        </div>
        <div class="card-footer">
            <p class="float-right">Posted by {{ article.name }}</p>
        </div>
    </div>
</template>

<script>

export default {
    props : ['article']

}
</script>

<style scoped>
    .image{
        max-height: 100%;
        max-width: 100%;
    }
</style>
