import { useEffect, useState } from "react";
import { TableCart } from "./components/TableCart";
import { Container, Content } from "./style/general";
import { GlobalStyle } from "./style/global";

function App() {
  const [fruits, setFruits] = useState([]);
  const [listFruits, setListFruits] = useState([]);

  useEffect(() => {
    async function handleRequestFruits() {
      const response = await fetch("http://localhost:5000/fruits");
      const responseData = await response.json();
      setFruits(responseData);
    }

    handleRequestFruits();
  }, []);

  function handleAddFruits(id) {
    const filterFruits = fruits.filter((fruit) => fruit.id === id);
    
    console.log("qqqq",filterFruits[0].id)
    
    // if(filterFruits[0].id === listFruits.id)
    console.log("llill",listFruits[0].id)
    
    if (filterFruits) {
      setListFruits([...listFruits, filterFruits]);
    }
  }
  console.log(listFruits)
  return (
    <Container>
      <h1>All Items</h1>
      <Content>
        <GlobalStyle />

        {fruits.length > 0 &&
          fruits.map((fruit) => {
            return (
              <div key={fruit.id}>
                <img src={fruit.imageUrl} alt="" />
                <p>{fruit.name}</p>
                <p>$ {fruit.price}</p>
                <button onClick={() => handleAddFruits(fruit.id)}>
                  Add to Cart
                </button>
              </div>
            );
          })}
      </Content>

      <TableCart 
        listFruits={listFruits}
      />
    </Container>
  );
}

export default App;
