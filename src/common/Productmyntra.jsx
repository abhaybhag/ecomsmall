import axios, { Axios } from 'axios'
import React, { useContext } from 'react'
import { useEffect } from 'react'
import Loader from './Loader'
import ResponsivePagination from 'react-responsive-pagination';
import { Link } from 'react-router'
import { contextApi } from '../compoents/MainContext';



let Productmyntra = () => {

  let {
    categorydata,
    Setcategorydata,
    productdata,
    Setproductdata,
    brandcategory,
    Setbrandcategory,
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
    cart,
    Setcart
  } = useContext(contextApi)

  console.log(cart)



  let brandcategoryfunc = () => {
    let getbrandapidata = axios.get("https://wscubetech.co/ecommerce-api/brands.php")

    getbrandapidata.then((res) => {
      return res.data
    }).then((finalres) => {
      Setbrandcategory(finalres.data)
      console.log(finalres.data)


    })





  }


  let fetchapi = () => {

    let getapidate = axios.get("https://wscubetech.co/ecommerce-api/categories.php")

    getapidate.then((res) => {
      //axis data key

      return res.data
    }).then((data) => {
      Setcategorydata(data.data)



    })

  }

  console.log(productPrice[0])
  let fetchproductdata = () => {
    Setloader(true)

    let getapidataproduct = axios.get("https://wscubetech.co/ecommerce-api/products.php", {
      params: {
        page: currentPage,
        limit: 12,
        categories: categoryFilter.join(","),
        brands: brandcategorydata.join(","),
        price_from: productPrice[0],
        price_to: productPrice[1],
        discount_from: discount[0],
        discount_to: discount[1],
        rating: rateval,
        sorting: sortval

      }

    })

    getapidataproduct.then((res) => {
      return res.data
    }).then((finaldata) => {

      Setproductdata(finaldata.data)
      console.log(finaldata.data)
      Setloader(false)
      Settotalpages(finaldata.total_pages)
      console.log(currentPage)





    })

  }

  useEffect(() => {

    fetchapi()
    brandcategoryfunc()
    fetchproductdata()

  }, [])


  useEffect(() => {

    fetchproductdata()


  }, [sortval, rateval, categoryFilter, currentPage, productPrice, discount, brandcategorydata, cart])


  return (

    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="flex flex-col md:flex-row gap-6">

          <aside className="md:basis-[50%] basis-[100%] bg-white p-4 rounded-lg">
            <h3 className="font-semibold mb-3">Filters</h3>


            <div className="mb-4 shadow-sm bg-white rounded-2 pb-2 pl-2 overflow-y-scroll h-80 ">
              <label className="block text-sm mb-2">category</label>
              {


                categorydata.map((products, index) => {
                  return (

                    <div className="flex flex-col gap-1 text-sm" key={index} >
                      <label><input type="checkbox" value={products.slug} onChange={(e) => {
                        if (e.target.checked && !categoryFilter.includes(e.target.value)) {

                          let copydata = [...categoryFilter, e.target.value];
                          SetcategoryFilter(copydata)
                        }
                        else {

                          SetcategoryFilter(categoryFilter.filter((value) => value != e.target.value))


                        }

                      }


                      } className="mr-2" />{products.name}</label>

                    </div>

                  )
                })}






            </div>
            <div className="mb-4 shadow-sm bg-white rounded-2 pl-2 overflow-y-scroll h-80">
              <label className="block text-sm mb-2">Brand</label>
              {


                brandcategory.map((brands, index) => {

                  return (

                    <div className="flex flex-col gap-1 text-sm" key={index}>
                      <label><input type="checkbox" className="mr-2" value={brands.slug} onChange={(e) => {

                        if (e.target.checked && !brandcategorydata.includes(e.target.value)) {

                          let copydata = [...brandcategorydata, e.target.value]
                          Setbrandcategorydata(copydata)



                        }
                        else {

                          Setbrandcategorydata(brandcategorydata.filter((value, i) => value !== e.target.value))



                        }

                      }

                      } />{brands.name}</label>

                    </div>


                  )


                })}







            </div>

            <div className="mb-4 shadow-sm bg-white rounded-2 pl-2 overflow-y-scroll h-50">
              <label className="block text-sm mb-2">Price</label>

              <div className="flex flex-col gap-1 text-sm">
                <label onClick={(e) => SetproductPrice([10, 250])}><input type="radio" name='price' className="mr-2" />Rs. 10 to Rs. 250</label>

                <label onClick={(e) => SetproductPrice([250, 500])}><input type="radio" name='price' className="mr-2" />Rs. 250 to Rs. 500</label>
                <label onClick={(e) => SetproductPrice([500, 1000])}><input type="radio" name='price' className="mr-2" />Rs. 500 to Rs. 1000</label>
                <label onClick={(e) => SetproductPrice([1000, 10000])}><input type="radio" name='price' className="mr-2" />Rs. 1000 to Above</label>




              </div>
              {/* {


                brandcategory.map((brands, index) => {
                  return (

                    <div className="flex flex-col gap-1 text-sm" key={index}>
                      <label><input type="checkbox" className="mr-2" />{brands.name}</label>

                    </div>

                  )
                })} */}






            </div>

            <div className="mb-4 shadow-sm bg-white rounded-2 pl-2 overflow-y-scroll h-50">
              <label className="block text-sm mb-2">Rating</label>

              <div className="flex flex-col gap-1 text-sm" >
                <label onClick={(e) => Setrateval(4)}><input type="radio" name="radio" className="mr-2" />4★ & above</label>

                <label onClick={(e) => Setrateval(3)}><input type="radio" name="radio" className="mr-2" />3★ & above</label>
                <label onClick={(e) => Setrateval(2)}><input type="radio" name="radio" className="mr-2" />2★ & above</label>
                <label onClick={(e) => Setrateval(5)}><input type="radio" name="radio" className="mr-2" />1★ & above</label>




              </div>
              {/* {


                brandcategory.map((brands, index) => {
                  return (

                    <div className="flex flex-col gap-1 text-sm" key={index}>
                      <label><input type="checkbox" className="mr-2" />{brands.name}</label>

                    </div>

                  )
                })} */}






            </div>

            <div className="mb-4 shadow-sm bg-white rounded-2 pl-2 overflow-y-scroll h-50">
              <label className="block text-sm mb-2">DISCOUNT RANGE</label>

              <div className="flex flex-col gap-1 text-sm" >
                <label onClick={() => Setdiscount([0, 5])}><input type="radio" name='radio1' className="mr-2" />5% and above</label>

                <label onClick={() => Setdiscount([0, 10])}><input type="radio" name='radio1' className="mr-2" />10% and above</label>
                <label onClick={() => Setdiscount([0, 15])}><input type="radio" name='radio1' className="mr-2" />15% and above</label>
                <label onClick={() => Setdiscount([0, 20])}><input type="radio" name='radio1' className="mr-2" />20% and above</label>




              </div>
              {/* {


                brandcategory.map((brands, index) => {
                  return (

                    <div className="flex flex-col gap-1 text-sm" key={index}>
                      <label><input type="checkbox" className="mr-2" />{brands.name}</label>

                    </div>

                  )
                })} */}






            </div>

          </aside>

          <main className="flex flex-column grow-1 flex-wrap justify-end items-start">

            <div className="sortFilter">
              <select name="sortfilter" onChange={(e) => Setsortval(e.target.value)} className='border-1 p-2' id="sortfilter">
                <option value="0">Sort by : Recommended</option>
                <option value="1">Name : A to Z</option>
                <option value="2">Name : Z to A</option>
                <option value="3">Price : Low to High</option>
                <option value="4">Price : Higt to Low</option>
                <option value="5">Discounted Price : Low to High</option>
                <option value="6">Discounted Price : High to Low</option>
                <option value="7">Rating : Low to High</option>
                <option value="8">Rating : High to Low</option>
              </select>
            </div>
            <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">

              {loader ? <Loader /> : productdata.map((productsdata, i) => {

                let { name, price, id, image, qty } = productsdata


                let cartdata = () => {


                  let objectdata = {
                    name, price, id, image, qty: 1
                  }

                  let alreadydata = cart.find((obj) => obj.id == id)
                  if (alreadydata) {
                    alert("already data exist")
                  }
                  else {
                    Setcart([...cart, objectdata])
                  }

                  console.log(cart)

                }

                let alreadydata = cart.find((obj) => obj.id == id)


                let removeProduct = () => {
                  let remainingproducts = cart.filter((products, index) => products.id != id)
                  Setcart(remainingproducts)

                }


                console.log(productsdata)
                return (
                  <article className="bg-white rounded-lg overflow-hidden shadow-sm group" key={i} >
                    <div className="relative">
                      <Link to={`/productDetails/${id}`}>

                        <img src={productsdata.image} alt="Product" className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />

                      </Link>
                      <span className="absolute left-2 top-2 bg-red-500 text-white text-xs px-2 py-1 rounded">-30%</span>
                      <button className="absolute right-2 top-2 bg-white/80 text-sm px-2 py-1 rounded">♡</button>
                    </div>
                    <div className="p-3">
                      <h3 className="text-sm font-medium line-clamp-2">{productsdata.name}</h3>
                      <p className="text-sm text-gray-500 mt-1">Brand A</p>
                      <div className="mt-2 flex items-center justify-between">
                        <div>
                          <div className="font-semibold">{productsdata.price}</div>
                          <div className="text-xs text-gray-400 line-through">₹1,199</div>
                        </div>
                        <div className="buttonGroup flex gap-2">
                          {alreadydata ? <button className="text-xs px-3 py-1 bg-red-600 border rounded text-white" onClick={() => removeProduct()}>remove</button> : <button className="text-xs px-3 py-1 border rounded" onClick={() => cartdata()}>add</button>}

                          <Link to={`/productDetails/${id}`}>

                            <button className="text-xs px-3 py-1 border rounded">Details</button>
                          </Link>
                        </div>

                      </div>
                    </div>
                  </article>
                )
              })}







            </section>
            <ResponsivePagination
              current={currentPage}
              total={totalPages}
              onPageChange={SetcurrentPage}
            />


          </main>

        </div>
      </div>
    </>
  )
}

export default Productmyntra