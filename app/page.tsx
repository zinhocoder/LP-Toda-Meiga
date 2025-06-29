import Image from "next/image"
import { Crimson_Text, Inter } from "next/font/google"
import {
  ChevronRight,
  ShoppingBag,
  Clock,
  Shield,
  Truck,
  Star,
  Check,
  Users,
  Award,
  Sparkles,
  Crown,
} from "lucide-react"

import ProductGallery from "@/components/product-gallery"
import Faq from "@/components/faq"
import ComparisonTable from "@/components/comparison-table"
import StyleCarousel from "@/components/style-carousel"
import FloatingCta from "@/components/floating-cta"
import CountdownTimer from "@/components/countdown-timer"
import SocialProof from "@/components/social-proof"
// import HeroCarousel from "@/components/hero-carousel"

const crimson = Crimson_Text({ subsets: ["latin"], weight: ["400", "600", "700"] })
const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <main className={`${inter.className} bg-black relative`}>
      {/* Floating CTA */}
      <FloatingCta />

      {/* Elegant Urgency Banner */}
      <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-black py-3 px-4 text-center">
        <div className="flex items-center justify-center gap-3 text-sm font-semibold">
          <Clock className="h-4 w-4" />
          <span>Oferta especial válida por tempo limitado</span>
          <Clock className="h-4 w-4" />
        </div>
      </div>

      {/* Modern Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-transparent"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(234,179,8,0.1),transparent_50%)]"></div>
        </div>

        <div className="container mx-auto px-6 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="text-white">
              {/* Social Proof Badge */}
              <div className="inline-flex items-center bg-yellow-500/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-yellow-500/30">
                <Users className="h-4 w-4 mr-3 text-yellow-400" />
                <span className="text-sm font-medium">Mais de 5.000 clientes satisfeitas</span>
              </div>

              <h1
                className={`${crimson.className} text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight text-center lg:text-left`}
              >
                Elegância
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                  Atemporal
                </span>
              </h1>

              <p className="text-xl md:text-2xl mb-8 font-light text-gray-300 leading-relaxed text-center lg:text-left">
                Descubra nossa coleção exclusiva de pulseiras artesanais banhadas a ouro 18k e prata refinada.
              </p>

              {/* Countdown Timer Hero - Mobile Responsive */}
              <div className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 backdrop-blur-sm border border-yellow-500/30 rounded-2xl p-4 md:p-6 mb-8">
                <p className="text-center text-yellow-300 font-bold text-base md:text-lg mb-4">🔥 Oferta expira em:</p>
                <div className="overflow-x-auto">
                  <CountdownTimer />
                </div>
              </div>

              {/* Stats */}
              <div className="flex items-center justify-center lg:justify-start gap-6 md:gap-8 mb-12">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-yellow-400">5.000+</div>
                  <div className="text-xs md:text-sm text-gray-400">Clientes</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center gap-1">
                    <span className="text-2xl md:text-3xl font-bold text-yellow-400">4.9</span>
                    <Star className="h-5 w-5 md:h-6 md:w-6 text-yellow-400 fill-yellow-400" />
                  </div>
                  <div className="text-xs md:text-sm text-gray-400">Avaliação</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-yellow-400">98%</div>
                  <div className="text-xs md:text-sm text-gray-400">Satisfação</div>
                </div>
              </div>

              {/* CTAs - Enhanced for Mobile */}
              <div className="flex flex-col gap-4 mb-12">
                <a
                  href="#kits"
                  className="group inline-flex items-center justify-center px-8 py-5 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black rounded-xl hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 shadow-2xl hover:shadow-yellow-500/25 transform hover:scale-105"
                >
                  <ShoppingBag className="mr-3 h-6 w-6" />
                  <div className="text-center">
                    <div className="font-bold text-lg">Ver Coleções Exclusivas</div>
                    <div className="text-sm opacity-80">• Frete Grátis para todo o Brasil</div>
                  </div>
                  <ChevronRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 text-sm text-gray-400">
                <div className="flex items-center">
                  <Shield className="h-4 w-4 mr-2 text-yellow-400" />
                  <span>Garantia de 90 dias</span>
                </div>
                <div className="flex items-center">
                  <Truck className="h-4 w-4 mr-2 text-yellow-400" />
                  <span>Frete Grátis para todo o Brasil</span>
                </div>
              </div>
            </div>

            {/* Right Content - Product Showcase */}
            <div className="relative mt-24 lg:mt-0">
              {/* Desktop Version */}
              <div className="hidden lg:block">
                {/* Golden Background Effects for Image */}
                <div className="absolute inset-0 -m-8">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-500/30 via-yellow-400/20 to-yellow-600/30 rounded-full blur-3xl animate-pulse"></div>
                  <div className="absolute top-1/4 right-1/4 w-3/4 h-3/4 bg-gradient-to-tl from-yellow-500/25 via-transparent to-yellow-400/25 rounded-full blur-2xl animate-pulse delay-1000"></div>
                  <div className="absolute bottom-1/4 left-1/4 w-2/3 h-2/3 bg-gradient-to-tr from-yellow-600/20 via-yellow-500/15 to-transparent rounded-full blur-xl animate-pulse delay-500"></div>
                </div>

                {/* Main Product Image */}
                <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-yellow-500/20 to-transparent border-2 border-yellow-500/40 backdrop-blur-sm shadow-2xl shadow-yellow-500/20">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jun%2015%2C%202025%2C%2009_40_25%20PM-rsEqvgbJm2eqNFNnuy7tghCpbOI8zK.png"
                    alt="Mulher elegante usando pulseiras douradas Toda Meiga"
                    fill
                    className="object-cover"
                  />

                  {/* Golden Overlay Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-yellow-600/10 mix-blend-overlay"></div>

                  {/* Floating Elements */}
                  <div className="absolute top-6 right-6 bg-black/80 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold border border-yellow-500/30">
                    Até 25% OFF
                  </div>

                  <div className="absolute bottom-6 left-6 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    Ouro 18k
                  </div>
                </div>

                {/* Floating Cards with Golden Effects - Desktop Only */}
                <div className="absolute -top-8 -left-8 bg-black/90 backdrop-blur-sm border-2 border-yellow-500/40 rounded-2xl p-6 text-white shadow-xl shadow-yellow-500/20">
                  <div className="text-2xl font-bold text-yellow-400">16/32</div>
                  <div className="text-sm text-gray-300">Peças Disponíveis</div>
                </div>

                <div className="absolute -bottom-8 -right-8 bg-black/90 backdrop-blur-sm border-2 border-yellow-500/40 rounded-2xl p-6 text-white shadow-xl shadow-yellow-500/20">
                  <div className="text-2xl font-bold text-yellow-400">R$ 189</div>
                  <div className="text-sm text-gray-300">Kit Completo</div>
                </div>
              </div>

              {/* Mobile Version - Enhanced with Golden Effects */}
              <div className="lg:hidden relative">
                {/* Golden Background Effects for Mobile */}
                <div className="absolute inset-0 -m-6">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-500/30 via-yellow-400/20 to-yellow-600/30 rounded-full blur-3xl animate-pulse"></div>
                  <div className="absolute top-1/4 right-1/4 w-3/4 h-3/4 bg-gradient-to-tl from-yellow-500/25 via-transparent to-yellow-400/25 rounded-full blur-2xl animate-pulse delay-1000"></div>
                  <div className="absolute bottom-1/4 left-1/4 w-2/3 h-2/3 bg-gradient-to-tr from-yellow-600/20 via-yellow-500/15 to-transparent rounded-full blur-xl animate-pulse delay-500"></div>
                </div>

                <div className="relative rounded-3xl overflow-hidden border-2 border-yellow-500/40 shadow-2xl shadow-yellow-500/20">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jun%2015%2C%202025%2C%2009_40_25%20PM-rsEqvgbJm2eqNFNnuy7tghCpbOI8zK.png"
                    alt="Mulher elegante usando pulseiras douradas Toda Meiga"
                    width={600}
                    height={600}
                    className="object-cover w-full h-auto"
                  />

                  {/* Golden Overlay Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-yellow-600/10 mix-blend-overlay"></div>

                  {/* Floating Elements for Mobile */}
                  <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm text-white px-3 py-2 rounded-full text-xs font-semibold border border-yellow-500/30">
                    Até 25% OFF
                  </div>

                  <div className="absolute bottom-4 left-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-3 py-2 rounded-full text-xs font-bold shadow-lg">
                    Ouro 18k
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Animated Background Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-yellow-500/30 to-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-r from-yellow-500/20 to-yellow-600/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-10 w-24 h-24 bg-gradient-to-r from-yellow-400/25 to-transparent rounded-full blur-2xl animate-pulse delay-700"></div>
      </section>

      {/* Social Proof Strip */}
      <SocialProof />

      {/* Benefits Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
        {/* Golden Background Effects */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-yellow-500/30 to-yellow-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-l from-yellow-500/25 to-transparent rounded-full blur-3xl animate-pulse delay-700"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-yellow-500/15 to-transparent rounded-full blur-3xl animate-pulse delay-300"></div>
        </div>

        <div className="container mx-auto px-6 md:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className={`${crimson.className} text-4xl md:text-5xl font-bold mb-6 text-white`}>
              Por Que Escolher a Toda Meiga
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Mais de 5.000 mulheres já descobriram o segredo da elegância acessível
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Qualidade Premium</h3>
              <p className="text-gray-300 leading-relaxed">
                Banho de ouro 18k e prata refinada com durabilidade excepcional de até 2 anos
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Versatilidade Total</h3>
              <p className="text-gray-300 leading-relaxed">
                Combine as peças para criar looks únicos, do casual ao mais sofisticado
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Truck className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Entrega Expressa</h3>
              <p className="text-gray-300 leading-relaxed">
                Receba em casa em até 3 dias úteis com frete grátis para todo o Brasil
              </p>
            </div>
          </div>

          <div className="text-center">
            <a
              href="#kits"
              className="inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black rounded-lg hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 shadow-lg hover:shadow-yellow-500/25 font-semibold"
            >
              <ShoppingBag className="mr-3 h-5 w-5" />
              <span>Descobrir Coleções</span>
              <ChevronRight className="ml-3 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Product Gallery - Empowerment Section */}
      <section className="py-24 bg-black relative overflow-hidden" id="gallery">
        {/* Golden Background Effects */}
        <div className="absolute inset-0 opacity-8">
          <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-yellow-500/25 to-yellow-600/15 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-yellow-500/20 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-6 md:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-yellow-500/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-yellow-500/30">
              <Crown className="h-5 w-5 mr-3 text-yellow-400" />
              <span className="text-yellow-300 font-medium">Transformação Garantida</span>
            </div>

            <h2 className={`${crimson.className} text-4xl md:text-6xl font-bold mb-8 text-white leading-tight`}>
              Torne-se uma Mulher
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                Empoderada
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Cada pulseira é um símbolo de força, elegância e autoconfiança.
              <br className="hidden md:block" />
              <span className="text-yellow-400 font-semibold">Desperte a rainha que existe em você.</span>
            </p>

            <div className="flex flex-wrap justify-center gap-8 text-lg text-gray-300 mb-12">
              <div className="flex items-center">
                <Sparkles className="h-5 w-5 mr-2 text-yellow-400" />
                <span>Autoestima elevada</span>
              </div>
              <div className="flex items-center">
                <Crown className="h-5 w-5 mr-2 text-yellow-400" />
                <span>Presença marcante</span>
              </div>
              <div className="flex items-center">
                <Star className="h-5 w-5 mr-2 text-yellow-400" />
                <span>Confiança renovada</span>
              </div>
            </div>
          </div>

          <ProductGallery />

          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 backdrop-blur-sm border border-yellow-500/30 rounded-2xl p-8 mb-8 max-w-2xl mx-auto">
              <h3 className={`${crimson.className} text-2xl font-bold mb-4 text-white`}>
                Sua Jornada de Empoderamento Começa Agora
              </h3>
              <p className="text-gray-300 mb-6">
                Junte-se a milhares de mulheres que já descobriram o poder transformador de se sentir verdadeiramente
                especial.
              </p>
              <a
                href="#kits"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black rounded-xl hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 shadow-lg font-bold text-lg"
              >
                <Crown className="mr-3 h-6 w-6" />
                Despertar Minha Rainha Interior
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Kit Highlights - 32 Peças */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden" id="kits">
        {/* Golden Background Effects */}
        <div className="absolute inset-0 opacity-12">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(234,179,8,0.15),transparent_50%)]"></div>
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_70%,rgba(234,179,8,0.1),transparent_50%)]"></div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-t from-yellow-500/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="container mx-auto px-6 md:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className={`${crimson.className} text-4xl md:text-5xl font-bold mb-6 text-white`}>
              Coleção Completa - 32 Peças
            </h2>
            <div className="inline-flex items-center bg-yellow-500/20 border border-yellow-500/30 rounded-lg px-6 py-3">
              <Clock className="h-4 w-4 mr-2 text-yellow-400" />
              <span className="text-yellow-300 font-medium">Máxima versatilidade e economia</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-20">
            {/* Kit Rainha 32 */}
            <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-yellow-500/30 overflow-hidden group hover:border-yellow-500/50 transition-all duration-500">
              {/* Badge */}
              <div className="absolute top-6 left-6 z-10 bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-bold">
                Mais Vendido
              </div>

              <div className="aspect-square relative overflow-hidden">
                <Image
                  src="/images/kitrainha.png?height=600&width=600"
                  alt="Kit Rainha 32 - pulseiras banhadas a ouro"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>

              <div className="p-8">
                <div className="text-center mb-8">
                  <h3 className={`${crimson.className} text-3xl font-bold mb-3 text-white`}>Kit Rainha 32</h3>
                  <p className="text-gray-300 text-lg">32 pulseiras banhadas a ouro 18k</p>
                </div>

                <div className="space-y-4 mb-8">
                  {[
                    "32 peças banhadas a ouro 18k",
                    "Máxima versatilidade de combinações",
                    "Estojo premium com divisórias",
                    "Garantia total de 90 dias",
                    "Frete grátis para todo Brasil",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center">
                      <Check className="h-5 w-5 text-yellow-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="text-center mb-8">
                  <div className="bg-black/50 border border-yellow-500/30 rounded-xl p-6">
                    <div className="flex items-center justify-center gap-3 mb-2">
                      <span className="text-gray-400 line-through text-lg">R$ 249,90</span>
                      <span className="bg-yellow-500 text-black px-2 py-1 rounded text-sm font-bold">24% OFF</span>
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">R$ 189,90</div>
                    <p className="text-gray-300">ou 12x de R$ 15,83 sem juros</p>
                    <p className="text-sm text-yellow-400 font-medium mt-2">Apenas R$ 5,93 por peça</p>
                  </div>
                </div>

                <a
                  href="https://todameiga.com/cart/49809831985430:1"
                  className="block w-full text-center px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black rounded-xl hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 shadow-lg hover:shadow-yellow-500/25 font-bold"
                >
                  Escolher Kit Rainha 32
                </a>

                <div className="text-center mt-4">
                  <span className="text-sm text-gray-400">Restam apenas 23 unidades</span>
                </div>
              </div>
            </div>

            {/* Kit Princesa 32 */}
            <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-600 overflow-hidden group hover:border-gray-500 transition-all duration-500">
              {/* Badge */}
              <div className="absolute top-6 left-6 z-10 bg-white text-black px-4 py-2 rounded-full text-sm font-bold">
                Melhor Custo
              </div>

              <div className="aspect-square relative overflow-hidden">
                <Image
                  src="/images/kitprincesa.png?height=600&width=600"
                  alt="Kit Princesa 32 - pulseiras banhadas a prata"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>

              <div className="p-8">
                <div className="text-center mb-8">
                  <h3 className={`${crimson.className} text-3xl font-bold mb-3 text-white`}>Kit Rainha 32</h3>
                  <p className="text-gray-300 text-lg">32 pulseiras banhadas a prata refinada</p>
                </div>

                <div className="space-y-4 mb-8">
                  {[
                    "32 peças banhadas a prata refinada",
                    "Máxima versatilidade de combinações",
                    "Estojo premium com divisórias",
                    "Garantia total de 90 dias",
                    "Frete grátis para todo o Brasil",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center">
                      <Check className="h-5 w-5 text-yellow-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="text-center mb-8">
                  <div className="bg-black/50 border border-gray-600 rounded-xl p-6">
                    <div className="flex items-center justify-center gap-3 mb-2">
                      <span className="text-gray-400 line-through text-lg">R$ 249,90</span>
                      <span className="bg-white text-black px-2 py-1 rounded text-sm font-bold">24% OFF</span>
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">R$ 189,90</div>
                    <p className="text-gray-300">ou 12x de R$ 15,83 sem juros</p>
                    <p className="text-sm text-yellow-400 font-medium mt-2">Apenas R$ 5,93 por peça</p>
                  </div>
                </div>

                <a
                  href="https://todameiga.com/cart/49809832018198:1"
                  className="block w-full text-center px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black rounded-xl hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 shadow-lg hover:shadow-yellow-500/25 font-bold"
                >
                  Escolher Kit Rainha 32
                </a>

                <div className="text-center mt-4">
                  <span className="text-sm text-gray-400">Restam apenas 31 unidades</span>
                </div>
              </div>
            </div>
          </div>

          {/* Combo 32 Peças */}
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-yellow-500 to yellow-600 text-black rounded-2xl p-12 text-center mb-20">
            <h3 className={`${crimson.className} text-3xl font-bold mb-4`}>Combo Completo 32 + 32</h3>
            <p className="text-xl mb-8 opacity-90">
              64 pulseiras no total + desconto adicional + frete grátis garantido
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
              <div className="text-xl font-semibold">Kit Rainha 32 Ouro + Prata</div>
              <div className="text-4xl font-bold">R$ 339,90</div>
              <div className="bg-black text-yellow-400 px-4 py-2 rounded-full font-bold">Economize R$ 19,90</div>
            </div>
            <a
              href="https://todameiga.com/cart/49809831985430:1,49809832018198:1"
              className="inline-flex items-center justify-center px-10 py-4 bg-black text-yellow-400 rounded-xl hover:bg-gray-900 transition-all duration-300 shadow-lg font-bold text-lg"
            >
              Adquirir Combo 64 Peças
            </a>
          </div>

          {/* Seção 16 Peças */}
          <div className="text-center mb-20">
            <h2 className={`${crimson.className} text-4xl md:text-5xl font-bold mb-6 text-white`}>
              Coleção Essencial - 16 Peças
            </h2>
            <div className="inline-flex items-center bg-gray-500/20 border border-gray-500/30 rounded-lg px-6 py-3">
              <Clock className="h-4 w-4 mr-2 text-gray-400" />
              <span className="text-gray-300 font-medium">Perfeita para começar sua coleção</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Kit Rainha 16 */}
            <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-600 overflow-hidden group hover:border-gray-500 transition-all duration-500">
              {/* Badge */}
              <div className="absolute top-6 left-6 z-10 bg-gray-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                Entrada Premium
              </div>

              <div className="aspect-square relative overflow-hidden">
                <Image
                  src="/images/kitrainha16.png?height=600&width=600"
                  alt="Kit Rainha 16 - pulseiras banhadas a ouro"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>

              <div className="p-8">
                <div className="text-center mb-8">
                  <h3 className={`${crimson.className} text-3xl font-bold mb-3 text-white`}>Kit Princesa 16</h3>
                  <p className="text-gray-300 text-lg">16 pulseiras banhadas a ouro 18k</p>
                </div>

                <div className="space-y-4 mb-8">
                  {[
                    "16 peças banhadas a ouro 18k",
                    "Designs mais populares",
                    "Estojo compacto elegante",
                    "Garantia total de 90 dias",
                    "Frete grátis para todo Brasil",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center">
                      <Check className="h-5 w-5 text-yellow-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="text-center mb-8">
                  <div className="bg-black/50 border border-gray-600 rounded-xl p-6">
                    <div className="flex items-center justify-center gap-3 mb-2">
                      <span className="text-gray-400 line-through text-lg">R$ 179,90</span>
                      <span className="bg-gray-500 text-white px-2 py-1 rounded text-sm font-bold">15% OFF</span>
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">R$ 139,90</div>
                    <p className="text-gray-300">ou 12x de R$ 11,50 sem juros</p>
                    <p className="text-sm text-yellow-400 font-medium mt-2">R$ 8,75 por peça</p>
                  </div>
                </div>

                <a
                  href="https://todameiga.com/cart/49809831919894:1"
                  className="block w-full text-center px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black rounded-xl hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 shadow-lg hover:shadow-yellow-500/25 font-bold"
                >
                  Escolher Kit Princesa 16 Pulseiras
                </a>

                <div className="text-center mt-4">
                  <span className="text-sm text-gray-400">Restam apenas 45 unidades</span>
                </div>
              </div>
            </div>

            {/* Kit Princesa 16 */}
            <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-600 overflow-hidden group hover:border-gray-500 transition-all duration-500">
              {/* Badge */}
              <div className="absolute top-6 left-6 z-10 bg-gray-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                Mais Acessível
              </div>

              <div className="aspect-square relative overflow-hidden">
                <Image
                  src="/images/kitprincesa16.png?height=600&width=600"
                  alt="Kit Princesa 16 - pulseiras banhadas a prata"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>

              <div className="p-8">
                <div className="text-center mb-8">
                  <h3 className={`${crimson.className} text-3xl font-bold mb-3 text-white`}>Kit Princesa 16</h3>
                  <p className="text-gray-300 text-lg">16 pulseiras banhadas a prata refinada</p>
                </div>

                <div className="space-y-4 mb-8">
                  {[
                    "16 peças banhadas a prata refinada",
                    "Designs mais populares",
                    "Estojo compacto elegante",
                    "Garantia total de 90 dias",
                    "Frete grátis para todo Brasil",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center">
                      <Check className="h-5 w-5 text-yellow-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="text-center mb-8">
                  <div className="bg-black/50 border border-gray-600 rounded-xl p-6">
                    <div className="flex items-center justify-center gap-3 mb-2">
                      <span className="text-gray-400 line-through text-lg">R$ 179,90</span>
                      <span className="bg-gray-500 text-white px-2 py-1 rounded text-sm font-bold">15% OFF</span>
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">R$ 139,90</div>
                    <p className="text-gray-300">ou 12x de R$ 11,50 sem juros</p>
                    <p className="text-sm text-yellow-400 font-medium mt-2">R$ 8,75 por peça</p>
                  </div>
                </div>

                <a
                  href="https://todameiga.com/cart/49809831952662:1"
                  className="block w-full text-center px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black rounded-xl hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 shadow-lg hover:shadow-yellow-500/25 font-bold"
                >
                  Escolher Kit Princesa 16 Pulseiras
                </a>

                <div className="text-center mt-4">
                  <span className="text-sm text-gray-400">Restam apenas 52 unidades</span>
                </div>
              </div>
            </div>
          </div>

          {/* Combo 16 Peças */}
          <div className="mt-20 max-w-4xl mx-auto bg-gradient-to-r from-gray-700 to-gray-600 text-white rounded-2xl p-12 text-center">
            <h3 className={`${crimson.className} text-3xl font-bold mb-4`}>Combo Essencial 16 + 16</h3>
            <p className="text-xl mb-8 opacity-90">
              32 pulseiras no total + desconto adicional + frete grátis garantido
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
              <div className="text-xl font-semibold">Kit Princesa 16 Ouro + Prata</div>
              <div className="text-4xl font-bold">R$ 278,90</div>
              <div className="bg-black text-yellow-400 px-4 py-2 rounded-full font-bold">Economize R$ 12,90</div>
            </div>
            <a
              href="https://todameiga.com/cart/49809831919894:1,49809831952662:1"
              className="inline-flex items-center justify-center px-10 py-4 bg-black text-yellow-400 rounded-xl hover:bg-gray-900 transition-all duration-300 shadow-lg font-bold text-lg"
            >
              Adquirir Combo 32 Peças
            </a>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-black relative overflow-hidden">
        {/* Golden Background Effects */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-yellow-500/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-yellow-500/20 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-yellow-500/10 to-transparent rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto px-6 md:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className={`${crimson.className} text-4xl md:text-5xl font-bold mb-6 text-white`}>
              Compare as Coleções
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Descubra qual kit se adapta melhor ao seu estilo e necessidades
            </p>
          </div>

          <ComparisonTable />

          <div className="text-center mt-16">
            <div className="inline-flex flex-col items-center bg-yellow-500/20 border border-yellow-500/30 rounded-xl px-4 md:px-8 py-6 mb-8 backdrop-blur-sm max-w-full">
              <div className="flex items-center mb-2">
                <Clock className="h-5 w-5 md:h-6 md:w-6 mr-2 md:mr-4 text-yellow-400" />
                <p className="text-yellow-300 font-bold text-base md:text-lg">Esta oferta expira em:</p>
              </div>
              <div className="w-full overflow-x-auto">
                <div className="min-w-fit">
                  <CountdownTimer />
                </div>
              </div>
            </div>
            <br />
            <a
              href="#kits"
              className="inline-flex items-center justify-center px-8 md:px-12 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black rounded-xl hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 shadow-lg hover:shadow-yellow-500/25 font-bold text-base md:text-lg"
            >
              <ShoppingBag className="mr-3 h-5 w-5 md:h-6 md:w-6" />
              Garantir Meu Desconto Agora
            </a>
          </div>
        </div>
      </section>

      {/* Style & Inspiration */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
        {/* Golden Background Effects */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-br from-yellow-500/40 to-yellow-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-tr from-yellow-500/30 to-transparent rounded-full blur-3xl animate-pulse delay-700"></div>
          <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-gradient-to-r from-yellow-500/25 to-transparent rounded-full blur-3xl animate-pulse delay-300"></div>
        </div>

        <div className="container mx-auto px-6 md:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className={`${crimson.className} text-4xl md:text-5xl font-bold mb-6 text-white`}>
              Inspire-se e Transforme Seu Estilo
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Veja como nossas pulseiras podem elevar qualquer look, do casual ao mais sofisticado
            </p>
          </div>

          <StyleCarousel />

          {/* Transformation Promise */}
          <div className="mt-20 max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 backdrop-blur-sm border border-yellow-500/30 rounded-2xl p-12">
              <h3 className={`${crimson.className} text-3xl font-bold mb-6 text-white`}>
                Sua Transformação Começa Hoje
              </h3>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Junte-se a milhares de mulheres que já descobriram o poder da elegância autêntica. Cada pulseira é uma
                declaração de estilo, uma expressão da sua personalidade única.
              </p>

              <div className="grid md:grid-cols-3 gap-8 mb-10">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="h-8 w-8 text-black" />
                  </div>
                  <h4 className="font-bold text-white mb-2">Versatilidade</h4>
                  <p className="text-gray-300 text-sm">Do trabalho ao jantar especial</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-black" />
                  </div>
                  <h4 className="font-bold text-white mb-2">Qualidade</h4>
                  <p className="text-gray-300 text-sm">Durabilidade de até 2 anos</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-black" />
                  </div>
                  <h4 className="font-bold text-white mb-2">Exclusividade</h4>
                  <p className="text-gray-300 text-sm">Designs únicos e atemporais</p>
                </div>
              </div>

              <a
                href="#kits"
                className="inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black rounded-xl hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 shadow-lg hover:shadow-yellow-500/25 font-bold text-lg"
              >
                <Sparkles className="mr-3 h-6 w-6" />
                Iniciar Minha Transformação
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Only Videos */}
      <section className="py-24 bg-black relative overflow-hidden">
        {/* Golden Background Effects */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_25%_25%,rgba(234,179,8,0.15),transparent_50%)]"></div>
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_75%_75%,rgba(234,179,8,0.1),transparent_50%)]"></div>
        </div>

        <div className="container mx-auto px-6 md:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className={`${crimson.className} text-4xl md:text-5xl font-bold mb-6 text-white`}>
              O Que Nossas Clientes Dizem
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Mais de 5.000 mulheres já transformaram seu estilo conosco
            </p>
          </div>

          {/* Video Testimonials Only */}
          <div className="mb-16">
            <h3 className={`${crimson.className} text-2xl font-bold mb-12 text-center text-white`}>
              Depoimentos Reais em Vídeo
            </h3>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto justify-items-center">
              {[1, 2, 3].map((index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="relative aspect-[9/16] bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-yellow-500/30 hover:border-yellow-500/50 transition-all duration-300">
                    {/* Video element */}
                    <video className="w-full h-full object-cover" controls preload="metadata" playsInline>
                      <source src={`/videos/depoimento-${index + 1}.mp4`} type="video/mp4" />
                      Seu navegador não suporta vídeos.
                    </video>

                    {/* Rating Stars */}
                    <div className="absolute top-4 right-4 z-10">
                      <div className="bg-black/80 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center bg-yellow-500/20 border border-yellow-500/30 rounded-xl px-8 py-6 mb-8 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <Star className="h-6 w-6 text-yellow-400 fill-yellow-400" />
                <span className="text-3xl font-bold text-white">4.9/5</span>
                <Star className="h-6 w-6 text-yellow-400 fill-yellow-400" />
              </div>
              <div className="ml-6 text-left">
                <p className="text-white font-bold text-lg">Avaliação excepcional</p>
                <p className="text-gray-300">Baseado em 2.847 avaliações verificadas</p>
              </div>
            </div>
            <br />
            <a
              href="#kits"
              className="inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black rounded-xl hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 shadow-lg hover:shadow-yellow-500/25 font-bold text-lg"
            >
              <Star className="mr-3 h-6 w-6" />
              Quero Esta Experiência Também
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
        {/* Golden Background Effects */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-yellow-500/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-64 h-64 bg-gradient-to-l from-yellow-500/25 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-6 md:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className={`${crimson.className} text-4xl md:text-5xl font-bold mb-6 text-white`}>
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Esclarecemos suas principais dúvidas sobre nossos produtos e serviços
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Faq />
          </div>

          {/* Support Section */}
          <div className="mt-20 max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 backdrop-blur-sm border border-yellow-500/30 rounded-2xl p-10 text-center">
              <h3 className={`${crimson.className} text-2xl font-bold mb-4 text-white`}>Ainda tem dúvidas?</h3>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                Nossa equipe de especialistas está pronta para ajudar você a escolher a coleção perfeita. Atendimento
                personalizado e suporte completo.
              </p>

              <div className="mb-8">
                <div className="bg-black/50 rounded-xl p-6 border border-yellow-500/20">
                  <h4 className="font-bold text-white mb-2">WhatsApp</h4>
                  <p className="text-gray-300 text-sm mb-4">Resposta imediata</p>
                  <a
                    href="#whatsapp"
                    className="inline-flex items-center justify-center w-full py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black rounded-lg hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 font-semibold"
                  >
                    Falar no WhatsApp
                  </a>
                </div>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black rounded-xl hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 shadow-lg hover:shadow-yellow-500/25 font-bold"
              >
                Falar com Especialista Agora
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-24 bg-black relative overflow-hidden">
        {/* Golden Background Effects */}
        <div className="absolute inset-0 opacity-8">
          <div className="absolute top-10 left-1/4 w-72 h-72 bg-gradient-to-r from-yellow-500/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-gradient-to-l from-yellow-500/15 to-transparent rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>

        <div className="container mx-auto px-6 md:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-20">
              <h2 className={`${crimson.className} text-4xl md:text-5xl font-bold mb-6 text-white`}>
                Compre com Total Segurança
              </h2>
              <div className="inline-flex items-center bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-8 py-4 rounded-xl text-xl font-bold mb-6">
                <Shield className="h-6 w-6 mr-3" />
                Garantia de 90 dias ou seu dinheiro de volta
              </div>
              <p className="text-xl text-gray-300 leading-relaxed">
                Experimente nossas pulseiras com total tranquilidade. Satisfação garantida ou reembolso integral.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center bg-gradient-to-br from-gray-900 to-black border border-yellow-500/30 p-8 rounded-2xl">
  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
    <Shield className="h-8 w-8 text-black" />
  </div>
  <h3 className="font-semibold mb-3 text-lg text-white">Compra Segura</h3>
  <p className="text-gray-300">
    Pagamento processado com segurança pelo <strong>Mercado Pago</strong>, a maior plataforma da América Latina.
  </p>
</div>

              <div className="text-center bg-gradient-to-br from-gray-900 to-black border border-yellow-500/30 p-8 rounded-2xl">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Truck className="h-8 w-8 text-black" />
                </div>
                <h3 className="font-semibold mb-3 text-lg text-white">Frete Grátis</h3>
                <p className="text-gray-300">Acima de R$ 199 para todo Brasil</p>
              </div>

              <div className="text-center bg-gradient-to-br from-gray-900 to-black border border-yellow-500/30 p-8 rounded-2xl">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Clock className="h-8 w-8 text-black" />
                </div>
                <h3 className="font-semibold mb-3 text-lg text-white">Entrega Expressa</h3>
                <p className="text-gray-300">3 a 7 dias úteis</p>
              </div>

              <div className="text-center bg-gradient-to-br from-gray-900 to-black border border-yellow-500/30 p-8 rounded-2xl">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-black" />
                </div>
                <h3 className="font-semibold mb-3 text-lg text-white">Suporte VIP</h3>
                <p className="text-gray-300">Atendimento especializado</p>
              </div>
            </div>

            <div className="text-center">
              <a
                href="#kits"
                className="inline-flex items-center justify-center px-12 py-5 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black rounded-2xl hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 shadow-xl text-xl font-bold"
              >
                <Shield className="mr-3 h-6 w-6" />
                Comprar com Garantia Total
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        {/* Golden Background Effects */}
        <div className="absolute inset-0 opacity-12">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_40%_40%,rgba(234,179,8,0.2),transparent_60%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_60%_60%,rgba(234,179,8,0.15),transparent_60%)]"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-yellow-500/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="container mx-auto px-6 md:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className={`${crimson.className} text-4xl md:text-6xl font-bold mb-8 text-white`}>
              Última Oportunidade
            </h2>

            <div className="bg-yellow-500/20 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-yellow-500/30">
              <p className="text-xl font-semibold mb-6 text-white">Oferta especial expira em:</p>
              <CountdownTimer />
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-yellow-500/30">
                <h3 className="text-2xl font-bold mb-4 text-white">Kit 32 Peças</h3>
                <div className="text-3xl font-bold mb-2 text-yellow-400">A partir de R$ 189,90</div>
                <div className="text-lg text-gray-300 mb-6">Máxima versatilidade</div>
                <a
                  href="https://todameiga.com/checkouts/cn/Z2NwLXVzLWVhc3QxOjAxSlhWNjY4UlpRMlkzRDFUN1pQWDc4WFQ2?cart_link_id=t5Pj2vqx"
                  className="block w-full py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black rounded-xl hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 font-bold"
                >
                  Ver Kit 32 Peças
                </a>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-gray-600">
                <h3 className="text-2xl font-bold mb-4 text-white">Kit 16 Peças</h3>
                <div className="text-3xl font-bold mb-2 text-white">A partir de R$ 139,90</div>
                <div className="text-lg text-gray-300 mb-6">Entrada perfeita</div>
                <a
                  href="https://todameiga.com/checkouts/cn/Z2NwLXVzLWVhc3QxOjAxSlhWNjY4UlpRMlkzRDFUN1pQWDc4WFQ2?cart_link_id=vkVEJCo3"
                  className="block w-full py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black rounded-xl hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 font-bold"
                >
                  Ver Kit 16 Peças
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl p-8 mb-12">
              <h3 className="text-2xl font-bold mb-4 text-black">Combos Especiais</h3>
              <div className="text-4xl font-bold mb-4 text-black">A partir de R$ 279,90</div>
              <p className="text-lg mb-6 text-black/80">Dois kits + Frete grátis + Desconto adicional</p>
              <a
                href="https://todameiga.com/products/kit-pulseiras-de-argolas-gold-egypt-banho-de-ouro-ou-prata-refinada?variant=49809831919894"
                className="inline-flex items-center justify-center px-10 py-4 bg-black text-yellow-400 rounded-xl hover:bg-gray-900 transition-all duration-300 shadow-lg font-bold text-lg"
              >
                Ver Todos os Combos
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-lg text-gray-300">
              <div className="flex items-center">
                <Shield className="h-5 w-5 mr-2 text-yellow-400" />
                <span>Garantia de 90 dias</span>
              </div>
              <div className="flex items-center">
                <Truck className="h-5 w-5 mr-2 text-yellow-400" />
                <span>Frete grátis</span>
              </div>
              <div className="flex items-center">
                <Star className="h-5 w-5 mr-2 text-yellow-400" />
                <span>4.9/5 estrelas</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2 text-yellow-400" />
                <span>+5.000 clientes</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
