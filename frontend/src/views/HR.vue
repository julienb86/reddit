<template>


    <div class="col-md-10 col-xm-8">
        <form @submit.prevent="postArticle()">
            <div class="form-group">
                <textarea v-model="content" class="form-control" rows="3"></textarea>
                <div class="row">
                    <input @change="getFile" type="file" ref="files" class="form-control-file">
                    <button type="submit" class="btn btn-primary mb-2">Submit</button>
                </div>
            </div>
        </form>


        <div class="row">
            <div class="col-md-10 col-xm-8" v-for="article in articles" :key="article.id">

                <Article :article= "article" />

            </div>
        </div>
    </div>
</template>

<script>
import Axios from "axios";
import Article from "../components/Article";

export default {
    components : {
        Article
    },
    mounted() {
        this.getArticles();
    },
    data(){
        return{
            articles : [],
            content : '',
            imageUrl : ''
        }
    },
    watch: {
        articles(newValue, old){
            
            
        }
    },

    methods : {
        getFile(){
            this.imageUrl = this.$refs.files.imageUrl;
        },
        getArticles(){
            Axios.get("http://localhost:3000/api/articles").then(response => {
                response.data.forEach(res => {
                    if(res.department === "HR"){
                console.log(res);  
                this.articles.push(res); 
                    }
                });

            })
    
        },

        async postArticle(){
            try {
                const response = await this.$store.dispatch('postArticle', {
                userId : this.$store.state.user._id,
                department : this.$store.state.user.department,
                content : this.content,
                imageUrl : this.imageUrl
            }); 
            console.log(response);
            
            
            } catch (error) {
                console.log(error);
            }
        }
    }
}
</script>

