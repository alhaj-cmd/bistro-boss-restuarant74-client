
import SectionTitle from "./SectionTitle";
import MenuItem from "../../Pages/Shared/MenuItem/MenuItem";
import useMenu from "../../hooks/useMenu";

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category ==='popular')
  
    return (
        <div className="mb-8">
            <SectionTitle
                heading="From Our Menu"
                subHeading="popular Itmes"
            >

            </SectionTitle>

         <div className="grid md:grid-cols-2  gap-8">
         {
                popular.map(item =>
                    <MenuItem
                        key={item.id}
                        item={item}
                    ></MenuItem>)
            }
         </div>
           <div className="text-center">
           <button className="btn btn-outline border-0  border-b-4 mt-4">View Full Menu</button>
           </div>
        </div>
    );
};

export default PopularMenu;