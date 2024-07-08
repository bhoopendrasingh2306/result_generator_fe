import { User, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const StudentProfile = () => {
    const navigate = useNavigate();
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [ address,setAddress] = useState("");
    const [ instname, setInstname] = useState("");
    const [instcode, setInstcode] = useState("");
    const [roll, setRoll]= useState("");



    const roll_no = JSON.parse(localStorage.getItem('user')).roll_no;
    console.log(roll_no)
    
    useEffect(()=>{
        collectiondata();
    },[])


    const collectiondata = () => {
       
        axios
            .get(`http://localhost:5000/student/profile/${roll_no}`)
            .then((result) => {
                // console.log("progile end result is:", result.data.result); // result contain the response comming from axios
                setName(result.data.result.name);
                setAddress(result.data.result.address);
                setEmail(result.data.result.email);
                setRoll(result.data.result.roll_no);
                setInstcode(result.data.result.institute_code);
                setInstname(result.data.result.institute_name);
            })
            .catch((err) => console.log("lasst err",err));
    }




    const logout = () => {
        localStorage.clear();
        navigate("/");
    }
    const viewresult =()=>{
        navigate("/studentresult")
    }

    return (
        <div>
            <div className="flex flex-col  mt-1 lg:mt-5 px-2 py-3 justify-center" id="contect">
                <div className="flex flex-row justify-between mx-24">
                    <div className="flex align-baseline">
                    <User className="w-12 my-1 text-red-500"></User>
                    <h2 className="text-3xl bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text" id="about">Student Profile</h2>
                    </div>
                    <LogOut className="text-red-500 cursor-pointer" onClick={logout}></LogOut>
                </div>
                <form className="  justify-center lg:mt-5 mt-2">
                    <div className="flex  py-3 px-2 my-2 justify-center">
                        <label >Student's Name :
                            <br></br>
                            <input className=" md:w-96 w-52 px-4 border rounded-md text-white" type="text" value={name}  readOnly />     
                        </label>
                    </div>
                    <div className="flex  py-3 px-2 my-2 justify-center">
                        <label >Student's Email :
                            <br></br>
                            <input className="md:w-96 w-52 px-4 border rounded-md text-white" type="text" value={email}  readOnly/>
                        </label>
                    </div>
                    <div className="flex  py-3 px-2 my-2 justify-center">
                        <label >Student's Roll Number :
                            <br></br>
                            <input className="md:w-96 w-52 px-4 border rounded-md text-white" type="text" value={roll} readOnly/>
                        </label>
                    </div>
                    <div className="flex  py-3 px-2 my-2 justify-center">
                        <label >Student's Address :
                            <br></br>
                            <input className="md:w-96 w-52 px-4 border rounded-md text-white" type="text" value={address} readOnly/>
                        </label>
                    </div>
                    <div className="flex  py-3 px-2 my-2 justify-center">
                        <label >Institute Name :
                            <br></br>
                            <input className="md:w-96 w-52 px-4 border rounded-md text-white" type="text"  value={instname} readOnly/>
                        </label>
                    </div>
                    <div className="flex  py-3 px-2 my-2 justify-center">
                        <label >Institute Code :
                            <br></br>
                            <input className="md:w-96 w-52 px-4 border rounded-md text-white" type="text" value={instcode} readOnly />
                        </label>
                    </div>
                    <div className="flex py-1 px-2 my-2 justify-center align-middle">
                        <button type="submit " className=" bg-gradient-to-r from-violet-500 to-red-800 py-1 px-3 rounded-md justify-center" onClick={viewresult} >View Result</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default StudentProfile;