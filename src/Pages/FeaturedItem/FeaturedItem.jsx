import SectionTitle from "../../components/Section/SectionTitle";
import featuredImg from "../../assets/home/featured.jpg"
import './FeaturedItem.css';


const FeaturedItem = () => {
    return (
        <div className="featured-item text-white bg-fixed mt-10 py-8">
            <SectionTitle
            subHeading={"check it out"}
            heading={"Featured Item"}
            ></SectionTitle>
            <div className="md:flex justify-center items-center pb-10 pt-12 px-24 bg-slate-500 bg-opacity-40">
        <div>
        <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
            <p>Aug 20, 2023</p>
            <p className="uppercase">Where can i get some?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, adipisci odit? Beatae dolore praesentium accusantium corrupti enim autem, veritatis eveniet.</p>
            <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>

        </div>
            </div>
        </div>
    );
};

export default FeaturedItem;