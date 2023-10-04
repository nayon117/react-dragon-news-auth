import { useLoaderData, useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import RightNav from "../Shared/RightNav/RightNav";
import { useEffect, useState } from "react";
import NewsDetails from "./NewsDetails";

const News = () => {
    const [aNews, setAnews] = useState([])
    
    const { id } = useParams()
    const news = useLoaderData()
   
    useEffect(() => {
        const findNews = news?.find(singleNews => singleNews._id === id) 
        setAnews(findNews)
    },[id,news])
    return (
        <div className="my-12">
            <Header></Header>
            <Navbar></Navbar>
            {/* news section  */}
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">
                    <h2 className="text-3xl">News Details</h2>
                    <NewsDetails newsDetail={aNews} ></NewsDetails>
                </div>

                {/* right sidebar  */}
                <div>
                    <RightNav></RightNav>
                </div>
           </div>
        </div>
    );
};

export default News;