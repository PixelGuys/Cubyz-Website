import express from 'express'
import cors from 'cors'

const port = 3000
const app = express()

const corsOptions = {
    origin: function (origin,callback){
         // Allow requests with no origin (mobile apps, curl, Postman)
        if (!origin) {
            return callback(null, true);
        }
        
        // Check against allowed patterns
        const allowedPatterns = [
            /^https:\/\/.*\.cubyz\.com$/,  // Any subdomain of cubyz.com
            /^https:\/\/cubyz\.com$/,       // Main domain
            /^http:\/\/localhost:\d+$/,     // Any localhost port (dev)
        ];
        
        const isAllowed = allowedPatterns.some(pattern => pattern.test(origin));
        
        if (isAllowed) {
            callback(null, true);
        } else {
            callback(new Error(`Origin ${origin} not allowed by CORS`));
        }
    },
    credentials: true,
}

app.use(cors(corsOptions))


app.get("/test/1",(req,res)=>{
    res.json({message:"yo yo yo!"});
})

app.listen(port,()=>{
    console.log(`Backend running on ${port}`);
})