import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar'
import '../css/App.css'
import logo from '../lib.jpg'

function App() {
  // modal state variable
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // use effect fetch 
  useEffect(() => {
    fetchBooks();
  }, []);

  // fecthing
  const fetchBooks = async () => {
    try {
      const response = await fetch(
        "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=Q27U2qipNKx1RRJ4yShxXFhHmnkanJHh"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setBooks(data.results.books);
      setFilteredBooks(data.results.books);
      // createElementsFromData(data.results.books);
    } catch (error) {
      console.error('Error fetching JSON data:', error);
    }
  };


  // modal form validation
  const validate = () => {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const feedBack = document.getElementById('feedBack');
    const reName = /^[A-Za-z ]{3,}$/;
    const reEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!name.value) {
      window.alert('Enter your name');
    } else if (!reName.test(name.value)) {
      window.alert('Invalid name');
    } else if (!reEmail.test(email.value)) {
      window.alert('Invalid Email');
    } else if (email.value === '') {
      window.alert('Please enter an email address');
    } else if (!feedBack.value) {
      window.alert('Write something about the book you have read');
    } else {
      window.alert('Thank you for your valuable review');
      handleClose();
    }
  };


  // books state variable
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  console.log(filteredBooks)
  
  const handleInputChange = (value) => {
    var res = filteredBooks.filter(f=>f.title.toLowerCase().includes(value))
    setBooks(res)
  };

  

  return (
    <>
      <Navbar fixed="top" className="nav transparent " >
        <div className="logo">
          <img src={logo} className='topNavImg' />
        
        </div>
        <Form inline>
          <Row>
            <Col xs="auto">

              <input type="text" className='search'
                placeholder="Search by title"
                onChange={e => handleInputChange(e.target.value)} />
            </Col>
          </Row>
        </Form>
      </Navbar>

      <section className='our_collection'>
        <h1>Let's Explore</h1>
       
          <Row xs={1} md={2} className="g-4" id='container'>
            {books.map((d,i)=>(
              <div className='card' key={i}>
                <img src={d.book_image} alt='book image'/>
                <div className='card-body'>
                    <h5>{d.title}</h5>
                    <p>{d.description}</p>
                    <button id="btn" onClick={()=>{
                     handleShow()
                    }}>Leave a review</button>
                </div>
              </div>
            ))}
          </Row>

      </section>
      <Modal className='modal' show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Leave a review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" >
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" id='name' />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" id='email' placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Review</Form.Label>
              <Form.Control as="textarea" id='feedBack' rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={validate}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default App;

