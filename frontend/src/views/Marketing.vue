<template>


    <div class="col-md-10 col-xm-8">
        <form class="my-5" @submit.prevent="postArticle()" enctype="multipart/form-data" method="post">
            <div class="form-group">
                    <textarea v-model="content" class="form-control my-4" rows="3"></textarea>
                <div class="form-row justify-content-md-between">
                    <div class="col-md-4">
                        <input id="file" v-validate="'size:5120'" name="size_field" data-vv-as="file" type="file" ref="file" class="form-control-file" hidden/>
                        <button type="button" id="custom-btn" class="btn col-md-6 form-control-file" @click="$refs.file.click()">Choose a file</button>
                        <span>No file Chosen</span>
                    </div>

                    <div class="mb-2 col-md-3" >
                        <button type="submit" class="btn form-control">Submit</button> 
                    </div>

                </div>
                
            </div>
        </form>
        
        <h2 class="text-center">Marketing Department</h2>


        <div class="row">
            <div class="col-md-12 col-xm-8" v-for="article in allArticles" :key="article.id">
               
                <Article :article= "article" />

            </div>
        </div>
    </div>
</template>

<script>
import Article from "../components/Article";
import { mapState } from 'vuex';
import { mapGetters, mapActions } from 'vuex';
export default {
    mounted(){
        console.log(this.$store.dispatch('getArticles'));
    },
    components : {
        Article
    },
    data(){
        return{
            content : '',
            file : null,
            fileSize : 5*1024*1024
        }
    },
    computed : {
        ...mapGetters([
            'getArticlesByDepartment',
        ]),
        allArticles(){
            return this.getArticlesByDepartment("Marketing");
            
            
        },
        ...mapState([
            'articles',
        ])
    },
    methods : {
        async postArticle(){
            try {
                this.file = this.$refs.file.files[0];
                if(this.file){
                
                    if(this.file.size < this.fileSize){
                        console.log(this.file.size);
                        console.log(this.fileSize);
                        
                        
                        const response = await this.$store.dispatch('postArticle', {
                        userId : this.$store.state.user._id,
                        name : this.$store.state.user.name,
                        department : this.$store.state.departments[0],
                        content : this.content,
                        file : this.file,
                        });
                
            this.$store.dispatch('getArticles'); 
            this.content = '';
            this.$refs.file.value = ''; 
                }
            }else if(this.content){
                const response = await this.$store.dispatch('postArticle', {
                userId : this.$store.state.user._id,
                name : this.$store.state.user.name,
                department : this.$store.state.departments[0],
                content : this.content
                });
            this.$store.dispatch('getArticles'); 
            this.content = '';
            this.$refs.file.value = ''; 
            }else{
                this.errors.add({
                field : 'size_field',
                msg : 'A text or an image is required'
            });
            }
            } catch (error) {
                console.log(error);
            }
        },
    }
}
</script>

<style scoped>
.btn{
    color: antiquewhite;
    background-color: #112240;
}
.btn:hover{
    color: antiquewhite;
    background-color: #112240;
}
</style>