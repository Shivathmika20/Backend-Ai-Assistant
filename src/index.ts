import express from "express";
import twilioRouter from "./routes/twilio-route";
import assemblyRouter from "./routes/assembly-route";
import aiProcessRouter from "./routes/ai-process-route";
import gdriveRouter from "./routes/gdrive-route";


const app=express();

app.use(express.json());
app.use('api',twilioRouter);
app.use('api',assemblyRouter);
app.use('api',aiProcessRouter);
app.use('api',gdriveRouter);


app.get('/',(req,res)=>{
	return res.json({
		message:"Hi Welcome"
	})
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});