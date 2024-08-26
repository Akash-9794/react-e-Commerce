import axios from "../Utils/axios";
import { useContext, useEffect, useState } from "react";
import {Link, useParams} from "react-router-dom";
import Loading from "../Utils/Loading";
import { ProductContext } from "../Utils/Context";

const Details = () =>{

        const [product,setproduct] = useState(null);
        const {id} = useParams();
        const getSingleProducts = async () =>{
            try {
                const {data} = await axios.get(`/products/${id}`);
                setproduct(data)
            } catch (error) {
                console.log(error);
            }
        };
        
        useEffect(() => {
            getSingleProducts();
        },[]);

    return product ? (
        <div className="w-[70%] h-full flex m-auto py-[10%] ">
            <img className="object-contain w-[50%]  mr-4 hover:object-fill  " 
            src={`${product.image}`} alt="" />
            <div className="content pt-4 ml-8 w-[40%] h-[70%] ">
                <h1 className="text-4xl">{product.title}</h1>
                <h3 className="text-zinc-400 text-2xl mt-3 ">{product.category}</h3>
                <h2 className="text-3xl text-red-300 border rounded w-[30%] mt-4 hover:border-blue-700 ">$ {product.price}</h2>
                <p className=" mt-8 leading-5 ">{product.description}</p>
                <div className="mt-8 flex">
                <Link className="text-1.4xl text-red-600 hover:text-blue-400 border border-blue-700 rounded mr-5 py-1 px-2 hover:border-red-200">Edit</Link><br />
                <Link className="text-1.4xl text-red-600 hover:text-blue-400 border border-blue-700 rounded mr-5 py-1 px-2 hover:border-red-200">Delete</Link>
                </div>
            </div>
        </div>
    ) : (
        <Loading />
    ) 
}

export default Details;