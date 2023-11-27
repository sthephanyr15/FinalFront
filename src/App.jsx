import { Component } from "react";
import './style.css';
import Catalog from "./pages/Catalog/Catalog"
import allProducts from "../src/pages/Product/products.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: "",
      searchQuery: "", 
      isAdmin: true
    };
  }

  handleCategoryChange = (event) => {
    this.setState({ selectedCategory: event.target.value });
  };

  handleSearchChange = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  render() {
    const { selectedCategory, searchQuery, isAdmin} = this.state;

    const filteredProducts = allProducts
      .filter(product => !selectedCategory || product.type === selectedCategory)
      .filter(product => !searchQuery || product.name.toLowerCase().includes(searchQuery.toLowerCase()));

    return (
      
      <div>
        <main>
          <nav>
            <div className="nav-buttons">
              <button onClick={() => this.setState({ isAdmin: false })}>Home</button>
              <button onClick={() => this.setState({ isAdmin: true })}>Admin Panel</button>
            </div>
            <div className="award"></div>

              <div className="blue-box">
                <div className="blue-box-container">
                  <input
                    type="text"
                    placeholder="Search goods or services here..."
                    value={searchQuery}
                    onChange={this.handleSearchChange}
                  />
                  <select onChange={this.handleCategoryChange} value={selectedCategory}>
                    <option value="">All Categories</option>
                    <option value="Funny">Funny</option>
                    <option value="Action">Action</option>
                    <option value="Cartoon">Cartoon</option>
                  </select>
                  <button className="button">Search Now!</button>
                </div>
              </div>
            
          </nav>
          <Catalog products={filteredProducts} isAdmin={isAdmin}></Catalog>
        </main>
        <footer>
          <p>&copy; 2023 Desarrollado por: Marcela V. Hernández López, Sthephany Rojas Sabogal y Alex E. Figueroa Caguana</p>
        </footer>
      </div>
    );
  }
}

export default App;
