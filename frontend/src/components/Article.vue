<template>
    <div class="card my-3">
        <div class="card-body">
            <img v-if="article.imageUrl" :src="article.imageUrl" alt="image" height="150px" width="150px">
            {{article.content}}
        </div>
        <div class="card-footer">
            <p>Posted by {{ article.userId }}, {{ article.created }}</p>
        </div>
    </div>
</template>

<script>

export default {
    props : ['article']
}
</script>
