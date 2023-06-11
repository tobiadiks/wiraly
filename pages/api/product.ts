// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next"
// import { useuser } from "next-auth/react"


export default function productHandler(req:NextApiRequest, res:NextApiResponse,) {


  if(req.method=="POST"){
   addProduct(req,res)
  }
  if(req.method=="GET"){
    getProducts(req,res)
   }
   if(req.method=="GET"){
    getProduct(req,res)
   }
}

async function addProduct(req:NextApiRequest,res:NextApiResponse,) {
  const userId:string=req.body
  console.log(userId)
  try {
    const response = await fetch("/api/product", {
      method: 'POST',
      body: JSON.stringify(userId),
      headers: { "Content-Type": "application/json" }
    })
    res.status(200).json(response)
  } catch (error) {
    res.status(500).json(error)
  }
}

async function getProducts(req:NextApiRequest,res:NextApiResponse,) {
  const userId:string=req.body
  console.log(userId)
  try {
    const response = await fetch("/api/product", {
      method: 'GET',
      body: JSON.stringify(userId),
      headers: { "Content-Type": "application/json" }
    })
    res.status(200).json(response)
  } catch (error) {
    res.status(500).json(error)
  }
}

async function getProduct(req:NextApiRequest,res:NextApiResponse,) {
  const userId:string=req.body
  console.log(userId)
  try {
    const response = await fetch("/api/product", {
      method: 'GET',
      body: JSON.stringify(userId),
      headers: { "Content-Type": "application/json" }
    })
    res.status(200).json(response)
  } catch (error) {
    res.status(500).json(error)
  }
}
