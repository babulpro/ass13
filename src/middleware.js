import { NextRequest,NextResponse } from "next/server";
import {headers} from "next/headers"


export function middleware(req,res){
    if(req.nextUrl.pathname.startsWith('/Blog')){
        const reqHeader = new Headers(req.headers);
        reqHeader.set("theme","dark")
        reqHeader.set("language","eng")
        const theme = reqHeader.get("theme")
        const language= reqHeader.get("language")

        if(theme==="dark"){
            return NextResponse.json({
                theme:theme,
                language:language
            })
        }
        else{
            return NextResponse.json({msg:"fail"},{status:401})
        }
    }
}