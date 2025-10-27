import React, { createContext, useEffect, useState } from 'react'

export let contextApi = createContext();


let MainContext=({ children })=> {

  let [cart, Setcart] = useState(localStorage.getItem('CART') ? JSON.parse(localStorage.getItem('CART')) : [] )

  let [categorydata, Setcategorydata] = useState([])

  let [productdata, Setproductdata] = useState([])

  let [brandcategory, Setbrandcategory] = useState([])

  let [sortval, Setsortval] = useState(null)

  let [rateval, Setrateval] = useState(0)

  let [loader, Setloader] = useState(0)

  let [categoryFilter, SetcategoryFilter] = useState([])

  let [productPrice, SetproductPrice] = useState([])

  let [discount,Setdiscount]=useState([])


  let [currentPage, SetcurrentPage] = useState(1);

  let [totalPages,Settotalpages]=useState(null)

  let [brandcategorydata,Setbrandcategorydata]=useState([])

  let shipping=150

  let totalprice=cart.reduce((total,obj)=>total+=obj.price*obj.qty,0)

  useEffect(()=>{

    localStorage.setItem('CART',JSON.stringify(cart))


  },[cart])
  


  let variables = {
    cart,
    Setcart,
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
    brandcategory, 
    Setbrandcategory,
    discount,
    Setdiscount,
    brandcategorydata,
    Setbrandcategorydata,
    totalprice,
    shipping
  }

 

  return (
    <contextApi.Provider value={variables}>
      {children}
    </contextApi.Provider>

  )
}

export default MainContext