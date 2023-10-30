import { Link } from "react-router-dom";
import flat from "../assets/img/product1.jpeg";
const FlatItem = (props) => {
  console.log(props.property);
  const { listingPrice, propertyDescription, propertyPhotos } = props.property;
  return (
    <div className="text-center col-lg-4 col-12 col-md-6 ">
      <div className="item">
        <div className="item-image">
          <img className="img-fluid" src={propertyPhotos[1].img} alt="flat" />
        </div>
        <div className="item-description">
          <div className="d-flex justify-content-between mb-3">
            <span className="item-price">{`${listingPrice} جنيه مصري`}</span>
            <br />
            <span className="item-title">{propertyDescription}</span>
          </div>

          <div className="item-icon d-flex alig-items-center justify-content-between">
            <div>
              <i className="fas fa-check-circle"></i>{" "}
              <span>Lorem ipsum dolor</span>
            </div>
            <div>
              <i className="fas fa-check-circle"></i> <span> Lorem </span>
            </div>
            <Link to={`/flat/${props.slug}`} className="item-title">
              <button className="btn btn-detail">View</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlatItem;
