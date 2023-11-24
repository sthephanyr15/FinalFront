import { Component } from "react";
import './product.css';
import '../fonts/icomoon.css';
import '../fonts/icomoon.eot';
import '../fonts/icomoon.svg';
import '../fonts/icomoon.ttf';
import '../fonts/icomoon.woff';


class Product extends Component {
  render() {
    return (
      <div>
        <section>
        <article>
        <div className="contenido">
          <div className="portada">
            <img src="/src/images/img1.jpg" alt="portada"></img>
          </div>
          <div className="informacion">
            <div className="titulo">
              <h3>Westeros Custom Clothing</h3>
              <p>Lorem ipsum </p>
            </div>
            <div className="tag-precio">
              <div className="type">
                <p>PSD template</p>
              </div>
              <div className="precio">
                <p>$14</p>
              </div>
            </div>
            <div className="creator">
              <div className="avatar">
                <img src="/src/images/icon.png" alt="avatar1"></img>
              </div>
              <div className="nombre">
                <p>John Snow <span className="icon-star-full"></span></p> 
              </div>
              <div className="ranking">
                <p><span className="ico"></span></p>
              </div>
            </div>
          </div>
        </div>
      </article>
        </section>
        
      </div>
    );
  }
}

export default Product;
