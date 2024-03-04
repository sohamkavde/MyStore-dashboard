"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'
function Page(params) {
    const [file,setFile] = useState();
    const [Imageurl,setImage] = useState();
    const check = useRef(true);
    const nav = useRouter();
    const upload = async (e) => {
        e.preventDefault();
        let  image = new FormData();
        image.append('file',file);
        let data = await fetch('../../../api/dashboardApi/Banners', {
            method: "Post",
            body:image
        });

        let res = await data.json();
        // console.log(res);
        if (data.status == 200) {
            alert("inserted");
            nav.push('./View');
        } else {
            alert("not inserted");
        }
     
    }

   let getData = async ()=>{
       let data = await fetch('../../../api/dashboardApi/Banners/dy/'+params.params.Add[1],{
           method:"GET",       
       });
       let res  = await data.json();
       if(data.ok){
         setImage(res.data[0].Image);
       }else{
        alert('Something went wrong !!');
       }

   }
    useEffect((e)=>{
        if(check.current && params.params.Add.length>1){
            getData();
            check.current = false;
        }
    },[Imageurl]);

    const updateImage = async(e)=>{
        e.preventDefault();
        let formData = new FormData();
        formData.append('file',file);
        let data = await fetch('../../../api/dashboardApi/Banners/dy/'+params.params.Add[1],{
            method:"PUT",
            body:formData
        });
        let res = await data.json();
        console.log(res);
        if(data.ok){
            alert('Updated');
            nav.push('../View');
        }else{
            alert('not updated');
        }
    }

    return (
        <div>
            <form className="card p-3 pb-5 border-12">
                <div className="form-group mt-2">
                    <label htmlFor="inputAddress2">Upload Banner Image</label>
                    <input type="file" className="form-control" id="inputAddress2" onChange={(e)=>setFile(e.target.files?.[0])} accept="image/*"/>
                </div>

                <button type="submit" className="btn btn-primary mt-2 col-md-6" onClick={params.params.Add.length>1?updateImage:upload}>{params.params.Add.length>1?"Update":"upload"}</button>
           
            {params.params.Add.length>1 && Imageurl?<Image src={`/${Imageurl}`} width={100} height={100} alt="Picture of the author" style={{ objectFit: "cover" }} /> :""}
           
            </form>
        </div>
    )
}

export default Page;
