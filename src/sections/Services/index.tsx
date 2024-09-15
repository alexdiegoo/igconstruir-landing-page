import ServiceCheckList from "../../components/ServiceChecklist";

function Services() {
    return (
        <section id="services" className="w-full flex flex-col gap-4 lg:flex-row mt-20 md:mt-40">
            <div>
                <h1 
                    className="text-4xl md:text-6xl max-w-6xl"
                >Procurando um profissional <strong className="text-cta">licenciado</strong> e <strong className="text-cta">experiente</strong> para enfrentar um projeto?</h1>
                <p className="text-xl opacity-75 font-light mt-4 mb-8">
                Oferecemos serviços de contratação profissionais e confiáveis para uma grande variedade de necessidades, trabalhando com dedicação que nos garantiu uma ótima reputação.
                </p>

                <ServiceCheckList />
            </div>
        </section>
    );
}

export default Services;