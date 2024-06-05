import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useState, useEffect } from "react";
import classNames from "classnames";

function App() {
  const gallery = {
    img1: "1.jpg",
    img2: "2.jpg",
    img3: "3.jpg",
    img4: "4.jpg",
    img5: "5.jpg",
    img6: "6.jpg",
    img7: "7.jpg",
    img8: "8.jpg",
    img9: "9.jpg",
    img10: "10.jpg",
    img11: "11.jpg",
    img12: "12.jpg",
    img13: "13.jpg",
    img14: "14.jpg",
    img15: "15.jpg",
    img16: "16.jpg",
    img17: "17.jpg",
    img18: "18.jpg",
    img19: "19.jpg",
    img20: "20.jpg",
    img21: "21.jpg",
    img22: "22.jpg",
    img23: "23.jpg",
    img24: "24.jpg",
    img25: "25.jpg",
  };

  const [selectedImage, setSelectedImage] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (selectedImage) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [selectedImage]);

  return (
    <section className="m-10 xl:mx-52 my-20">
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="2rem">
          {Object.values(gallery).map((img, index) => (
            <img
              onClick={() => setSelectedImage(img)}
              key={index}
              src={img}
              alt="gallery"
              className="cursor-pointer transition-transform duration-300 "
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>

      {selectedImage && (
        <div
          className={classNames(
            "fixed inset-0 flex items-center justify-center z-50 bg-black backdrop-blur-xl bg-opacity-50 transition-opacity duration-300",
            {
              "opacity-0": !isVisible,
              "opacity-100": isVisible,
            }
          )}
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="p-5 rounded shadow-lg w-full h-full flex flex-col-reverse justify-center items-center cursor-pointer transition-transform duration-300 transform scale-100"
            onClick={() => setSelectedImage(null)}
          >
            <img
              className="w-full h-auto object-contain md:max-w-[790px] sm:max-h-[790px]"
              src={selectedImage}
              alt="selected"
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default App;
