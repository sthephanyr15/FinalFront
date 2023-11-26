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
      editedDescription: this.props.description,
      editedPrice: this.props.price,
      editedCreatorName: this.props.creator.name,
      editedStars: new Set(),
    };
  };

  toggleEdit = () => {
    this.setState((prevState) => ({
      isEditing: !prevState.isEditing,
      editedName: this.props.name,
    }));
  };

  handleNameChange = (event) => {
    this.setState({ editedName: event.target.value });
  };

  handleDescriptionChange = (event) => {
    this.setState({ editedDescription: event.target.value });
  };

  handlePriceChange = (event) => {
    const inputValue = event.target.value;
    if (/^\d*$/.test(inputValue)) {
      this.setState({ editedPrice: inputValue });
    };
  };

  handleCreatorNameChange = (event) => {
    this.setState({ editedCreatorName: event.target.value });
  };

  saveEdit = () => {
    this.props.editProduct(this.props.id, this.state.editedName);
    if (this.state.isEditing) {
      const updatedStars = new Set(this.state.editedStars);
      this.setState({ isEditing: false, editedStars: updatedStars });
    } else {
      this.setState({ isEditing: false });
    };
  };

  cancelEdit = () => {
    this.setState({ isEditing: false, temporaryName: this.props.name });
  };

  handleStarClick = (index) => {
    if (this.state.isEditing) {
      const editedStars = new Set(this.state.editedStars);

      if (editedStars.has(index)) {
        editedStars.delete(index);
      } else {
        editedStars.add(index);
      };
      this.setState({ editedStars });
    };
  };

  render() {
    const { image, name, description, type, price, creator, isAdmin } = this.props;


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
                        <button className="save" onClick={this.saveEdit}>
                          Save
                        </button>
                        <button className="cancel" onClick={this.cancelEdit}>
                          Cancel
                        </button>
                      </>
                    )}
                  </div>
                )}
                 <div className="portada" style={{ backgroundImage: `url(${image})` }}></div>

              </div>
              <div className="informacion">
                <div className="titulo">
                  {this.state.isEditing ? (
                    <>
                      <input
                        type="text"
                        value={this.state.editedName}
                        onChange={this.handleNameChange}
                      />
                      <input
                        type="text"
                        value={this.state.editedDescription}
                        onChange={this.handleDescriptionChange}
                      />
                    </>
                  ) : (
                    <>
                      <h3>{this.state.editedName}</h3>
                      <p>{this.state.editedDescription}</p>
                    </>
                  )}
                </div>
                <div className="tag-precio">
                  <div className="type">
                    <p>{type}</p>
                  </div>
                  {this.state.isEditing ? (
                    <input
                      type="text"
                      value={this.state.editedPrice}
                      onChange={this.handlePriceChange}
                    />
                  ) : (
                    <div className="precio">
                      <p>${this.state.editedPrice}</p>
                    </div>
                  )}
                </div>
                <div className="creator">
                  <div className="avatar">
                    <img src={creator.avatar} alt="avatar"></img>
                  </div>
                  {this.state.isEditing ? (
                    <input
                      type="text"
                      value={this.state.editedCreatorName}
                      onChange={this.handleCreatorNameChange}
                    />
                  ) : (
                    <div className="nombre">
                      <p>{this.state.editedCreatorName}</p>
                    </div>
                  )
                  }
                  <div className="ranking">
                  <p>
                    {[0, 1, 2, 3, 4].map((index) => (
                      <span
                        key={index}
                        className={`icon-star-full ${this.state.editedStars.has(index) ? 'active' : ''}`}
                        onClick={() => this.handleStarClick(index)}
                      ></span>
                    ))}
                  </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  };
};

export default Product;
