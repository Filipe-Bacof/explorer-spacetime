import Image from 'next/image'

import './globals.css'

export default function Home() {
  return (
    <>
      <aside className="flex flex-col items-center justify-center gap-5 bg-stars bg-auto bg-right-top bg-no-repeat px-3 py-8 md:border-r md:border-r-gray-500">
        <Image
          className="animate-enter"
          src="/logo.svg"
          alt="Logo do NLW Spacetime"
          width={150}
          height={100}
        />
        <div className="h-[164px] w-[164px]">
          <div className="border-gradient-border h-[164px] w-[164px] animate-enter items-center justify-center rounded-full bg-gradient-background transition-transform duration-300 hover:scale-110">
            <Image
              className="rounded-full pl-1 pt-1"
              src="/profile.jpg"
              alt="minha foto de perfil"
              width={160}
              height={160}
            />
          </div>
        </div>
        <p className="animate-enter text-center text-[24px] md:text-[32px]">
          Cápsula do tempo de
          <br />
          <strong>Filipe Bacof</strong>
        </p>
        <span className="animate-enter text-[14px] text-gray-200 md:text-[12px]">
          Realizado no dia 06/06/2023
        </span>
      </aside>

      <nav className="p-[22px] md:overflow-y-scroll md:p-16">
        <a
          className="mb-16 flex flex-col gap-4 no-underline"
          href="https://portifolio-filipe-bacof.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          <small className="text-[14px] text-gray-100 md:text-xs">
            19 de Agosto de 2022
          </small>
          <h1 className="text-xl text-gray-50 md:text-2xl">
            Anubis no seu primeiro dia conosco
          </h1>
          <div className="h-[280px] w-full overflow-hidden rounded-lg">
            <Image
              className="rounded-lg object-cover transition-transform duration-300 hover:scale-110"
              src="/19-08-2022.jpg"
              alt="Dieli segurando o Anubis"
              height={280}
              width={1000}
              layout="responsive"
            />
          </div>
          <p className="text-md text-gray-100 md:text-lg">
            Neste dia, Dieli e eu fomos adotar nosso gato. Ele estava
            extremamente assustado inicialmente, mas não demorou muito para que
            ele começasse a explorar a casa e encontrar seu lugar favorito: a
            janela, de onde ele podia observar os pássaros e os gatos dos
            vizinhos.
          </p>
        </a>

        <a
          className="mb-16 flex flex-col gap-4 no-underline"
          href="https://portifolio-filipe-bacof.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          <small className="text-[14px] text-gray-100 md:text-xs">
            25 de Março de 2022
          </small>
          <h1 className="text-xl text-gray-50 md:text-2xl">
            Bacof e Mahl no Mendes Pub
          </h1>
          <div className="h-[280px] w-full overflow-hidden rounded-lg">
            <Image
              className="rounded-lg object-cover transition-transform duration-300 hover:scale-110"
              src="/25-03-2022.jpg"
              alt="Eu e o Rafael brindando um chopp"
              height={280}
              width={1000}
              layout="responsive"
            />
          </div>
          <p className="text-md text-gray-100 md:text-lg">
            Foi um imenso prazer desenvolver uma amizade com essa pessoa
            especial. As risadas e as conversas que compartilhamos foram
            inesquecíveis. Além de ser um ótimo amigo, também é um programador
            excepcional. Espero beber contigo no bar que há lá do outro lado.
            {/* <a href="https://youtu.be/cePCgZvLETQ?t=75"> </a> */}
          </p>
        </a>
      </nav>
    </>
  )
}
