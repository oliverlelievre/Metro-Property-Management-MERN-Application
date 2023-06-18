import mongoose, { ConnectOptions } from 'mongoose'

import Logging from '../library/Logging'

const connectionOptions: ConnectOptions = {
  serverSelectionTimeoutMS: 30000,
}

export async function connectDb(mongoUrl: string) {
  return await mongoose

    .connect(mongoUrl, connectionOptions)

    .then(() => Logging.info('Connected to mongoDB.'))

    .catch((e) => Logging.error(`Unable to connect: ${e}`))
}
