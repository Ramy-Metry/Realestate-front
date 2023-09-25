const Contact = () => {
    return (
        <section className="contact">
            <div className="page-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="page-title">اتصل بنا</h1>
                            {/* <h2 className="page-description">Contact</h2> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="contact-item">
                                        <i className="fas fa-envelope"></i>
                                        <h5>البريد الالكتروني</h5>
                                        <h6>whitehouse@lookforestatel.com</h6>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="contact-item">
                                        <i className="fas fa-map-marker-alt"></i>
                                        <h5>العنوان</h5>
                                        <h6>شارع بن الرشيد متفرع من جزيره بدران شبرا</h6>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="contact-item">
                                        <i className="fas fa-phone-alt"></i>
                                        <h5>رقم الهاتف</h5>
                                        <h6>01229940375</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="row mt-5">
                                <div className="col-lg-6">
                                    <label>الاسم</label>
                                    <input type="text" className="inp-contact" />
                                </div>
                                <div className="col-lg-6">
                                    <label>رقم الهاتف</label>
                                    <input type="text" className="inp-contact" />
                                </div>
                                <div className="col-lg-12">
                                    <label>الموضوع</label>
                                    <input type="text" className="inp-contact" />
                                </div>
                                <div className="col-lg-12">
                                    <label>الرساله</label>
                                    <textarea type="text" className="ta-contact" rows="4"></textarea>
                                </div>
                                <div className="col-lg-12">
                                    <button className="btn-contact">ارسل</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact