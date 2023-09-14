const About = () => {
  return (
    <section className="about">
      <div className="page-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="page-title">من نحن</h1>
              {/* <h2 className="page-description">About</h2> */}
            </div>
          </div>
        </div>
      </div>
      <div className="page-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img src="/img/product1.jpeg" alt="product" className="w-100" />
            </div>
            <div className="col-lg-6">
              <div className="about-item">
                <div className="title">عن شركه وايت هاوس</div>
                <div className="about-text">
                  يتطلب التنقل في المشهد العقاري المعقد مزيجًا من الخبرة في
                  السوق والخبرة المجتمعية والشغف الحقيقي لربط الأشخاص بمنازل
                  أحلامهم. هذا هو المكان الذي يتدخل فيه وايت هاوس. مع أكثر من
                  تسعه سنوات من الخبرة المتخصصة في مجال العقارات، قمنا بصقل
                  مهاراتنا لضمان أن تكون كل معاملة سلسة قدر الإمكان. إن التزامنا
                  يتجاوز مجرد شراء أو بيع العقارات؛ يتعلق الأمر بإنشاء علاقات
                  دائمة مع عملائنا، وفهم احتياجاتهم الفريدة، وتوجيههم في كل خطوة
                  على الطريق. إن معرفتنا الواسعة بـمجال التسويق العقاري تجعلنا
                  المتخصص المفضل لكل من السكان المحليين والوافدين الجدد. ومن
                  خلال إعطاء الأولوية للتواصل الواضح والشفافية والنزاهة، قمنا
                  ببناء إرث من الثقة ومجموعة من الصفقات المبرمة بنجاح والتي
                  تتحدث عن نفسها.
                </div>
                {/* <div className="about-features">
                  <p className="about-feature">
                    <i className="fas fa-long-arrow-alt-right"></i> Lorem ipsum
                    is simply
                  </p>
                  <p className="about-feature">
                    <i className="fas fa-long-arrow-alt-right"></i> Lorem ipsum
                    is simply
                  </p>
                  <p className="about-feature">
                    <i className="fas fa-long-arrow-alt-right"></i> Lorem ipsum
                    is simply
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
