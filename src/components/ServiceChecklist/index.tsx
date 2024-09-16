const services = [
    {  
        id: 1,
        label: "Construção",
        checklist: [
            {
                item: "Equipe Experiente",
                description: "Contamos com profissionais qualificados e com vasta experiência no setor de construção civil."
            },
            {
                item: "Prazos Cumpridos",
                description: "Comprometemo-nos a cumprir os prazos estabelecidos, com transparência e eficiência."
            },
            {
                item: "Atendimento Personalizado",
                description: "Entendemos suas necessidades e adaptamos o projeto para atender suas expectativas e orçamento."
            }
        ]
    },
    {
        id: 2,
        label: "Reformas",
        checklist: [
            {
                item: "Renovação de Ambientes",
                description: "Transformamos seus espaços com reformas que atendem às suas necessidades e estilo, garantindo um ambiente renovado e funcional."
            },
            {
                item: "Materiais de Qualidade",
                description: "Utilizamos apenas materiais de alta qualidade para assegurar a durabilidade e o acabamento impecável de suas reformas."
            },
            {
                item: "Coordenação de Projetos",
                description: "Gerenciamos todo o processo de reforma, desde o planejamento até a execução, para garantir que tudo seja feito conforme o planejado e dentro do prazo."
            }
        ]
    },
    {   
        id: 3,
        label: "Manutenções",
        checklist: [
            {
                item: "Manutenção Preventiva",
                description: "Realizamos inspeções regulares e serviços de manutenção preventiva para evitar problemas futuros e prolongar a vida útil das instalações."
            },
            {
                item: "Correção de Defeitos",
                description: "Identificamos e corrigimos rapidamente quaisquer defeitos ou problemas que possam surgir, assegurando o funcionamento adequado de suas estruturas e sistemas."
            },
            {
                item: "Atendimento Ágil",
                description: "Oferecemos um serviço de manutenção ágil e eficiente, com uma equipe pronta para resolver qualquer questão com rapidez e eficácia."
            }
        ]
    }
]

import { useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";

import Image from "../../../public/image_2.png";

import ButtonContact from "../../components/ButtonContact";


function ServiceCheckList() {
    const [selectedItem, setSelectedItem] = useState(1);
    return (
        <div className="w-full">
            <div className="flex gap-14 pb-6 overflow-x-auto">
                {
                    services.map(service => {
                        return <button 
                            onClick={() => {
                                setSelectedItem(service.id);
                            }}
                            className={`${selectedItem === service.id ? 'font-bold opacity-100 text-lg' : 'opacity-75 font-regular'} font-sans text-text-primary transition-all`}>{service.label}</button>
                    })
                }
            </div>
            <div className="w-screen bg-bg-card absolute h-min left-0 py-24">
                <div className="w-3/4 mx-auto max-w-7xl flex flex-col gap-8">
                    {
                        services.find(service => service.id === selectedItem)?.checklist.map(
                            item => {
                                return (
                                    <div className="flex gap-4">
                                        <AiFillCheckCircle className="text-3xl text-cta flex-shrink-0" />
                                        <p className="font-sans text-text-primary font-light text-lg"><strong className="opacity-100 font-bold">{item.item}:</strong> {item.description}</p>
                                    </div>
                                );
                            }
                        )
                    }
                </div>

                <div className="w-screen mt-20">
                    <img src={Image} className="w-full" />
                </div>

                <div className="w-full flex justify-center py-6 mt-12">
                    <ButtonContact />
                </div>
                
            </div>

        </div>
    );
}

export default ServiceCheckList;