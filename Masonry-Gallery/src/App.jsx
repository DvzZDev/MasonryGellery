import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useState, useEffect } from "react";
import classNames from "classnames";

function App() {
  const gallery = {
    img1: "/public/1.jpg",
    img2: "/public/2.jpg",
    img3: "/public/3.jpg",
    img4: "/public/4.jpg",
    img5: "/public/5.jpg",
    img6: "/public/6.jpg",
    img7: "/public/7.jpg",
    img8: "/public/8.jpg",
    img9: "/public/9.jpg",
    img10: "/public/10.jpg",
    img11: "/public/11.jpg",
    img12: "/public/12.jpg",
    img13: "/public/13.jpg",
    img14: "/public/14.jpg",
    img15: "/public/15.jpg",
    img16: "/public/16.jpg",
    img17: "/public/17.jpg",
    img18: "/public/18.jpg",
    img19: "/public/19.jpg",
    img20: "/public/20.jpg",
    img21: "/public/21.jpg",
    img22: "/public/22.jpg",
    img23: "/public/23.jpg",
    img24: "/public/24.jpg",
    img25: "/public/25.jpg",
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
        <Masonry gutter={30}>
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
