import OurComputerLab from "./OurComputerLab";
import OurLaboratory from "./Ourlaboratory";

const OurBenefits = () => {
    return (
        <div>
            <h1 className="lg:text-6xl text-4xl text-center font-semibold text-orange-400 mt-8">---Our Benefits---</h1>
            <div className="flex flex-col lg:flex-row items-center my-5 lg:my-36 justify-evenly">

                <div className="   bg-blue-500 px-20 py-4 rounded-2xl text-white font-semibold ">
                    <div className="  text-center text-4xl ">Our laboratory</div>
                    <div className=" text-center text-yellow-500 text-7xl  ">3+</div>
                </div>

                <div className="border-r-4 py-5 lg:py-20 border-stone-500 "></div>

                <div className=" bg-green-500 px-12 py-4 rounded-2xl text-white font-semibold ">
                    <div className="  text-center text-4xl text-black ">Our Computer Lab</div>
                    <div className="  text-center text-7xl  text-red-600">4+</div>
                </div>

                <div className="border-r-4 py-5 lg:py-20 border-stone-500 "></div>
                <div className=" bg-purple-700 px-28 py-4 rounded-2xl text-yellow-400 font-semibold ">
                    <div className="  text-center text-4xl ">Our Library</div>
                    <div className=" text-center text-7xl text-white">1+</div>
                </div>
            </div>


            <OurLaboratory></OurLaboratory>

            <OurComputerLab></OurComputerLab>
        </div>
    );
};

export default OurBenefits;