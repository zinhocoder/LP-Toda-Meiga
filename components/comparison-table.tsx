import { Check, Star, Crown, ShoppingBag } from "lucide-react"
import { Crimson_Text } from "next/font/google"

const crimson = Crimson_Text({ subsets: ["latin"], weight: ["400", "600", "700"] })

export default function ComparisonTable() {
  const features = [
    {
      name: "Material e acabamento",
      rainha: "Banho de ouro 18k premium",
      princesa: "Banho de prata refinada",
      icon: "✨",
    },
    {
      name: "Opções de quantidade",
      rainha: "16 ou 32 peças disponíveis",
      princesa: "16 ou 32 peças disponíveis",
      icon: "📿",
    },
    {
      name: "Estilo e Design",
      rainha: "Coleção completa com todos os designs",
      princesa: "Seleção dos designs mais populares",
      icon: "✨",
    },
    {
      name: "Versatilidade",
      rainha: "Combinações ilimitadas para qualquer ocasião",
      princesa: "Combinações versáteis para o dia a dia",
      icon: "🎭",
    },
    {
      name: "Estojo Incluso",
      rainha: "Estojo premium com divisórias organizadoras",
      princesa: "Estojo compacto elegante",
      icon: "📦",
    },
    {
      name: "Valor por peça",
      rainha: "R$ 9,28 por pulseira",
      princesa: "R$ 12,31 por pulseira",
      icon: "💰",
    },
    {
      name: "Economia",
      rainha: "R$ 100,00 de desconto",
      princesa: "R$ 50,00 de desconto",
      icon: "🏷️",
    },
  ]

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header Cards */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Kit Rainha */}
        <div className="relative">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-black px-6 py-2 rounded-full text-sm font-bold z-10 shadow-lg">
            MAIS VENDIDO
          </div>
          <div className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 border-2 border-yellow-500/50 rounded-3xl p-8 backdrop-blur-sm text-center relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-500/30 to-transparent rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-yellow-500/20 to-transparent rounded-full blur-xl"></div>

            <div className="relative z-10">
              <Crown className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <h3 className={`${crimson.className} text-3xl font-bold text-white mb-3`}>Kit Rainha</h3>
              <p className="text-yellow-300 font-semibold mb-6">Ouro 18k - 32 peças</p>

              <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 mb-6">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <span className="text-gray-400 line-through text-lg">R$ 249,00</span>
                  <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">24% OFF</span>
                </div>
                <div className="text-4xl font-bold text-white mb-2">R$ 189,90</div>
                <div className="text-yellow-300">ou 12x de R$ 24,75</div>
                <div className="text-sm text-yellow-400 font-medium mt-2">Economia de R$ 60,00</div>
              </div>

              <a
                href="#checkout-rainha"
                className="inline-flex items-center justify-center w-full py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black rounded-xl hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 shadow-lg hover:shadow-yellow-500/25 font-bold text-lg"
              >
                <ShoppingBag className="mr-3 h-5 w-5" />
                Escolher Kit Rainha
              </a>
            </div>
          </div>
        </div>

        {/* Kit Princesa */}
        <div className="relative">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white text-black px-6 py-2 rounded-full text-sm font-bold z-10 shadow-lg">
            MAIS POPULAR
          </div>
          <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-gray-600 rounded-3xl p-8 text-center relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-500/20 to-transparent rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-gray-500/10 to-transparent rounded-full blur-xl"></div>

            <div className="relative z-10">
              <Star className="h-12 w-12 text-white mx-auto mb-4" />
              <h3 className={`${crimson.className} text-3xl font-bold text-white mb-3`}>Kit Princesa</h3>
              <p className="text-gray-300 font-semibold mb-6">Prata refinada - 16 peças</p>

              <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 mb-6">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <span className="text-gray-400 line-through text-lg">R$ 179,00</span>
                  <span className="bg-white text-black px-3 py-1 rounded-full text-sm font-bold">15% OFF</span>
                </div>
                <div className="text-4xl font-bold text-white mb-2">R$ 139,00</div>
                <div className="text-gray-300">ou 12x de R$ 15,83</div>
                <div className="text-sm text-yellow-400 font-medium mt-2">Economia de R$ 40,00</div>
              </div>

              <a
                href="#checkout-princesa"
                className="inline-flex items-center justify-center w-full py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black rounded-xl hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 shadow-lg hover:shadow-yellow-500/25 font-bold text-lg"
              >
                <ShoppingBag className="mr-3 h-5 w-5" />
                Escolher Kit Princesa
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Features Comparison - Desktop Only */}
      <div className="hidden md:block bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-yellow-500/20 rounded-3xl p-8">
        <h4 className={`${crimson.className} text-2xl font-bold text-center text-white mb-8`}>Comparação Detalhada</h4>

        <div className="space-y-4">
          {features.map((feature, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Feature Name */}
              <div className="bg-gradient-to-r from-gray-800/80 to-gray-900/80 border border-gray-600 rounded-xl p-4 flex items-center justify-center md:justify-start">
                <span className="text-2xl mr-3">{feature.icon}</span>
                <span className="font-semibold text-white text-center md:text-left">{feature.name}</span>
              </div>

              {/* Kit Rainha Feature */}
              <div className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 border border-yellow-500/40 rounded-xl p-4 backdrop-blur-sm">
                <div className="flex items-start justify-center md:justify-start">
                  <Check className="h-5 w-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-white text-center md:text-left">{feature.rainha}</span>
                </div>
              </div>

              {/* Kit Princesa Feature */}
              <div className="bg-gradient-to-r from-gray-800/80 to-gray-900/80 border border-gray-600 rounded-xl p-4">
                <div className="flex items-start justify-center md:justify-start">
                  <Check className="h-5 w-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 text-center md:text-left">{feature.princesa}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Summary */}
        <div className="mt-8 pt-8 border-t border-yellow-500/20">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center bg-yellow-500/10 rounded-2xl p-6 border border-yellow-500/30">
              <h5 className="font-bold text-yellow-400 mb-2">Kit Rainha - Melhor Valor</h5>
              <p className="text-gray-300 text-sm">Mais peças, menor custo por unidade, máxima versatilidade</p>
            </div>
            <div className="text-center bg-gray-800/50 rounded-2xl p-6 border border-gray-600">
              <h5 className="font-bold text-white mb-2">Kit Princesa - Entrada Ideal</h5>
              <p className="text-gray-300 text-sm">Investimento menor, peças essenciais, qualidade garantida</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Summary */}
      <div className="md:hidden bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-yellow-500/20 rounded-3xl p-6">
        <h4 className={`${crimson.className} text-xl font-bold text-center text-white mb-6`}>Principais Diferenças</h4>

        <div className="space-y-4">
          <div className="bg-yellow-500/10 rounded-xl p-4 border border-yellow-500/30">
            <h5 className="font-bold text-yellow-400 mb-2 text-center">Kit Rainha</h5>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• Banho de ouro 18k premium</li>
              <li>• R$ 9,28 por peça (32 unidades)</li>
              <li>• Economia de até R$ 100</li>
              <li>• Estojo premium com divisórias</li>
            </ul>
          </div>

          <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-600">
            <h5 className="font-bold text-white mb-2 text-center">Kit Princesa</h5>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• Banho de prata refinada</li>
              <li>• R$ 12,31 por peça (16 unidades)</li>
              <li>• Economia de até R$ 50</li>
              <li>• Estojo compacto elegante</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
