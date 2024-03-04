"use client"
import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Show = async (e) => {
  let data = await fetch('../../../api/dashboardApi/Banners',
    {
      method: "GET",
    });

  let res = await data.json();

  if (data.status == 200) {
    return res.data;
  } else {
    alert("Error");
  }
}


function Page() {
  const [banners, setBanners] = useState([]);
  const check = useRef(true);
  const navr = useRouter();
  const fetchData = async () => {
    try {
      let data = await Show();
      console.log(data);
      setBanners(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle error appropriately, e.g., set an error state
    }
  }
  useEffect(() => {

    if (check.current) {
      fetchData();
      check.current = false;
    }
  }, []);

  async function DeleteItem(id) {
    if (confirm("Are you sure")) {
      let data = await fetch('../../../api/dashboardApi/Banners/dy/' + id,
        {
          method: "DELETE",
          // body:JSON.stringify({id:id})
        });
      let res = await data.json();
      if (data.ok) {
        alert("Deleted");
        setBanners(res.data);
        return;
      }

    } else {
      alert("Not Deleted");
    }


  }

  const UpdateItem = (id) => {
    navr.push("./Add/" + id);
  }
  return (
    <>
      <div className="table-responsive">
        <table className="table caption-top">
          <caption>List of Banner Image</caption>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Image</th>
              <th scope="col">Update</th>
              <th scope="col">Delete</th>

            </tr>
          </thead>
          <tbody>
            {
              banners.map((item, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>

                  <th scope="row"><Image src={`/${item.Image}`} width={100} height={100} alt="Picture of the author" style={{ objectFit: "cover" }} /> </th>
                  <th scope="col" onClick={() => UpdateItem(item._id)} style={{ cursor: "pointer" }}><i className="bi bi-pen"></i></th>
                  <th scope="col" onClick={() => DeleteItem(item._id)} style={{ cursor: "pointer" }}><i className="bi bi-trash"></i></th>


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
