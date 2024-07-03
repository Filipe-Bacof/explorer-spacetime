import Aside from "@/components/Aside";
import Memory from "@/components/Memory";
import { Memory as MemoryInterface } from "@/interfaces/Memory.interface";

export default function Home() {
  const Memories2023: MemoryInterface[] = [
    {
      date: "12 de Junho de 2024",
      title: "The Dev Conf 2024",
      src: "/2023/12-06-2024.jpg",
      alt: "Trocando as cordas do baixo no intervalo",
      description:
        "Durante o evento The Developers Conference, Rafael e eu estavamos muito empolgados tanto com o conteúdo de Blockchain e Web3, quanto com as cordas de baixo que trocamos para treinar um pouco no intervalo do evento, como é um evento presencial e também remoto e participamos apenas do remoto, esse foi o equivalente a fazer um networking hahaha",
    },
    {
      date: "22 de Junho de 2024",
      title: "Venom no seu primeiro dia conosco",
      src: "/2023/22-06-2024.jpg",
      alt: "Venom foi o nome para o nosso filhotinho adotado",
      description:
        "Anubis, nosso gato primogênito acabou de passar pela castração, e foi contemplando com um irmãozinho para dividir os brinquedos, comida, brincadeiras e o espaço super apertado de uma cama queen size, porém se acostumaram super rapido com a companhia um do outro, apesar do Anubis ter ficado super zangado no começo.",
    },
    {
      date: "07 de Novembro de 2023",
      title: "Finalização de projetos",
      src: "/2023/07-11-2023.jpg",
      alt: "Brindando Amstel após concluir projetos importantes",
      description:
        "Nossas iniciativas para nos tornarmos desenvolvedores mais competentes e ricos em conhecimento nos levou a criar alguns projetos juntos e compartilhar soluções, impulsionando a carreira de ambos, sou muito grato pela sua amizade!",
    },
    {
      date: "17 de Março de 2023",
      title: "Show da banda Big Eddie",
      src: "/2023/17-03-2023.jpg",
      alt: "Membros do BlackZone Reunidos para uma foto",
      description:
        "Neste dia fui prestigiar a banda Big Eddie, cover de Iron Maiden, do meu querido amigo Paulo Ruaro, foi o dia em que eu conheci o restante dos membros do grupo de amigos que conversava diariamente e também o momento que conheci O_CARA_DO_METAL, que substituiu o guitarrista da banda Sexta Feira 13 (cover de Black Sabbath) devido problemas internos.",
    },
    {
      date: "31 de Outubro de 2023",
      title: "JSON no Halloween",
      src: "/2023/31-10-2023.jpg",
      alt: "Máscara do Jason e a Camiseta do Javascript e ao lado eu Fantasiado de JSON, parodiando o filme Jason",
      description:
        "O que acontece quando um programador JavaScript gosta de filmes de terror? Ele cria uma fantasia que só outros programadores entendem. Java Script Object Notation assustando pessoas no dia das bruxas.",
    },
    {
      date: "20 de Setembro de 2022",
      title: "Costelão na Revolução Farroupilha",
      src: "/2023/20-09-2022.jpg",
      alt: "Fotos tiradas no evento familiar de 2022 para celebrar o 20 de setembro",
      description:
        "Que dia sensacional, além do ambiente familiar aconchegante, foi um prazer vestir uma pilcha pela primeira e única vez na vida até agora. Apesar de eu só ter posado para foto em frente a churrasqueira, créditos para o tio Cabeça que assou esse pedaço de tradição.",
    },
  ];

  return (
    <>
      <Aside />

      <nav className="p-[22px] md:overflow-y-scroll md:p-16">
        {Memories2023.map(({ date, title, src, alt, description }) => (
          <Memory
            key={`${src}-${title}`}
            date={date}
            title={title}
            src={src}
            alt={alt}
            description={description}
          />
        ))}
      </nav>
    </>
  );
}
