import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router'






export default function ProductDetails() {
    let [singleproductdata, Setsingleproductdata] = useState(null)
    let [image,Setimage]= useState(null)
    let [galleryImg,Setgalleryimg]=useState([])


    console.log(singleproductdata)
    let { pid } = useParams()
    console.log(pid)




    useEffect(() => {
        let getsingleproduct = axios.get("https://wscubetech.co/ecommerce-api/productdetails.php",
            {
                params: {
                    id: pid

                }
            })

        getsingleproduct.then((res) => res.data).then((finalres) => {
            Setsingleproductdata(finalres.product)
            Setimage(finalres.product.multiple_images[0])
            Setgalleryimg(finalres.product.multiple_images)


        })

    }, [pid])



    return (


        <section className=" px-4 py-10 gap-10">

            {singleproductdata &&

                <div className='grid md:grid-cols-2 max-w-6xl gap-10 mx-auto'>

                    <div className="flex flex-col items-center">
                        <img src={image} alt="Product" className="rounded-xl shadow-lg" />
                        <div className="flex gap-3 mt-4">




                           <img src={galleryImg[0]} onClick={() => Setimage(galleryImg[0])} className="w-20 h-20 rounded-lg cursor-pointer border hover:border-blue-500 transition" />
                            <img src={galleryImg[1]} onClick={() => Setimage(galleryImg[1])} className="w-20 h-20 rounded-lg cursor-pointer border hover:border-blue-500 transition" />
                            <img src={galleryImg[2]} onClick={() => Setimage(galleryImg[2])} className="w-20 h-20 rounded-lg cursor-pointer border hover:border-blue-500 transition" />
                        </div>
                    </div>

                    <div>
                        <h2 className="text-3xl font-semibold mb-3">{singleproductdata.name}</h2>
                        

                        <div className="flex items-center mb-4">
                            <span className="text-yellow-400 text-xl">★ ★ ★ ★ ☆</span>
                            <span className="ml-2 text-sm text-gray-500">(142 Reviews)</span>
                        </div>

                        <div className="text-3xl font-bold text-blue-600 mb-4">{singleproductdata.price}<span className="text-gray-400 line-through text-xl">₹999</span></div>

                        

                        <div className="mt-8">
                            <h3 className="text-xl font-semibold mb-2">Product Description</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {singleproductdata.description}
                            </p>
                        </div>
                    </div>

                </div>




            }


        </section>



    )
}


