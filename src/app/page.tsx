import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col items-center text-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to Digital Worksheets Showcase</h1>
      <p className="text-xl mb-8 max-w-2xl">
        Discover high-quality digital worksheets designed to enhance learning experiences. Perfect for educators looking
        for engaging and effective teaching materials.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link href="https://www.classful.com" target="_blank" rel="noopener noreferrer">
          <Button className="w-full">Shop on Classful</Button>
        </Link>
        <Link href="https://www.teacherspayteachers.com" target="_blank" rel="noopener noreferrer">
          <Button className="w-full">Shop on Teachers Pay Teachers</Button>
        </Link>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Featured Worksheets</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="border rounded-lg p-4">
              <img
                src={`/placeholder.svg?height=200&width=200`}
                alt={`Featured worksheet ${i}`}
                className="w-full h-40 object-cover mb-4"
              />
              <h3 className="text-lg font-semibold">Worksheet Title {i}</h3>
              <p className="text-sm text-gray-600 mb-2">Brief description of the worksheet...</p>
              <Link href="/products" className="text-primary hover:underline">
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

