import { NextResponse } from "next/server";
import {BannerImage} from '../../../connectivity/db';
import cryptoRandomString from "crypto-random-string";
import {writeFile} from 'fs/promises';
export async function DELETE(req,context){
    await BannerImage.deleteOne({_id:context.params.dy[1]});
    let data = await BannerImage.find();
    return NextResponse.json({"message":true,data});

}

export async function GET(req,context){
    let id = context.params.dy[1];
    let data = await BannerImage.find({_id:id});
    return NextResponse.json({message:true,data});
}

export async function PUT(req,context){
    const id = context.params.dy[1];
    const data = await req.formData();
    const file = data.get('file');
    if(!file){
        return NextResponse({message:"No Image found",success:false})
    }
    const byteData = await file.arrayBuffer();
    const buffer = Buffer.from(byteData);
    const random = cryptoRandomString({length:10});
    const fileName = random+file.name;
    const path = `./public/${fileName}`;
    await writeFile(path,buffer);

    let data1 = await BannerImage.updateOne({"_id":id},{$set:{
        "Image":fileName
    }});
    const res = await BannerImage.find();
    return NextResponse.json({message:"Updated Success Fully","data":res});
}