import React from 'react'
import Navbar from '../components/Navbar';
import Header from '../components/Header';
const SupportPage = () => {
  return (
   <>
   <Navbar/>
   <Header />
    <div className="jumbotron text-center"style={{backgroundColor:'#DEB887'}}>
    <div className="display-4">We Are Here !!</div>
    <p className="lead">For any Support call us on Customer Care Number -(1800050292000).</p>
</div>

<div className="container">
    <section>
        <p>
          email:"support@shoplane.com";</p>
          <p>contact Number: "0120-3322445566"
            {/* <h1 style={{color:'red'}}>Our Mission</h1>
            We’re on a mission to start a conversation with you and your customers in this fast connected world. Let’s discover, build and grow your digital business. */}
        </p>
        </section>
   </div>
        </>
   
  )
}

export default SupportPage
