import React, {Component} from 'react';
import img1 from "../Image/1.png";
import img2 from "../Image/2.png";
import img4 from "../Image/Computer.png";
import img5 from "../Image/clothe3.png";
import img6 from "../Image/machine1.png";
import styled from "styled-components";
import RemoveIcon from '@material-ui/icons/Remove';
import SvgIcon2 from '@material-ui/icons/Add';

import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import SvgIcon from '@material-ui/icons/Remove';

class AddToCart extends Component {
  constructor (props){
    super(props);
    this.state ={
      count: 0
    }
  }

  increment =( ) => {
    this.setState ({ count: this.state.count + 1 });
  }

  decrement =( ) => {
    this.setState ({ count: this.state.count - 1 });
  }
render (){
   return(
      <MyCard>
        <div className="d-flex mt-2 mb-2 px-2 CategoryTitle">
         <div className="CategoryName">
          <p>Atata Shopping Cart</p>
        </div>
            <hr />
      </div>
      <div className="group d-flex">
        
         <div className="card text-center">
        <div className="overflow">
        <img src= {img1} alt="Image1" className="card-img-top" />
        </div>        
        <div className="card-body text-dark">
        <p className="card-text text-secondary">Black Shoe leather</p>
        <p className="text-primary"><b>$20.00</b> </p>
         <a href="#" className="btn btn-success">Add Cart</a>

        </div>
        <div className="counter" >
        <SvgIcon onClick={this.decrement} ></SvgIcon>
        <span>{this.state.count}</span>
        <SvgIcon2 onClick={this.increment} ></SvgIcon2>
         
        </div>
        </div>

        <div className="card text-center">
        <div className="overflow">
        <img src= {img2} alt="Image1" className="card-img-top" />
        </div>        
        <div className="card-body text-dark">
        
        <p className="card-text text-secondary">Black Shoe leather</p>
        <p className="text-primary"><b>$20.00</b> </p>
         <a href="#" className="btn btn-success">Add Cart</a>
        </div>
        </div>
        <div className="card text-center">
        <div className="overflow">
        <img src= {img4} alt="Image1" className="card-img-top" />
        </div>        
        <div className="card-body text-dark">
        
        <p className="card-text text-secondary">Black Shoe leather</p>
        <p className="text-primary"><b>$20.00</b> </p>
        
        <a href="#" className="btn btn-success">Add Cart</a>
        </div>
        </div>
        
      </div>
        
        </MyCard>
    );
   
}
  }
const MyCard = styled.div`

width:97%;
background:radial-gradient red;
padding:15px 10px;

.body{
  background:radial-gradient red;
}
.counter{
  
  display: flex;
  background-color: rgb(0, 158, 127);
  color: rgb(255, 255, 255);
  font-size: 15px;
  font-weight: 700;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  flex-shrink: 0;
  width: 104px;
  height: 36px;
  border-radius: 100px;
  overflow: hidden;
}

.card{
  width: 15rem; 
  padding:10px 5px;
 /** box-shadow: 5px 5px 0px 0px #363636;**/
  }
  
hr{
  width:80%;
  border: solid 5px var(--colorAsh);
}
.group{
  padding:5px 10px ;
  margin: 10px;
}
.flex{
  dislay: flex;
  justify-content: space-between;

}
.card:hover{
  box-shadow: 5px 10px 20px 1px #363636 !important;
}

  .card-container {
     box-shadow: 0px 4px 8px 0px rgba(196, 67, 67, 0.2);
     margin:10px;
     padding: 20px 5px;

      /* Card look */
      transition: 0.3s;
      background-color: green;
       border-left: 5px solid #5f37ff;
      /* Blue left border */
    }
    .title {
      color: var(--colorBlack);
      font-family: "Muli", sans-serif;
      font-size: 16px;
      margin: 0 3px;
    .card-img-top{
        transform: scale(1);
    }
    .card-img-top:hover{
      padding:10px 5px;
        transform: scale(1.5);
    }
  .overflow{
      overflow: hidden;
  }
    .card-container:hover {
      box-shadow: 16px 0px rgba(0, 0, 0, 0.2);
    }
.card-body{
padding:10px 0!important;
}
.container-fluid-row{
  padding-top:6rem;
  padding-left:40px;
}

`;
export default AddToCart;
