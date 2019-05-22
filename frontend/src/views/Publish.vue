<template>
    <div class="container">
        <div class="row">
            <div class="card col-md-8 offset-md-2 my-5">
                <div class="card-body">
                    <div class="card-title">
                        <select v-model="department" class="custom-select my-4">
                            <option value="">Choose a department</option>
                            <option value="Marketing">Marketing</option>
                            <option value="HR">HR</option>
                            <option value="Development">Development</option>
                            <option value="UX/UI">UX/UI</option>
                        </select>
                    </div>
                        <picture-input 
                            width="300" 
                            height="300" 
                            accept="image/jpeg,image/png" 
                            size="10"
                            button-class="btn btn-danger"
                            @change="onChange">
                        </picture-input>
                    <wysiwyg class="my-4" v-model="content" />
                    <div class="text-center my-3">
                        <button @click="sendArticle()" class="btn btn-primary btn-lg">Send</button>
                    </div>
                </div>
            </div>
        </div>
    </div>  
</template>


<script>
import Axios from 'axios';
import PictureInput from 'vue-picture-input';

export default {
    components : {
        PictureInput
    },
    data(){
        return {
            department: '',
            content: '',
            imageUrl: ''
        }
    },
    methods: {
        async sendArticle(){
            const response = await Axios.post("http://localhost:3000/api/articles/", {
                department : this.department,
                content : this.content,
                imageUrl : this.imageUrl
            }).catch(err => {
                if (err === "413"){
                    console.log("file too large");
                    
                }
            })
            console.log(response);
            
        },
        onChange(imageUrl){
            this.imageUrl = imageUrl;
        }

    }
}
</script>
