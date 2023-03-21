import React from "react";
import "./Products.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BsCart } from "react-icons/bs";

const Products = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <div className="product-category-section">
      <h2>Best Selling Products on SnackSutra</h2>
      <div className="img-extra">
        <div className="imgsss">
          <img className="img-1" src="./images/cloves.png" alt="cloves" />
        </div>
        <div className="imgsss">
          <img className="img-2" src="./images/wavegrey.png" alt="wavegrey" />
        </div>
        <div className="imgsss">
          <img className="img-3" src="./images/clove2.png" alt="cloves2" />
        </div>
      </div>

      {/* <div className="Product-Crowsel"> */}
      <Carousel responsive={responsive}>
        <div className="product">
          <img src="../images/chips1.png" alt="img" />
          <div className="product-details">
            <small className="weight">70GM</small>
            <h5>Himalyan Pink salt</h5>
            <div className="price">
              <p className="priceee"> $599.00 </p>{" "}
              <div className="rating-box">
                <div className="star-rating">
                  <input type="radio" id="5-stars" name="rating"  />
                  <label htmlFor="5-stars" className="star">
                    &#9733;
                  </label>
                  <input type="radio" id="4-stars" name="rating"  />
                  <label htmlFor="4-stars" className="star">
                    &#9733;
                  </label>
                  <input type="radio" id="3-stars" name="rating"  />
                  <label htmlFor="3-stars" className="star">
                    &#9733;
                  </label>
                  <input type="radio" id="2-stars" name="rating"  />
                  <label htmlFor="2-stars" className="star">
                    &#9733;
                  </label>
                  <input type="radio" id="1-star" name="rating"  />
                  <label htmlFor="1-star" className="star">
                    &#9733;
                  </label>
                </div>
                <small id="review">&#40;47 reviews&#41;</small>
              </div>
            </div>

            <button className="button-product">
              <BsCart className="icon-cart" />
              Add to Cart
            </button>
          </div>
        </div>

        {/* product 2 */}
        <div className="product">
          <img src="../images/chips2.png" alt="img" />
          <div className="product-details">
            <small className="weight">70GM</small>
            <h5>Himalyan Pink salt</h5>
            <div className="price">
              <p className="priceee"> $599.00 </p>{" "}
              <div className="rating-box">
                <div className="star-rating">
                  <input type="radio" id="5-stars" name="rating" />
                  <label htmlFor="5-stars" className="star">
                    &#9733;
                  </label>
                  <input type="radio" id="4-stars" name="rating" />
                  <label htmlFor="4-stars" className="star">
                    &#9733;
                  </label>
                  <input type="radio" id="3-stars" name="rating" />
                  <label htmlFor="3-stars" className="star">
                    &#9733;
                  </label>
                  <input type="radio" id="2-stars" name="rating" />
                  <label htmlFor="2-stars" className="star">
                    &#9733;
                  </label>
                  <input type="radio" id="1-star" name="rating" />
                  <label htmlFor="1-star" className="star">
                    &#9733;
                  </label>
                </div>
                <small id="review">&#40;47 reviews&#41;</small>
              </div>
            </div>

            <button className="button-product">
              <BsCart className="icon-cart" />
              Add to Cart
            </button>
          </div>
        </div>
        {/* product 3 */}
        <div className="product">
          <img src="../images/chips3.png" alt="img" />
          <div className="product-details">
            <small className="weight">70GM</small>
            <h5>Himalyan Pink salt</h5>
            <div className="price">
              <p className="priceee"> $599.00 </p>{" "}
              <div className="rating-box">
                <div className="star-rating">
                  <input type="radio" id="5-stars" name="rating" />
                  <label htmlFor="5-stars" className="star">
                    &#9733;
                  </label>
                  <input type="radio" id="4-stars" name="rating" />
                  <label htmlFor="4-stars" className="star">
                    &#9733;
                  </label>
                  <input type="radio" id="3-stars" name="rating" />
                  <label htmlFor="3-stars" className="star">
                    &#9733;
                  </label>
                  <input type="radio" id="2-stars" name="rating" />
                  <label htmlFor="2-stars" className="star">
                    &#9733;
                  </label>
                  <input type="radio" id="1-star" name="rating" />
                  <label htmlFor="1-star" className="star">
                    &#9733;
                  </label>
                </div>
                <small id="review">&#40;47 reviews&#41;</small>
              </div>
            </div>

            <button className="button-product">
              <BsCart className="icon-cart" />
              Add to Cart
            </button>
          </div>
        </div>

        <div className="product">
          <img src="../images/chips4.png" alt="img" />
          <div className="product-details">
            <small className="weight">70GM</small>
            <h5>Himalyan Pink salt</h5>
            <div className="price">
              <p className="priceee"> $599.00 </p>{" "}
              <div className="rating-box">
                <div className="star-rating">
                  <input type="radio" id="5-stars" name="rating" />
                  <label htmlFor="5-stars" className="star">
                    &#9733;
                  </label>
                  <input type="radio" id="4-stars" name="rating" />
                  <label htmlFor="4-stars" className="star">
                    &#9733;
                  </label>
                  <input type="radio" id="3-stars" name="rating" />
                  <label htmlFor="3-stars" className="star">
                    &#9733;
                  </label>
                  <input type="radio" id="2-stars" name="rating" />
                  <label htmlFor="2-stars" className="star">
                    &#9733;
                  </label>
                  <input type="radio" id="1-star" name="rating" />
                  <label htmlFor="1-star" className="star">
                    &#9733;
                  </label>
                </div>
                <small id="review">&#40;47 reviews&#41;</small>
              </div>
            </div>

            <button className="button-product">
              <BsCart className="icon-cart" />
              Add to Cart
            </button>
          </div>
        </div>
        <div className="product">
          <img src="../images/chips5.png" alt="img" />
          <div className="product-details">
            <small className="weight">70GM</small>
            <h5>Himalyan Pink salt</h5>
            <div className="price">
              <p className="priceee"> $599.00 </p>{" "}
              <div className="rating-box">
                <div className="star-rating">
                  <input type="radio" id="5-stars" name="rating"  />
                  <label htmlFor="5-stars" className="star">
                    &#9733;
                  </label>
                  <input type="radio" id="4-stars" name="rating"  />
                  <label htmlFor="4-stars" className="star">
                    &#9733;
                  </label>
                  <input type="radio" id="3-stars" name="rating"  />
                  <label htmlFor="3-stars" className="star">
                    &#9733;
                  </label>
                  <input type="radio" id="2-stars" name="rating"  />
                  <label htmlFor="2-stars" className="star">
                    &#9733;
                  </label>
                  <input type="radio" id="1-star" name="rating"  />
                  <label htmlFor="1-star" className="star">
                    &#9733;
                  </label>
                </div>
                <small id="review">&#40;47 reviews&#41;</small>
              </div>
            </div>

            <button className="button-product">
              <BsCart className="icon-cart" />
              Add to Cart
            </button>
          </div>
        </div>
        <div className="product">
          <img src="../images/chips6.png" alt="img" />
          <div className="product-details">
            <small className="weight">70GM</small>
            <h5>Himalyan Pink salt</h5>
            <div className="price">
              <p className="priceee"> $599.00 </p>{" "}
              <div className="rating-box">
                <div className="star-rating">
                  <input type="radio" id="5-stars" name="rating" />
                  <label htmlFor="5-stars" className="star">
                    &#9733;
                  </label>
                  <input type="radio" id="4-stars" name="rating" />
                  <label htmlFor="4-stars" className="star">
                    &#9733;
                  </label>
                  <input type="radio" id="3-stars" name="rating" />
                  <label htmlFor="3-stars" className="star">
                    &#9733;
                  </label>
                  <input type="radio" id="2-stars" name="rating" />
                  <label htmlFor="2-stars" className="star">
                    &#9733;
                  </label>
                  <input type="radio" id="1-star" name="rating" />
                  <label htmlFor="1-star" className="star">
                    &#9733;
                  </label>
                </div>
                <small id="review">&#40;47 reviews&#41;</small>
              </div>
            </div>

            <button className="button-product">
              <BsCart className="icon-cart" />
              Add to Cart
            </button>
          </div>
        </div>
        <div className="product">
          <img src="../images/chips7.png" alt="img" />
          <div className="product-details">
            <small className="weight">70GM</small>
            <h5>Himalyan Pink salt</h5>
            <div className="price">
              <p className="priceee"> $599.00 </p>{" "}
              <div className="rating-box">
                <div className="star-rating">
                  <input type="radio" id="5-stars" name="rating" />
                  <label htmlFor="5-stars" className="star">
                    &#9733;
                  </label>
                  <input type="radio" id="4-stars" name="rating" />
                  <label htmlFor="4-stars" className="star">
                    &#9733;
                  </label>
                  <input type="radio" id="3-stars" name="rating" />
                  <label htmlFor="3-stars" className="star">
                    &#9733;
                  </label>
                  <input type="radio" id="2-stars" name="rating" />
                  <label htmlFor="2-stars" className="star">
                    &#9733;
                  </label>
                  <input type="radio" id="1-star" name="rating" />
                  <label htmlFor="1-star" className="star">
                    &#9733;
                  </label>
                </div>
                <small id="review">&#40;47 reviews&#41;</small>
              </div>
            </div>

            <button className="button-product">
              <BsCart className="icon-cart" />
              Add to Cart
            </button>
          </div>
        </div>
        <div className="product">
          <img src="../images/chips8.png" alt="img" />
          <div className="product-details">
            <small className="weight">70GM</small>
            <h5>Himalyan Pink salt</h5>
            <div className="price">
              <p className="priceee"> $599.00 </p>{" "}
              <div className="rating-box">
                <div className="star-rating">
                  <input type="radio" id="5-stars" name="rating" />
                  <label htmlFor="5-stars" className="star">
                    &#9733;
                  </label>
                  <input type="radio" id="4-stars" name="rating" />
                  <label htmlFor="4-stars" className="star">
                    &#9733;
                  </label>
                  <input type="radio" id="3-stars" name="rating" />
                  <label htmlFor="3-stars" className="star">
                    &#9733;
                  </label>
                  <input type="radio" id="2-stars" name="rating" />
                  <label htmlFor="2-stars" className="star">
                    &#9733;
                  </label>
                  <input type="radio" id="1-star" name="rating" />
                  <label htmlFor="1-star" className="star">
                    &#9733;
                  </label>
                </div>
                <small id="review">&#40;47 reviews&#41;</small>
              </div>
            </div>

            <button className="button-product">
              <BsCart className="icon-cart" />
              Add to Cart
            </button>
          </div>
        </div>
      </Carousel>
      {/* </div> */}
    </div>
  );
};

export default Products;
