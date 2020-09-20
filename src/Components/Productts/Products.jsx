import React, {  useState } from 'react';



const Products = () => {


    const productData = [
        {
            categoryName:"printers",
            productName:"Barcode printer",
            description:"",
            image:"https://5.imimg.com/data5/CB/TH/KE/SELLER-39809051/tsc-tx300-barcode-printer-500x500.jpg"
        },
        {
            categoryName:"printers",
            productName:"Thermal printer",
            description:"",
            image:"https://srkinnovations.com/wp-content/uploads/2019/04/bluprintsbluetooth_thermal_printer_with_usb_2_inch58_mm_76.jpg"
        },
        {
            categoryName:"printers",
            productName:"ID Card printer",
            description:"",
            image:"https://i.pinimg.com/originals/57/01/a5/5701a5820a1022e66a9bbaa66cfdd017.png"
        },
        {
            categoryName:"scanner",
            productName:"Bar code scanner",
            description:"",
            image:"https://cdn-reichelt.de/bilder/web/xxl_ws/EB00/DELOCK_90279_01.png"
        },
    ]

    const [toShow,setToShow] = useState('')

    return ( 
        <div className="pt-5 mt-5" >
            <h1 className="text-center mb-5 heading text-secondary bold-text">Our Products</h1>
            <div className="categoryNav mb-5">
                <ul className="container list-group list-group-horizontal-lg justify-content-center px-3 m-sm-1 m-lg-auto">
                    <li onClick={()=>setToShow("")} className={"list-group-item border-none px-5 "+(toShow===""?"list-act-e":"")}> All Products</li>
                    <li onClick={()=>setToShow("printers")} className={"list-group-item border-none px-5 "+(toShow==="printers"?"list-act-e":"")}>Printers</li>
                    <li onClick={()=>setToShow("scanner")} className={"list-group-item border-none px-5 "+(toShow==="scanner"?"list-act-e":"")}>Scanner</li>
                    <li onClick={()=>setToShow("cat3")} className={"list-group-item border-none px-5 "+(toShow==="cat3"?"list-act-e":"")}>Category 3</li>
                    <li onClick={()=>setToShow("cat4")} className={"list-group-item border-none px-5 "+(toShow==="cat4"?"list-act-e":"")}>Category 4</li>
                </ul>
            </div>
            <div className="container m-auto row pb-5">
                {
                    productData.map((products)=>{
                        if(products.categoryName !== toShow && toShow!=="")
                        return "";
                        return(
                            <div className="col-lg-4 p-2">
                                <div className="card shadow p-0">
                                    <img height="250px" src={products.image} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h3 className="card-title ">{products.productName}</h3>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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