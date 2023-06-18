// import app from "./app";

// // Start the server
// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });


import http from 'http'

import { connectDb } from './config/dbConfig'

import Logging from './library/Logging'

import app from './app'

import dotenv from 'dotenv'

const configuration = dotenv.config()

const PORT = configuration?.parsed?.PORT || 9000

const MONGO = configuration?.parsed?.MONGO

try {
  connectDb(MONGO as string)

  http

    .createServer(app)

    .listen(PORT, () =>
      Logging.info(`Server is running on port ${PORT}.`)
    )
} catch (error) {
  Logging.error('Unable to connect: ')

  Logging.error(error)
}
