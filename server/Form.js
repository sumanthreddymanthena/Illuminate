import mongoose from "mongoose";

const formSchema = new mongoose.Schema({

    backendLanguage : {
        type: String,
    },
    firstCode:{
        type : String,
        // required: true
    } ,
    frontendFramework : {
        type: String,
    }


})


export default mongoose.model("Form", formSchema)
