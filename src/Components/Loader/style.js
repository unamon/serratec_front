import styled from "styled-components";

export const LoaderStyle = styled.div`
border: 3px solid var(--secondary-color);
border-top-color: var(--primary-color);
border-radius: 50%;

width: 9em;
height: 9em;

animation: rodando 1s infinite;

@keyframes rodando {
	to {
		transform: rotate(1turn);
	}
}
`