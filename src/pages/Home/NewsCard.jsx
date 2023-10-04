import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const NewsCard = ({ singleNews }) => {
  const {title, image_url,details,_id} = singleNews
  return (
    <div>
 <div className="card card-compact mb-10 bg-base-100 shadow-xl">
    <h2 className="card-title p-2">{title}</h2>
  <figure><img src={image_url} alt="Shoes" /></figure>
  <div className="card-body">
   {
                      details.length > 200 ? <p>{details.slice(0, 200)}<Link to={`/news/${_id}`}
                          className="text-blue-600 font-bold"> Read More...</Link> </p> : <p>{details}</p>         
    }
     
  </div>
</div>
    </div>
  );
};

NewsCard.propTypes = {
  singleNews: PropTypes.object,
};
export default NewsCard;
