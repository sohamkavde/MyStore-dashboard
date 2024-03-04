import {writeFile} from 'fs/promises';
import { NextResponse } from "next/server";
import cryptoRandomString from 'crypto-random-string';
// const BannerImage = require('../../connectivity/db');
import {BannerImage} from '../../connectivity/db';

export async function GET(){
    let data = await BannerImage.find();
    return NextResponse.json({data,success:true});
}
export async function POST(req){
    const data = await req.formData();
    const file = data.get('file');   
    if(!file){
        return NextResponse.json({"messange":"No image found",success:false})
    }
    const byteData = await file.arrayBuffer();
    const buffer = Buffer.from(byteData);
    let randomName = cryptoRandomString({length: 10});
    let fileName = randomName+file.name;
    const path = `./public/${fileName}`;
    await writeFile(path,buffer);
    let data1 = await BannerImage.insertMany({
        "Image":fileName
    })
    return NextResponse.json({"message":"Image uploaded !!",success:true,data1});
}
