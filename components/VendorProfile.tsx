import { useParams } from "react-router-dom"

const mockVendors = {
  "1": {
    id: "1",
    name: "John Doe",
    skills: ["Web Development", "Graphic Design"],
    services: ["Website Creation", "Logo Design"],
  },
  "2": {
    id: "2",
    name: "Jane Smith",
    skills: ["Content Writing", "SEO"],
    services: ["Blog Writing", "SEO Optimization"],
  },
}

const VendorProfile = () => {
  const { id } = useParams<{ id: string }>()
  const vendor = mockVendors[id as keyof typeof mockVendors]

  if (!vendor) {
    return <div>Vendor not found</div>
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{vendor.name}</h1>
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Skills</h2>
        <ul className="list-disc list-inside">
          {vendor.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Services</h2>
        <ul className="list-disc list-inside">
          {vendor.services.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Book a Service</button>
    </div>
  )
}

export default VendorProfile

