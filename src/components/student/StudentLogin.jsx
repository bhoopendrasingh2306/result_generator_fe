import { useNavigate } from "react-router-dom";
import { LockKeyhole } from "lucide-react";
import axios from "axios";
import { useState } from "react";


const StudentLogin =()=>{
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState(false);

    const collectiondata = (e) => {
        e.preventDefault();
        console.log({ name, email, password });
        if (!name || !email || !password) {
            setError(true);
            return false;
        }
        // axios is used to send data from UI to database or from react to database  .then is used to resolve promis/e
        axios
            .post("https://result-generator-be.onrender.com/student/login", { name, email, password })
            .then((result) => {
                console.log("front end result is:", result); // result contain the response comming from axios
                if (result.data.auth) {
                    localStorage.setItem("user", JSON.stringify(result.data.user));
                    localStorage.setItem("token", JSON.stringify(result.data.auth));
                    navigate("/studentprofile");
                }
                else {
                    setMessage(result.data.message);
                }
            })
            .catch((err) => console.log("lat err",err));
    }

    const signupbtn = ()=>{
        navigate("/studentregistration")
    }

    return (
        <div>
            <div className="flex flex-col  mt-1 lg:mt-5 px-2 py-3 justify-center">
            {/* <h2 className="text-3xl bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text" > Student's Login Window</h2> */}
            <div className="flex flex-row justify-between mx-24">
                <h2 className="text-3xl bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">Student's Login Window</h2>
                <span className="justify-center text-rose-600">{message}
                </span>
            </div>
            <form className="  justify-center lg:mt-5 mt-2">
                <div className="flex  py-3 px-2 my-2 justify-center">
                    <label >Student Name :
                        <br></br>
                        <input className="md:w-96 w-52 border rounded-md text-white px-4" type="text" onChange={(e) => setName(e.target.value)} value={name} />
                        <br />
                            {error && !name && (
                                <span className="text-rose-600">Please Enter Username</span>
                            )}
                    </label>
                </div>
                <div className="flex  py-3 px-2 my-2 justify-center">
                    <label >Student Email :
                        <br></br>
                        <input className="md:w-96 w-52 border rounded-md text-white px-4" type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
                        <br />
                            {error && !email && (
                                <span className="text-rose-600">Please Enter email</span>
                            )}
                    </label>
                </div> 
                <div className="flex  py-3 px-2 my-2 justify-center">
                        <label >Password :
                            <br></br>
                            <div className="flex-col">
                                <div className=" md:w-96 w-52 flex flex-row border rounded-md text-white ">
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
                    <button type="submit " className=" bg-gradient-to-r from-orange-500 to-red-800 py-1 px-3 rounded-md justify-center" onClick={collectiondata}>Login</button>
                </div>
                <div className="flex py-1 px-2 my-2  align-middle justify-center">
                    <span className="mx-10">Don't have an Account ?
                    </span>
                    <button type="submit " className=" bg-gradient-to-r from-orange-500 to-red-800 py-1 px-3 rounded-md justify-center" onClick={signupbtn}>Register</button>
                </div>
            </form>
        </div>
        </div>
    )
}
export default StudentLogin;
