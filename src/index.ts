import express from "express";
import twilioRouter from "./routes/twilio-route";
import { config } from './config/var'


const app=express();

app.use(express.json());
app.use('/api',twilioRouter);

app.get('/',(req,res)=>{
	return res.json({
		message:"Hi Welcome"
	})
})

app.listen(config.PORT,()=>{
    console.log(`Server is running on port ${config.PORT}`);
});