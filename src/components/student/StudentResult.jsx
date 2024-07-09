import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const StudentResult =()=>{
    const navigate = useNavigate();
    const [hindi,setHindi] = useState("");
    const [english,setEnglish] = useState("");
    const [ math,setMath] = useState("");
    const [ chemistry, setChemistry] = useState("");
    const [physics, setPhysics] = useState("");
    const [roll, setRoll]= useState("");
    const [name,setName]= useState("");
    const [cgpa,setCgpa]= useState("");
    const [instname,setInstname]= useState("");
    const [message,setMessage]= useState("");

    const roll_no = JSON.parse(localStorage.getItem('user')).roll_no;


    useEffect(()=>{
        collectiondata();
    },[])


    const collectiondata = () => {
       
        axios
            .get(`https://result-generator-be.onrender.com/result/getresult/${roll_no}`)
            .then((result) => {
                console.log("progile end result is:", result); 
                if(result.status===203){
                    
                    setMessage(result.data.message);
                }// result contain the response comming from axios
                else{
                    setName(result.data.result.name);
                    setRoll(result.data.result.roll_no);
                    setHindi(result.data.result.hindi);
                    setEnglish(result.data.result.english);
                    setMath(result.data.result.math);
                    setChemistry(result.data.result.chemistry);
                    setPhysics(result.data.result.physics);
                    setCgpa(result.data.result.cgpa);
                    setInstname(result.data.result.institute_name);
                    setMessage(result.data.message);
                }
            })
            .catch((err) => console.log("lasst err",err));
    }

    const logout =()=>{
        navigate("/studentprofile")
    }

    return(
        <div className="flex flex-col  mt-1 lg:mt-5 px-2 py-3 justify-center">
            <div className="flex flex-row justify-between mx-24">
                <h2 className="text-3xl bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text" id="about">{name}'s Result </h2>
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
                <div className="flex">
                    <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">Institute's Name :</span>
                    <h2 className="text-1xl " id="about">{instname}</h2>
                </div>
            </div>
            <div className="w-3/4 justify-center border my-5 mx-auto rounded-lg">
                <ul className="h-16 flex flex-col sm:flex-row sm:h-8 justify-around mx-auto border bg-slate-600 text-black rounded-lg">
                    <li className="py-1">subject</li>
                    <li className="py-1">marks</li>
                </ul>
                <ul className="flex flex-col sm:flex-row justify-around mt-2 mx-auto border bg-slate-200 text-black">
                    <li>Hindi</li>
                    <li><input className="w-12 border-red-700 text-black bg-slate-200" type="number" value={hindi} readOnly /></li>
                </ul>
                <ul className="flex flex-col sm:flex-row justify-around mt-2 mx-auto border  bg-slate-400 text-black">
                    <li>English</li>
                    <li><input className="w-16 border-red-700 text-black bg-slate-400" type="number" value={english} readOnly /></li>
                </ul>
                <ul className="flex flex-col sm:flex-row justify-around mt-2 mx-auto border bg-slate-200 text-black">
                    <li>Math</li>
                    <li><input className="w-12 border-red-700 text-black bg-slate-200" type="number" value={math} readOnly /></li>
                </ul>
                <ul className="flex flex-col sm:flex-row justify-around mt-2 mx-auto border  bg-slate-400 text-black">
                    <li>Chemistry</li>
                    <li><input className="w-12 border-red-700 text-black bg-slate-400" type="number" value={chemistry} readOnly /></li>
                </ul>
                <ul className="flex flex-col sm:flex-row justify-around mt-2 mx-auto border bg-slate-200 text-black">
                    <li>Physics</li>
                    <li><input className="w-12 border-red-700 text-black bg-slate-200" type="number" value={physics} readOnly /></li>
                </ul>
                
            </div>
            <div className="flex flex-col sm:flex-row justify-around">
                <span>CGPA : {cgpa}</span>
                <span>{message}</span>
            </div>

           


        </div>

    )
}

export default StudentResult;