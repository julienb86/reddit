<template>
    <div class="card my-3">
        <div class="card-body">
            <img :src="article.imageUrl" alt="image" height="150px" width="150px">
            {{article.content}}
        </div>
    </div>
</template>

<script>

export default {
    props : ['article']
}
</script>
