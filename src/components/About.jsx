import prof from "../assets/prof.png";
import res from "../assets/res.png";
import rms from "../assets/rms.png";
import logo from "../assets/rm_logo.png";
import img4 from "../assets/rb_542.png";
import img5 from "../assets/rb_5891.png";
import img6 from "../assets/rb_10205.png";
import img7 from "../assets/rb_16542.png";
import img8 from "../assets/rb_52355.png";
import AOS from 'aos';
import "aos/dist/aos.css";
const About = () => {
    AOS.init();;
    const images = [
        prof, res, rms, img4, img5, img6, img7, img8
    ]
    return (
        // <div className="flex flex-col mt-1 lg:mt-5 px-2 py-3" id="about">
        //     <h2 className="text-3xl bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text" >about section</h2>
        //     <div className="flex flex-col sm:flex-row justify-center my-10 ">
        //         <img className="border mx-5 sm:mt-5 h-20 w-20 " src={auth} alt="author" />
        //         <p className="lg:mx-5 md:mx-5 my-5">I am <b>Bhoopendra Singh</b>, a final year student at the Institute of Engineering and Technology (IET) Lucknow, specializing in Computer Science and Engineering. My passion lies in web development, where I have honed my skills and knowledge in various programming languages and technologies.
        //             I am proficient in JavaScript, C++, HTML, and CSS, data structures and algorithms, and have hands-on experience with frameworks such as React.js, Node.js, and Express.js. My expertise extends to both relational databases like MySQL and non-relational databases like MongoDB.
        //             Throughout my academic journey, I have worked on numerous full-stack development projects, which have strengthened my problem-solving abilities and enhanced my understanding of end-to-end web application development. I am eager to continue learning and contributing to the field of web development, leveraging my skills to create innovative and efficient solutions.
        //         </p>
        //     </div>
        //     <div className="flex flex-col my-5">
        //         <h1 className="flex justify-center font-bold text-orange-500">About the Website</h1>
        //         <p className="flex justify-center">As part of my journey to practice and enhance my full-stack web development skills, I developed a comprehensive Result Generation and Management website. This project aims to facilitate colleges and students in managing and accessing academic results seamlessly. Student and Colleges can register themselves. Colleges can generate the result of the registered students . And student can view their result using login and view result.</p>
        //     </div>
        //     <div className="flex flex-col sm:flex-row sm:my-3 justify-center my-3">
        //             <img className="border h-28 w-36 mx-5 sm:mt-5 " src={prof} alt="img1" />
        //             <img className="border h-28 w-36 mx-10 sm:mt-5 " src={res} alt="img2" />
        //             <img className="border h-28 w-36 mx-5 sm:mt-5 " src={rms} alt="img3" />
        //         </div>
        // </div>


        // copy of about

        <div className="flex flex-col mt-1 lg:mt-4 px-2 py-3 items-center" id="about">
            <h2 className="text-3xl bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text" >About Us</h2>
            <div className="flex flex-col sm:flex-row justify-center my-10 items-center">
                <img className="sm:mt-5 w-80" src={logo} alt="author" />
                <p className="lg:mx-5 md:mx-5 my-5 text-justify">The Result Management System for Universities is a comprehensive and user-friendly platform designed to revolutionize the way academic results are managed and accessed. This innovative system features dedicated portals for universities and students, providing a secure and efficient solution for result management. Universities can register, log in, and upload results effortlessly, while students can create accounts, log in, and access their academic performance anytime, anywhere. By prioritizing reliability, transparency, and ease of use, the system bridges the gap between institutions and learners, ensuring seamless communication and quick access to vital academic information. Whether you're an administrator seeking a hassle-free way to manage results or a student wanting instant access to your grades, our platform is tailored to meet your needs and enhance the overall academic experience.</p>
            </div>
            {/* <div className="flex flex-col my-5">
            <h1 className="flex justify-center font-bold text-orange-500">About the Website/gallery</h1>
            <p className="flex justify-center">As part of my journey to practice and enhance my full-stack web development skills, I developed a comprehensive Result Generation and Management website. This project aims to facilitate colleges and students in managing and accessing academic results seamlessly. Student and Colleges can register themselves. Colleges can generate the result of the registered students . And student can view their result using login and view result.</p>
        </div>
        <div className="w-full flex items-center justify-around mb-20">
            <img data-aos="slide-right" className="border h-28 w-36 mx-5 sm:mt-5 " src={prof} alt="img1" />
            <img data-aos="slide-up" className="border h-28 w-36 mx-10 sm:mt-5 " src={res} alt="img2" />
            <img data-aos="slide-left" className="border h-28 w-36 mx-5 sm:mt-5 " src={rms} alt="img3" />
        </div> */}


            {/* normal */}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="overflow-hidden rounded-lg group"
                    >
                        <img
                            src={image}
                            alt={`Image ${index + 1}`}
                            data-aos="fade-down-right"
                            className="w-48 h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default About;
