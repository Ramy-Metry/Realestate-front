import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import flat from "../assets/img/product1.jpeg";
import { useLocation } from "react-router-dom";
import { getPropertyById } from "../services/property";

const FlatDetail = () => {
  let location = useLocation();
    const [property,setProperty]=useState({})
    const [propertyImages,setPropertyImages]=useState([])
    const [amenities,setAmenities]=useState([])
    let images=[]
  useEffect(() => {
    let inputString = location.pathname;
    const parts = inputString.split("/");
    const desiredPart = parts[2];
    getPropertyById(desiredPart).then(res=>{
        setProperty(res.data.property)
        setPropertyImages(res.data.property.propertyPhotos)
        setAmenities(res.data.property.communityAmenities.split("-"))
    })
  }, property);

  
 for(const [key,value] of Object.entries(propertyImages)){
    if(key>1){
       images.push({
              original: value.img,
              thumbnail: value.img,
            })  
    }
  }


console.log(property)


  return (
    <div className="flat-detail">
      <div className="page-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="page-title">التفاصيل</h1>
              {/* <h2 className="page-description">Lorem ipsum dolor sit amet</h2> */}
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-lg-12">
            <div className="fd-top flat-detail-content">
              <div>
                <h3 className="flat-detail-title">
                  {`${property.propertyType} ${property.squareFootage} متر`}
                </h3>
                <p className="fd-address">
                 
                  <i className="fas fa-map-marker-alt"></i>
                  {property.propertyAddress}
                </p>
              </div>
              <div>
                <span className="fd-price">{` ${property.listingPrice}جنيه مصري `}</span>
              </div>
            </div>
            <ImageGallery
              flickThreshold={0.5}
              slideDuration={0}
              items={images}
              showNav={true}
              showFullscreenButton={false}
              showPlayButton={true}
            />
            <div className="row">
              <div className="col-lg-8">
                <div className="fd-item">
                  <h4>التفاصيل</h4>
                  <p>
                   {property.propertyDescription}
                   
                  </p>
                  <p>{property.internalNotesOrComments}</p>
                </div>
                <div className="fd-item fd-property-detail">
                  <h4>التقسيم</h4>
                  <div className="row">
                    <div className="col-lg-4">
                      <span>مطبخ: </span>
                      <span>1</span>
                    </div>
                    <div className="col-lg-4">
                      <span>عدد الغرف: </span>
                      <span>{property.numberofBedrooms}</span>
                    </div>
                    <div className="col-lg-4">
                      <span>حمامات: </span>
                      <span>{property.numberofBathrooms}</span>
                    </div>
                  </div>
                
                </div>
                <div className="fd-item fd-features">
                  <h4>السمات</h4>
                  <div className="row">
                    <div className="col-lg-4">
                      <i className="fa fa-check"></i>
                      <span>تشطيب خارجي: {property.exteriorFeatures}</span>
                    </div>
                    <div className="col-lg-4">
                      <i className="fa fa-check"></i>
                      <span>Lorem Ipsum</span>
                    </div>
                    <div className="col-lg-4">
                      <i className="fa fa-check"></i>
                      <span>Lorem Ipsum</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-4">
                      <i className="fa fa-check"></i>
                      <span>Lorem Ipsum</span>
                    </div>
                    <div className="col-lg-4">
                      <i className="fa fa-check"></i>
                      <span>Lorem Ipsum</span>
                    </div>
                    <div className="col-lg-4">
                      <i className="fa fa-check"></i>
                      <span>Lorem Ipsum</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-4">
                      <i className="fa fa-check"></i>
                      <span>Lorem Ipsum</span>
                    </div>
                    <div className="col-lg-4">
                      <i className="fa fa-check"></i>
                      <span>Lorem Ipsum</span>
                    </div>
                    <div className="col-lg-4">
                      <i className="fa fa-check"></i>
                      <span>Lorem Ipsum</span>
                    </div>
                  </div>
                </div>
                <div className="fd-item">
                  <h4>Maps</h4>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15105200.564429!2d37.91245092855647!3d38.99130948591772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b0155c964f2671%3A0x40d9dbd42a625f2a!2zVMO8cmtpeWU!5e0!3m2!1str!2str!4v1630158674074!5m2!1str!2str"
                    width="100%"
                    height="450"
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="fd-sidebar-item">
                  <h4>Recently Added</h4>
                  <div className="recently-item">
                    <img src={flat} alt="detail" width="50px" />
                    <span>Lorem Ipsum Dolor</span>
                  </div>
                  <div className="recently-item">
                    <img src={flat} alt="detail" width="50px" />
                    <span>Lorem Ipsum Dolor</span>
                  </div>
                  <div className="recently-item">
                    <img src={flat} alt="detail" width="50px" />
                    <span>Lorem Ipsum Dolor</span>
                  </div>
                </div>
                <div className="fd-sidebar-item">
                  <h4>مزايا</h4>
                  <ul className="category-ul">
                    {amenities.map(x=>(<div>
                        <li>{x}</li>
                    </div>))}
                  </ul>
                </div>
                <div className="fd-sidebar-item">
                  <h4>Recently Added</h4>
                  <div className="recently-item">
                    <img src={flat} alt="detail" width="50px" />
                    <span>Lorem Ipsum Dolor</span>
                  </div>
                  <div className="recently-item">
                    <img src={flat} alt="detail" width="50px" />
                    <span>Lorem Ipsum Dolor</span>
                  </div>
                  <div className="recently-item">
                    <img src={flat} alt="detail" width="50px" />
                    <span>Lorem Ipsum Dolor</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlatDetail;
