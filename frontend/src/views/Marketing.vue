<template>


    <div class="col-md-10 col-xm-8">
        <form @submit.prevent="postArticle()" enctype="multipart/form-data" method="post">
            <div class="form-group p-5">
                <textarea v-model="content" class="form-control" rows="3"></textarea>
                    

                <div class="row p-2 d-flex">
                    <input id="file" v-validate="'size:5120'" name="size_field" data-vv-as="file" type="file" ref="file" class="form-control-file" hidden/>
                    <div class=" col-md-4">
                        <button type="button" id="custom-btn" class="btn border" @click="$refs.file.click()">CHOOSE A FILE</button>
                        <span >No file Choosen</span>
                    </div>

                    <button type="submit" class="btn btn-primary mb-2 offset-md-6 col-md-2">SUBMIT</button> 
                    <span  v-show="errors.has('size_field')" class="text-danger submit">{{ errors.first('size_field')}}</span>
              </div>
                
            </div>
        </form>
        
        <h2 class="text-center">Marketing Department</h2>


        <div class="row">
            <div class="col-md-10 col-xm-8" v-for="article in allArticles" :key="article.id">
               
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
                content : this.content,
                read : this.read
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
#custom-btn {
    padding: 5px;
    margin-right: 10px;
    border: 1px solid black !important;
}
.custom-button:hover{
    background-color: white;
    padding: 5px;
    border: 1px solid !important;
    border-radius: 5px;
}

</style>
