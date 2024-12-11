import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import auth from "../assets/image.jpg";
import prof from "../assets/prof.png";
import res from "../assets/res.png";
import rms from "../assets/rms.png";
import im1 from "../assets/rb_542.png"

import img4 from "../assets/rb_542.png";
import img5 from "../assets/rb_5891.png";
import img6 from "../assets/rb_10205.png";
import img7 from "../assets/rb_16542.png";
import img8 from "../assets/rb_52355.png";

import AOS from 'aos';
import "aos/dist/aos.css";
import logo from "../assets/rm_logo.png"


import StripeCheckout from 'react-stripe-checkout';
const Herosection = () => {
    AOS.init();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [description, setDescription] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState(false);

    const [product,setProduct] = useState({
        name: 'Payment',
        price: 99,
        productBy: "team",
      })

    const makePayment = async(token) =>{
        const body = {
            token, 
            product
        }
        const headers = {
            "Content-Type": "application/json"
        }

        return fetch(`https://result-generator-be.onrender.com/payment`,{
            method: 'POST',
            headers,
            body: JSON.stringify(body)
        }).then(response=>{
            console.log("response: " , response)
            const {status} = response;
            console.log("STATUS: " , status)
        })
        .catch(error=> console.log("error:", error))
    }

    const collectiondata = (e) => {
        e.preventDefault();
        console.log({ name, email, description });
        if (!name || !email || !description) {
            setError(true);
            return false;
        }
        // axios is used to send data from UI to database or from react to database  .then is used to resolve promis/e
        axios
            .post("https://result-generator-be.onrender.com/student/contect", { name, email, description })
            .then((result) => {
                console.log("front end result is:", result); // result contain the response comming from axios

                setMessage(result.data.message);
            })
            .catch((err) => console.log("lat err", err));
    }

    return (
        <div className="flex flex-col items-center mt-1 lg:mt-20" >

            {/* hero section */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-center tracking-wide ">
                Result Management System for
                <span className="bg-gradient-to-r from-orange-300 to-red-600 text-transparent bg-clip-text">
                    {" "}
                    Universities
                </span>
            </h1>
            <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
                It is a comprehensive platform designed to streamline the process of managing and accessing academic results for colleges and students. This project serves as a practical application of full-stack web development skills, integrating user-friendly interfaces with robust backend functionalities.
            </p>
            <div className="flex justify-center my-10">
                {/* <Link to='/studentregistration' className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md cursor-pointer">Student Panel</Link>
                <Link to='/collegeregistration' className="py-3 px-4 rounded-md border">College Admin Panel</Link> */}
                <StripeCheckout stripeKey="pk_test_51QUa98D5CFmAyuW6vCTmGbf1pN1y9TGMrl0kYbCPC8NWVvHuuFOnqmYDIdV3zzge57YdDGbdkh3BrIkofJb9Kz4p00ytNsU7pL" token={makePayment} name= "Payment" amount={product.price *100}>
                    <button className="bg-gradient-to-r from-yellow-200 to-yellow-800 py-3 px-4 mx-3 rounded-md cursor-pointer">Get Premium</button>
                </StripeCheckout>
            </div>


            {/* about section */}

            {/* <div className="flex flex-col mt-1 lg:mt-4 px-2 py-3" id="about">
                <h2 className="text-3xl bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text" >about section</h2>
                <div className="flex flex-col sm:flex-row justify-center my-10 ">
                    <img className="border mx-5 sm:mt-5 h-20 w-20 " src={auth} alt="author" />
                    <p className="lg:mx-5 md:mx-5 my-5">I am <b>Bhoopendra Singh</b>, a final year student at the Institute of Engineering and Technology (IET) Lucknow, specializing in Computer Science and Engineering. My passion lies in web development, where I have honed my skills and knowledge in various programming languages and technologies.
                    I am proficient in JavaScript, C++, HTML, and CSS, data structures and algorithms, and have hands-on experience with frameworks such as React.js, Node.js, and Express.js. My expertise extends to both relational databases like MySQL and non-relational databases like MongoDB.
                    Throughout my academic journey, I have worked on numerous full-stack development projects, which have strengthened my problem-solving abilities and enhanced my understanding of end-to-end web application development. I am eager to continue learning and contributing to the field of web development, leveraging my skills to create innovative and efficient solutions.</p>
                </div>
                <div className="flex flex-col my-5">
                    <h1 className="flex justify-center font-bold text-orange-500">About the Website</h1>
                    <p className="flex justify-center">As part of my journey to practice and enhance my full-stack web development skills, I developed a comprehensive Result Generation and Management website. This project aims to facilitate colleges and students in managing and accessing academic results seamlessly. Student and Colleges can register themselves. Colleges can generate the result of the registered students . And student can view their result using login and view result.</p>
                </div>
                <div className="flex flex-col sm:flex-row sm:my-3 justify-center my-3">
                    <img className="border h-28 w-36 mx-5 sm:mt-5 " src={prof} alt="img1" />
                    <img className="border h-28 w-36 mx-10 sm:mt-5 " src={res} alt="img2" />
                    <img className="border h-28 w-36 mx-5 sm:mt-5 " src={rms} alt="img3" />
                </div>
            </div> */}


            {/* //copy of about */}

            <div className="flex flex-col mt-1 lg:mt-4 px-2 py-3" id="about">
                <h2 className="text-3xl bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text" >About Us</h2>
                <div className="flex flex-col sm:flex-row justify-center my-10 items-center">
                    <img className="sm:mt-5 w-80 " src={logo} alt="author" />
                    <p className="lg:mx-5 md:mx-5 my-5">The Result Management System for Universities is a comprehensive and user-friendly platform designed to revolutionize the way academic results are managed and accessed. This innovative system features dedicated portals for universities and students, providing a secure and efficient solution for result management. Universities can register, log in, and upload results effortlessly, while students can create accounts, log in, and access their academic performance anytime, anywhere. By prioritizing reliability, transparency, and ease of use, the system bridges the gap between institutions and learners, ensuring seamless communication and quick access to vital academic information. Whether you're an administrator seeking a hassle-free way to manage results or a student wanting instant access to your grades, our platform is tailored to meet your needs and enhance the overall academic experience.</p>
                </div>
                <div className="flex flex-col my-5">
                    <h1 className="flex justify-center font-bold text-orange-500">GALLERY</h1>
                    {/* <p className="flex justify-center">As part of my journey to practice and enhance my full-stack web development skills, I developed a comprehensive Result Generation and Management website. This project aims to facilitate colleges and students in managing and accessing academic results seamlessly. Student and Colleges can register themselves. Colleges can generate the result of the registered students . And student can view their result using login and view result.</p> */}
                </div>
                <div className="flex flex-col sm:flex-row sm:my-3 justify-center my-3">
                    <img data-aos="fade-down-right" className="border h-48 w-48 mx-5 sm:mt-5 rounded-md " src={img4} alt="img1" />
                    <img data-aos="fade-down-left" className="border h-48 w-48 mx-5 sm:mt-5 rounded-md " src={img5} alt="img2" />
                    <img data-aos="fade-down-right" className="border h-48 w-48 mx-5 sm:mt-5 rounded-md " src={img6} alt="img3" />
                    <img data-aos="fade-down-left" className="border h-48 w-48 mx-5 sm:mt-5 rounded-md " src={im1} alt="img3" />
                </div>
            </div>


            {/* contact section  */}


            <div className="flex flex-col  mt-1 lg:mt-5 px-2 py-3 justify-center" id="contect">
                {/* <h2 className="text-3xl bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text" id="about">Contact section</h2> */}
                <div className="mt-1 flex-col justify-between mx-24">
                    <h2 className="text-3xl bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">Contact Section</h2>
                    <span className="justify-center text-green-600">{message}
                    </span>
                </div>
                <form className="  justify-center lg:mt-5 mt-2">
                    <div className="flex  py-3 px-2 my-2 justify-center">
                        <label >Name :
                            <br></br>
                            <input className=" px-4 w-96 border rounded-md text-white" type="text" onChange={(e) => setName(e.target.value)} value={name} />
                            <br />
                            {error && !name && (
                                <span className="text-rose-600">Please Enter Your Name</span>
                            )}
                        </label>
                    </div>
                    <div className="flex  py-3 px-2 my-2 justify-center">
                        <label >Email :
                            <br></br>
                            <input className=" px-4 w-96 border rounded-md text-white" type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
                            <br />
                            {error && !email && (
                                <span className="text-rose-600">Please Enter email</span>
                            )}
                        </label>
                    </div>
                    <div className="flex py-3 px-2 my-2 justify-center">
                        <label >Description of :
                            <br></br>
                            <textarea className=" px-4 w-96 h-24 border rounded-md text-white" onChange={(e) => setDescription(e.target.value)} value={description}></textarea>
                            <br />
                            {error && !description && (
                                <span className="text-rose-600">Please Enter description</span>
                            )}
                        </label>
                    </div>
                    <div className="flex py-3 px-2 my-2 justify-center">
                        <button type="submit " className=" bg-gradient-to-r from-orange-500 to-red-800 py-2 px-3 rounded-md justify-center" onClick={collectiondata}>Submit</button>
                    </div>
                    <marquee behavior="" direction="center"><p className="bg-gradient-to-br from-purple-400 to-red-500 text-transparent bg-clip-text ">Please Provide Us Feedback. It will help us to improve this website.</p></marquee>
                </form>
            </div>
        </div>



    )
}

export default Herosection;