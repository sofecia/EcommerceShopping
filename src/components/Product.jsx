import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components';

/********************************************************** */

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.7);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
`;

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;

    &:hover ${Info} {
        opacity: 1;
        transform: 1.2s;
    }
`;
const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;

`;
const Image = styled.img`
    height: 75%;
    z-index: 2;
`;
/**display: flex; */

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s;

    &:hover {
        background-color: #e9f5f5;
        transform: scale(1.1);
    }
`;
const Pointer = styled.span`
    cursor: pointer;
`;

/********************************************************** */

const Product = ( { item } ) => {
  return (
    <Container>
        <Circle />
        <Image src = {item.img} />
        <Info>
            <Icon>
                <Pointer>
                    <ShoppingCartOutlined />
                </Pointer>
            </Icon>
            <Icon>
                <Pointer>
                    <SearchOutlined />
                </Pointer>
            </Icon>
            <Icon>
                <Pointer>
                    <FavoriteBorderOutlined />
                </Pointer>
            </Icon>
        </Info>
    </Container>
  )
}
export default Product;