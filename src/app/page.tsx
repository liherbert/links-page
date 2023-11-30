import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <div className="m-0 flex flex-col items-center justify-center md:flex-row">
        {/* lateral esquerda */}
        <div className="mr-0 flex flex-col w-96 justify-center items-center md:mr-10">
          <div className="bg-fundo-branco bg-center bg-no-repeat bg-contain rounded-full w-52 h-52 mt-12 flex items-center justify-center">
            <div className="border-4 border-white rounded-full w-32 h-32  overflow-hidden shadow-2xl items-center flex flex-row justify-center">
              <Image
                src="/perfil.jpg"
                width={128}
                height={128}
                alt="Imagem de perfil"
              />
            </div>
          </div>
          <h1 className="text-5xl">
            Liherbert <span className="text-red-bt">Artes</span>
          </h1>
          <div>
            <br />
            <p>Olá, Sou Liherbert Lisbôa (Liherbert Artes)</p>
            <br />
            <p className="text-justify">
              Como alguns de vocês já sabem, trabalho com várias áreas, tanto no
              mundo dos games como em web design. Sou Tech Artist em Jogos
              Digitais, Professor na área de TI-software e Jogos Digitais há
              alguns anos.
            </p>
            <br />
            <p className="text-justify">
              Meu foco principal é ajudar a aperfeiçoar a técnica de modelagem
              3D, oferecendo os conhecimentos necessários para que você possa
              criar seus próprios modelos. Além disso, também pretendo ajudá-lo
              a desenvolver seu portfólio, para que você possa atrair novos
              clientes e oportunidades de trabalho.
            </p>
            <br />
            <p className="text-justify">
              Convido você a entrar neste mundo tridimensional, que é amplo e
              bastante conhecido, vamos juntos criar nossos próprios modelos 3D.
              Clique ao lado e conheça mais sobre este mundo fascinante e começe
              sua jornada!
            </p>
            <br />
          </div>
        </div>
        {/* lateral direita links */}
        <div className="flex flex-col w-96 mt-10 justify-items-end md: gap-3 md:mt-52">
          <h2 className="text-center">COMMUNITY</h2>
          <button className="rounded-full text-center drop-shadow-2xl h-10 transition ease-in-out delay-100 bg-red-bt hover:-translate-y-1 hover:scale-110 hover:bg-red-bt-h duration-100 ">
            🏆 3º Competição de modelagem 3D (BREVE)
          </button>

          {/* <button className="rounded-full text-center drop-shadow-2xl h-10 transition ease-in-out delay-100 bg-red-bt hover:-translate-y-1 hover:scale-110  hover:bg-red-bt-h duration-100  ">
            <Link href="https://discord.gg/7xq82T6rb2">
              Liherbert Community
            </Link>
          </button> */}

          <Link href="https://discord.gg/7xq82T6rb2">
            <button className="flex justify-between items-center rounded-full text-center drop-shadow-2xl w-full h-10 transition ease-in-out delay-100 bg-red-bt hover:-translate-y-1 hover:scale-110  hover:bg-red-bt-h duration-100 ">
              <div className="ml-6">
                <Image
                  src="/icon_discord_branco.png"
                  width={28}
                  height={28}
                  alt="Imagem do ícone do instagram"
                />
              </div>
              <div className="w-full pr-12 text-center">
                Liherbert Community
              </div>
            </button>
          </Link>

          <h2 className="text-center"> CURSOS E APOSTILAS</h2>

          <Link href="https://liherbert-lisboa.kpages.online/nova-pagina-612e3323-8d10-4592-8318-14b877df6a3e">
            <button className="flex justify-between items-center rounded-full text-center drop-shadow-2xl w-full h-10 transition ease-in-out delay-100 bg-red-bt hover:-translate-y-1 hover:scale-110  hover:bg-red-bt-h duration-100 ">
              <div className="ml-6">📕</div>
              <div className="w-full pr-12 text-center">
                E-book - Do zero ao 3D Low Poly
              </div>
            </button>
          </Link>

          <h2 className="text-center">PORTFÓLIO</h2>

          <Link href="https://www.artstation.com/liherbert_artes">
            <button className="flex justify-between items-center rounded-full text-center drop-shadow-2xl w-full h-10 transition ease-in-out delay-100 bg-red-bt hover:-translate-y-1 hover:scale-110  hover:bg-red-bt-h duration-100 ">
              <div className="ml-6">
                {" "}
                <Image
                  src="/icon_artstation.png"
                  width={28}
                  height={28}
                  alt="Imagem do ícone do instagram"
                />
              </div>
              <div className="w-full pr-12 text-center">Artstation</div>
            </button>
          </Link>

          <Link href="http://www.instagram.com/pequena_vinganca">
            <button className="flex justify-between items-center rounded-full text-center drop-shadow-2xl w-full h-10 transition ease-in-out delay-100 bg-red-bt hover:-translate-y-1 hover:scale-110  hover:bg-red-bt-h duration-100 ">
              <div className="ml-6">
                {" "}
                <Image
                  className="rounded-md"
                  src="/icon_pequena_vinganca.jpg"
                  width={28}
                  height={28}
                  alt="Imagem do ícone do instagram"
                />
              </div>
              <div className="w-full pr-12 text-center">
                Jogo em Desenvolvimento
              </div>
            </button>
          </Link>

          <h2 className="text-center">REDES SOCIAIS</h2>
          {/* <button className="rounded-full text-center drop-shadow-2xl h-10 transition ease-in-out delay-100 bg-red-bt hover:-translate-y-1 hover:scale-110  hover:bg-red-bt-h duration-100  ">
            Instagram
          </button> */}

          <Link href="https://www.instagram.com/liherbert_artes/">
            <button className="flex justify-between items-center rounded-full text-center drop-shadow-2xl w-full h-10 transition ease-in-out delay-100 bg-red-bt hover:-translate-y-1 hover:scale-110  hover:bg-red-bt-h duration-100 ">
              <div className="ml-6">
                <Image
                  src="/icon_instagram.png"
                  width={28}
                  height={28}
                  alt="Imagem do ícone do instagram"
                />
              </div>
              <div className="w-full pr-12 text-center">Instagram</div>
            </button>
          </Link>

          <Link href="https://www.instagram.com/liherbert_artes/">
            <button className="flex justify-between items-center rounded-full text-center drop-shadow-2xl w-full h-10 transition ease-in-out delay-100 bg-red-bt hover:-translate-y-1 hover:scale-110  hover:bg-red-bt-h duration-100 ">
              <div className="ml-6">
                <Image
                  src="/icon_linkedin.png"
                  width={28}
                  height={28}
                  alt="Imagem do ícone do instagram"
                />
              </div>
              <div className="w-full pr-12 text-center">LinkedIn</div>
            </button>
          </Link>

          <h2 className="text-center">VÍDEOS</h2>
          {/* <button className="rounded-full text-center drop-shadow-2xl h-10 transition ease-in-out delay-100 bg-red-bt hover:-translate-y-1 hover:scale-110  hover:bg-red-bt-h duration-100">
            Youtube
          </button> */}

          <Link href="https://www.youtube.com/c/LiherbertArtes?sub_confirmation=1">
            <button className="flex justify-between items-center rounded-full text-center drop-shadow-2xl w-full h-10 transition ease-in-out delay-100 bg-red-bt hover:-translate-y-1 hover:scale-110  hover:bg-red-bt-h duration-100 ">
              <div className="ml-6">
                <Image
                  src="/icon_youtube.png"
                  width={28}
                  height={28}
                  alt="Imagem de perfil"
                />
              </div>
              <div className="w-full pr-12 text-center">Youtube</div>
            </button>
          </Link>
        </div>
      </div>
      <footer className="w-screen h-20 p-5 mt-10 bg-zinc-800 bottom-0 relative items-center justify-center text-center flex text-xs border-t-2 border-neutral-900">
        Desenvolvido por: Liherbert Artes Studio - 2023 <br />
        Todos os direitos reservados - CNPJ: 46.345.671/0001-95 - Campina Grande
        - PB
        <br />
        e-mail: contato@LiherbertArtes.com.br
      </footer>
    </div>
  );
}
