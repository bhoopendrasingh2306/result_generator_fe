import { useNavigate } from "react-router-dom";
import { LockKeyhole } from "lucide-react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const StudentRegistration = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [instname, setInstname] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [options_list, setOptions_list] = useState([]);
    const [error, setError] = useState(false);

    useEffect(()=>{
        option_data();
    },[])

    const collectiondata = (e) => {
        e.preventDefault();
        console.log({ name, email, address, institute_name: instname, password });
        if (!name || !email || !address || !instname || !password) {
            setError(true);
            return false;
        }
        // axios is used to send data from UI to database or from react to database  .then is used to resolve promis/e
        axios
            .post("http://localhost:5000/student/signup", { name, email, address, institute_name: instname, password })
            .then((result) => {
                console.log("front end result is:", result); // result contain the response comming from axios
                if (result.data.auth) {
                    localStorage.setItem("user", JSON.stringify(result.data.data));
                    localStorage.setItem("token", JSON.stringify(result.data.auth));
                    navigate("/studentprofile");
                }
                else {
                    setMessage(result.data.message);
                }
            })
            .catch((err) => console.log("lat err", err));
    }

    // let options_array=[];
    const option_data = ()=>{
        axios.get("http://localhost:5000/student/findcollege").then((result)=>{
            setOptions_list(result.data.result)
        }).catch((err)=>{
            console.log(err);
        })
        
    }

    const loginbtn = () => {
        navigate("/studentlogin")
    }

    return (
        <div>
            <div className="flex flex-col  mt-1 lg:mt-5 px-2 py-3 justify-center">
                <div className="flex flex-row justify-between mx-24">
                <h2 className="text-3xl bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">Student Registration Form</h2>
                <span className="justify-center text-rose-600">{message}
                </span>
                </div>
                <form className="  justify-center lg:mt-5 mt-2">
                    <div className="flex  py-3 px-2 my-2 justify-center">
                        <label >Student's Name :
                            <br></br>
                            <input className=" md:w-96 w-52 border rounded-md text-white px-4" type="text" onChange={(e) => setName(e.target.value)} value={name} />
                            <br />
                            {error && !name && (
                                <span className="text-rose-600">Please Enter Username</span>
                            )}
                        </label>
                    </div>
                    <div className="flex  py-3 px-2 my-2 justify-center">
                        <label >Student's Email :
                            <br></br>
                            <input className="md:w-96 w-52 border rounded-md text-white px-4" type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                            <br />
                            {error && !email && (
                                <span className="text-rose-600">Please Enter email</span>
                            )}
                        </label>
                    </div>
                    <div className="flex  py-3 px-2 my-2 justify-center">
                        <label >Student's Address :
                            <br></br>
                            <input className="md:w-96 w-52 border rounded-md text-white px-4" type="text" onChange={(e) => setAddress(e.target.value)} value={address} />
                            <br />
                            {error && !address && (
                                <span className="text-rose-600">Please Enter address</span>
                            )}
                        </label>
                    </div>
                    <div className="flex  py-3 px-2 my-2 justify-center">
                        <label >Institute Name :
                            <br></br>
                            {/* <input className="md:w-96 w-52 border rounded-md text-white px-4" type="text" onChange={(e) => setInstname(e.target.value)} value={instname} /> */}
                            <select className="md:w-96 w-52 border rounded-md text-white px-4"  onChange={(e)=>setInstname(e.target.value)} >
                                {   
                                    options_list.map((opt,i)=><option key={i}>{opt}</option>)
                                }
                            </select>
                            <br />
                            {error && !instname && (
                                <span className="text-rose-600">Please Enter institute name</span>
                            )}
                        </label>
                    </div>
                    {/* <div className="flex  py-3 px-2 my-2 justify-center">
                        <label >Institute Code :
                            <br></br>
                            <input className="md:w-96 w-52 border rounded-md text-white px-4" type="text" onChange={(e) => setInstcode(e.target.value)} value={instcode} />
                            <br />
                            {error && !instcode && (
                                <span className="text-rose-600">Please Enter institute code</span>
                            )}
                        </label>
                    </div> */}
                    <div className="flex  py-3 px-2 my-2 justify-center">
                        <label >Password :
                            <br></br>
                            <div className="flex-col">
                                <div className=" md:w-96 w-52 flex flex-row border rounded-md text-white">
                                    <LockKeyhole />
                                    <input className="md:w-96 w-52 border rounded-md border-slate-950 px-4" type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
                                </div>
                                {error && !password && (
                                    <span className="text-rose-600">Please Enter Password</span>
                                )}
                            </div>
                        </label>
                    </div>

                    <div className="flex py-1 px-2 my-2 justify-center">
                        <button type="submit " className=" bg-gradient-to-r from-orange-500 to-red-800 py-1 px-3 rounded-md justify-center" onClick={collectiondata}>Register</button>
                    </div>
                    <div className="flex py-1 px-2 my-2 justify-center align-middle">
                        <span className="mx-5">Already have an Account ?
                        </span>
                        <button type="submit " className=" bg-gradient-to-r from-orange-500 to-red-800 py-1 px-3 rounded-md justify-center" onClick={loginbtn} >Login</button>
                    </div>
                    {/* <span className="justify-center">{message}
                    </span> */}
                </form>
            </div>
        </div>
    )
}

export default StudentRegistration;