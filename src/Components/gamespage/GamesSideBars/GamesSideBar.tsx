import { NavLink } from "react-router-dom";
import GamesUserSection from "./GamesUserSection";



const GamesSideBar:React.FC = () => {
    return (
        <div className="games--sidebar  right-[-100%] fixed top-0 w-[350px] h-[100vh] bg-gradient-to-tl from-slate-800 to-slate-900 z-50 px-4 text-white
        flex flex-col justify-between
        ">
            <div className="py-10">
                <NavLink to={'/'} className={'flex gap-4 items-center Haptik px-10 py-4 hover:bg-slate-800 rounded-xl transition-all duration-200 text-slate-400 hover:text-white'}><i className="fa-solid fa-house-chimney"></i>Dashboard</NavLink>
                <NavLink to={'/'} className={'flex gap-4 items-center Haptik px-10 py-4 hover:bg-slate-800 rounded-xl transition-all duration-200 text-slate-400 hover:text-white'}><i className="fa-solid fa-address-card"></i>About us</NavLink>
                <NavLink to={'/'} className={'flex gap-4 items-center Haptik px-10 py-4 hover:bg-slate-800 rounded-xl transition-all duration-200 text-slate-400 hover:text-white'}><i className="fa-solid fa-newspaper"></i>News</NavLink>
                <NavLink to={'/'} className={'flex gap-4 items-center Haptik px-10 py-4 hover:bg-slate-800 rounded-xl transition-all duration-200 text-slate-400 hover:text-white'}><i className="fa-solid fa-gamepad"></i>Games</NavLink>
                <NavLink to={'/'} className={'flex gap-4 items-center Haptik px-10 py-4 hover:bg-slate-800 rounded-xl transition-all duration-200 text-slate-400 hover:text-white'}><i className="fa-solid fa-coins"></i>Career</NavLink>
                <h4 className="text-slate-600 mt-10 mx-10 mb-4">Projects</h4>
                <div className="flex flex-col gap-4 mx-10 text-slate-400 text-sm">
                    <p className="hover:text-white transition-all duration-200 cursor-pointer">Website redesign</p>
                    <p className="hover:text-white transition-all duration-200 cursor-pointer">NovaPlus API</p>
                    <p className="hover:text-white transition-all duration-200 cursor-pointer">Customer migration guides</p>
                    <p className="hover:text-white transition-all duration-200 cursor-pointer">Profit sharing program</p>
                </div>
            </div>
            <div className="w-full pb-4">
                <GamesUserSection />
            </div>
        </div>
    );
}
 
export default GamesSideBar;