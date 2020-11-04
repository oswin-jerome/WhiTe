import React, {  useState } from 'react';
import Items from './../../Utils/ProductsHelper'

import "./Products.scss"
const Products = () => {


    const productData = Items;

    const [toShow,setToShow] = useState('')

    return ( 
        <div className="pt-5 mt-5" >
            <h1 className="text-center mb-5 heading text-secondary bold-text">Our Products</h1>
            <div className="categoryNav mb-5 productNav">
                <ul className="container">
                    <li onClick={()=>setToShow("")} className={" "+(toShow===""?"list-act-e":"")}> All Products</li>
                    <li onClick={()=>setToShow("printers")} className={" "+(toShow==="printers"?"list-act-e":"")}>Printers</li>
                    <li onClick={()=>setToShow("scanner")} className={" "+(toShow==="scanner"?"list-act-e":"")}>Scanner</li>
                    <li onClick={()=>setToShow("pos")} className={" "+(toShow==="pos"?"list-act-e":"")}>Pos Machine</li>
                    <li onClick={()=>setToShow("cctv")} className={" "+(toShow==="cctv"?"list-act-e":"")}>CCTV</li>
                    <li onClick={()=>setToShow("others")} className={" "+(toShow==="others"?"list-act-e":"")}>Others</li>
                </ul>
            </div>
            <div className="container m-auto  pb-5 productgal">
                {
                    productData.map((products)=>{
                        if(products.categoryName !== toShow && toShow!=="" )
                        return "";
                        // if(products.image=="")
                        // return ""
                        return(
                            <div className=" singleProduct p-2">
                                <div className="card shadow p-0">
                                    <img height="" src={products.image} class="card-img-top p-2" alt="..." />
                                    <div class="card-body">
                                        <h6 className="card-title ">{products.productName}</h6>
                                        <p className="card-text">{products.description}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div> 
    );
}
 
export default Products;