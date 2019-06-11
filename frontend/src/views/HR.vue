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
            imageUrl : ''
        }
    },
    computed : {
        ...mapState([
            'articles'
        ])
    },

    methods : {
        getFile(){
            this.imageUrl = this.$refs.file.imageUrl;
        },
/*         async getArticles(){
            const response = await this.$store.dispatch('getArticles');
            const allDatas = await response.data;
            allDatas.forEach(data => {
            if(data.department === "Marketing"){
                console.log(allDatas);
                this.articles.push(allDatas);
            }

            });
        }, */

        async postArticle(){
            try {
                const response = await this.$store.dispatch('postArticle', {
                userId : this.$store.state.user._id,
                department : this.$store.state.departments[1],
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
