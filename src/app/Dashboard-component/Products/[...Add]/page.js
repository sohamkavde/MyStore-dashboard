"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'
function Page(params) {
    const nav = useRouter();
    const [pname, setName] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const check = useRef(true);
    const [updateShow, setUpdate] = useState(false);
    const upload = async (e) => {
        e.preventDefault();
        let data = await fetch('../../../api/dashboardApi/Products', {
            method: "Post",
            body: JSON.stringify({ ProductName: pname, ProductTitle: title, ProductDescription: description })
        });

        let res = await data.json();

        if (data.status == 200) {
            alert("inserted");
        } else {
            alert("not inserted");
        }
    }

    useEffect(() => {

        if (check.current && params.params.Add.length>1){
            const getUpdateData = async (id) => {
                let data = await fetch("../../../api/dashboardApi/Products/oneProducts/" + id, {
                    method: "GET",
                });

                let res = await data.json();
                if (data.ok) {
                    setName(res.data[0].ProductName)
                    setTitle(res.data[0].ProductTitle)
                    setDescription(res.data[0].ProductDescription);                // nav.push("./View");
                }
            }
            getUpdateData(params.params.Add[1]);
            setUpdate(true);
            check.current = false;
        }
    }, [params.params.Add])


    const uploadUpdate = async (e) => {    
        e.preventDefault();
        let data = await fetch('../../../api/dashboardApi/Products/' + params.params.Add[1], {
            method: "PUT",
            body: JSON.stringify({ ProductName: pname, ProductTitle: title, ProductDescription: description })
        });
        let res = await data.json();
        if (data.status == 200) {
            alert("Update Successful");
        } else {
            alert("Not Updated");
        }
    }
    return (
        <div>
            <form className="card p-3 pb-5 border-12">
                <div className="form-row">
                    <div className="form-group col-md-12 ">
                        <label htmlFor="inputEmail4">Product Name</label>
                        <input type="text" className="form-control" value={pname} onChange={(e) => setName(e.target.value)} id="inputEmail4" placeholder="Product Name" />
                    </div>
                    <div className="form-group col-md-12 mt-2">
                        <label htmlFor="inputPassword4">Product Title</label>
                        <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} id="inputPassword4" placeholder="Product Title" />
                    </div>
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="inputAddress">Product Description</label>
                    <textarea type="text" className="form-control" id="inputAddress" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Product Description" />
                </div>
                {/* <div className="form-group mt-2">
                    <label htmlFor="inputAddress2">Product Image</label>
                    <input type="file" className="form-control" id="inputAddress2"/>
                </div>                */}

                <button type="submit" className="btn btn-primary mt-2 col-md-6" onClick={updateShow ? uploadUpdate : upload}>{updateShow ? "Update" : "Upload"}</button>
            </form>
        </div>
    )
}

export default Page;
