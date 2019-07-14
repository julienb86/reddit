<template>
    <div class="card my-3">
        <div class="card-body" >
            <img v-if="article.imageUrl" :src="article.imageUrl" alt="image" height="150px" width="150px">
           <p v-if="article.content">{{article.content}}</p>
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

