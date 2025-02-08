
export default function ChooseUs() {
  return (
    <div className="sec4 px-[20px] py-[60px] sm:px-[60px] py-[50px] text-white max-w-[1320px] lg:h-[800px] mx-auto flex justify-center items-center flex-col lg:flex-row lg:gap-0 gap-[30px]">

      {/* Left Section: Images */}
      <div className="lg:w-[50%] flex flex-wrap gap-[20px] justify-center">
        
        {/* First Set of Images (2 in the first row) */}
        <div className="flex gap-[20px] items-end flex-col sm:flex-row">
          <div className="sm:max-w-[360px] h-[360px]">
            <img
              src="/images/choose1.png"
              className="w-[100%] h-[100%] rounded-[6px] object-center object-cover"
              alt="Shawerma"
            />
          </div>
          <div className="sm:max-w-[290px] h-[230px] pb-[10px]">
            <img
              src="/images/choose2.png"
              className="w-[100%] h-[100%] rounded-[6px] object-center object-cover"
              alt="Burger"
            />
          </div>
        </div>

        {/* Second Set of Images (3 in the second row) */}
        <div className="flex gap-[20px] items-start flex-col sm:flex-row">
          <div className="sm:max-w-[244px] h-[306px] pt-[10px]">
            <img
              src="/images/choose3.png"
              className="w-[100%] h-[100%] rounded-[6px] object-center object-cover"
              alt="Nuggets"
            />
          </div>
          <div className="sm:max-w-[225px] h-[225px] pt-[10px]">
            <img
              src="/images/choose4.png"
              className="w-[100%] h-[100%] rounded-[6px] object-center object-cover"
              alt="Burger"
            />
          </div>
          <div className="flex flex-col gap-[20px]">
            <div className="w-[161px] h-[166px]">
              <img
                src="/images/choose5.png"
                className="w-[100%] h-[100%] rounded-[6px] object-center object-cover"
                alt="Burger"
              />
            </div>
            <div className="w-[161px] h-[166px]">
              <img
                src="/images/choose6.png"
                className="w-[100%] h-[100%] rounded-[6px] object-center object-cover"
                alt="Dish"
              />
            </div>
          </div>
        </div>

      </div>

      {/* Right Section: Text and Call to Action */}
      <div className="lg:w-[40%] flex flex-col justify-center items-center lg:items-start text-center lg:text-left lg:ml-[60px]">
        {/* Added margin-left to create space between the image and text */}
        <h3 className="text-[#FF9F0D] text-[32px] font-normal lg:text-start text-center">
          Why Choose Us
        </h3>
        <div className="flex flex-col gap-[25px]">
          <h1
            style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
            className="md:leading-[68px] font-helvetica text-[38px] md:text-[60px] text-white lg:text-start text-center"
          >
            <span className="text-orange-500">Ex</span>tra ordinary taste And Experienced
          </h1>
          <p className="font-normal text-[16px] text-white text-center lg:text-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna, vitae feugiat pretium donec id elementum.
            Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
            eu velit in consequat.
          </p>

          {/* Features List */}
          <div className="flex gap-[20px] lg:justify-start justify-center">
            <div className="flex flex-col gap-[10px] items-center cursor-pointer">
              <div className="py-5 px-5 bg-[#FF9F0D] text-white rounded-[6px] flex justify-center items-center">
                <img
                  src="/images/burgericon.png"
                  className="w-[50px] h-[50px] object-contain"
                  alt="Fast Food"
                />
              </div>
              <h6 className="font-normal text-[18px] text-center lg:text-start">
                Fast Food
              </h6>
            </div>
            <div className="flex flex-col gap-[10px] items-center cursor-pointer">
              <div className="py-5 px-5 bg-[#FF9F0D] text-white rounded-[6px] flex justify-center items-center">
                <img
                  src="/images/cookie.png"
                  className="w-[50px] h-[50px] object-contain"
                  alt="Lunch"
                />
              </div>
              <h6 className="font-normal text-[18px] text-center lg:text-start">
                Lunch
              </h6>
            </div>
            <div className="flex flex-col gap-[10px] items-center cursor-pointer">
              <div className="py-5 px-5 bg-[#FF9F0D] text-white rounded-[6px] flex justify-center items-center">
                <img
                  src="/images/wine.png"
                  className="w-[50px] h-[50px] object-contain"
                  alt="Dinner"
                />
              </div>
              <h6 className="font-normal text-[18px] text-center lg:text-start">
                Dinner
              </h6>
            </div>
          </div>

          {/* CTA Section */}
          <div className="h-[100%] flex justify-center lg:justify-start">
            <div className="bg-[#FF9F0D] rounded-l-[6px] w-[5px] h-auto"></div>
            <div className="flex justify-around bg-white py-[12px] rounded-r-[6px] max-w-[300px]">
              <h2 className="text-[#FF9F0D] font-bold text-[48px]" style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
                30+
              </h2>
              <div>
                <p className="m-0 text-[20px] font-normal text-[#1E1E1E]">
                  Years of
                </p>
                <p className="m-0 text-[24px] font-bold text-[#1E1E1E]" style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
                  Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
