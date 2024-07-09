import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import auth from "../assets/image.jpg";
import prof from "../assets/prof.png";
import res from "../assets/res.png";
import rms from "../assets/rms.png";

const Herosection = () => {
    const [name, setName] = useState("");
    const [email,setEmail] = useState("");
    const [description , setDescription] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState(false);

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
            .catch((err) => console.log("lat err",err));
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
                <Link to='/studentregistration' className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md cursor-pointer">Student Panel</Link>
                <Link to='/collegeregistration' className="py-3 px-4 rounded-md border">College Admin Panel</Link>
            </div>



            {/* about section */}

            <div className="flex flex-col mt-1 lg:mt-4 px-2 py-3" id="about">
                <h2 className="text-3xl bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text" >about section</h2>
                <div className="flex flex-col sm:flex-row justify-center my-10 ">
                    <img className="border mx-5 sm:mt-5 h-20 w-20 " src={auth} alt="author" />
                    <p className="lg:mx-5 md:mx-5 my-5">I am <b>Bhoopendra Singh</b>, a final year student at the Institute of Engineering and Technology (IET) Lucknow, specializing in Computer Science and Engineering. My passion lies in web development, where I have honed my skills and knowledge in various programming languages and technologies.
                    I am proficient in JavaScript, HTML, and CSS, and have hands-on experience with frameworks such as React.js, Node.js, and Express.js. My expertise extends to both relational databases like MySQL and non-relational databases like MongoDB.
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
                </form>
            </div>
        </div>



    )
}

export default Herosection;