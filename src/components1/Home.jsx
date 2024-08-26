import { Link, useLocation } from "react-router-dom";
import Nav from "./Nav";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../Utils/Context";
import Loading from "../Utils/Loading";
import axios from "../Utils/axios";

const Home = () => {
    const [products] = useContext(ProductContext);
    const { search } = useLocation();
    const category = search.includes("=") ? decodeURIComponent(search.split("=")[1]) : null;

    const [filteredProducts, setFilteredProducts] = useState(null);

    const getProductCategory = async () => {
        try {
            const { data } = await axios.get(`/products/category/${category}`);
            setFilteredProducts(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
      console.log(category)
        if (category && category !== "undefined") {
            getProductCategory();
        }  if (!filteredProducts || category == null) {
            setFilteredProducts(products);
        }
    }, [category, products]);

    return products ? (
        <>
            <Nav />
            
            <div className="h-full w-[85%] p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto  ">
                {filteredProducts && filteredProducts.map((p, i) => (
                    <Link
                        key={i}
                        to={`/Details/${p.id}`}
                        className="mr-3 mb-3 card p-3 border shadow rounded w-[18%] h-[30vh] flex-col flex justify-center items-center"
                    >
                        <div
                            className="hover:scale-110 mb-1 w-full h-[80%] bg-contain bg-no-repeat bg-center"
                            style={{ backgroundImage: `url(${p.image})` }}
                        ></div>
                        <h1 className="hover:text-blue-400 text-xs">{p.title}</h1>
                    </Link>
                ))}
            </div>
        </>
    ) : (
        <Loading />
    );
};

export default Home;
