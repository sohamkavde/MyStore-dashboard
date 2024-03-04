import { NextResponse } from 'next/server';
// const Products = require('../../../connectivity/db');
import {Products} from '../../connectivity/db';

export async function GET(request, content) {
    let id = content.params.oneProducts[1];
    let data = await Products.find({ "_id": id });
    return NextResponse.json({ data, scucess: true });
}
export async function PUT(request, content) {
    let payload = await request.json();
    let d = new Date();
    payload["UploadDateAndTime"] = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    let id = content.params.oneProducts[0];
    console.log(payload);
    let val = await Products.updateOne({ "_id": id },{$set : payload} );
    console.log(val);
    return NextResponse.json({ id, payload, success: true });
}