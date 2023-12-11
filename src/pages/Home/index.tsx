import React from "react";
import Button from "../../components/Button";
import CardAccessories from "../../components/CardAccessories";
import ButtonContact from "../../components/ButtonContact";

const PageHome: React.FC = () => {
    return (

        <div className="container-page-home">

            <div className="container-navbar">

                <div className="container-celebration">
                    <img src="https://firebasestorage.googleapis.com/v0/b/feliz-natal-f7062.appspot.com/o/face-papai-noel.svg?alt=media&token=20e172ac-6db3-453d-88f8-65d0bf8dcae4" alt="" />
                    <h2>Feliz Natal</h2>
                </div>

                <nav>

                    <ul>
                        <li>Início</li>
                        <li>Acessórios</li>
                        <li>Doação</li>
                        <li>Contato</li>

                    </ul>

                </nav>

            </div>


            <div className="container-greetings">


                <div className="greetings">
                    <h1>Feliz Natal e Feliz Ano Novo!</h1>
                    <p>Nessas festas de fim de ano mande um presente para a pessoa amada e compartilhe a alegria do Natal.</p>
                    <Button text="Fazer uma doação" />
                </div>

                <div className="container-image-hands">
                    <img src="https://firebasestorage.googleapis.com/v0/b/feliz-natal-f7062.appspot.com/o/maos.svg?alt=media&token=475ac0cc-a475-4538-bf8f-4f511798a6e1" alt="" />
                </div>

            </div>

            <section className="container-accessories">

                <div className="accessories-presentation">
                    <h1>Acessórios</h1>
                    <p>Nessas festas de fim de ano mande um presente para a pessoa amada e compartilhe a alegria do Natal.</p>
                </div>


                <div className="container-cards-accessories">
                    <CardAccessories img="https://firebasestorage.googleapis.com/v0/b/feliz-natal-f7062.appspot.com/o/presente-big.svg?alt=media&token=97d455ca-c628-42d8-a9d4-219d80719473" title="Presentes" description="Eles são os melhores presentes que existem." />
                    <CardAccessories img="https://firebasestorage.googleapis.com/v0/b/feliz-natal-f7062.appspot.com/o/enfeite.svg?alt=media&token=8f0b00de-f813-4ad7-9d8b-21263c1ed107" title="Enfeites" description="Dê uma decoração." />
                    <CardAccessories img="https://firebasestorage.googleapis.com/v0/b/feliz-natal-f7062.appspot.com/o/doce.svg?alt=media&token=0e5380a2-f9b6-4873-ab91-34b6e2fa931e" title="Doces" description="Aproveite os doces natalinos." />
                    <CardAccessories img="https://firebasestorage.googleapis.com/v0/b/feliz-natal-f7062.appspot.com/o/mito-amor.svg?alt=media&token=943f5c26-95a2-47f4-8f25-4b05034d9ada" title="Muito amor" description="Aproveite os sentimentos que duram para sempre." />
                </div>


            </section>

            <section className="container-celebrate">

                <div className="container-image-hands-with-gift">
                    <img src="https://firebasestorage.googleapis.com/v0/b/feliz-natal-f7062.appspot.com/o/maos-com-presente.svg?alt=media&token=14c6d462-2b5d-432e-a11a-9ab3ae33763b" alt="" />
                </div>

                <div className="celebrate">
                    <h1>Comemore com muito amor!</h1>
                    <p>Nestes feriados, festeje com muito amor e paz, oferecendo muitas bênçãos aos nossos entes queridos, amigos e vizinhos, desejando-lhes um Feliz Natal.</p>
                    <Button text="Fazer doação" />
                </div>

            </section>


            <footer>

                <div className="container-celebration">
                    <img src="https://firebasestorage.googleapis.com/v0/b/feliz-natal-f7062.appspot.com/o/face-papai-noel.svg?alt=media&token=20e172ac-6db3-453d-88f8-65d0bf8dcae4" alt="" />
                    <h2>Feliz Natal</h2>
                </div>

                <div className="container-contact">
                    <ButtonContact
                        img="https://firebasestorage.googleapis.com/v0/b/feliz-natal-f7062.appspot.com/o/linkedin.svg?alt=media&token=0f960041-f6e8-4708-8a1e-12faeef1762b"
                        link="https://www.linkedin.com/in/ezequiel-mathias-104092227" />
                    <ButtonContact
                        img="https://firebasestorage.googleapis.com/v0/b/feliz-natal-f7062.appspot.com/o/email.svg?alt=media&token=bd8a0215-86d8-41cb-bf31-1afb972c5146"
                        link="mailto:ezequielmathias32@gmail.com" />
                    <ButtonContact
                        img="https://firebasestorage.googleapis.com/v0/b/feliz-natal-f7062.appspot.com/o/github.svg?alt=media&token=e1c93f38-ecca-4a4c-b937-ebff7de34b6f"
                        link="https://github.com/Ezequiel-Mathias" />
                </div>

            </footer>


        </div>





    )
}


export default PageHome

