import Introvideo from "./components/Introvideo";
import Section from "./components/section";
import Footer from "./components/Footer";
import Misc from "./components/Misc"

import image from "./assets/academy.png";
import image2 from "./assets/story.png";
import image3 from "./assets/in-the-news.gif";
import image4 from "./assets/franchise.gif";
import image5 from "./assets/locations.png";
import image6 from "./assets/image2.png";
import image7 from "./assets/mba-cares.gif";
import image8 from "./assets/image1.png";
import image9 from "./assets/image3.png";
import data from "./data/data.json";


import "./styles/app.scss";
import "./styles/intro.scss";
import "./styles/section.scss";
import "./styles/footer.scss";
import './styles/misc.scss';
import './styles/mediaQuery.scss';
import { useEffect } from "react";

const yellow = "#fff100",
  pink = "#ed1e79",
  white = "#fff",
  brown = "#6d3d0f";

function App() {
  const { freshTopic, freshTopic2, tedTalks, franchise, map, courses, album, barat, chaiwala } = data;
  
  const dotclick = (e)=>{
    const cursor = document.querySelector(".cursor");
    cursor.style.top = `${e.pageY-14}px`
    cursor.style.left = `${e.pageX-14}px`

    const element = e.target;
    if (element.getAttribute("data-cursorpointer")) {
      cursor.classList.add("cursorHover")
    }
    else if (element.getAttribute("data-cursorpointermini")) {
      cursor.classList.add("cursorHoverMini")
      }
    else {
      cursor.classList.remove("cursorHover")
      cursor.classList.remove("cursorHoverMini")
    }
  }
   useEffect(() => {
     
    window.addEventListener("mousemove",dotclick);
   
     return () => {
    window.addEventListener("mousemove",dotclick);
       
     }
   }, [])
   
  
  return (
    <>
      <Introvideo />

      {/* freshTopic 1 */}
      <Section
        h3={freshTopic.heading}
        p={freshTopic.text}
        btntxt={freshTopic.btn}
        imgsrc={image}
        backgroundColor={pink}
        headingColor={yellow}
        textColor={yellow}
        btnbgcolor={yellow}
        btncolor={pink}
      />

      {/* freshTopic 2 */}
      <Section
        h3={freshTopic2.heading}
        p={freshTopic2.text}
        btntxt={freshTopic2.btn}
        imgsrc={image2}
        backgroundColor={pink}
        headingColor={yellow}
        textColor={yellow}
        btnbgcolor={yellow}
        btncolor={pink}
      />

      {/* tedtalks  */}
      <Section
        h3={tedTalks.heading}
        p={tedTalks.text}
        btntxt={tedTalks.btn}
        imgsrc={image3}
        backgroundColor={yellow}
        headingColor={pink}
        textColor={pink}
        btnbgcolor={pink}
        btncolor={yellow}
      />

      {/* franchise  */}
      <Section
        h3={franchise.heading}
        p={franchise.text}
        btntxt={franchise.btn}
        imgsrc={image4}
        backgroundColor={white}
        headingColor={pink}
        textColor={brown}
        btnbgcolor={brown}
        btncolor={yellow}
      />

      {/* map  */}
      <Section
        h3={map.heading}
        p={map.text}
        imgsrc={image5}
        backgroundColor={pink}
        headingColor={yellow}
        textColor={yellow}
        hasbtn={false}
      />

      {/* courses  */}
      <Section
        h3={courses.heading}
        p={courses.text}
        btntxt={courses.btn}
        imgsrc={image6}
        imgsize={"30%"}
        backgroundColor={yellow}
        headingColor={pink}
        textColor={pink}
        btnbgcolor={pink}
        btncolor={yellow}
      />

      {/* album  */}
      <Section
        h3={album.heading}
        p={album.text}
        btntxt={album.btn}
        imgsrc={image7}
        backgroundColor={white}
        headingColor={pink}
        textColor={brown}
        btnbgcolor={brown}
        btncolor={yellow}
      />

      {/* barat */}
      <Section
        h3={barat.heading}
        p={barat.text}
        btntxt={barat.btn}
        imgsrc={image8}
        backgroundColor={pink}
        headingColor={yellow}
        textColor={yellow}
        btnbgcolor={yellow}
        btncolor={pink}
      />

      {/* chaiwala  */}
      <Section
        h3={chaiwala.heading}
        p={chaiwala.text}
        btntxt={chaiwala.btn}
        imgsrc={image9}
        backgroundColor={white}
        headingColor={pink}
        textColor={brown}
        btnbgcolor={brown}
        btncolor={yellow}
      />

      <Footer />
      <Misc />
    </>
  );
}

export default App;
