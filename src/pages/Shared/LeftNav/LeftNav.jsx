import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
    const [categories,setCategories] = useState([])
    useEffect(() => {
        fetch('/categories.json')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    return (
        <div className="space-y-6">
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
        </div>
    );
};

export default LeftNav;