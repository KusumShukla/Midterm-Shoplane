import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'

const ContactPage = () => {
  return (
   <>
   <Navbar/>
   <Header/>
 
   <div className="jumbotron text-center"style={{backgroundColor:'#DEB887'}}>
    <div className="display-4">Find Us!!</div>
    <p className="lead">For any Support call us on Customer Care Number -(1800050292000).</p>
</div>
<div className="container">
    <section>
        <p>
          email:"support@shoplane.com";</p>
          <p>contact Number: "0120-3322445566"</p>
          <p>For Business/Collaberation: 0120-6785954</p>
        </section>
   </div>
          
   
   </>
  )
}

export default ContactPage
