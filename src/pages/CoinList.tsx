import { Search, SlidersHorizontal } from "lucide-react"
import { useState } from "react"

// Temporary mock data
const mockCoins = [
  {
    id: "1",
    year: 1922,
    country: "Brasil",
    value: "1000 Réis",
    price: 350.0,
    aifns: "Moeda comemorativa",
    status: "available",
    imageUrl: "",
    createdAt: "2024-03-15T10:00:00Z",
    updatedAt: "2024-03-15T10:00:00Z",
  },
  {
    id: "2",
    year: 1889,
    country: "Portugal",
    value: "500 Réis",
    price: 750.0,
    aifns: "Conservação excepcional",
    status: "available",
    imageUrl: "",
    createdAt: "2024-03-15T10:00:00Z",
    updatedAt: "2024-03-15T10:00:00Z",
  },
]

const CoinList = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState<"year" | "price" | "country">("year")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc")

  const handleSort = (field: "year" | "price" | "country") => {
    if (sortBy === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc")
    } else {
      setSortBy(field)
      setSortOrder("asc")
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-serif font-bold text-amber-900 mb-4">
          Catálogo de Moedas
        </h1>
        <p className="text-gray-600 mb-6">
          Explore nossa coleção única de moedas históricas
        </p>

        {/* Search and Filter Bar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Pesquisar moedas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <SlidersHorizontal className="h-5 w-5 mr-2" />
            Filtros
          </button>
        </div>

        {/* Coin Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockCoins.map((coin) => (
            <div
              key={coin.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48">
                <img
                  src={coin.imageUrl}
                  alt={`${coin.value} - ${coin.year}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 px-2 py-1 bg-amber-500 text-white text-sm rounded">
                  {coin.status === "available" ? "Disponível" : "Vendido"}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-amber-900 mb-2">
                  {coin.value} ({coin.year})
                </h3>
                <p className="text-gray-600 mb-2">{coin.country}</p>
                <p className="text-sm text-gray-500 mb-3">{coin.aifns}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-amber-900">
                    R$ {coin.price.toFixed(2)}
                  </span>
                  <button className="px-4 py-2 bg-amber-900 text-white rounded hover:bg-amber-800 transition-colors">
                    Ver Detalhes
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CoinList
