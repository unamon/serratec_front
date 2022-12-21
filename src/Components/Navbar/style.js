import styled from 'styled-components'


export const NavbarSection = styled.section`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-inline: 2rem;
    width: 100vw;
    height: 5.5rem;
    background-color: #222;
    box-shadow:1px 2px 2px 1px #111;
`;

export const NavbarContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    @media (min-width: 1024px) {
        margin-inline: 50px;
    }

`;

export const NavbarLista = styled.ul`
    display: flex;
    @media (min-width: 1024px) {
        display: flex;
        gap: 2rem;
        margin-bottom: 0;
        align-items:center;
    }
`;

export const NavbarItem = styled.li`
    list-style: none;
    font-size: 1.3rem;
    text-decoration: none;
    color: #fff;
    transition: 0.5s;
    font-family:"Inter";
    font-weight:600;
    &:hover{
        /* transform: scale(110%); */
      color:#bbb
    }
`;

export const LinkHome = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
    gap: 10px;
`;

export const NomeLogo = styled.p`
    display: block;
    color: var(--background);
    font-size: 3rem;
    margin-bottom: 0;
`;

export const ButtonLogin = styled.div`
    background-color: var(--secondary-color);
    padding-inline: 1rem;
    border-radius: 0.5rem;
`;

export const MenuOption = styled.button`
    width: 70vw;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    font-size: 3rem;
    text-decoration: none;
    color: var(--background);

    background-color: var(--primary-color);
    border-radius: 1rem;
    &:hover{
        background-color: var(--secondary-color);
    }
`;

export const MenuOptionLogin = styled.button`
    width: 70vw;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    font-size: 3rem;
    text-decoration: none;
    color: var(--background);

    background-color: var(--secondary-color);
    border-radius: 1rem;
    &:hover{
        background-color: var(--primary-color);
    }
`;