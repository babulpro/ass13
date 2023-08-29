 import { NextResponse,NextRequest } from "next/server"
 import headers from "next/headers"
import {redirect} from "next/navigation"

export async function GET(req,res){
    redirect('/')
}