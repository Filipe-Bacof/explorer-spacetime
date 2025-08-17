import Aside from "@/components/Aside";
import Memory from "@/components/Memory";
import { Memory as MemoryInterface } from "@/interfaces/Memory.interface";

export default function Home() {
  const Memories2023: MemoryInterface[] = [
    {
      date: "29 de Março de 2025",
      title: "Engenheiro de Software formado!",
      src: "/2024/29-03-2025.jpg",
      alt: "Foto com a família materna trajando uma toga",
      description:
        "Depois de estudar arduamente para me tornar um engenheiro de software, comemorei minha conquista tirando algumas fotos para recordação desse momento único, depois de ter investido o preço de um corsa para pagar minha mensalidade, nada mais justo do que alugar uma toga para tirar fotos em família.",
    },
    {
      date: "22 de Fevereiro de 2025",
      title: "Casamento no museu",
      src: "/2024/22-02-2025.jpg",
      alt: "Foto com os noivos",
      description:
        "Que Deus abençoe o casamento dos nossos amigos José Mario Reisswitz e Juliana Siebert, ficamos muito felizes de ter participado desse momento tão especial para vocês.",
    },
    {
      date: "13 de Dezembro de 2024",
      title: "Festa da firma",
      src: "/2024/13-12-2024.jpg",
      alt: "Contraternização entre os colaboradores da PariPassu",
      description:
        "Nessa semana eu estava em Florianópolis presencialmente para participar da festa de final de ano da PariPassu.",
    },
    {
      date: "26 de Outubro de 2024",
      title: "Aniversário Mohammed Edo",
      src: "/2024/26-10-2024.jpg",
      alt: "Amigos trajados profanamente",
      description:
        "Simplesmente a festa de aniversário mais divertida que já fui, temática árabe, sacrificamos o Paulo Ruaro como oferenda para o aniversariante Eduardo Serker.",
    },
    {
      date: "01 de Janeiro de 2025",
      title: "Virada do ano na casa nova do Rafael e Deia",
      src: "/2024/01-01-2025.jpg",
      alt: "Tomando alguns drinks entre amigos antes da meia noite",
      description:
        "Pouco antes da meia noite, estávamos entre amigos nos divertindo e comendo alguns pratos gastronomicos exóticos.",
    },
    {
      date: "18 de Julho de 2024",
      title: "Os guri são do rock",
      src: "/2024/18-07-2024.jpg",
      alt: "Bacof com a guitarra e Mahl com o baixo",
      description:
        "Outra noite como muitas outras que fizemos, é sempre muito divertido quando nos reunimos para tocar e beber.",
    },
  ];

  return (
    <>
      <Aside date="16/08/2025" />

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
