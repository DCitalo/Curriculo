import React from 'react';
import Container from '../../Atoms/container/container';
import styled from 'styled-components';


const Me = () => {
	return (
		<ContainerMe percent='20' className="bg-parallax bg-perfil" >
			<img src="images/me.png" alt="Foto de Perfil" className="perfil" />
		</ContainerMe>
	)
}

const ContainerMe = styled(Container)`
	padding: 10px;
	background:url('/images/Bg-Perfil.png');
	margin:0 auto;
	max-height: 194px;
	background-repeat: no-repeat;
	background-size: 100%;
	background-attachment: fixed;
	background-position: center;
	border-radius: 5px;
`;

export default Me;
