<template>
    <div class="container">
        <div class="row">
            <div class="card col-md-8 offset-md-2 my-5">
                <div class="card-body">
                    <wysiwyg v-model="content" />
                    <div class="text-center my-3">
                        <button class="btn btn-primary btn-lg">Send</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>


<script>
export default {
    data(){
        return {
            content: ''
        }
    }
}
</script>
