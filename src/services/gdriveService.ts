import { google } from "googleapis";
import {config} from "../config/var"

const auth =new google.auth.JWT({
    email:config.GOOGLE_CLIENT_EMAIL,
    key:config.GOOGLE_PRIVATE_KEY,
    scopes:[
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/documents"
    ]
})

export const saveToDoc=async(title:string,content:string)=>{
    const docs=google.docs({version:"v1",auth}) //get access to doc and drive
    const drive=google.drive({version:"v3",auth})


    const doc=await docs.documents.create({ //create an empty doc with tittle it return id
        requestBody:{
            title:title
        }
    })

    const documentId=doc.data.documentId //store the id

    await docs.documents.batchUpdate({ //write into that doc
        documentId:documentId!,
        requestBody:{
            requests:[{
                insertText:{
                    location:{index:1},
                    text:content
                }
            }]
        }

    });

    await drive.files.update({ //store taht doc in drive
        fileId:documentId!,
        addParents:config.GOOGLE_DRIVE_FOLDER_ID,
        requestBody:{}
    })

    return `https://docs.google.com/document/d/${documentId}`;  //return drive link to notify
    
}
