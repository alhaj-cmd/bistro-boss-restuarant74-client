import SectionTitle from "../../../components/Section/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import '@smastrom/react-rating/style.css'
import { Rating } from "@smastrom/react-rating";


const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    return (
        <div className="my-20">
            <SectionTitle
            subHeading={"What's Our Client Say"}
            heading={'Testimonials'}
            ></SectionTitle>
              <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
       
     {
        reviews.map(review =>  <SwiperSlide
        key={review._id}
        >
            <div className="flex flex-col items-center my-24 mx-20">
            <Rating
      style={{ maxWidth: 180 }}
      value={review.rating}
      readOnly
    />
                <p className="py-8">{review.details}</p>
                <h3 className="text-2xl text-orange-500">{review.name}</h3>
            </div>
        </SwiperSlide>)
     }
      </Swiper>
        </div>
    );
};

export default Testimonials;