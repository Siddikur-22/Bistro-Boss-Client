import SectinTitile from "../../../Componentes/SectinTitile/SectinTitile";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";


const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');
    // const [menu, setMenu] = useState([]);
    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularItmes = data.filter(item => item.category === 'popular');
    //             setMenu(popularItmes)
    //         })
    // },[])
    return (
        <section className="mb-28">
            <SectinTitile
                heading='From Our Menu'
                subHeading='Popular Items'
            ></SectinTitile>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
                {popular.map(item => <MenuItem key={item._id} item={item}></MenuItem>)}
            </div>
            <div className="text-center mt-14">
                <button className='uppercase btn btn-outline border-0 border-b-4 mt-4'> View full menu</button>
            </div>
        </section>

    );
};

export default PopularMenu;