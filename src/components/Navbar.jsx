import {Menu,X,SunSnow,Biohazard} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
const Navbar = ()=>{
    const [mobiledrawerOpen, setmobileDrawerOpen] = useState(false);
    const toggleNavbar = () =>{
        setmobileDrawerOpen(!mobiledrawerOpen);
    };
    return(
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink-0">
                        {/* <img className="h-10 w-10 mr-2" src="" alt="Logo"></img> */}
                        <SunSnow/>
                        <Biohazard />
                        <span className="text-xl tracking-tight">Result management system</span>
                    </div>
                    <ul className="hidden lg:flex ml-14 space-x-12">
                        <li><Link to="/" className="hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-800 hover:text-transparent hover:bg-clip-text" >home</Link></li>
                        <li><Link to="/about" className="hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-800 hover:text-transparent hover:bg-clip-text" >about</Link></li>
                        <li><Link to="/contect" className="hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-800 hover:text-transparent hover:bg-clip-text" >contact</Link></li>
                    </ul>
                    <div className="hidden lg:flex justify-center space-x-12 items-center">
                        <Link to='/studentregistration' className="py-2 px-3 border rounded-md">Student Panel</Link>
                        <Link to='/collegeregistration' className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md">College Admin Panel</Link>
                    </div>
                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button onClick={toggleNavbar}>
                            {mobiledrawerOpen?<X/>:<Menu/>}
                        </button>
                    </div>
                </div>
                {mobiledrawerOpen && (
                    <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                        <ul>
                        <li className="py-4 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-800 hover:text-transparent hover:bg-clip-text"><Link to="/" >home</Link></li>
                        <li className="py-4 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-800 hover:text-transparent hover:bg-clip-text"><Link to="/about" >about</Link></li>
                        <li className="py-4 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-800 hover:text-transparent hover:bg-clip-text"><Link to="/contect" >contact</Link></li>
                        </ul>
                        <div className="flex space-x-6">
                        <Link to='/studentregistration' className="py-2 px-3 border rounded-md">Student Panel</Link>
                        <Link to='/collegeregistration' className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md">College Admin Panel</Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;