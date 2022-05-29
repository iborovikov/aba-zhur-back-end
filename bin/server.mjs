import mongoose from 'mongoose'
import app from '../app.mjs'

const { PORT = 4751, DB_HOST } = process.env;


mongoose
  .connect(DB_HOST)
  .then(
    () => app.listen(PORT),
    console.log(`Database connection successful on server ${PORT}`)
  )
  .catch((error) => {
    console.log(123);
    process.exit(1);
  });
