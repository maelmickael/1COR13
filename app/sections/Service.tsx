import React from 'react'
import styles from './styles/services.module.css'

const Service = () => {

    const services = [
        {
            logo: "/logo/motion.png",
            name: "motion studio",
            items: [
                "Animation 2D",
                "Motion Design",
                "Animatic",
                "Storyboard"
            ],
            color: "#FF3300",
        },
        {
            logo: "/logo/brand.png",
            name: "brand studio",
            items: [
                "Création de logo & Charte graphique",
                "Affiche publicitaire / flyer",
                "Plaquette commerciale",
                "Brochure",
                "Kakémono"
            ],
            color: "#FF0066",
        },
        {
            logo: "/logo/digit.png",
            name: "digital studio",
             items: [
                "Site internet",
                "web design",
                "Community management",
                "Newsletter",
            ],
            color: "#972AF5",
        },
        {
            logo: "/logo/editing.png",
            name: "editing studio",
            items: [
                "Illustration",
                "Bande dessinée",
                "Livre pour enfants",
                "Mise en page Magazine",
                "Game design (création de jeux de société)"
            ],
            color: "#4DBEDA",
        }
    ];

    const satisfaction = [
        {
            icon: "/logo/Groupe 93.png",
            number: "100%",
            label: ["indépendant"],
        },
        {
            icon: "/logo/Groupe 92.png",
            number: "3",
            label: [
                "Années",
                "au service",
                "de nos clients",
            ]
        },
        {
            icon: "/logo/Groupe 72.png",
            number: "+70",
            label: [
                "Clients",
                "satisfaits"
            ]
        },
        {
            icon: "/logo/Groupe 91.png",
            number: "+200",
            label: [
                "Projets",
                "réalisés"
            ]
        }
    ];

  return (
    <>
        <div className={styles.services}>

            <div className="w-[60%] mx-auto">
                <h1 className='uppercase text-[60px] leading-[60px] font-[600] text-white'>
                    Nos <br /> services
                </h1>
                <div className='trait h-[10px] w-[70px] bg-[#FE0466] mt-0.5'></div>

                <p className='mt-4 text-white'><b> 1COR13 STUDIO </b> regroupe à son sein, quatre studios pour répondre à vos besoins de façon optimale.</p>

                <div className="box flex items-center justify-screen gap-4 mt-10">
                    
                    {services.map((service, index) => (
                        <div key={index} className="service-card bg-[#44566A] opacity-80 w-[250px] h-[310px] p-5 relative">
                            <div className="logo flex flex-col items-center">
                                <img src={service.logo} alt={service.name} className="w-16 h-16 object-contain"/>
                                <h2 className="uppercase text-md font-semibold mb-2" style={{ color: service.color }}>{service.name}</h2>
                            </div>
                            <ul className="uppercase list-disc list-inside text-white font-bold text-[10px]">
                                {service.items.map((item, idx) => (
                                    <li key={idx} className="mb-1">{item}</li>
                                ))}
                            </ul>  
                            <div className="button absolute bottom-0 left-0 w-full py-4 text-center bg-[#0B253C] opacity-100">
                                <a href="#" className="text-white py-2 px-8" style={{ backgroundColor: service.color }}>En Savoir Plus</a>
                            </div>
                        </div>
                    ))}

                </div>
            </div>

        </div>

        <div className="satisfac bg-[#0B253C] py-10">
            <div className="bloc flex items-start justify-center gap-10">
                {satisfaction.map((item, index) => (
                    <div key={index} className="item flex flex-col items-center justify-center mx-4">
                        <img src={item.icon} className="object-contain mb-2"/>
                        <h3 className="text-[30px] font-bold text-white">{item.number}</h3>
                        <ul className="text-[#FF0064] text-center leading-[18px]">
                            {item.label.map((line, idx) => (
                                <li key={idx}>{line}</li>
                            ))}
                        </ul>
                    </div>
                    
                ))}
            </div>
        </div>
    </>
  )
}

export default Service