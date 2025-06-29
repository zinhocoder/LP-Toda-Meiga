"use client"

import { useState } from "react"
import { ChevronDown, Check } from "lucide-react"
import { Crimson_Text } from "next/font/google"

const crimson = Crimson_Text({ subsets: ["latin"], weight: ["400", "600", "700"] })

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "Qual a durabilidade das pulseiras?",
      answer:
        "Nossas pulseiras são produzidas com materiais de alta qualidade e possuem banho de ouro 18k ou prata refinada. Com os cuidados adequados, a durabilidade média é de 2 anos, mantendo o brilho e a cor originais. Oferecemos também dicas de cuidados para maximizar a vida útil das suas peças.",
    },
    {
      question: "As pulseiras causam alergia?",
      answer:
        "Nossas pulseiras são hipoalergênicas e livres de níquel, o que reduz significativamente o risco de reações alérgicas. Utilizamos apenas materiais de primeira qualidade em nossos banhos. No entanto, pessoas com sensibilidade extrema a metais devem testar o produto antes do uso prolongado.",
    },
    {
      question: "Como cuidar das minhas pulseiras?",
      answer:
        "Para manter suas pulseiras sempre bonitas, recomendamos: evitar contato com perfumes, cremes e produtos químicos; guardar em local seco, limpar com pano macio e seco; não usar durante banho, piscina ou atividades físicas intensas. Seguindo essas dicas, suas peças manterão o brilho por muito mais tempo.",
    },
    {
      question: "Qual o prazo de entrega?",
      answer:
        "O prazo de entrega varia de acordo com a sua localização. Após a confirmação do pagamento, enviamos em até 24h úteis. O prazo médio de entrega é de 7 a 14 dias úteis para capitais e regiões metropolitanas, e 7 a 15 dias úteis para demais localidades. Oferecemos rastreamento completo do pedido.",
    },
    {
      question: "Como funciona a garantia de 90 dias?",
      answer:
        "Oferecemos garantia de satisfação de 90 dias a partir do recebimento do produto. Se você não ficar 100% satisfeita com o produto, pode solicitar a devolução e reembolso integral do valor pago. O produto deve ser devolvido nas mesmas condições em que foi recebido, com embalagem original e sem sinais de uso.",
    },
    {
      question: "Qual a diferença entre Kit Rainha e Kit Princesa?",
      answer:
        "A principal diferença está na quantidade de pulseiras, Kit Princesa = 16 peças, Kit Rainha = 32 unidades.",
    },
    {
      question: "Vocês oferecem garantia contra defeitos?",
      answer:
        "Sim, além da garantia de satisfação de 7 dias, oferecemos garantia de 90 dias contra defeitos de fabricação. Isso inclui problemas como descascamento prematuro do banho, quebra de fechos ou outros defeitos que não sejam causados por uso inadequado. Nossa garantia demonstra nossa confiança na qualidade dos produtos.",
    },
    {
      question: "Como posso acompanhar meu pedido?",
      answer:
        "Após a confirmação do pagamento, você receberá um código de rastreamento por e-mail e WhatsApp. Com esse código, você pode acompanhar o status da entrega em tempo real através do site dos Correios ou da transportadora responsável. Nossa equipe também está disponível para esclarecer qualquer dúvida sobre o andamento do seu pedido.",
    },
  ]

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-sm border border-yellow-500/20 rounded-xl overflow-hidden hover:border-yellow-500/40 transition-all duration-300"
        >
          <button
            onClick={() => toggleFaq(index)}
            className="flex justify-between items-center w-full text-left p-6 hover:bg-yellow-500/5 transition-all duration-300"
          >
            <h3 className={`${crimson.className} text-lg font-semibold text-white pr-4`}>{faq.question}</h3>
            <div className="flex-shrink-0">
              <ChevronDown
                className={`h-6 w-6 text-yellow-400 transition-transform duration-300 ${
                  openIndex === index ? "transform rotate-180" : ""
                }`}
              />
            </div>
          </button>
          <div
            className={`transition-all duration-500 ease-in-out ${
              openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
            }`}
          >
            <div className="px-6 pb-6">
              <div className="border-t border-yellow-500/20 pt-4">
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Trust Indicators */}
      <div className="mt-12 grid md:grid-cols-3 gap-6">
        <div className="flex items-center justify-center bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 backdrop-blur-sm border border-yellow-500/30 rounded-xl p-4">
          <Check className="h-5 w-5 text-yellow-400 mr-3" />
          <span className="text-white font-medium">Garantia de 90 dias</span>
        </div>
        <div className="flex items-center justify-center bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 backdrop-blur-sm border border-yellow-500/30 rounded-xl p-4">
          <Check className="h-5 w-5 text-yellow-400 mr-3" />
          <span className="text-white font-medium">Suporte especializado</span>
        </div>
        <div className="flex items-center justify-center bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 backdrop-blur-sm border border-yellow-500/30 rounded-xl p-4">
          <Check className="h-5 w-5 text-yellow-400 mr-3" />
          <span className="text-white font-medium">Entrega rastreada</span>
        </div>
      </div>
    </div>
  )
}
