import styled, { css } from 'styled-components';

const buttonStyles = css`
    background-color: black;
    color: white;
    border: none;

    &:hover {
      background-color: white;
      color: black;
      border: 1px solid black;
    }
`;

const invertedButtonStyles = css`
    background-color: whitesmoke;
    color:black;

    &:hover {
        transition: all 0.2s cubic-bezier(0.25, 0.45, 0.45, 0.95);
        background-color: black;
        color: white;
        border: none;
    }
`;

const googleSignInStyles = css`
    background-color: #4285f4;
    color:white;

    &:hover {
        background-color: white;
        color: #357ae8;
        border: 1px solid #357ae8;
    }
`;

const getButtonStyles = props => {
    if (props.isGoogleSignIn) {
        return googleSignInStyles;
    }

    return props.inverted ? invertedButtonStyles : buttonStyles;
}

export const CustomButtonContainer = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 1px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    background-color: black;
    color: white;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    transition: all 0.2s cubic-bezier(0.25, 0.45, 0.45, 0.95);

    ${getButtonStyles}
`;