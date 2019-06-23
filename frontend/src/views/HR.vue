<template>


    <div class="col-md-10 col-xm-8">
        <form @submit.prevent="postArticle()" enctype="multipart/form-data" method="post">
            <div class="form-group p-5">
                <textarea v-model="content" class="form-control" rows="3"></textarea>
                <div class="row p-2 d-flex">
                    <input @change="getFile" type="file" ref="file" class="form-control-file" >
                    <button type="submit" class="btn btn-primary mb-2">Submit</button>
                </div>
            </div>
        </form>


        <div class="row">
            <div class="col-md-10 col-xm-8" v-for="article in marketArticles" :key="article.id">
               
                <Article :article= "article" />

            </div>
        </div>
    </div>
</template>

<script>
import Axios from "axios";
import Article from "../components/Article";
import { mapState } from 'vuex';
import { mapGetters } from 'vuex';

export default {
    components : {
        Article
    },
    mounted() {
        this.$store.dispatch('getArticles');        
    },
    data(){
        return{
            content : '',
            file : ''
        }
    },
    computed : {
        ...mapGetters([
            'getArticlesByDepartment'
        ]),
        marketArticles(){
            return this.getArticlesByDepartment("HR");
        },
        ...mapState([
            'articles'
        ])

    },
    methods : {
        getFile(){
            this.file = this.$refs.file.files[0];
        },

/*         getArticles(){
            Axios.get("http://localhost:3000/api/articles").then(response => {
                response.data.forEach(res => {
                    if(res.department === "Marketing"){
                console.log(res);  
                this.articles.push(res); 
                    }                    
                });

            })
    
        }, */

        async postArticle(){
            try {
                const response = await this.$store.dispatch('postArticle', {
                userId : this.$store.state.user._id,
                name : this.$store.state.user.name,
                department : this.$store.state.departments[1],
                content : this.content,
                file : this.file
            }); 
            /* this.getArticles(); */
            this.$store.dispatch('getArticles'); 
            this.content = '';
            this.file = null;
            } catch (error) {
                console.log(error);
            }
        }
    }
}
</script>