const KeyFigures = () => {
    return (
        <div>
            <h1 className="text-center lg:mt-20 mt-8 text-4xl lg:text-6xl font-semibold text-orange-400">-------Key Figures-------</h1>

            <div className="lg:mt-32 mt-10 flex flex-col lg:space-y-0  space-y-5 px-4 lg:flex-row justify-between">
                <div className="bg-green-500 space-y-3 rounded-xl p-10">
                    <h1 className="lg:text-5xl  text-4xl text-center font-semibold text-blue-500">    Our Student</h1>
                   <p className="text-4xl  font-bold text-center"> 370+</p>
                </div>



                <div className="bg-orange-400 space-y-3 rounded-xl p-10">
                    <h1 className="lg:text-5xl  text-4xl text-center font-semibold text-black">    Our Teacher</h1>
                   <p className="text-4xl text-white font-bold text-center"> 15+</p>
                </div>


                <div className="bg-red-500 space-y-3 rounded-xl p-10">
                    <h1 className="lg:text-5xl  text-4xl text-center font-semibold text-white"> Our Classrooms</h1>
                   <p className="text-4xl font-bold text-slate-400 text-center"> 8+</p>
                </div>
                 
            </div>
        </div>
    );
};

export default KeyFigures;