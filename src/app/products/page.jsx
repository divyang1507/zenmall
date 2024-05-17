
import React from "react";

const getData = async () => {
  const slug = "iphone-15";
  const res = await fetch('http://localhost:3000/api/proudcts');
  console.log(res);
  if (!res.ok) {
    throw new Error("not okay");
    console.log(Error);
  }
  return await res.json();
};

const PorductsPage = async () => {
  // const product = await getData();

  const fetchData = async () => {
    const products = await getData();
    console.log(products);
  };

const product =  fetchData();
console.log(product)

  return <div>PorductsPage
  
  {product.name}
  </div>;
};

export default PorductsPage;
