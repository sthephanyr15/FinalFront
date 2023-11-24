import { Component } from "react";
import './style.css';
import Product from "./pages/Product"


class App extends Component {
  render() {
    return (
      <div>
        <main>
        <nav>
          <div className="logo-container">
          <img src="/src/images/rb.png" />
          </div>
          <div className="nav-links">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Login</a></li>
            </ul>          
          </div>
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
            <div className="arrow-buttons">
            <button className="flecha-izq">&lt;</button><button className="flecha-der">&gt;</button>
            </div>
          </section>
          <section className="productList">
            <Product></Product>
            <Product></Product>
            <Product></Product>

          </section>
          
        </main>
        <footer>
          <p>&copy; 2023 Desarrollado por: Marcela V. Hernández López y Sthephany Rojas Sabogal</p>
        </footer>
      </div>
    );
  }
}

export default App;
