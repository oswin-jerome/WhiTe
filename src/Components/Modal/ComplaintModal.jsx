import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
    content : {
    //   top                   : '50%',
    //   left                  : '50%',
    //   zIndex:9999,
    //   right                 : 'auto',
    //   bottom                : 'auto',
    //   marginRight           : '-50%',
    //   transform             : 'translate(-50%, -50%)'
    }
  };
  Modal.setAppElement('#root')
const ComplaintModal = () => {
    const [modalIsOpen,setIsOpen] = React.useState(false);
    function openModal() {
      setIsOpen(true);
    }
    function closeModal(){
        setIsOpen(false);
      }
    return (
        <div>
            <a className="nav-link" onClick={openModal}>Register complaint</a>
            <Modal
          isOpen={modalIsOpen}
          style={customStyles}
            className="container bg-white p-5 mt-5"
          contentLabel="Example Modal"
          onRequestClose={closeModal}
          overlayClassName="Overlay"
        >
            <h3 className=" text-secondary ">Register a complaint</h3>
            <form action="">
                <div className="form-group">
                    <label for="email">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter your email...."/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="name">Orginisation Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter your orginisation Name...."/>
                </div>
                <div className="form-group">
                    <label for="message">Complaint</label>
                    <textarea className="form-control" id="message" placeholder="Enter your complaint..." maxLength={256} aria-describedby="msgHelp"></textarea>
                    <small id="msgHelp" className="form-text text-muted">max characters allowed is 256</small>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>

            </form>
        </Modal>
        </div>
    );
}
 
export default ComplaintModal;