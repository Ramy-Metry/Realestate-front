import { Link } from "react-router-dom";
import flat from "../assets/img/product1.jpeg";
import ReactWhatsapp from "react-whatsapp";

const FlatItem = (props) => {
  console.log(props.property);
  const { listingPrice, propertyDescription, propertyPhotos, createBy } =
    props.property;

  const phone = createBy?.phoneNumber?.toString() || "";
  return (
    <div className="text-center">
      <div className="item">
        <div className="item-image">
          <img
            className="img-fluid flat_list_img"
            src={propertyPhotos[1].img}
            alt="flat"
          />
        </div>
        <div className="item-description">
          <div className="d-flex justify-content-between mb-3">
            <span className="item-price">{`${listingPrice} جنيه مصري`}</span>
            <br />
            <p className="item-title">{propertyDescription}</p>
          </div>

          <div className="item-icon d-flex alig-items-center justify-content-between">
            <div>
              <i className="fas fa-check-circle"></i>{" "}
              <span>Lorem ipsum dolor</span>
            </div>
            <div>
              <i className="fas fa-check-circle"></i> <span> Lorem </span>
            </div>
            {phone && (
              <ReactWhatsapp number={phone} message="Hello World!!!">
                اتصل بنا{" "}
              </ReactWhatsapp>
            )}

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
