import { doctorModel } from "../../model/doctors"
import Button from "../components/Button"

const fetchDocs = async()=>{
  try {
    const data = await doctorModel.find()
    console.log(`${data}`)
    return data
  } catch (error) {
    console.log(`here is the error ${error}`)
  }
  }

export default async function doctor() {
  const data = await fetchDocs()
  return(
    <div className="container mx-auto p-4">
    <div className="bg-gray-800 text-white p-4 mb-4">
      <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
    </div>
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-xl font-semibold mb-4">Table Data</h2>
      <table className="min-w-full bg-white border justify-center border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border-b p-4 text-center">ID</th>
            <th className="border-b p-4 text center">Name</th>
            <th className="border-b p-4 text-center">Status</th>
            <th className="border-b p-4 text-center">Actions</th>
            
          </tr>
        </thead>
        <tbody>
          {data?.map(item => (
            <tr key={item.id} className="border-b">
              <td className="p-4 text-center">{item.id}</td>
              <td className="p-4 text-center">{item.name}</td>
              <td className="p-4 text-center">{item.appointment}</td>
              <td className="p-4 text-center">
                <Button className="bg-blue-500 m-4"  title="update" />
                <Button className= "bg-red-500 m-4" title="delete"  />
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>

       
  )
} 
