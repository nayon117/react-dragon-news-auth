import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import RightNav from "../Shared/RightNav/RightNav";

const News = () => {
    const {id} = useParams()
    return (
        <div className="my-12">
            <Header></Header>
            <Navbar></Navbar>
            {/* news section  */}
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">
                    <h2 className="text-3xl">News Details</h2>
                    <p>{ id}</p>
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