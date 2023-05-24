import { Helmet } from "react-helmet-async";
import PopularMenu from "../../components/Section/PopularMenu";
import FeaturedItem from "../FeaturedItem/FeaturedItem";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Testimonials from "./Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
           <Helmet>
            <title>Bistro-boss-restuarant | Home</title>
            </Helmet>
          <Banner></Banner>
          <Category></Category>
          <PopularMenu></PopularMenu>
          <FeaturedItem></FeaturedItem>
          <Testimonials></Testimonials>
        </div>
    );
};

export default Home;