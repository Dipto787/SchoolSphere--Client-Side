let labData = [
    {
        "name": "BioGenix Lab",
        "img": "https://i.ibb.co/1VBRLss/sieuwert-otterloo-Au-R4z-ed-GAU-unsplash.jpg",
        "description": "BioGenix Lab is focused on genetic engineering and advanced DNA research.",
        "team": ["Dr. Nadia Islam", "Rafiq Mahmud", "Tania Rahman"]
    },
    {
        "name": "NanoTech Research Center",
        "img": "https://i.ibb.co/k2QJ7QV9/trnava-university-9x-RHr-MOjeg-unsplash.jpg",
        "description": "Specializing in nanotechnology and material science, this lab leads innovation in small-scale engineering.",
        "team": ["Dr. Hasan Karim", "Mithila Chowdhury", "Samiul Haque"]
    },
    {
        "name": "GreenLife Chemistry Lab",
        "img": "https://i.ibb.co/G3rPxWxf/pexels-polina-zimmerman-3747473.jpg",
        "description": "GreenLife Chemistry Lab works on sustainable solutions through organic chemistry and eco-friendly practices.",
        "team": ["Dr. Laila Noor", "Zahidul Islam", "Farzana Akter"]
    }
]


const OurLaboratory = () => {
    return (
        <div>
            <h1 className="lg:text-6xl text-4xl  text-center font-semibold text-blue-400 mt-8">--- Our Laboratory ---</h1>
            <div className="mt-16 flex px-2 flex-col gap-4">
                {
                    labData.map(lab => <div className="container mx-auto space-y-12">
                        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                            <img src={lab.img} alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                            <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
                                
                                <h3 className="text-3xl font-bold">{lab.name}</h3>
                                <p className="my-6 dark:text-gray-600">{lab.description}</p>
                               <div className="flex gap-4 ">
                                <p>Teacher: </p>
                                <div className="">
                                   <p className="">    { lab.team }    </p>
                                </div>
                               </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default OurLaboratory;