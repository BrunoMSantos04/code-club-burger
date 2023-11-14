import styled from 'styled-components'



export const Container = styled.div`
    background-color: black;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    height: 100%;
    min-height: 100vh - 170px;
`;

export const H1 = styled.h1`
    color: #FFF;
    text-align: center;
    font-size: 34px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 80px;
`;

export const Itens = styled.div`
    border-radius: 61px 61px 0px 0px;
    background: linear-gradient(157deg, rgba(255, 255, 255, 0.60) 0.84%, rgba(255, 255, 255, 0.60) 0.85%, rgba(255, 255, 255, 0.15) 100%);
    padding: 50px 36px;
    display: flex;
    flex-direction: column;
    height: 150vh;

    ${props => props.IsBlur && `
        backdrop-filter: blur(45px);
        min-height: calc(100vh - 170px);
    `}

`;

export const Img = styled.img`
    margin-top: 30px;

`;



export const Button = styled.button`
    width: 342px;
    height: 74px;
    margin-top: 120px;
    flex-shrink: 0;
    border-radius: 14px;
    background: ${props => props.reverseArrow ? 'transparent'  : ' var(--templates-5-color-1, rgba(0, 0, 0, 0.80))'};
    cursor: pointer;
    border: ${props => props.reverseArrow ? '1px solid #fff' : 'none'};
    color: #FFF;
    font-size: 17px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;

    &:hover{
        opacity: 0.8;
    }

    &:active{
        opacity: 0.5;
    }

`;

export const Order = styled.li`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 24px;
    width: 342px;
    height: 58px;
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border: none;
    outline: none;

p{
    color: #FFF;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    }

button{
    background: none;
    cursor: pointer;
    width: 24px;
    height: 28px;
    flex-shrink: 0;
    border: none;
    outline: none;
}


`;