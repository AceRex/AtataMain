import React, { useState } from "react";
import { AllCatMenuItems } from "../../header/AllCateData";
import ItemsCarousel from "react-items-carousel";
import Link from "react-dom";
import styled from "styled-components";
import Header from "../../header/header";
import Card from "../../card/smallCard";
import Footer from "../../footer/footer";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

function TopCategory() {

 const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 40;
    return (
      <>
        <Container>
          
            <Tabs>
                <TabList>
                  
                  <div style={{ padding: `0 ${chevronWidth}px` }}>
                    <ItemsCarousel
                      requestToChangeActive={2}
                      activeItemIndex={0}
                      numberOfCards={7}
                      gutter={20}
                      leftChevron={<button>{"<"}</button>}
                      rightChevron={<button>{">"}</button>}
                      outsideChevron
                      chevronWidth={chevronWidth}
                    >
                      {this.state.map((items) => (
                      <Tab>{items.cate}</Tab>
          ))} 

                    </ItemsCarousel> 
                  </div>
                </TabList>

              {/*   */}
            </Tabs>
        </Container>
        <Header />
        <Footer />
      </>
    );
  } 
const Container = styled.div`
  margin-top: 10%;
  .contains {
    z-index: -2;
  }
  .react-tabs__tab--selected {
    background-color: var(--colorGreen);
  }
`;

const Head = styled.div`
  background-color: var(--colorGreen);
`;

export default TopCategory;
