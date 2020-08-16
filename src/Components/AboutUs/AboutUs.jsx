import React from 'react';

const AboutUs = () => {
    return (
        <div className="pt-5" id="Products">
            <h1 className="text-center mb-5 heading text-secondary bold-text">About us</h1>
            <p className="text-center container mb-5 mt-3">We are a prominent manufacturer, wholesaler, trader and retailer of Card Printer, Barcode Printer, Barcode Scanner, Vehicle Tracking Device and many more. These products are cost effective in nature.</p>
            <div className="row container m-auto mt-5">
                <div className=" col-lg-4 col-md-6 col-sm-12 p-2">
                    <div className="card">
                        <h5 className="m-2 text-success text-lg-left text-sm-center" >Nature of Business</h5>
                        <p className="ml-2 text-sm-center text-lg-left" >Manufacturer</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-md-6 col-sm-12 p-2">
                    <div className="card">
                    <h5 className="m-2 text-success text-sm-center text-lg-left" >Total number of Employees</h5>
                    <p className="ml-2 text-sm-center text-lg-left" >upto 10 people</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 p-2">
                    <div className="card">
                    <h5 className="m-2 text-success text-sm-center text-lg-left" >Year of establishment</h5>
                    <p className="ml-2 text-sm-center text-lg-left" >2015</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 p-2">
                    <div className="card">
                    <h5 className="m-2 text-success text-sm-center text-lg-left" >Legal Status of Firm</h5>
                    <p className="ml-2 text-sm-center text-lg-left" >Partnership Firm</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 p-2">
                    <div className="card">
                    <h5 className="m-2 text-success text-sm-center text-lg-left" >Annual Turnover</h5>
                    <p className="ml-2 text-sm-center text-lg-left" >Rs. 1 - 2 Crore</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 p-2">
                    <div className="card">
                    <h5 className="m-2 text-success text-sm-center text-lg-left" >GST No.</h5>
                    <p className="ml-2 text-sm-center text-lg-left " >2015</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default AboutUs;