import { List, PlusCircle } from "lucide-react"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-amber-900 mb-6">
          Coleção de Moedas Hereditárias
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Uma jornada através do tempo, preservando a história e o legado
          numismático passado de geração em geração. Cada moeda conta uma
          história única e carrega consigo memórias preciosas.
        </p>
      </div>

      {/* Featured Image */}
      <div className="relative h-96 mb-16 rounded-lg overflow-hidden shadow-xl">
        <img
          src=""
          alt="Coleção de moedas antigas"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-amber-900/70 to-transparent" />
      </div>

      {/* Call to Action Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
        <Link
          to="/coins"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-amber-900 hover:bg-amber-800 transition-colors shadow-lg"
        >
          <List className="mr-2" />
          Ver Moedas
        </Link>
        <Link
          to="/add-coin"
          className="inline-flex items-center justify-center px-6 py-3 border border-amber-900 text-base font-medium rounded-md text-amber-900 bg-white hover:bg-amber-50 transition-colors shadow-lg"
        >
          <PlusCircle className="mr-2" />
          Adicionar Nova Moeda
        </Link>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-amber-900 mb-4">
            Catalogação Detalhada
          </h3>
          <p className="text-gray-600">
            Registre informações completas sobre cada moeda, incluindo ano,
            país, valor e o importante índice AIFNS.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-amber-900 mb-4">
            Gestão Simplificada
          </h3>
          <p className="text-gray-600">
            Interface intuitiva para adicionar, editar e organizar sua coleção
            de forma eficiente e prática.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-amber-900 mb-4">
            Preservação Histórica
          </h3>
          <p className="text-gray-600">
            Mantenha viva a história e o valor sentimental de cada peça da
            coleção para as futuras gerações.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home
