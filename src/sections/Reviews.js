import reviewer1 from "../images/reviewer1.png";
import reviewer2 from "../images/reviewer2.png";
import reviewer3 from "../images/reviewer3.png";
import { Paragraph, HeadingSix } from "../components/UI/FontStyles";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";
import SwiperCore, { Pagination, Autoplay, EffectFade } from "swiper";
SwiperCore.use([Pagination, Autoplay, EffectFade]);

const Reviews = () => {
  const reviews = [
    {
      id: "review1",
      reviewer: "Jessica Banks",
      image: reviewer1,
      review:
        "It was an exceptional healthcare service delivery, recovered faster than I was expecting",
      designation: "Realtor",
    },
    {
      id: "review2",

      reviewer: "Adams Andy",
      image: reviewer2,
      review: "The Doctors were reassuring and had a great sense of humour",
      designation: "Digital marketer",
    },
    {
      id: "review3",

      reviewer: "Felicity Fletcher",
      image: reviewer3,
      review: "It was a wholesome experience, I was well taken care of",
      designation: "Saleswoman",
    },
  ];
  return (
    <div className="bg-pry-100 flex flex-col w-full justify-between items-center py-24 lg:px-24 px-8 space-y-12">
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-pry-50 text-3xl font-bold font-heading text-center">
          What Our <span className="text-sec">Clients</span> Have To Say
        </h3>
        <Paragraph
          color="pry-50"
          align="center"
          title="Here are some of things our satisifed patients have to say"
        />
      </div>
      <Swiper
        loop
        pagination={{
          clickable: true,
        }}
        spaceBetween={50}
        slidesPerView={3}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          991: {
            slidesPerView: 3,
          },
        }}
        className="flex  w-full"
      >
        {reviews?.map((review) => {
          return (
            <SwiperSlide key={review.reviewer}>
              <div className="flex flex-col space-y-4 w-full py-8 px-6 rounded  items-center  border-x-4 drop-shadow border-x-sec  bg-pry-50 ">
                <h6 className="text-xl text-pry-100 font-heading text-center  font-bold border-b border-b-pry-100 w-full">
                  &quot;
                </h6>

                <div>
                  <Paragraph
                    title={review.review}
                    align="center "
                    color="pry-100 "
                  />
                </div>

                <div className="rounded-full w-16 h-16 py-2 px-2 bg-sec flex flex-col justify-center items-center ">
                  <div className="bg-pry-100 rounded-full w-4/5 h-4/5 py-2 flex items-center justify-end">
                    <img src={review.image} alt={review.reviewer} />
                  </div>
                </div>
                <div className="flex flex-col space-y-2">
                  <HeadingSix
                    title={review.reviewer}
                    color="pry-100"
                    size="base"
                    align="center"
                  />
                  <Paragraph
                    title={review.designation}
                    align="center "
                    color="pry-100 "
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Reviews;
