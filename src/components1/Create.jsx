import React, { useContext, useState } from 'react'
import { ProductContext } from '../Utils/Context'

const Create = () => {

    const {products,setProducts}  = useContext(ProductContext)
    const [imageUrl,setImageUrl] = useState("")
    const [title,setTittle] = useState("")
    const [category,setCategory] = useState("")
    const [price,setPrice] = useState("")
    const [discription,setDiscription] = useState("")
    const AddProductHandler = (e) => {
        e.preventDefault()
        const product = {
        imageUrl,
        title,
        category,
        price,
        discription,
        };
        setProducts([...products,product])
    }
    console.log(products)
  return (
    <form onSubmit={AddProductHandler} className='h-screen w-screen flex flex-col items-center p-[5%]' >
        <h1 className='w-1/2 text-3xl mb-5'>Add New Products</h1>
        <input 
        type="url"
        placeholder='Image URL'
        className='text-sm w-1/2 p-3 mb-3 rounded border-red-600 border-3 bg-zinc-100'
        onChange={(e) =>setImageUrl(e.target.value)}
        value={imageUrl}
         />
        <input 
        type="text"
        placeholder='tittle'
        className='text-sm w-1/2 p-3 mb-3 rounded border-red-600 border-3 bg-zinc-100'
        onChange={(e) =>setTittle(e.target.value)}
        value={title}
         />
        <div className='flex w-1/2 justify-between items-center gap-2'>
        <input 
        type="text"
        placeholder='Category'
        className='text-sm w-2/3 p-3 mb-3 rounded border-red-600 border-3 bg-zinc-100'
        onChange={(e) =>setCategory(e.target.value)}
        value={category}
         />
        <input 
        type="number"
        placeholder='$ Price'
        className='text-sm  p-3 mb-3 rounded border-red-600 border-3 bg-zinc-100'
        onChange={(e) =>setPrice(e.target.value)}
        value={price}
         />
        </div>
        <textarea 
        type="text"
        placeholder='Enter product  Discription here...'
        className='text-sm w-1/2 p-3 mb-3 rounded border-red-600 border-3 bg-zinc-100'
        onChange={(e) =>setDiscription(e.target.value)}
        value={discription}
        rows="5"
         />
        <div className='w-1/2'>
        <button className=" flex place-self-start mt-2 py-3 px-5 border-2 rounded border-blue-400 text-red-300 hover:border-red-500 hover:text-blue-400"
        href="/Create">Add new Prodects</button>
        </div>


    </form>
  )
}

export default Create
