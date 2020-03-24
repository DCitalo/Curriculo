import React from 'react';

let AcademicInfos = props => {
    return (
        <div className="container-80 DF FW P-15 tb-container-100">
            <ul className="container-60 DF FW P-5">
                <h3 className="cat-title rob-slab container-40 BorF">Formação Acadêmica</h3>
                <li className="container-100 mb-container-100">
                    <h3 className="container-100 BorB P-5 desc-cont rob-slab">Faculdade Anhembi Morumbi - Design Digital - 2014 - 2018</h3>
                    <h3 className="container-100 P-5 desc-title rob-cond">Ensino Superior</h3>
                </li>
            </ul>
            <ul className="DF FW container-40">
                <h3 className="cat-title rob-slab container-40 BorF">Idiomas</h3>
                <li className="container-100 mb-container-100">
                    <h3 className="container-100 BorB P-5 desc-cont rob-slab">Inglês</h3>
                    <h3 className="container-100 P-5 desc-title rob-cond">Nível - Avançado</h3>
                </li>
                <li className="container-100 mb-container-100">
                    <h3 className="container-100 BorB P-5 desc-cont rob-slab">Espanhol</h3>
                    <h3 className="container-100 P-5 desc-title rob-cond">Nível - Básico</h3>
                </li>
            </ul>
        </div>
    )
}


export default AcademicInfos;
