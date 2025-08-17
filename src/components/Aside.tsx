import Image from "next/image";

type AsideProps = {
  date: string;
};

export default function Aside({ date }: AsideProps) {
  return (
    <aside className="flex flex-col items-center justify-center gap-5 bg-stars bg-auto bg-right-top bg-no-repeat px-3 py-8 md:border-r md:border-r-gray-500">
      <Image
        className="animate-enter"
        src="/logo.svg"
        alt="Logo do NLW Spacetime"
        width={150}
        height={100}
      />
      <a
        className="h-[164px] w-[164px] no-underline"
        href="https://bacof.com.br"
        target="_blank"
        rel="noreferrer"
      >
        <div className="border-gradient-border h-[164px] w-[164px] animate-enter items-center justify-center rounded-full bg-gradient-background transition-transform duration-300 hover:scale-110">
          <Image
            className="rounded-full pl-1 pt-1"
            src="/profile.jpg"
            alt="minha foto de perfil"
            width={160}
            height={160}
          />
        </div>
      </a>
      <p className="animate-enter cursor-default text-center text-[24px] md:text-[32px]">
        Cápsula do tempo de
        <br />
        <strong>Filipe Bacof</strong>
      </p>
      <span className="animate-enter cursor-default text-[14px] text-gray-200 md:text-[12px]">
        Realizado no dia {date}
      </span>
    </aside>
  );
}
