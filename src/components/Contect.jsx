import axios from "axios";
import { useState } from "react";
const Contect = () => {
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
        <div className="flex flex-col  mt-1 lg:mt-5 px-2 py-3 justify-center" id="contect">
            {/* <h2 className="text-3xl bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text" id="about">Contact section</h2> */}
            <div className="flex flex-col sm:flex-row justify-between mx-24">
                <h2 className="text-3xl bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">Contact Section</h2>
                <span className="justify-center text-red-600">{message}
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
                        <input className="px-4 w-96 border rounded-md text-white" type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
                        <br />
                            {error && !email && (
                                <span className="text-rose-600">Please Enter email</span>
                            )}
                    </label>
                </div>
                <div className="flex py-3 px-2 my-2 justify-center">
                    <label >Description of :
                        <br></br>
                        <textarea className="px-4 w-96 h-24 border rounded-md text-white" onChange={(e) => setDescription(e.target.value)} value={description}></textarea>
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
    )
}

export default Contect;