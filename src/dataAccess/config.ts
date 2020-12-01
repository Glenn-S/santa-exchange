import mongoose from 'mongoose';

export const connectDb = (connectionString: string, user?: string, pass?: string): void => {
  
  let connectionOptions: mongoose.ConnectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
    useFindAndModify: false 
  };

  if (user) {
    connectionOptions = { ...connectionOptions, user };
  }

  if (pass) {
    connectionOptions = { ...connectionOptions, pass };
  }

  mongoose
    .connect(connectionString, connectionOptions)
    .then((value): void => {
      console.log('Mongoose db connected and up and running');
      console.log(value);
    })
    .catch((reason) => {
      console.log('An error occured connecting');
      console.log(reason);
    });
};