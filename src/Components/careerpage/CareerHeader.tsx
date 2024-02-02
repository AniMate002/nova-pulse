import { Link } from "react-router-dom";



const CareedHeader:React.FC = () => {
    return (
        <div className="career--header min-h-[100vh] flex items-center justify-center flex-col text-white">
            <h1 className="font-bold uppercase text-7xl">Start your career here</h1>
            <h2 className="text-violet-300 font-bold text-2xl">become a professional</h2>
            <div className="flex gap-10">
                <Link to={'/'} className="text-violet-100 bg-violet-600 rounded-xl px-8 py-4 mt-10 hover:bg-violet-500  transition-all">join us now</Link>
                <Link to={'/'} className="text-violet-600 bg-violet-100 rounded-xl px-8 py-4 mt-10 hover:bg-violet-200 transition-all">try for free</Link>
            </div>
        </div>
    );
}
 
export default CareedHeader;