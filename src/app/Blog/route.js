import { NextRequest,NextResponse } from "next/server";
import headers from "next/server"

// get 

export async function GET(req,res){
    return NextResponse.json({msg:"this is the next page"})
}
