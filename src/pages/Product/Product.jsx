import React, { Component } from "react";
import './product.css';
import '../../fonts/icomoon.css';
import '../../fonts/icomoon.eot';
import '../../fonts/icomoon.svg';
import '../../fonts/icomoon.ttf';
import '../../fonts/icomoon.woff';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      editedName: this.props.name,
      temporaryName: this.props.name,
    };
  }

  toggleEdit = () => {
    this.setState((prevState) => ({
      isEditing: !prevState.isEditing,
      editedName: this.props.name,
      temporaryName: this.props.name,
    }));
  };

  handleNameChange = (event) => {
    this.setState({ editedName: event.target.value });
  };

  saveEdit = () => {
    this.props.editProduct(this.props.id, this.state.temporaryName);
    this.setState({ isEditing: false });
  };

  cancelEdit = () => {
    this.setState({ isEditing: false, temporaryName: this.props.name });
  }
  render() {
    const { image, name, description, type, price, creator, isAdmin  } = this.props;


    return (
      <div>
      <div className="contenedor">
        <article>
          <div className="contenido">
            <div className="portada">
              {isAdmin && (
                <div className="product-buttons">
                  {!this.state.isEditing && (
                    <button className="edit" onClick={this.toggleEdit}>
                      Edit
                    </button>
                  )}
                  {this.state.isEditing && (
                    <>
                      <input
                        type="text"
                        value={this.state.editedName}
                        onChange={this.handleNameChange}
                      />
                      <button className="save" onClick={this.saveEdit}>
                        Save
                      </button>
                      <button className="cancel" onClick={this.toggleEdit}>
                        Cancel
                      </button>
                    </>
                  )}
                </div>
              )}
              <img src={image} alt="portada" />
            </div>
            <div className="informacion">
              <div className="titulo">
                {this.state.isEditing ? (
                  <h3>{this.props.temporaryName}</h3>  
                ) : (
                  <h3>{this.props.name}</h3>
                )
                }
                    <p>{description}</p>
              </div>
                <div className="tag-precio">
                  <div className="type">
                    <p>{type}</p>
                  </div>
                  <div className="precio">
                    <p>${price}</p>
                  </div>
                </div>
                <div className="creator">
                  <div className="avatar">
                    <img src={creator.avatar} alt="avatar"></img>
                  </div>
                  <div className="nombre">
                    <p>{creator.name}</p>
                  </div>
                  <div className="ranking">
                    <p>
                      <span className="icon-star-full"></span>
                      <span className="icon-star-full"></span>
                      <span className="icon-star-full"></span>
                      <span className="icon-star-full"></span>
                      <span className="icon-star-full"></span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }
}

export default Product;
