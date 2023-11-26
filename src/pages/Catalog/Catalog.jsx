import React, { Component } from "react";
import Product from "../Product/Product.jsx"
import './catalog.css';



class Catalog extends Component {

    constructor(props) {
        super(props);
        this.state = {
          currentPage: 1,
          productsPerPage: 10,
          products:[],
        };

        this.editProduct = this.editProduct.bind(this);
      }
    
      nextPage = () => {
        this.setState((prevState) => ({
          currentPage: prevState.currentPage + 1,
        }));
      };
    
      prevPage = () => {
        this.setState((prevState) => ({
          currentPage: Math.max(prevState.currentPage - 1, 1),
        }));
      };

      editProduct = (productId, newName) => {
        const updatedProducts = this.state.products.map((product) =>
          product.id === productId ? { ...product, name: newName } : {...product}
        );
    
        this.setState({ products: updatedProducts });
      };


      saveProducts = (products) => {
        this.setState({ products });
      }

      
  render() {
    const { currentPage, productsPerPage } = this.state;
    return (
      <div>
        <section className="productsBar">
        <h2>Latest Online Products</h2>
          <div className="arrow-buttons">
            <button className="flecha-izq" onClick={this.prevPage} disabled={currentPage === 1}>&lt;</button>
            <button className="flecha-der" onClick={this.nextPage}>&gt;</button>
          </div>
        </section>
        <section className="productList">
          {this.props.products
            .slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage)
            .map((product) => (
              <Product key={product.id} 
              {...product} isAdmin={this.props.isAdmin}
              editProduct={this.editProduct}
              />
            ))}
        </section>
      </div>

    );
  }
}

export default Catalog;
