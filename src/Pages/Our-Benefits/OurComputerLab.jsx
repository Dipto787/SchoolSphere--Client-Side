let computers = [
    {
        "name": "NeuroByte Computing Lab",
        "img": "https://i.ibb.co/Xr6bqt1n/ammar-yasser-x04-Sk-Kl-Z8ho-unsplash.jpg",
        "description": "A next-gen computer lab dedicated to brain-inspired computing and neural algorithm research.",
        "features": ["Brain-Computer Interface", "Neural Network Simulators", "AI-powered Analytics"]
    },
    {
        "name": "QuantumGrid Simulation Center",
        "img": "https://i.ibb.co/V0bKVHnM/krisjanis-kazaks-h-X4-Wsez-VOYI-unsplash.jpg",
        "description": "This lab focuses on simulating quantum circuits and building high-efficiency grid processors.",
        "features": ["Quantum Emulators", "Parallel Processing Nodes", "Energy-Efficient Servers"]
    },
    {
        "name": "VirtuVerse Graphics Lab",
        "img": "https://i.ibb.co/KjXbs0JY/haseeb-modi-LKy-SOH0mr38-unsplash.jpg",
        "description": "A lab built for exploring immersive virtual worlds and real-time 3D visualization.",
        "features": ["VR Headset Integration", "Real-time Rendering Engines", "3D Motion Capture"]
    },
    {
        "name": "EcoLogic Code Lab",
        "img": "https://i.ibb.co/G3rPxWxf/pexels-polina-zimmerman-3747473.jpg",
        "description": "EcoLogic is focused on sustainable software development and low-energy computing systems.",
        "features": ["Solar-Powered Workstations", "Eco-friendly Hardware", "Green Software Projects"]
    }
];

const OurComputerLab = () => {
    return (
        <div className="mb-8">
            <h1 className="lg:text-6xl text-4xl  text-center font-semibold text-purple-400 mt-10">--- Our Computer Lab ---</h1>
            <div className="grid grid-cols-1 px-2  mt-16 gap-8 lg:grid-cols-2 ">
                {
                    computers.map(computer => <div className="border-2 p-8 ">
                        <figure className="">
                            <img
                                className="max-h-80 w-full"
                                src={computer.img}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{computer.name}</h2>
                            <p>{computer.description}</p>
                            
                        </div>
                    </div>)
                }
            </div>

  <h1 className="text-6xl  text-center font-semibold text-black mt-10">--- Our Library ---</h1>
                    <img className="mt-6" src='https://i.ibb.co/211By5WW/ryunosuke-kikuno-FKqx-Z58b-Vj-U-unsplash.jpg' alt="" />
        </div>
    );
};

export default OurComputerLab;