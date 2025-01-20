import Image from "next/image"

export default function Samples() {
  const samples = [
    { id: 1, title: "Math Worksheet Sample", description: "Preview of our popular math worksheet bundle." },
    { id: 2, title: "Science Experiment Sample", description: "A sample page from our science experiment guide." },
    { id: 3, title: "Language Arts Sample", description: "Example exercises from our language arts workbook." },
    { id: 4, title: "History Timeline Sample", description: "Sample timeline activity from our history worksheets." },
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Sample Worksheets</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {samples.map((sample) => (
          <div key={sample.id} className="border rounded-lg p-4">
            <Image
              src={`/placeholder.svg?height=300&width=400`}
              alt={sample.title}
              width={400}
              height={300}
              className="w-full h-48 object-cover mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{sample.title}</h2>
            <p className="text-gray-600">{sample.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

