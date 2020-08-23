import React from 'react';

const Contact = () => {
    return ( 
        <div className="pt-5 mt-sm-2 mt-lg-5  mb-3" id="Contact">
            <h1 className="text-center mb-4 heading text-secondary bold-text">Contact us</h1>

            <form className="container carsd p-sm-1 p-lg-5 ">
                <div className="form-group">
                    <label for="email">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter your email...."/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="name">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter your name...."/>
                </div>
                <div className="form-group">
                    <label for="message">Message</label>
                    <textarea className="form-control" id="message" placeholder="Enter your message..." maxLength={256} aria-describedby="msgHelp"></textarea>
                    <small id="msgHelp" className="form-text text-muted">max characters allowed is 256</small>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div> 
    );
}
 
export default Contact;