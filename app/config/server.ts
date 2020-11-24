import mongoose from 'mongoose'

const connectDatabase = async(): Promise<void> => {
    try {
        // mongodb+srv://tegar:tegar123xx@cluster0.xfdkb.mongodb.net/e-learning2?retryWrites=true&w=majority
        const conn :any = await mongoose.connect('mongodb+srv://tegar:tegar123xx@cluster0.v0tpr.mongodb.net/e-learning?retryWrites=true&w=majority',{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log(`MONGO DB CONNECT: ${conn.connection.host} `)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

export default connectDatabase