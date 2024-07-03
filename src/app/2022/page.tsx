import Aside from "@/components/Aside";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Aside date="06/06/2023" />

      <nav className="p-[22px] md:overflow-y-scroll md:p-16">
        <div className="mb-16 flex flex-col gap-4">
          <small className="cursor-default text-[14px] text-gray-100 md:text-xs">
            11 de Janeiro de 2021
          </small>
          <h1 className="cursor-default text-xl text-gray-50 md:text-2xl">
            Meu Primeiro SSD
          </h1>
          <div className="h-[280px] w-full overflow-hidden rounded-lg">
            <Image
              className="rounded-lg object-cover transition-transform duration-300 hover:scale-110"
              src="/2022/11-01-2021.jpg"
              alt="Primeiro SSD que eu coloquei no meu notebook"
              height={280}
              width={1000}
              layout="responsive"
            />
          </div>
          <p className="text-md cursor-default text-gray-100 md:text-lg">
            Eu mesmo fiz a troca do meu primeiro SSD. Instalei um Kingston de
            120 GB, mas atualmente estou utilizando um SSD do tipo M.2 com
            capacidade de 480 GB. Essa atualização me permitiu liberar slot do
            disco rígido. Além disso, adicionei um HD de 1 TB para garantir
            ainda mais espaço disponível.
          </p>
        </div>

        <div className="mb-16 flex flex-col gap-4">
          <small className="cursor-default text-[14px] text-gray-100 md:text-xs">
            25 de Março de 2022
          </small>
          <h1 className="cursor-default text-xl text-gray-50 md:text-2xl">
            Bacof e Mahl no Mendes Pub
          </h1>
          <div className="h-[280px] w-full overflow-hidden rounded-lg">
            <Image
              className="rounded-lg object-cover transition-transform duration-300 hover:scale-110"
              src="/2022/25-03-2022.jpg"
              alt="Eu e o Rafael brindando um chopp"
              height={280}
              width={1000}
              layout="responsive"
            />
          </div>
          <p className="text-md cursor-default text-gray-100 md:text-lg">
            Foi um imenso prazer desenvolver uma amizade com essa pessoa
            especial. As risadas e as conversas que compartilhamos foram
            inesquecíveis. Além de ser um ótimo amigo, também é um programador
            excepcional.&nbsp;
            <a
              href="https://youtu.be/cePCgZvLETQ?t=75"
              className="cursor-pointer underline"
            >
              Espero beber contigo no bar que há lá do outro lado.
            </a>
          </p>
        </div>

        <div className="mb-16 flex flex-col gap-4">
          <small className="cursor-default text-[14px] text-gray-100 md:text-xs">
            19 de Agosto de 2022
          </small>
          <h1 className="cursor-default text-xl text-gray-50 md:text-2xl">
            Anubis no seu primeiro dia conosco
          </h1>
          <div className="h-[280px] w-full overflow-hidden rounded-lg">
            <Image
              className="rounded-lg object-cover transition-transform duration-300 hover:scale-110"
              src="/2022/19-08-2022.jpg"
              alt="Dieli segurando o Anubis"
              height={280}
              width={1000}
              layout="responsive"
            />
          </div>
          <p className="text-md cursor-default text-gray-100 md:text-lg">
            Neste dia, Dieli e eu fomos adotar nosso gato. Ele estava
            extremamente assustado inicialmente, mas não demorou muito para que
            ele começasse a explorar a casa e encontrar seu lugar favorito: a
            janela, de onde ele podia observar os pássaros e os gatos dos
            vizinhos.
          </p>
        </div>

        <div className="mb-16 flex flex-col gap-4">
          <small className="cursor-default text-[14px] text-gray-100 md:text-xs">
            12 de Dezembro de 2017
          </small>
          <h1 className="cursor-default text-xl text-gray-50 md:text-2xl">
            Instrumentos musicais antigos
          </h1>
          <div className="h-[280px] w-full overflow-hidden rounded-lg">
            <Image
              className="rounded-lg object-cover transition-transform duration-300 hover:scale-110"
              src="/2022/12-12-2017.jpg"
              alt="Eu junto com meus instrumentos antigos"
              height={280}
              width={1000}
              layout="responsive"
            />
          </div>
          <p className="text-md cursor-default text-gray-100 md:text-lg">
            Eu tive vários instrumentos musicais ao longo da minha vida, mas
            nunca me apeguei muito a eles. No entanto, gosto de olhar essa foto
            e lembrar como eu tinha facilidade em aprender diferentes
            instrumentos de corda.
          </p>
        </div>

        <div className="mb-16 flex flex-col gap-4">
          <small className="cursor-default text-[14px] text-gray-100 md:text-xs">
            10 de Janeiro de 2022
          </small>
          <h1 className="cursor-default text-xl text-gray-50 md:text-2xl">
            Na praia em família
          </h1>
          <div className="h-[280px] w-full overflow-hidden rounded-lg">
            <Image
              className="rounded-lg object-cover transition-transform duration-300 hover:scale-110"
              src="/2022/10-01-2022.jpg"
              alt="Primeiro SSD que eu coloquei no meu notebook"
              height={280}
              width={1000}
              layout="responsive"
            />
          </div>
          <p className="text-md cursor-default text-gray-100 md:text-lg">
            No meu aniversário de 24 anos, fui para a praia com meu pai, tios e
            primos. Foi uma experiência muito divertida passar o dia à
            beira-mar, mesmo que não tenhamos pescado nada. Guardo ótimas
            lembranças desse momento especial.
          </p>
        </div>
      </nav>
    </>
  );
}
