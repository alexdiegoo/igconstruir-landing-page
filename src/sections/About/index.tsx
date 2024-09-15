import Image from "../../../public/image_1.png";

import ButtonContact from "../../components/ButtonContact";

function About() {
    return (
        <section id="about" className="w-full flex flex-col gap-4 lg:flex-row mt-20 md:mt-28">
            <div>
                <h1 
                    className="text-4xl md:text-6xl max-w-xl"
                >O profissional de construção que você <strong className="text-cta">confia</strong>.</h1>
                <p className="text-xl opacity-75 font-light mt-4 mb-8">Obtenha resultados de qualidade garantidos com IGConstruir.</p>

                <ButtonContact/>
            </div>
           
            <div className="xl:absolute 2xl:static -right-3 top-28 w-full md:w-3/4 lg:w-2/5 max-w-4xl">
                <img src={Image} alt="" className="w-full" />
            </div>
        </section>
    );
}

export default About;