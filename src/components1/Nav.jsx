import React,{useContext} from "react";
import { ProductContext } from "../Utils/Context";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {

    const [products] = useContext(ProductContext);

    let distinctCategory = products && products.reduce((acc,cv) => [...acc,cv.category],[]);
    distinctCategory = [...new Set(distinctCategory)];
    const color = () => {
        return  `rgb(${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},0.4)`
    };
    
    return (
    <nav className="w-[15%] h-full   bg-zinc-100 flex flex-col items-center pt-5">
        <a className=" mt-14 py-3 px-5 border rounded border-blue-400 text-blue-300"
        href="/Create">Add new Prodects</a>
        <hr className="my-3 w-[80%]" />
        <h1 className="text-2xl mb-3 w-[80%]">Category Filter</h1>
        
        <div className="w-[80%]">
            {distinctCategory.map((c,i) => (
                <Link key={i} to={`/?category=${c}`} className="flex border-blue-500 border-2 p-1 hover:border-red-600 items-center mb-3">
                <span style={{backgroundColor: color()}} className=" rounded-full mx-2 w-[15px] h-[15px] "></span>{" "}
                {c}
            </Link>
            ))}

        </div>
    </nav>
    )
}
export default Nav;