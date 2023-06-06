import Image from 'next/image'
import DieliComGato from '../../public/19-08-2022.jpg'
import BebendoComRafa from '../../public/25-03-2022.jpg'

export default function Home() {
  return (
    <nav className="p-16">
      <a
        className="flex flex-col gap-4 no-underline"
        href="https://portifolio-filipe-bacof.vercel.app/"
        target="_blank"
        rel="noreferrer"
      >
        <small className="text-xs text-gray-100">19 de Agosto de 2022</small>
        <h1 className="text-2xl text-gray-50">
          Anubis no seu primeiro dia conosco
        </h1>
        <Image
          className="h-[280px] w-full rounded-lg object-cover"
          src={DieliComGato}
          alt="Dieli segurando o Anubis"
        />
        <p className="text-lg text-gray-100">
          Neste dia, Dieli e eu fomos adotar nosso gato. Ele estava extremamente
          assustado inicialmente, mas não demorou muito para que ele começasse a
          explorar a casa e encontrar seu lugar favorito: a janela, de onde ele
          podia observar os pássaros e os gatos dos vizinhos.
        </p>
      </a>

      <a
        className="flex flex-col gap-4 no-underline"
        href="https://portifolio-filipe-bacof.vercel.app/"
        target="_blank"
        rel="noreferrer"
      >
        <small className="text-xs text-gray-100">25 de Março de 2022</small>
        <h1 className="text-2xl text-gray-50">Bacof e Mahl no Mendes Pub</h1>
        <Image
          className="h-[280px] w-full rounded-lg object-cover"
          src={BebendoComRafa}
          alt="Eu e o Rafael brindando um chopp"
        />
        <p className="text-lg text-gray-100">
          Foi um imenso prazer desenvolver uma amizade com essa pessoa especial.
          As risadas e as conversas que compartilhamos foram inesquecíveis. Além
          de ser um ótimo amigo, também é um programador excepcional.
          <a href="https://youtu.be/cePCgZvLETQ?t=75">
            Espero beber contigo no bar que há lá do outro lado.
          </a>
        </p>
      </a>
    </nav>
  )
}
