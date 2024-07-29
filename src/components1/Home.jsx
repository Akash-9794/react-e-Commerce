import {Link , useLocation} from "react-router-dom";
import Nav from "./Nav";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../Utils/Context";
import Loading from "../Utils/Loading";
import axios from "../Utils/axios";

const Home = () => {
    const [products] = useContext(ProductContext);
    const {search} = useLocation()
    const category = decodeURIComponent(search.split("=")[1]);

    const [filteredProducts,setfilteredProducts] = useState(null);

    const getproductcategory = async () => {
      try {
        const {data} = await axios.get(`/products/category/${category}`);
        setfilteredProducts(data);
      } catch (error) {
        console.log(error);
      }
    };

    useEffect(() => {
      if(!filteredProducts) setfilteredProducts(products);
      if(category != "undefind")  getproductcategory();
    },[category,products]);

    return products ? (
        <>
        <Nav />
        <div className="h-full w-[85%] p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto">
          {filteredProducts && filteredProducts.map((p,i) => (
            <Link key={i} to={`/Details/${p.id}`}  
            className="mr-3 mb-3 card p-3 border shadow rounded w-[18%] h-[30vh] flex-col flex justify-center items-center">
            <div className="hover:scale-110 mb-1 w-full h-[80%] bg-contain bg-no-repeat bg-center" 
            style={{
              backgroundImage:`url(${p.image})`
            }}
            ></div>
            <h1 className="hover:text-blue-400 text-xs" >{p.title}</h1>
          </Link>
          ))}
      </div>
        </>
    ) : (
      <Loading />
    )
}
export default Home;