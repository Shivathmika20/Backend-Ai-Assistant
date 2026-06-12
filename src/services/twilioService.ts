import { Twilio } from "twilio";
import {config} from "../config/var"

const client=new Twilio(config.TWILIO_ACCOUNT_SID,config.TWILIO_AUTH_TOKEN)

export const sendSMS=async(docLink:string)=>{
   try{
    const message=await client.messages.create({
        body: `Your note is saved! 📝 View here → https://docs.google.com/document/d/${docLink}`,
        from:config.TWILIO_PHONE_NUMBER,
        to:config.MY_PHONE_NUMBER
    });

    
    return message.sid; // confirms SMS was sent
   }
   catch(e: any) {
    console.error("Twilio SMS Error:", e.message);
    console.error("Twilio Status:", e.status);
}

}