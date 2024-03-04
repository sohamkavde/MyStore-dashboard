import Link from 'next/link';
import React from 'react';
function Accordino() {
    return (
        <div>
            <span>Products</span>
            <ul>
                <li>
                   <Link href={'../../../Dashboard-component/Products/Add'}>Add</Link></li>
                <li>
                    <Link href={'../../../Dashboard-component/Products/View'} >View</Link>
                </li>
            </ul>
            <hr />

            <span>Banner</span>
            <ul>
            <li>
                   <Link href={'../../../Dashboard-component/Banners/Add'}>Add</Link></li>
                <li>
                    <Link href={'../../../Dashboard-component/Banners/View'} >View</Link>
                </li>
            </ul>
            <hr />
            <span>Carousel</span>
            <ul>
                <li>Add</li>
                <li>View</li>
            </ul>
            <hr />
            <p>Profile</p><hr />
            <p>Logout</p><hr />


        </div>
    )
}

export default Accordino;
