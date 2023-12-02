import Image from "next/image";

import imgCapaEbook from "public/images/cursos/do-zero-ao-3d-lowpoly/capa_ebook_glow.png";
import imgCheck from "public/images/cursos/do-zero-ao-3d-lowpoly/check.png";
import imgFormasPgt from "public/images/cursos/do-zero-ao-3d-lowpoly/formas-de-pagamento.png";
import imgMario from "public/images/cursos/do-zero-ao-3d-lowpoly/Mario_Tails.png";
import imgEmSetup from "public/images/cursos/do-zero-ao-3d-lowpoly/perfil_todo_editado.png";

import MiniCard from "../../components/MiniCard";

export default function DozeroAoLow() {
  return (
    <div>
      <div className="flex flex-col w-screen p-4  bg-zinc-700 items-center justify-center gap-4 md:flex-row md:gap-10 ">
        <div className="flex flex-col items-center justify-center h-24 w-[400px] md:flex-row md:justify-around">
          <Image
            className="rounded-lg"
            src="/perfil.jpg"
            width={64}
            height={64}
            alt="Logo"
          ></Image>
          <div>Esta oferta termina em:</div>
        </div>
        <div className="flex bg-zinc-800 gap-4 h-24 items-center p-4 rounded-lg">
          <div className="flex flex-col bg-zinc-400 w-20 h-20 rounded-lg justify-center items-center  text-black font-bold text-2xl">
            1<span className="text-sm">Dia</span>
          </div>
          <div className="flex flex-col  bg-zinc-400 w-20 h-20 rounded-lg justify-center items-center  text-black font-bold text-2xl">
            60<span className="text-sm">Hora</span>
          </div>
          <div className="flex flex-col bg-zinc-400 w-20 h-20 rounded-lg justify-center items-center  text-black font-bold text-2xl">
            59<span className="text-sm">Minuto</span>
          </div>
          <div className="flex flex-col bg-zinc-400 w-20 h-20 rounded-lg justify-center items-center  text-black font-bold text-2xl">
            29<span className="text-sm">Segundo</span>
          </div>
        </div>
      </div>
      {/* Capa do Ebook */}
      <div className="flex w-screen  h-auto justify-center bg-gradient-to-b from-zinc-950 to-zinc-800">
        <Image
          className="p-5"
          src={imgCapaEbook}
          width={340}
          height={571}
          alt="Imagem da Capa do E-book"
        ></Image>
      </div>
      {/* Content aprenda */}
      <div className="flex flex-col w-screen h-auto p-8 bg-gradient-to-b from-zinc-950 to-zinc-800justify-center items-center text-center">
        <div className="border border-slate-500 shadow-xl shadow-slate-700 rounded-2xl max-w-screen-sm m-5 ">
          <p className="flex text-3xl text-center p-4 ">
            Aprenda de uma vez por todas a modelar 3D no estilo Low Poly
            utilizando o Blender!
          </p>
          {/* card */}
          <div className="flex-col card rounded-b-xl p-5 shadow-md  text-zinc-950">
            <p>Por apenas</p>
            <p className="text-4xl font-bold text-black">2x de R$14,56</p>
            <p>ou ainda</p>
            <p>R$ 9,90 à vista (BLACKFRIDAY 2023)</p>
            <button className="bg-green-400 hover:bg-green-300 shadow-xl rounded-lg w-full p-3 mt-4 mb-4 text-xl font-bold">
              EU QUERO AGORA!
            </button>
            <div className="flex justify-center border mt-2">
              <Image
                className="p-2"
                src={imgFormasPgt}
                width={340}
                height={571}
                alt="Imagem das formas de pagamento"
              ></Image>
            </div>
          </div>
        </div>
      </div>
      {/* Content Vantagens */}
      <div className="flex w-screen p-8 bg-gradient-to-b from-zinc-950 to-zinc-800 justify-center border-b border-slate-800">
        {/* Mini cards */}
        <div className="flex flex-wrap p-5 max-w-screen-lg items-start justify-center gap-8 md:justify-evenly md:items-start">
          <MiniCard
            imagem={imgCheck}
            title={"Ter as melhores dicas"}
            description={
              "Dicas em passo a passo para agilizar todo o seu processo!"
            }
          ></MiniCard>

          <MiniCard
            imagem={imgCheck}
            title={"Criar mais de um personagem completo"}
            description={
              "Dicas em passo a passo para agilizar todo o seu processo!"
            }
          ></MiniCard>

          <MiniCard
            imagem={imgCheck}
            title={"Exemplo em vídeo"}
            description={
              "Após realizar o modelo mais avançado do e-book, assista um shorts acelerado do processo."
            }
          ></MiniCard>

          <MiniCard
            imagem={imgCheck}
            title={"Crie seu próprio modelo"}
            description={
              "Com todas as dicas, basta utilizar as técnicas e criar o seu próprio modelo 3D"
            }
          ></MiniCard>

          <MiniCard
            imagem={imgCheck}
            title={"Montar portfólio"}
            description={
              "Com os modelos prontos, feitos no passo a passo você já pode ir montando seu próprio portfólio"
            }
          ></MiniCard>

          <MiniCard
            imagem={imgCheck}
            title={"Acesso a comunidade de artistas"}
            description={
              "Você ganha gratuitamente sem mensalidades o acesso a comunidade com um cargo de aluno, tendo acesso a canais diferenciados dos demais."
            }
          ></MiniCard>
        </div>
      </div>
      {/* Content que mostra receber modelo */}

      {/* <div className="flex w-screen h-auto bg-red-400 items-center justify-center gap-5">
        <div className="flex w-60 h-40 backdrop-blur-sm bg-white/10 m-5 items-center justify-center">
          <p className="text-zinc-950 text-2xl">dgfs fsf</p>
        </div>
        <div className="flex w-60 h-40 backdrop-blur-md bg-white/30  hover:backdrop-blur-lg m-5 items-center justify-center">
        <p className="text-zinc-950 text-2xl">dgfs fsf</p>
        </div>
        <div className="flex w-60 h-40 backdrop-blur-xl bg-white/30 m-5 items-center justify-center">
        <p className="text-zinc-950 text-2xl">dgfs fsf</p>
        </div>
      </div> */}

      <div className="flex flex-col justify-center items-center w-screen p-8 bg-gradient-to-b from-zinc-950 to-zinc-800 md:flex-row md:items-start">
        <div className="flex flex-col  w-[512px] p-5 ">
          <div className="flex border p-4 bg-slate-300 shadow-xl  w-full h-auto justify-center items-center rounded-2xl mb-4">
            <Image
              src={imgMario}
              width={320}
              height={240}
              quality={75}
              alt="Mario e Thails"
            ></Image>
          </div>
          <h1 className="text-3xl">Você ainda vai levar:</h1>
          <br />
          <p>
            Um arquivo de <strong>modelo 3D do super Mario</strong> (Arquivo
            .Blend) que foi criado durante as instruções no e-book. Você poderá
            analisar, estudar e até modificar para criar novos personagens,
            utilizando-o como base mesh (malha de base)
          </p>
        </div>

        <div className="flex flex-col  w-[512px] items-center p-5 gap-4">
          {/* card */}
          <div className="flex flex-col items-center text-center w-auto h-auto p-4 bg-gradient-to-b from-zinc-600 to-zinc-950  rounded-lg border border-slate-500 shadow-slate-700 shadow-md">
            <Image
              src={imgCheck}
              width={42}
              height={42}
              alt="Imagem icone de checagem"
            ></Image>

            <h1 className="text-lg font-bold leading-1 mt-3 mb-3">
              CONVENIÊNCIA
            </h1>
            <p>
              O e-book pode ser lido de qualquer dispositivo móvel, ou seja, de
              qualquer lugar, onde você estiver.
            </p>
          </div>

          {/* card */}
          <div className="flex flex-col items-center text-center w-auto h-auto p-4 bg-gradient-to-b from-zinc-600 to-zinc-950  rounded-lg border border-slate-500 shadow-slate-700 shadow-md">
            <Image
              src={imgCheck}
              width={42}
              height={42}
              alt="Imagem icone de checagem"
            ></Image>

            <h1 className="text-lg font-bold leading-1 mt-3 mb-3">
              DOCUMENTAÇÃO ORGANIZADA
            </h1>
            <p>
              Você terá um guia para sempre que precisar não ficar caçando pela
              internet, basta ir no e-book e achar o tópico!
            </p>
          </div>

          {/* card */}
          <div className="flex flex-col items-center text-center w-auto h-auto p-4 bg-gradient-to-b from-zinc-600 to-zinc-950  rounded-lg border border-slate-500 shadow-slate-700 shadow-md">
            <Image
              src={imgCheck}
              width={42}
              height={42}
              alt="Imagem icone de checagem"
            ></Image>

            <h1 className="text-lg font-bold leading-1 mt-3 mb-3">
              CUSTO BENEFÍCIO
            </h1>
            <p>
              E-book são mais baratos que livros impressos, principalmente custo
              de envio e confecção.
            </p>
          </div>

          <button className="bg-green-400 hover:bg-green-300 border-b border-b-black rounded-lg w-full p-3 mt-4 mb-4 text-xl font-bold shadow-md text-zinc-950">
            EU QUERO AGORA!
          </button>
        </div>
      </div>
      {/* Content */}
      <div className="flex flex-col justify-center items-center w-screen p-8 bg-gradient-to-b from-zinc-950 to-zinc-700  lg:flex-row">
        <div className="flex w-[512px] p-1  items-center justify-center md:flex-row ">
          <div className="flex shadow-2xl  w-full h-auto justify-center items-center rounded-2xl mb-4">
            <Image
              src={imgEmSetup}
              width={530}
              height={307}
              quality={75}
              alt="Mario e Thails"
            ></Image>
          </div>
        </div>
        <div className="flex flex-col  w-[512px] p-5  ">
          {/* card */}
          <div className="flex flex-col items-center justify-center text-center border border-zinc-600 shadow-md shadow-slate-500 bg-gradient-to-b from-zinc-950 to-zinc-800 p-4 rounded-2xl">
            <p className="text-lg font-bold ">
              Aprenda de uma vez por todas a modelar por um preço de um lanche,
              e está junto de uma comunidade de artistas que só cresce! São mais
              de{" "}
              <span className="text-green-400 shadow-lg shadow-green-300/10">
                660 membros
              </span>
              ! E mais de{" "}
              <span className="text-green-400 shadow-lg shadow-green-300/10">
                170 desafios{" "}
              </span>
              realizados!
            </p>

            <p className="text-xs">
              (Desafios semanais postados na comunidade)
            </p>
            <br />
            <p>
              apenas <br />
              <strong className="text-4xl shadow-2xl shadow-yellow-200">
                R$9,90{" "}
              </strong>{" "}
              <br />
              Desconto <strong>temporário</strong> de BlackFriiday
            </p>
            <br />
            <button className="bg-green-400 hover:bg-green-300 rounded-lg w-full p-3 mt-4 mb-4 text-xl font-bold shadow-md text-zinc-950">
              COMPRAR AGORA E FAZER PARTE DA COMUNIDADE!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
