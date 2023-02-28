import mongoose from 'mongoose'


const connect = () => {
  const {
    DB_NAME,
    DB_USER,
    DB_PASS,
    DB_HOST
  } = process.env

  mongoose.set('strictQuery', true)
  mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASS}${DB_HOST}/${DB_NAME}`)
    .then(() => {
      console.log('DB connected');
    }).catch((error) => {
      console.log(error);
    })
}

export default connect;