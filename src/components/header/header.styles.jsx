import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 100px;
    padding: 13px;
`;

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

`;

export const OptionLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    letter-spacing: 0.5px;

    &:hover{
        transition: all 0.3s cubic-bezier(0.25, 0.45, 0.45, 0.95);
        box-shadow: inset 0 -50px 0 -10px black;
        color: ghostwhite;
    }
`;

