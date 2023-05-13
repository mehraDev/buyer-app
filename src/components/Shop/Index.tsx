import React from "react";
import styled from "styled-components";
// import FoodShopViewer from "./FoodShopViewer";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #5eaff6;
`;

const Shop = ({ shopName, items }) => {
  return (
    <Wrapper>
        <div className="head">
            <h4>{shopName}</h4>
        </div>
      {/* <FoodShopViewer items={items} /> */}
    </Wrapper>
  );
};

export default Shop;
