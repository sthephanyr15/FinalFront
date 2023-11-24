import { Component } from "react";
import './style.css';
import Product from "./pages/Product"


class App extends Component {
  render() {
    return (
      <div>
        <main>
        <nav>
          <img src="/src/images/rb.png" />
        </nav>
          <div className="nav-container">
            <div className="blue-box">
              <div className="blue-box-container">
                <textarea
                  rows="4"
                  cols="50"
                  placeholder="Search goods or services here..."
                ></textarea>
                <select>
                  <option value="">All Categories</option>
                  <option value="">a</option>
                  <option value="">l</option>
                  <option value="">o</option>
                </select>
                <button className="button">Search Now!</button>
              </div>
            </div>
          </div>
          <section className="products">
            <h2>Latest Online Products</h2>
          </section>
          <section className="productList">
            <Product></Product>
            <Product></Product>
            <Product></Product>

          </section>
          
        </main>
        
      </div>
    );
  }
}

export default App;