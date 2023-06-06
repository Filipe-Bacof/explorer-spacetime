import Image from 'next/image'

export default function Home() {
  return (
    <>
      <aside className="flex flex-col items-center justify-center gap-5 border-r border-r-gray-500 bg-stars bg-auto bg-right-top bg-no-repeat">
        <Image
          className=""
          src="/logo.svg"
          alt="Logo do NLW Spacetime"
          width={150}
          height={100}
        />
        <div className="border-gradient-border h-[164px] w-[164px] items-center justify-center rounded-full bg-gradient-background">
          <Image
            className="rounded-full pl-1 pt-1"
            src="/profile.png"
            alt="Logo do NLW Spacetime"
            width={160}
            height={160}
          />
        </div>
        <p className="text-center text-[32px]">
          Cápsula do tempo de
          <br />
          <strong>Filipe Bacof</strong>
        </p>
        <span className="text-[12px] text-gray-200">
          Realizado no dia 06/06/2023
        </span>
      </aside>
      <nav className="overflow-y-scroll p-16">
        <a
          className="mb-16 flex flex-col gap-4 no-underline"
          href="https://portifolio-filipe-bacof.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          <small className="text-xs text-gray-100">19 de Agosto de 2022</small>
          <h1 className="text-2xl text-gray-50">
            Anubis no seu primeiro dia conosco
          </h1>
          <Image
            className="rounded-lg object-cover"
            src="/19-08-2022.jpg"
            alt="Dieli segurando o Anubis"
            height={280}
            width={1000}
            layout="responsive"
          />
          <p className="text-lg text-gray-100">
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
          <small className="text-xs text-gray-100">25 de Março de 2022</small>
          <h1 className="text-2xl text-gray-50">Bacof e Mahl no Mendes Pub</h1>
          <Image
            className=" rounded-lg object-cover"
            src="/25-03-2022.jpg"
            alt="Eu e o Rafael brindando um chopp"
            height={280}
            width={1000}
            layout="responsive"
          />
          <p className="text-lg text-gray-100">
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
