import PropTypes from 'prop-types';

const NewsDetails = ({ newsDetail }) => {
    const {title, image_url,details,} = newsDetail || {}
     
    return (
        <div>
              <div className="card card-compact mb-10 bg-base-100 shadow-xl">
                <h2 className="card-title p-2">{title}</h2>
            <figure><img src={image_url} alt="Shoes" /></figure>
            <div className="card-body">
                <p>{ details}</p>
     
                </div>
                </div>
                        </div>
    );
};

NewsDetails.propTypes = {
    newsDetail:PropTypes.object
};

export default NewsDetails;