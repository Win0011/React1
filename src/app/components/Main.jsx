import React from "react"
import Image from "next/image"
import pic from '../images/book2.jpg'

export default function Main() {
  return (
   <div>
    <h1 className="text-5xl">Munir library </h1> 
    <section className="grid grid-cols-2">
   <Image src='/media/book.jpg' alt="books" width={600} height={500} />
   <Image src='/media/books.jpg' alt="books" width={600} height={500} />
   <Image src='https://images.unsplash.com/photo-1513001900722-370f803f498d?q=80&w=2624&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="books" width={600} height={500} />
   <Image src={pic} alt="books" width={600} height={500} />
   </section>
   </div>

  )
}
