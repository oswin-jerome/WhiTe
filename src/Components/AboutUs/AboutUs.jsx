import React from 'react';

const AboutUs = () => {
    return (
        <div className="pt-5 mt-5" id="About">
            <h1 className="text-center mb-5 heading text-secondary bold-text">About us</h1>
            <p className="text-center container mb-5 mt-3">We are a prominent manufacturer, wholesaler, trader and retailer of Card Printer, Barcode Printer, Barcode Scanner, Vehicle Tracking Device and many more. These products are cost effective in nature.</p>
            <div className="row mx-5">
                <div className="card mt-3 mb-4 c border-0 rounded-lg shadow col-sm-10 col-lg-3  mx-auto">
                    <img className=" avatar" src="https://images.pexels.com/photos/594610/pexels-photo-594610.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
                    <div className="card-body">
                        <h3 className="text-center m-0 card-title text-primary bold">Walden</h3>
                        <p className="text-center mt-1">CEO</p>
                    </div>
                </div>
            </div>
            <div className="p-3"></div>
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