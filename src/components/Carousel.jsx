const ImageCarousel = () => {
  return (
    <section className="row">
      <div className="col-md-1"></div>
      <div className="col-md-10">
        <div className="carousel slide" data-bs-ride="carousel" id="featureCarousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/images/feedback1.jpg" alt="Empower Employees" className="d-block w-100" height="400px" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Empower Employees</h5>
                <p>Encourage open communication within your organization.</p>
              </div>
            </div>

            <div className="carousel-item">
              <img src="/images/feedback2.jpg" alt="Client Suggestions" className="d-block w-100" height="400px" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Client Suggestions</h5>
                <p>Let clients contribute to better service delivery.</p>
              </div>
            </div>

            <div className="carousel-item">
              <img src="/images/secure.jpg" alt="Anonymous and Secure" className="d-block w-100" height="400px" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Anonymous & Secure</h5>
                <p>All suggestions are protected and confidential.</p>
              </div>
            </div>
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#featureCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#featureCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>
      <div className="col-md-1"></div>
    </section>
  );
};

export default ImageCarousel;
