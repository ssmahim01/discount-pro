const Banner = () => {
  return (
    <div className="md:w-4/5 w-11/12 mx-auto my-10">
      <div className="carousel h-full lg:h-[480px] rounded-xl object-cover">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co.com/mCPwYQJ/electronics.jpg"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle btn-active">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle btn-active">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co.com/0M069jM/cloth-products.jpg"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle btn-active">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle btn-active">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co.com/HXZfHhV/grocery.jpg"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle btn-active">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle btn-active">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co.com/5vK7vnz/gym-accessories.jpg"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle btn-active">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle btn-active">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
