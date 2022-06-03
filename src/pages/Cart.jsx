import React from 'react'
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import meIMG from '../assets/me.jpg';
import { Add, Remove } from '@material-ui/icons';
import { itemCart } from '../data';

const Container = styled.div`
/*
    background-color: #c2c2c2;*/
`;
const Wrapper = styled.div`
    padding: 20px;
    /*
    background-color: #c4d1c1;
    */
`;
const Title = styled.h2`
    font-weight: 400;
    text-align: center;
`;
const Top = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;
const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${(props) => props.type === "filled" && "none"};
    background-color: ${(props) =>
        props.type === "filled" ? "black" : "transparent"};

    color: ${(props) => props.type === "filled" && "white"};
`;
const TopTexts = styled.div`

`;
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;

`;

const Bottom = styled.div`
        display: flex;
        justify-content: space-between;
`;
const Info = styled.span`
    
    flex: 3;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 0.5px solid #c1c1c1;
    border-top: 0.5px solid #c1c1c1;
    padding-bottom: 15px;
    padding-top: 10px;

`;
const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`;
const Image = styled.img`
    width: 200px;
`;
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const ProductName = styled.span`

`;

const ProductId = styled.span`

`;

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
`;

const ProductSize = styled.span`

`;

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;    
`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;
const ProductAmount = styled.div`
    text-align: center;
    font-size: 24px;
    border-radius: 50%;
    background-color: white;
    color: #c1c4c;
    font-weight:500;
    padding: 4px;
    margin: 5px;
    width: 27px;
    height: 27px;
    &:hover{
        cursor:pointer;
        background-color: teal;
        color: white;
        font-weight: 600;
    }
    

`;

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
`;
/*
const ProductAmountContainer = styled.div`

`;
*/

const Click = styled.span`
    cursor: pointer;

`;
const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`;

const Summary = styled.span`
/*
    background-color: gray;*/
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`;

const SummaryTitle = styled.h2`
    font-weight: 300;

`;
const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    
    font-weight: ${props=>props.type === "total" && "500"};
    font-size: ${props=>props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span`

`;
const SummaryItemPrice = styled.span`

`;

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
`;
/************************************************************ */
const Cart = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Your wishlist (0)</TopText>
                </TopTexts>
                <TopButton type='filled'>CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
                <Info>

                    {itemCart.map((item) => (
                        <Product>
                            <ProductDetail>
                                <Image src={meIMG} />
                                <Details>
                                    <ProductName><b>Product:</b> {item.product}</ProductName>
                                    <ProductId><b>ID:</b> {item.idProduct}</ProductId>
                                    <ProductColor color= {item.color} />
                                    <ProductSize><b>Size:</b> {item.size}</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Click>
                                        <Add />
                                    </Click>
                                    
                                    <ProductAmount>{item.length}</ProductAmount>
                                    <Click>
                                        <Remove />
                                    </Click>
                                    
                                </ProductAmountContainer>
                                <ProductPrice>{item.nota} {item.price}</ProductPrice>
                            </PriceDetail>
                            
                        </Product>
                        
                    ))}
                    <Hr />
                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>SubTotal</SummaryItemText>
                        <SummaryItemPrice>$ 80</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping Discount</SummaryItemText>
                        <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText >Total</SummaryItemText>
                        <SummaryItemPrice>$ 80</SummaryItemPrice>
                    </SummaryItem>

                    <Button>CHECKOUT NOW</Button>

                </Summary>
            </Bottom>

        </Wrapper>

        <Footer />
    </Container>
  )
}

export default Cart