import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import menuImg from "../../assets/menu/menu-bg.png"
import PopularMenu from '../../components/Section/PopularMenu';

const Menu = () => {
    return (
        <div>
          <Helmet>
            <title>Bistro-boss-restuarant | Menu</title>
            </Helmet> 
            <Cover img={menuImg} title="Our menu" ></Cover> 
           <PopularMenu></PopularMenu>
            <Cover img={menuImg} title="Our menu" ></Cover> 
           <PopularMenu></PopularMenu>
            <Cover img={menuImg} title="Our menu" ></Cover> 
           <PopularMenu></PopularMenu>
        </div>
    );
};

export default Menu;