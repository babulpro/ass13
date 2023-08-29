import { NextRequest,NextResponse } from "next/server";
import{ headers} from "next/headers"
import { redirect } from "next/navigation";





// export async function GET(req,res){
//     const {searchParams} = new URL(req.url)
//     let id = searchParams.get('id')
//     let name = searchParams.get('name')
//     let city = searchParams.get('city')
//     return NextResponse.json({ msg:id,greet:"hello babul",
//     name:name,
//     city:city
//      })
// }





// export async function POST(req,res){

//     const reqBody = await req.json()
//     return NextResponse.json({name:reqBody.name,city:reqBody.city,age:reqBody.age})
// }

 


// export async function DELETE(req,res){
//     return NextResponse.json({msg:'i am babul'})
// }




//404
// export async function PATCH(req,res){
//     const data = await req.formData()
//     let mobile = data.get('mobile')
//     return NextResponse.json({mobile:mobile})
// }


// headers

// export async function GET(req,res){
     
//     const headerList = headers()
//     let apiKey=headerList.get('api-key')
//     return NextResponse.json({msg:apiKey})
// }










// cookies


// export async function GET(req,res){
     
//     const cookie = req.cookies.get('token')
//     return NextResponse.json({msg:cookie})
// }







// response


// export async function GET(req,res){
     
//     return NextResponse.json([
//         {
//             name:"babul",
//             email:"babul@gmail.com",
//             city:"dhaka"
//         },
//         {
//             name:"babul",
//             email:"babul@gmail.com",
//             city:"dhaka"
//         },
//         {
//             name:"babul",
//             email:"babul@gmail.com",
//             city:"dhaka"
//         },
//         {
//             name:"babul",
//             email:"babul@gmail.com",
//             city:"dhaka"
//         }
//     ],
//     {
//         status:200,
//         headers:{
//             'name':'saddam-babul',
//             'token1':"124-xyz",
//             'toket':'hossain-sabit',
//             'Set-Cookie':'babul=saddamhossain;path=/'
                
    
//     }
//     })
// }








//redirect

// export async function GET(){
//     redirect('/')
// }


export async function GET(res,req){

    let headerList = headers()
    let userId = headerList.get('name')
    return NextResponse.json({msg:"hello",name:userId})
}
