import { google } from "googleapis";
import {config} from "../config/var"

const oauth2Client=new google.auth.OAuth2(
    config.GOOGLE_CLIENT_ID,
    config.GOOGLE_CLIENT_SECRET,
)

oauth2Client.setCredentials({
    refresh_token:config.GOOGLE_REFRESH_TOKEN
});

export const saveToDoc = async (title: string, content: string) => {
    const docs = google.docs({ version: "v1", auth: oauth2Client });
    const drive = google.drive({ version: "v3", auth: oauth2Client });

    const doc = await docs.documents.create({
        requestBody: { title: title }
    });

    const documentId = doc.data.documentId;
    console.log("Doc created, id:", documentId);

    await docs.documents.batchUpdate({
        documentId: documentId!,
        requestBody: {
            requests: [{
                insertText: {
                    location: { index: 1 },
                    text: content
                }
            }]
        }
    });

    // Move doc to your specific folder
    await drive.files.update({
        fileId: documentId!,
        addParents: config.GOOGLE_DRIVE_FOLDER_ID,
        removeParents: 'root',
        requestBody: {}
    });

    return `https://docs.google.com/document/d/${documentId}`;
}