import mongoose, { Schema,Document} from 'mongoose'

export interface User extends Document {
    username: string,
    password: string,
    email:string
}
const UserSchema = new Schema<User>({
    username:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        lowercase:true

    },
    password:{
        type:String,
        required:true,
        trim:true
    }
},
{timestamps:true})

export default mongoose.model<User>('User', UserSchema)