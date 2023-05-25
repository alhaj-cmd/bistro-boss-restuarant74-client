import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import menuImg from "../../assets/menu/banner3.jpg"
import dessertImg from "../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../assets/menu/pizza-bg.jpg"
import soupImg from "../../assets/menu/soup-bg.jpg"
import saladImg from "../../assets/menu/salad-bg.jpg"
import useMenu from '../../hooks/useMenu';
import SectionTitle from '../../components/Section/SectionTitle';
import MenuCatagory from './MenuCatagory';

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter(item => item.category === 'dessert')
  const soup = menu.filter(item => item.category === 'soup')
  const salad = menu.filter(item => item.category === 'salad')
  const pizza = menu.filter(item => item.category === 'pizza')
  const offered = menu.filter(item => item.category === 'offered')

    return (
        <div>
          <Helmet>
            <title>Bistro-boss-restuarant | Menu</title>
            </Helmet> 
            <Cover img={menuImg} title="Our menu" ></Cover> 
            {/* main cover */}
            <SectionTitle subHeading="Don't Miss" heading="Today's Offer"></SectionTitle>
            {/* offered menu items */}
        <MenuCatagory items ={offered}></MenuCatagory>
        {/* dessert menu items */}
        <MenuCatagory items={desserts}
        title="desserts"  
        img={dessertImg}
        ></MenuCatagory>
        <MenuCatagory items={pizza}
        title="pizza"  
        img={pizzaImg}
        ></MenuCatagory>
        <MenuCatagory items={salad}
        title="salad"  
        img={saladImg}
        ></MenuCatagory>
        <MenuCatagory items={soup}
        title="soup"  
        img={soupImg}
        ></MenuCatagory>
        </div>
    );
};

export default Menu;