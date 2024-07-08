import auth from "../assets/image.jpg";
import prof from "../assets/prof.png";
import res from "../assets/res.png";
import rms from "../assets/rms.png";
const About = () => {
    return (
        <div className="flex flex-col mt-1 lg:mt-5 px-2 py-3" id="about">
            <h2 className="text-3xl bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text" >about section</h2>
            <div className="flex flex-col sm:flex-row justify-center my-10 ">
                <img className="border mx-5 sm:mt-5 h-20 w-20 " src={auth} alt="author" />
                <p className="lg:mx-5 md:mx-5 my-5">I am <b>Bhoopendra Singh</b>, a final year student at the Institute of Engineering and Technology (IET) Lucknow, specializing in Computer Science and Engineering. My passion lies in web development, where I have honed my skills and knowledge in various programming languages and technologies.
                    I am proficient in JavaScript, HTML, and CSS, and have hands-on experience with frameworks such as React.js, Node.js, and Express.js. My expertise extends to both relational databases like MySQL and non-relational databases like MongoDB.
                    Throughout my academic journey, I have worked on numerous full-stack development projects, which have strengthened my problem-solving abilities and enhanced my understanding of end-to-end web application development. I am eager to continue learning and contributing to the field of web development, leveraging my skills to create innovative and efficient solutions.
                </p>
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
    )
}

export default About;
