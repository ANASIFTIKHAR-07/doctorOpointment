import { NextResponse } from "next/server"
import { doctorModel } from "../../../model/doctors"
import dbConnect from "../../../config/db"
dbConnect();
export const GET = async () => {
    try {
            // const data = await userModel.create()
            //  const data = await userModel.createMany()
     const data = await doctorModel.find()
     console.log("data",data)
     return NextResponse.json({ message: "success",users:data })

    } catch (error) {
     console.log("error",error);
     return NextResponse.json({ message: "error",error })
    }
 
}
export const POST = async (req) => {
    try {
        const body = await req.json()
        console.log("body", body)    // database
            const doctor =  new doctorModel(body)
            await doctor.save()
            return NextResponse.json({ message: "successfully product created" })
        
    } catch (error) {
        return NextResponse.json({
            message: "something went wrong",
            error: JSON.stringify(error)
        })
    }
}
