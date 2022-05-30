import React from 'react'
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';

import meIMG from "../assets/me.jpg"
import { Add, Remove } from '@material-ui/icons';

const Container = styled.div`

`;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`;

const ImgContainer = styled.div`
    flex: 1;
`;
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding 0px 50px;
`;

const Title = styled.h1`
    font-weight: 200;
`;

const Description = styled.p`
    margin: 20px 0px;
`;

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`;
const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
`;
const Filter = styled.div`
    display: flex;
    align-items: center;
`;
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    margin: 0px 6px;
    border-radius: 50%;
    background-color: ${props => props.color};
    cursor: pointer;
`;
const FilterTitle = styled.h3`
    font-size: 20px;
    font-weight: 200;
`;
const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
    cursor: pointer;
    
`;
const FilterSizeOption = styled.option`

`;
const AddContainer = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
    justify-content: space-between;
`;
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 2px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 6px;
`;
const Click = styled.span`
    cursor: pointer;
`;
const Button = styled.button`
    padding 16px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    
    &:hover{
        background-color: #c1c1c1;
        color: #000;
        font-weight: 500;
        transform: xcale(1.1);
    }
`;
/******************************************************** */
const Product = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        
        <Wrapper>
            <ImgContainer>
                <Image src={meIMG}/>
            </ImgContainer>
            <InfoContainer>
                <Title>
                    Denim Jumpsuit
                </Title>
                <Description>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in 
                    finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum
                    vestibulum ex, eget tristique torton pretium ut. Curabitur elit justo, consequat id condimentum
                    ac, volutpat ornare.
                </Description>
                <Price>$ 20</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="black" />
                        <FilterColor color="darkblue" />
                        <FilterColor color="gray" />
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>

                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                            <FilterSizeOption>XS</FilterSizeOption>
                            
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Click>
                            <Remove />
                        </Click>
                        <Amount>2</Amount>
                        <Click>
                            <Add />
                        </Click>
                    </AmountContainer>
                    <Button>ADD TO CART</Button>

                </AddContainer>
            </InfoContainer>
        </Wrapper>

        <Newsletter />
        <Footer />
    </Container>
  )
}


export default Product