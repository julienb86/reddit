<template>


    <div class="col-md-10 col-xm-8">
        <form class="my-5" @submit.prevent="postArticle()" enctype="multipart/form-data" method="post">
            <div class="form-group">
                    <textarea v-model="content" class="form-control my-4" rows="3"></textarea>
                <div class="form-row justify-content-md-between my-5">
                    <div class="col-md-6">
                        <input id="fileId" v-validate="'size:5120'" name="attachment[], size_field" data-vv-as="file" type="file" ref="file" class="form-control-file" @change="onFileChange"  hidden/>
                        <button type="button"  class="btn btn-choose col-md-5 form-control-file" @click="$refs.file.click()">Choose a file</button>

                        <span class="offset-md-1" >{{ fileName ? fileName : "No file Chosen"}}</span>
                    </div>

                    <div class="mb-2 col-md-2" >
                        <button type="submit" class="btn btn-submit form-control">Submit</button> 
                    </div>

                </div>
                
            </div>
            <div>
                <span  v-show="errors.has('size_field')" class="text-danger submit">{{ errors.first('size_field')}}</span>
            </div>           
        </form>
        
        <h2 class="text-center">HR Department</h2>


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
import { mapGetters } from 'vuex';

export default {
    components : {
        Article
    },
    data(){
        return{
            fileName : "",
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
            return this.getArticlesByDepartment("HR");
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
                        const response = await this.$store.dispatch('postArticle', {
                        userId : this.$store.state.user._id,
                        name : this.$store.state.user.name,
                        department : this.$store.state.departments[1],
                        content : this.content,
                        file : this.file
                        });
                
            this.$store.dispatch('getArticles'); 
            this.content = '';
            this.fileName = '';  
                }

            }else if(this.content){
                const response = await this.$store.dispatch('postArticle', {
                userId : this.$store.state.user._id,
                name : this.$store.state.user.name,
                department : this.$store.state.departments[1],
                content : this.content,
                });
            this.$store.dispatch('getArticles'); 
            this.content = '';

            }else{
                this.errors.add({
                field : 'size_field',
                msg : 'A text or an image is required'
            })
            }
            } catch (error) {
                console.log(error);
            }
        },
        onFileChange(event){
            var fileData =  event.target.files[0];
            this.fileName = fileData.name;
        }
    }
}
</script>

<style scoped>
.btn-choose{
    background-color: #DEDEDE;
    border: 1px solid black;
    font-size: 1.1rem;
    padding: 10px;
}

.btn-submit{
    color: antiquewhite;
    background-color: #112240;
    font-size: 1.2rem;
}
.btn-submit:hover{
    color: antiquewhite;
    background-color: #112240;
    font-size: 1.2rem;
}
</style>
