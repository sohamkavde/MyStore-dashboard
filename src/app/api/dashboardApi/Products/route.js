import { NextResponse } from "next/server";
import {Products} from '../../connectivity/db';

export async function POST(request){
    let payload = await request.json();
    let d = new Date();    
    payload.UploadDateAndTime =d.getDate()+"/"+(d.getMonth()+1)+"/"+d.getFullYear()+" "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
    // Assuming payload is an array of objects containing Name and Work fields
    let data = await Products.insertMany(payload);
   
    return NextResponse.json({ return: data }); // returning the inserted data
}


export async function GET(){
    let data = await Products.find();   
    return NextResponse.json({data,scucess:true});
}

export async function DELETE(request){
    let payload = await request.json();
    let del = await Products.deleteOne({"_id":payload.id});
    let data = await Products.find();
 
    return NextResponse.json({data,scucess:true});
}