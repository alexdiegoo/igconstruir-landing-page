import FirstCardImage from "../../../public/image_3.png";
import SecondCardImage from "../../../public/image_4.png";
import StartIcon from "../../../public/estrela.png";

function About() {
    return (
        <section id="about" className="w-full h-min mt-14 md:mt-28">
             <div className="w-full flex justify-center">
                <h1 
                    className="text-center text-2xl md:text-6xl max-w-6xl"
                >Comprometido(a) com a <strong className="text-cta">excelência</strong>.</h1>
            </div>

            <div className="w-full flex flex-col md:flex-row justify-between items-center mt-20">
                <img src={FirstCardImage} className="w-full md:w-1/3" />
                <div className="w-full flex flex-col gap-3 items-center h-min bg-bg-card px-3 py-16">
                    <p className="max-w-96 text-base text-text-primary font-sans font-semibold">
                        Desde que entrou na indústria em 2008, o(a) IGConstruir foi reconhecido como um contratante confiável. 
                    </p>
                    <div className="w-full max-w-96 flex justify-start gap-4">
                        <img src={StartIcon} />
                        <img src={StartIcon} />
                        <img src={StartIcon} />
                        <img src={StartIcon} />
                        <img src={StartIcon} />
                    </div>
                </div>
            </div>

            <div className="w-full flex flex-col-reverse md:flex-row justify-between items-center">
                <div className="w-full flex justify-center h-min bg-bg-card px-3 py-16">
                    <p className="text-base max-w-96 text-text-primary font-sans font-semibold">
                    Nós fornecemos aos clientes uma ampla gama de serviços para todas as suas necessidades. Tudo o que você tem em mente, nossos profissionais trabalham para tornar seu sonho realidade.
                    </p>
                </div>

                <img src={SecondCardImage} className="w-full md:w-1/3" />

            </div>
        </section>
    );
}

export default About;