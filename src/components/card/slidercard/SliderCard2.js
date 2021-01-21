import React from "react";
import AliceCarousel from "react-alice-carousel";
import styled from "styled-components";
import "../card-style.css";
import Img1 from "../../Image/ghana.jpg";
import Img2 from "../../Image/naijaWire.jpg";
import Img3 from "../../Image/ankaraSuit.jpg";
import Img4 from "../../Image/Ankarasneaker.jpg";
import Img5 from "../../Image/femaleShoes.jpg";

function SlideCard(props) {
  return (
    <CardSlide>
      <div className="ImgContainer">
        <img src={props.img} />
      </div>
      <div className="details">
        <div className="ItemTitle">{props.title}</div>
        <div className="ItemAmount">
        ₦{props.amount1} - ₦{props.amount2}
        </div>
        <div className="MOQ">
            <p>MOQ: {props.MOQ}</p>
        </div>
      </div>
    </CardSlide>
  );
}

export default class CardSlider extends React.Component {
  onSlideChange(e) {
    console.log("Item`s position during a change: ", e.item);
    console.log("Slide`s position during a change: ", e.slide);
  }

  onSlideChanged(e) {
    console.log("Item`s position after changes: ", e.item);
    console.log("Slide`s position after changes: ", e.slide);
  }

  render() {
    const responsive = {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1024: {
        items: 4,
      },
    };

    return (
      <AliceCarousel
        duration={400}
        autoPlay={true}
        startIndex={0}
        fadeOutAnimation={true}
        mouseDragEnabled={true}
        playButtonEnabled={true}
        responsive={responsive}
        autoPlayInterval={2000}
        autoPlayDirection="ltr"
        autoPlayActionDisabled={true}
        onSlideChange={this.onSlideChange}
        onSlideChanged={this.onSlideChanged}
      >
        <SlideCard
          img={Img1}
          title="Ghana Kante Ankara"
          amount1="5000"
          amount2="15,000"
          MOQ='5 pieces'
        />
        <SlideCard
          img={Img2}
          title="Original Nigeria wire"
          amount1="200"
          amount2="1500"
          MOQ='5 pieces'
        />
        <SlideCard img={Img3} title="Ankara Suit" amount1="5000" amount2="20000" MOQ='5 pieces' />
        <SlideCard img={Img5} title="Female Ankara Shoes" amount1="700" amount2="2000"  MOQ='5 pieces'/>
        <SlideCard
          img={Img4}
          title="Ankara Sneakers"
          amount1="600"
          amount2="1000"
          MOQ='5 pieces'
        />
        <SlideCard
          img={Img4}
          title="Ankara Sneakers"
          amount1="600"
          amount2="1000"
          MOQ='5 pieces'
        />
        <SlideCard
          img={Img3}
          title="Ankara Sneakers"
          amount1="600"
          amount2="1000"
          MOQ='5 pieces'
        />
        <SlideCard
          img={Img2}
          title="Ankara Sneakers"
          amount1="600"
          amount2="1000"
          MOQ='5 pieces'
        />
        <SlideCard
          img={Img1}
          title="Ankara Sneakers"
          amount1="600"
          amount2="1000"
          MOQ='5 pieces'
        />
        <SlideCard
          img={Img5}
          title="Ankara Sneakers"
          amount1="600"
          amount2="1000"
          MOQ='5 pieces'
        />
        <SlideCard
          img={Img2}
          title="Ankara Sneakers"
          amount1="600"
          amount2="1000"
          MOQ='5 pieces'
        />
        
      </AliceCarousel>
    );
  }
}

const CardSlide = styled.div`
  width: 97%;
  height: 250px;
  background-color: var(--colorWhite);
  border-radius: 5px;

  .ImgContainer {
    width: 200px;
    height: 180px;
    margin: auto;
    overflow: hidden;
    img {
      width: 180px;
      height: 180px;
    }
  }
  .details {
    width: 90%;
    margin: auto;
    text-align: center;
    .ItemTitle {
      height: 20px;
      overflow: hidden;
      font-size: 14px;
    }
    .ItemAmount {
      font-size: 18px;
      font-weight: bold;
    }
    .MOQ{
        font-size: 13px;
        padding: 3px 0 0 0 ;
    }
  }
`;
