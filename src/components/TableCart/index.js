import React, { Fragment } from "react";
import { Container, TableContainer, TableContent, FlexContent } from "./styles";

export function TableCart({ listFruits }) {
  console.log("list??", listFruits)
  return (
    <Container>
      <h2>Your shopping cart</h2>

      <TableContainer>
        <TableContent>
          {listFruits.length > 0
            ? listFruits.map((fruit) => {
              console.log(fruit[0].amount)
              return (
                <FlexContent key={fruit[0].id}>
                    
                    <div className="info-content">
                      <img src={fruit[0].imageUrl} alt="" />
                      <h3>{fruit[0].name}</h3>
                      <span>${fruit[0].price}</span>
                      <span>Quantity(1)</span>
                    </div>
                    <div className="button-content">
                      <button className="volume-buttons">+</button>
                      <button className="volume-buttons">-</button>
                      <button>Remove Item</button>
                    </div>
                  </FlexContent>
                );
              })
            : "Carrinho vazio"}
        </TableContent>
      </TableContainer>
    </Container>
  );
}
