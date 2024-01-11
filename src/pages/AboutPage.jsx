import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

const AboutPage = () => {
    return (
        <>
            <Navbar />
            <Header />
            <div className="jumbotron text-center"style={{backgroundColor:'#DEB887'}}>
                <div className="display-4">About Us</div>
                <p className="lead">This is simple about us page</p>
            </div>
            {/* <img className="aboutus" src="C:\Users\hp\OneDrive\Desktop\Midterm\Asset\istockphoto-1163589059-612x612.jpg" alt="istockphoto"style={{ width: '100%', height: 'auto'}} /> */}
            <div className="container">
                <section>
                    <p>
                        <h1 style={{color:'red'}}>Our Mission</h1>
                        We’re on a mission to start a conversation with you and your customers in this fast connected world. Let’s discover, build and grow your digital business.
                    </p>
                    <p className="about" >
                        <h2 style={{color:'red'}}>Our Vision</h2>
                        It is for these reasons that 90% of our clients from all over the world keep coming back! Just ask them!

                        BrandCurb is a unified communications platform that empowers business owners and promotes business growth through services that strengthen brand identity, and sustainably promote online presence to increase engagement. We offer services to help small business enterprises from branding, website development, to digital marketing—and everything else digital in between
                            </p>
            <p>
                  
               </p>
              </section>
             </div>
           </>
    );
};
export default AboutPage;