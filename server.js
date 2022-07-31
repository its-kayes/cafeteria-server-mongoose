import mongoose from 'mongoose'

const MONGO_URL_NEW = process.env.MONGO_URL_NEW

// const MONGO_URL_NEW ="mongodb+srv://foodCourt:BGQeywFVN3cTosA1@cluster0.z6tka.mongodb.net/blog?retryWrites=true&w=majority"

console.log(MONGO_URL_NEW);
if (!MONGO_URL_NEW) {
  throw new Error(
    'Please define the MONGO_URL environment variable inside .env.local'
  )
}

let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    }

    cached.promise = mongoose.connect(MONGO_URL_NEW, opts).then((mongoose) => {
      return mongoose
    })
      .catch(err => console.error('Connection failed: ', err));
  }
  cached.conn = await cached.promise
  return cached.conn
}

export default dbConnect