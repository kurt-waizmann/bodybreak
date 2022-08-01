import Header from "./Header";
import styled from "styled-components";
import { useContext } from "react";
import { AllItemsContext } from "./AllItemsContext";
import ProductComponent from "./ProductComponent";

const AllItems = () => {
  const { items } = useContext(AllItemsContext);
  return (
    <>
      <Wrapper>
        <Header />
        <Title>All Products</Title>
        <Container>
          {items.map((item, key) => {
            return (
              <ProductComponent item={item} />
            );
          })}
        </Container>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  background-color: #1c1b1b;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  color: #04d9ff;
  font-size: x-large;
  padding: 30px;
  text-decoration: underline;
`;

const Container = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  margin: 10px;
  gap: 20px;
  color: white;
`;

const Items = styled.div``;

const Imgs = styled.img`
  height: 120px;
  width: 120px;
`;

const Price = styled.div`
  padding: 6px 0px;
  width: 50px;
`;

export default AllItems;