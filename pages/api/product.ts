// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next"
// import { useSession } from "next-auth/react"
import prisma from  "../../lib/prismadb"

export default function productHandler(req:NextApiRequest, res:NextApiResponse,) {


  if(req.method=="GET"){
   getProducts(req,res)
  }

}

async function getProducts(req:NextApiRequest,res:NextApiResponse,) {
  const userId:string=req.body
  console.log(userId)
  try {
const response=await prisma.product.findMany({where:{userId:userId}})
    res.status(200).json(response)
  } catch (error) {
    res.status(500).json(error)
  }
}
