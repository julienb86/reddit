<template>
<div class="col-md-10 col-xm-8">
        <h1>Articles</h1>
    <form @submit.prevent="postArticle()">
        <div class="form-group">
            <textarea v-model="content" class="form-control" rows="3"></textarea>
            <div class="row">
                <input @change="getFile" type="file" ref="files" class="form-control-file">
                <button type="submit" class="btn btn-primary mb-2">Submit</button>
            </div>
        </div>
    </form>
    <router-view></router-view>
</div>
</template>

<script>
import Axios from 'axios';

export default {
    data(){
        return {
            content : '',
            imageUrl : ''
        }
    },

    methods : {
        getFile(){
            this.imageUrl = this.$refs.files.imageUrl;
        },
        async postArticle(){

            try {
                await this.$store.dispatch('postArticle', {
                userId : this.$store.state.user._id,
                name : this.$store.state.name,
                department : this.$store.state.user.department,
                content : this.content,
                imageUrl : this.imageUrl
            }); 
            } catch (error) {
                console.log(error);
            }
        }
    }
}
</script>

