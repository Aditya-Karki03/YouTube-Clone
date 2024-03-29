//This file is used because sometimes importing env variables in main components may not load can lead to crashing
//hence to be on the safer side we import as an string on to conf file
export const conf={
    projectId:String(import.meta.env.VITE_ProjectId),
    AppWriteURL:String(import.meta.env.VITE_AppWriteURL),
    DBid:String(import.meta.env.VITE_DBid),
    Articleid:String(import.meta.env.VITE_ArticlesID_Collection),
    bucketId:String(import.meta.env.VITE_Bucket)
}