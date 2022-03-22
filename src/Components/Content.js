import { useState } from "react";
import Data from "../Data";
import Footer from "./Footer";
import useFetch from "./useFetch";

const Content = () => {
    const apiKey                    = '9f0afe1eafb8b0286ee1a59305c569a6';
    const [value, setValue]         = useState(null);

    const {data, loading, error}    = useFetch(`https://api.openweathermap.org/data/2.5/weather?q=${value},{state code}&appid=${apiKey}`);

    return(
        <div className="h-full overflow-x-hidden">
            <div className="w-screen h-screen bg-slate-800 flex flex-col justify-center items-center">
                <h1 className="font-bold text-8xl text-slate-400 text-center">Lihat Cuaca</h1>
                <h3 className="font-semibold text-2xl text-slate-500 mt-4 text-center">Get a Weather Information With Lihat Cuaca.</h3>
            </div>
            <div className="bg-slate-900 lg:px-[100px] py-20 px-[20px]">
                <div className="w-full bg-slate-700">
                    <input type="text" placeholder="search city..." className="w-full border-none px-2 py-3 outline-none bg-white rounded-md" onInput={(e) => {
                        setValue(e.target.value);
                    }} value={value} />
                </div>
                {
                    error && 
                    <div className="w-full my-2">
                        <h1 className="font-semibold text-slate-500 text-2xl">{error}</h1>
                    </div>
                }
                {
                    loading && 
                    <div className="w-full">
                        <h1 className="text-slate-400 text-2xl font-semibold">Loading...</h1>
                    </div>
                }
                {data && <Data data={data} />}
            </div>
            <Footer />
        </div>
    );
}

export default Content;