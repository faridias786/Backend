import express from 'express';
const app = express();

import userRoutes from './routes/userRoutes';
import tweetRoutes from './routes/tweetRoutes';
app.use('/user',userRoutes);
app.use('/tweet',tweetRoutes);
//lets make sure right from the beginning whenever it will receive Json it will not parse it as string but it will automatically parse it as json  
app.use(express.json());
app.get('/',(req,res)=>{
    res.send('Hello World')
})

//User CRUD : We create data we do that with a post request 

//start listening to request using the above application and to do that we are gonna do 
app.listen(3000,()=>{
    console.log("Server is ready at localhost : 3000");
})