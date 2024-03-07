import React, { useContext } from "react";
import { ShopContext } from "../context/shopContext";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-rater/lib/react-rater.css";
import { FaShoppingCart } from "react-icons/fa";
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
      <section className="container mx-auto px-4 py-5 lg:grid lg:grid-cols-2 lg:py-10">
        {/* Image gallery */}
        <div>
          <Slider {...sliderSettings}>
            {Object.values(product.carousel).map((img, index) => (
              <div key={index}>
                <img src={img} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </Slider>
        </div>
        {/* Description */}
        <div className="mx-auto px-5 lg:px-10">
          <h2 className="pt-3 text-2xl font-bold lg:pt-0">{product.name}</h2>
          {/* Price */}
          <p className="mt-4 text-4xl font-bold text-violet-900">
            ${product.mrp - product.discount}{" "}
            {product.discount > 0 && (
              <span className="text-xs text-gray-400 line-through">
                ${product.mrp}
              </span>
            )}
          </p>
          {/* Description */}
          <p className="pt-5 text-sm leading-5 text-gray-500">
            {/* Add product description here */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          {/* Add to Cart button */}
          <div className="mt-6 flex items-center gap-6">
            <button
              onClick={() => {
                addToCart(product.id);
              }}
              className="flex h-12 w-1/3 items-center justify-center bg-violet-900 text-white duration-100 hover:bg-blue-800"
            >
              <FaShoppingCart />
              Add to Cart
            </button>
          </div>
        </div>
      </section>
      <RelatedProduct />
      <Footer />
    </div>
  );
};

export default ProductInfo;
