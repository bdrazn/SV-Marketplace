import { query } from "@/lib/db"
import { Button } from "@/components/ui/button"

export default async function VendorProfile({ params }: { params: { id: string } }) {
  const vendorData = await query(
    `SELECT u.id, u.name, GROUP_CONCAT(DISTINCT s.name) as skills, 
     GROUP_CONCAT(DISTINCT serv.name) as services
     FROM users u
     LEFT JOIN vendor_skills vs ON u.id = vs.vendor_id
     LEFT JOIN skills s ON vs.skill_id = s.id
     LEFT JOIN services serv ON u.id = serv.vendor_id
     WHERE u.id = ? AND u.role = 'vendor'
     GROUP BY u.id`,
    [params.id],
  )

  const vendor = vendorData[0]

  if (!vendor) {
    return <div>Vendor not found</div>
  }

  const skills = vendor.skills ? vendor.skills.split(",") : []
  const services = vendor.services ? vendor.services.split(",") : []

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">{vendor.name}</h1>
      <div>
        <h2 className="text-xl font-semibold mb-2">Skills</h2>
        <ul className="list-disc list-inside">
          {skills.map((skill: string, index: number) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Services</h2>
        <ul className="list-disc list-inside">
          {services.map((service: string, index: number) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
      </div>
      <Button>Book a Service</Button>
    </div>
  )
}

