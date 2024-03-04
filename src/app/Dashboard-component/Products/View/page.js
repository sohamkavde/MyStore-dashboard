"use client"
import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation';

const Show = async (e)=>{
    let data = await fetch('../../../api/dashboardApi/Products',  
     {
        method:"GET",          
});

    let res = await data.json();
 
    if(data.status == 200){
       return res.data;
    }else{
        alert("Error");
    }
}


function Page() {
  const [products,setProducts] = useState([]);
  const check = useRef(true);
  const navr = useRouter();
  const fetchData = async () => {
    try {
        let data = await Show();
        console.log(data);
        setProducts(data);
    } catch (error) {
        console.error("Error fetching data:", error);
        // Handle error appropriately, e.g., set an error state
    }
}
  useEffect(()=>{

  if (check.current) {
      fetchData();
      check.current = false;
  }
  },[]);

 async function DeleteItem(id){  
  if(confirm("Are you sure")){
    let data =await fetch('../../../api/dashboardApi/Products',
    {
      method:"DELETE",
      body:JSON.stringify({id:id})
    });
    let res = await data.json();
    if(data.ok){
      alert("Deleted");
      setProducts(res.data);
      return;
    }
  
  }else{
    alert("Not Deleted");
  }
  

 }

 const UpdateItem  = (id)=>{
  navr.push("./Add/"+id);
 }
  return (
    <>
      <div className="table-responsive">
        <table className="table caption-top">
          <caption>List of Products</caption>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product Name</th>
              <th scope="col">Product Title</th>
              <th scope="col">Product Description</th>
              {/* <th scope="col">Product Image</th> */}
              <th scope="col">Uploaded Date and Time</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              products.map((item,index)=>(
                <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>{item.ProductName}</td>
                <td>{item.ProductTitle}</td>
                <td>{item.ProductDescription}</td>
                {/* <td>Otto</td> */}
                <td>{item.UploadDateAndTime}</td>
                <th scope="col" onClick={()=>UpdateItem(item._id)} style={{cursor:"pointer"}}><i className="bi bi-pen"></i></th>
                <th scope="col" onClick={()=>DeleteItem(item._id)} style={{cursor:"pointer"}}><i className="bi bi-trash"></i></th>
          
               </tr>
              ))             
            }
           
            
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Page;
