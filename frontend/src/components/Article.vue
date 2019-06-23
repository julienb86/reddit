<template>
    <div class="card my-3">
        <div class="card-body" v-if="article.content">
            <img v-if="article.imageUrl" :src="article.imageUrl" alt="image" height="150px" width="150px">
            {{article.content}}
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

