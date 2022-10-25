import "./styles.css";
import ImageSlider from "./ImageSlider";

export default function App() {
  const slides = [
    {
      url:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      title: "beach"
    },
    {
      url:
        "https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg",
      title: "boat"
    },
    {
      url:
        "https://www.whatsappimages.in/wp-content/uploads/2021/07/Top-HD-sad-quotes-for-whatsapp-status-in-hindi-Pics-Images-Download-Free.gif",
      title: "forest"
    },
    {
      url:
        "https://image.shutterstock.com/image-photo/high-mountain-morning-time-beautiful-260nw-1384588922.jpg",
      title: "city"
    },
    {
      url:
        "https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg",
      title: "italy"
    }
  ];
  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto"
  };
  return (
    <div className="App">
      <h1>Hello Carousel</h1>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
}
