import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import image1 from '../../../assets/1.png'
import image2 from '../../../assets/2.png'
import image3 from '../../../assets/3.png'
import moment from "moment/moment";
import {  SiGooglecalendar } from "react-icons/si";

const LeftNav = () => {
    const [categories,setCategories] = useState([])
    useEffect(() => {
        fetch('/categories.json')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    return (
        <div className="space-y-6 sticky overflow-y-auto max-h-screen  top-0  ">
            <h2 className="text-3xl">All Categories</h2>
            <div className="">
                {
                    categories.map(category => <Link
                        className="block text-xl font-semibold p-4"
                        key={category.id}
                        to={`/category/${category.id}`}
                    >
                        {category.name}
                    </Link>)
                }
            </div>

              {/* card section  */}
            <div className="space-y-3 p-2 mb-6 shadow-md">
             <img src={image1} alt="" />
            <h2 className="text-xl font-semibold">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
            <div className="flex justify-between items-center">
                <p>sports</p>
                    <p className="flex items-center gap-2">
                        <SiGooglecalendar></SiGooglecalendar>
                        <span>{ moment().format('MMMM D, YYYY')}</span>
                    </p>
            </div>
            </div>
            <div className="space-y-3 p-2 mb-6 shadow-md">
             <img src={image2} alt="" />
            <h2 className="text-xl font-semibold">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
            <div className="flex justify-between items-center">
                <p>sports</p>
                    <p className="flex items-center gap-2">
                        <SiGooglecalendar></SiGooglecalendar>
                        <span>{ moment().format('MMMM D, YYYY')}</span>
                    </p>
            </div>
            </div>
            <div className="space-y-3 p-2 mb-6 shadow-md">
             <img src={image3} alt="" />
            <h2 className="text-xl font-semibold">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
            <div className="flex justify-between items-center">
                <p>sports</p>
                    <p className="flex items-center gap-2">
                        <SiGooglecalendar></SiGooglecalendar>
                        <span>{ moment().format('MMMM D, YYYY')}</span>
                    </p>
            </div>
            </div>
        </div>
    );
};

export default LeftNav;