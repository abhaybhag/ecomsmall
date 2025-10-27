import React, { use, useContext, useState } from 'react'
import Header from '../common/Header'
import { FaMinus, FaYoutube } from "react-icons/fa";
import { Products } from '../common/products';
import { FaHeart, FaStar, FaPlus } from "react-icons/fa";
import Footer from '../common/Footer';
import Button from '../common/Button';
import { faqItems } from '../common/Faqdata';
import FaqComp from './FaqComp';
import Model from '../common/Model';
import Productmyntra from '../common/Productmyntra';
import { contextApi } from '../compoents/MainContext';
import { Link } from 'react-router'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import image1 from '../assets/images/banner1.png'
import image2 from '../assets/images/banner2.png'
import image3 from '../assets/images/banner3.png'







//hooks- hook is prebuild function that are used for changing data,styling,dom tasks.






export default function Home() {



    let { cart,
        setcart,
        categorydata,
        Setcategorydata,
        productdata,
        Setproductdata,
        sortval,
        Setsortval,
        rateval,
        Setrateval,
        loader,
        Setloader,
        categoryFilter,
        SetcategoryFilter,
        productPrice,
        SetproductPrice,
        currentPage,
        SetcurrentPage,
        totalPages,
        Settotalpages,
        discount,
        Setdiscount,
        brandcategorydata,
        Setbrandcategorydata,


    } = useContext(contextApi)

var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

    return (
        <>




       <section>
                <Slider {...settings}>
      <div className='w-[100%]'>
        <img src={image1} alt="" className='w-[100%]' />
      </div>
      <div className='w-[100%]'>
        <img className='w-[100%]' src={image2} alt="" />
      </div>
      <div className='w-[100%]'>
        <img  className='w-[100%]' src={image3} alt="" />
      </div>
      
    </Slider>
               
            </section>

            <section className="categories my-8 p-3">
                <div className="max-w-[1320px] mx-auto grid gap-4 grid-cols-1 lg:grid-cols-3">
                    <Link to="/products">
                    <div className="relative overflow-hidden rounded-lg shadow-lg">
                        <img
                            src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80"
                            alt="Kitchen Accessory"
                            className="w-full h-56 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 flex items-end p-4">
                            <div>
                                <h3 className="text-white text-xl font-bold">Kitchen Accessory</h3>
                                <button className="mt-2 bg-white text-black px-3 py-1 rounded">Shop</button>
                            </div>
                        </div>
                    </div>
                    </Link>

                    <Link to="/products">

                    <div className="relative overflow-hidden rounded-lg shadow-lg">
                        <img
                            src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80"
                            alt="Fragrance"
                            className="w-full h-56 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 flex items-end p-4">
                            <div>
                                <h3 className="text-white text-xl font-bold">Fragrance</h3>
                                <button className="mt-2 bg-white text-black px-3 py-1 rounded">Shop</button>
                            </div>
                        </div>
                    </div>
                    </Link>
                    <Link to="/products">

                    <div className="relative overflow-hidden rounded-lg shadow-lg">
                        <img
                            src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&q=80"
                            alt="Laptop"
                            className="w-full h-56 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 flex items-end p-4">
                            <div>
                                <h3 className="text-white text-xl font-bold">Laptop</h3>
                                <button className="mt-2 bg-white text-black px-3 py-1 rounded">Shop</button>
                            </div>
                        </div>
                    </div>
                    </Link>
                </div>
            </section>



            <Productmyntra />

            {/* <FaqComp /> */}






















        </>
    )
}

function ProductEcomlist({ data }) {

    let { title, image, price, id } = data

    return (

        <div className="productItems shadow-sm justify-center relative p-4">

            <FaHeart style={{ color: "red", position: "absolute", top: "10px", right: "10px" }} />

            <img src={image} alt="" className='object-cover w-[100%]' />

            <h3 className='text-[16px] font-bold capitalize px-2'>{title}</h3>
            <h4 className='text-[14px] px-2'>{price}</h4>
            <div className="cartDiv flex justify-between px-2 items-center py-2">
                <div className="starDiv flex text-[red]">
                    <FaStar />
                    <FaStar />
                    <FaStar />

                    <FaStar />

                    <FaStar />


                </div>
                <Button buttontext={"Add"} />


            </div>
        </div>
    )

}





