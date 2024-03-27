import React, { useContext } from "react";
import { ShopContext } from "../context/shopContext";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import RelatedProduct from "./RelatedProduct";

const ProductInfo = () => {
  const { allProducts, addToCart } = useContext(ShopContext);
  const { productID } = useParams();

  const product = allProducts.find((e) => e.id === Number(productID));

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    swipeToSlide: true,
    touchMove: true,
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <Navbar />
      <section className="container mx-auto px-4 my-24">
        <div className="lg:grid lg:grid-cols-2 lg:gap-10">
          {/* Image gallery */}
          <div>
            <Slider {...sliderSettings}>
              {Object.values(product.carousel).map((img, index) => (
                <div key={index}>
                  <img
                    src={img}
                    alt={`Slide ${index + 1}`}
                    className="w-full rounded-lg"
                  />
                </div>
              ))}
            </Slider>
          </div>
          {/* Description */}
          <div className="lg:px-5">
            <h2 className="pt-3 text-2xl font-bold">{product.name}</h2>
            <p className="mt-4 text-4xl font-bold">
              ${product.mrp - product.discount}{" "}
              {product.discount > 0 && (
                <span className="text-xs text-gray-400 line-through">
                  ${product.mrp}
                </span>
              )}
            </p>
            <p className="pt-5 text-lg leading-8 text-gray-800">
              {product.discription}
            </p>
            <div className="mt-6 flex items-center">
              <button
                onClick={() => {
                  addToCart(product.id);
                }}
                className="flex mr-4 px-6 py-2 uppercase rounded-full bg-white hover:bg-black hover:text-white outline"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Additional Information */}
      <section className="container mx-auto px-4 my-24">
        <div className="lg:px-5">
          <h3 className="text-xl font-bold text-gray-800">Use Case:</h3>
          <p className="pt-2 text-lg leading-8 text-gray-800">
            {product.useCase}
          </p>
          <h3 className="pt-5 text-xl font-bold text-gray-800">
            Side Effects:
          </h3>
          <p className="pt-2 text-lg leading-8 text-gray-800">
            {product.sideEffect}
          </p>
          <h3 className="pt-5 text-xl font-bold text-gray-800">How to Use:</h3>
          <p className="pt-2 text-lg leading-8 text-gray-800">
            {product.howToUse}
          </p>
          <h3 className="pt-5 text-xl font-bold text-gray-800">
            Salt Composition:
          </h3>
          <p className="pt-2 text-lg leading-8 text-gray-800">
            {product.saltComposition}
          </p>
          <h3 className="pt-5 text-xl font-bold text-gray-800">Storage:</h3>
          <p className="pt-2 text-lg leading-8 text-gray-800">
            {product.storage}
          </p>
        </div>
      </section>
      <RelatedProduct />
      <Footer />
    </div>
  );
};

export default ProductInfo;
