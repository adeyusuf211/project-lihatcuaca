import { useEffect, useState } from "react";

import Data from "../Data";

const Content = () => {
    const [data, setData] = useState(null);

    const apiKey   = '9f0afe1eafb8b0286ee1a59305c569a6';
    
    const searchCity = (event) => {
        const inputValue = event.target.value;

        const endPoint  = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue},'zip code'&appid=${apiKey}`;
    
        fetch(endPoint)
            .then(res => res.json())
            .then(weather => {
                console.log(weather);
                if(inputValue !== weather.main.name) {
                    console.log('Gagal');
                } 
                setData(weather);
            });
    }


    return(
        <div className="h-full overflow-x-hidden">
            <div className="w-screen h-screen bg-slate-800 flex flex-col justify-center items-center">
                <h1 className="font-bold text-8xl text-slate-400 text-center">Lihat Cuaca</h1>
                <h3 className="font-semibold text-2xl text-slate-500 mt-4 text-center">Get a Weather Information With Lihat Cuaca.</h3>
            </div>
            <div className="bg-slate-900 lg:px-[100px] py-20 px-[20px]">
                <div className="w-full bg-slate-700">
                    <input type="text" placeholder="search city..." className="w-full border-none px-2 py-3 outline-none bg-white rounded-md" onInput={searchCity} />
                </div>
                {data && <Data data={data} />}
            </div>
            <div className="bg-slate-800 px-[100px] py-10">
                <div className="grid lg:grid-cols-3 gap-5 sm:gap-2">
                    <div className="flex flex-col mt-0">
                        <h1 className="font-bold text-slate-400 text-6xl mb-2">Lihat Cuaca</h1>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="font-bold text-2xl text-slate-400 mb-2">RESOURCES</h1>
                        <h3 className="font-semibold lg:text-2xl text-slate-500"><a href="https://www.openweathermap.org" target="_blank">OpenWeatherMap</a></h3>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="font-bold text-2xl text-slate-400 mb-2">&copy; 2022.</h1>
                        <h3 className="font-semibold lg:text-2xl text-slate-500">This site created by <a href="https://adeyusuf.netlify.app" className="text-slate-400" target="_blank">Ade Yusuf</a></h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;