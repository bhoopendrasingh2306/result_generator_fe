import { UserSearch, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
// on the result update page we will get the _id of the student so on the basis of the _id we will send all the information of the student along with marks and combined result to the database using post api
const ResutlUpdate = () => {
    const navigate = useNavigate();
    const [hindi, setHindi] = useState("");
    const [english, setEnglish] = useState("");
    const [math, setMath] = useState("");
    const [physics, setPhysics] = useState("");
    const [chemistry, setChemistry] = useState("");
    const [cgpa, setCgpa] = useState("");
    const [message, setMessage] = useState();

    const name = JSON.parse(localStorage.getItem('userzzz')).name;
    const roll_no = JSON.parse(localStorage.getItem('userzzz')).roll_no;
    const institute_name = JSON.parse(localStorage.getItem('userzzz')).institute_name;

    const calculateResult = () => {
        const total = parseInt(hindi) + parseInt(english) + parseInt(math) + parseInt(physics) + parseInt(chemistry);
        const avg = total / 50;
        setCgpa(avg);
    }

    const submitResult = () => {
        axios
            .post("http://localhost:5000/result/uploadresult", { name, hindi, english, physics, chemistry, math, cgpa, roll_no, institute_name })
            .then((result) => {
                console.log("submit result is:", result); // result contain the response comming from axios

                setMessage(result.data.message);
            })
            .catch((err) => console.log("lat err", err));
    }

    const logout = () => {
        localStorage.removeItem("userzzz")
        navigate("/collegeprofile")
    }
    return (

        <div className="flex flex-col  mt-1 lg:mt-5 px-2 py-3 justify-center">
            <div className="flex flex-row justify-between mx-24">
                <h2 className="text-3xl bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text" id="about">Student's Result Updation Window</h2>
                <LogOut className="text-red-500 cursor-pointer" onClick={logout}></LogOut>
            </div>
            <div className="flex flex-row justify-between my-5 mx-24">
                <div className="flex">
                    <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">student's Name :</span>
                    <h2 className="text-1xl " id="about">{name}</h2>
                </div>
                <div className="flex">
                    <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">student's Roll_no :</span>
                    <h2 className="text-1xl " id="about">{roll_no}</h2>
                </div>
            </div>
            <div className="w-3/4 justify-center border my-5 mx-auto rounded-lg">
                <ul className="h-16 flex flex-col sm:flex-row sm:h-8 justify-around mx-auto border bg-slate-600 text-black rounded-lg">
                    <li className="py-1">subject</li>
                    <li className="py-1">marks</li>
                </ul>
                <ul className="flex flex-col sm:flex-row justify-around mt-2 mx-auto border bg-slate-200 text-black">
                    <li>Hindi</li>
                    <li><input className="w-12 border-red-700 text-black bg-slate-200" type="number" min={0} max={100} onChange={(e) => setHindi(e.target.value)} value={hindi} /></li>
                </ul>
                <ul className="flex flex-col sm:flex-row justify-around mt-2 mx-auto border  bg-slate-400 text-black">
                    <li>English</li>
                    <li><input className="w-16 border-red-700 text-black bg-slate-400" type="number" min={0} max={100} onChange={(e) => setEnglish(e.target.value)} value={english} /></li>
                </ul>
                <ul className="flex flex-col sm:flex-row justify-around mt-2 mx-auto border bg-slate-200 text-black">
                    <li>Math</li>
                    <li><input className="w-12 border-red-700 text-black bg-slate-200" type="number" min={0} max={100} onChange={(e) => setMath(e.target.value)} value={math} /></li>
                </ul>
                <ul className="flex flex-col sm:flex-row justify-around mt-2 mx-auto border  bg-slate-400 text-black">
                    <li>Chemistry</li>
                    <li><input className="w-12 border-red-700 text-black bg-slate-400" type="number" min={0} max={100} onChange={(e) => setChemistry(e.target.value)} value={chemistry} /></li>
                </ul>
                <ul className="flex flex-col sm:flex-row justify-around mt-2 mx-auto border bg-slate-200 text-black">
                    <li>Physics</li>
                    <li><input className="w-12 border-red-700 text-black bg-slate-200" type="number" min={0} max={100} onChange={(e) => setPhysics(e.target.value)} value={physics} /></li>
                </ul>
            </div>
            <div className=" flex justify-around">
                <div className="flex flex-col sm:flex-row">
                    <button className="w-48 h-10 border-red-700 text-white bg-red-500 px-2 py-2 mt-5  rounded-lg" onClick={calculateResult}>calculate result</button>
                    <span className="my-6 mx-2">generated cgpa is : {cgpa}</span>
                </div>
                <div className="flex flex-col sm:flex-row">
                    <button className="w-24 h-10 border-red-700 text-white bg-red-500 px-2 py-2 mt-5  rounded-lg" onClick={submitResult}>Submit</button>
                    <span className="text-lime-500 my-6 mx-2">{message}</span>
                </div>
            </div>
            <div className="flex justify-center">
                <p>NOTE: First fill the respective marks of subjects below the marks section. Click on CALCULATE RESULT and then click on SUBMIT. </p>
            </div>


        </div>

    )
}

export default ResutlUpdate;