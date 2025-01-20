import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Products() {
  const products = [
    {
      id: 1,
      title: "Math Worksheet Bundle",
      description: "A comprehensive set of math worksheets covering various topics.",
    },
    {
      id: 2,
      title: "Science Experiment Guide",
      description: "Step-by-step instructions for engaging science experiments.",
    },
    {
      id: 3,
      title: "Language Arts Workbook",
      description: "Exercises to improve reading comprehension and writing skills.",
    },
    {
      id: 4,
      title: "History Timeline Activities",
      description: "Interactive worksheets to learn about historical events.",
    },
    { id: 5, title: "Art Project Ideas", description: "Creative worksheets for art classes and projects." },
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 mt-10">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4">
            <img
              src={`/placeholder.svg?height=200&width=200`}
              alt={product.title}
              className="w-full h-40 object-cover mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <div className="flex justify-between">
              <Link href="https://www.classful.com" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm">
                  Buy on Classful
                </Button>
              </Link>
              <Link href="https://www.teacherspayteachers.com" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm">
                  Buy on TPT
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

