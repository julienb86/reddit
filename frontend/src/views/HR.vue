<template>


    <div class="col-md-10 col-xm-8">
        <form @submit.prevent="postArticle()" enctype="multipart/form-data" method="post">
            <div class="form-group">
                <textarea v-model="content" class="form-control" rows="3"></textarea>
                <div class="row">
                    <input @change="getFile" type="file" ref="file" class="form-control-file" >
                    <button type="submit" class="btn btn-primary mb-2">Submit</button>
                </div>
            </div>
        </form>


        <div class="row">
            <div class="col-md-10 col-xm-8" v-for="article in articles" :key="article.id">
                
                <Article :article="article" />

            </div>
        </div>
    </div>
</template>

<script>
import Axios from "axios";
import Article from "../components/Article";
import {mapState} from 'vuex';

export default {

    components : {
        Article
    },
    mounted() {
        this.$store.dispatch('getArticles', "HR"); 
    },
    data(){
        return{
            content : '',
            file : null
        }
    },
    computed : {
        ...mapState([
            'articles'
        ])
    },

    methods : {
        getFile(){
            this.file = this.$refs.file.files[0];        
        },

        async postArticle(){
            try {
                await this.$store.dispatch('postArticle', {
                    userId : this.$store.state.user._id,
                    department : this.$store.state.departments[0],
                    content : this.content,
                    file : this.file
                });   
            this.$store.dispatch('getArticles', "HR"); 
                                          
            } catch (error) {
                console.log(error);
            }
        }
    }
}
</script>
