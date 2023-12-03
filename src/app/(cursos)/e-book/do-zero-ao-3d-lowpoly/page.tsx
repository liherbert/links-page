import Image from "next/image";

import imgCapaEbook from "public/images/cursos/do-zero-ao-3d-lowpoly/capa_ebook_glow.png";
import imgCheck from "public/images/cursos/do-zero-ao-3d-lowpoly/check.png";
import imgFormasPgt from "public/images/cursos/do-zero-ao-3d-lowpoly/formas-de-pagamento.png";
import imgMario from "public/images/cursos/do-zero-ao-3d-lowpoly/Mario_Tails.png";
import imgEmSetup from "public/images/cursos/do-zero-ao-3d-lowpoly/perfil_todo_editado.png";
import imgGarantia from "public/images/cursos/do-zero-ao-3d-lowpoly/garantia-7-dias.png";
import imgPaginas from "public/images/cursos/do-zero-ao-3d-lowpoly/paginas_juntas.png";
import imgPerfilSobre from "public/images/cursos/do-zero-ao-3d-lowpoly/perfil_3.png";

import MiniCard from "../../components/MiniCard";
import FooterEbook from "./footer";
import DepoimentoCard from "../../components/DepoimentoCard";
import Link from "next/link";

export default function DozeroAoLow() {
  return (
    <>
      <div className="flex flex-col w-screen p-4  bg-zinc-700 items-center justify-center gap-4 md:flex-row md:gap-10 ">
        <div className="flex flex-col items-center justify-center h-24 w-[400px] md:flex-row md:justify-around">
          <Image
            className="rounded-full shadow-xl border-2 p-1 border-red-600"
            src="/perfil.jpg"
            width={64}
            height={64}
            alt="Logo"
          ></Image>
          <div>A oferta Blackfriday termina em:</div>
        </div>
        <div className="flex bg-zinc-800 shadow-md border border-l-0 border-r-0 border-slate-400 gap-4 h-24 items-center p-6 rounded-lg">
          <div className="flex flex-col bg-zinc-400 w-20 h-20 rounded-lg justify-center items-center  text-black font-bold text-2xl">
            0<span className="text-sm">Dia</span>
          </div>
          <div className="flex flex-col  bg-zinc-400 w-20 h-20 rounded-lg justify-center items-center  text-black font-bold text-2xl">
            0<span className="text-sm">Hora</span>
          </div>
          <div className="flex flex-col bg-zinc-400 w-20 h-20 rounded-lg justify-center items-center  text-black font-bold text-2xl">
            0<span className="text-sm">Minuto</span>
          </div>
          <div className="flex flex-col bg-zinc-400 w-20 h-20 rounded-lg justify-center items-center  text-black font-bold text-2xl">
            0<span className="text-sm">Segundo</span>
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
            <p className="text-4xl font-bold text-black">2x de R$9,34</p>
            <p>ou ainda</p>
            <p>
              R$ 17,90 à vista{" "}
              <span className="hidden">(BLACKFRIDAY 2023)</span>
            </p>
            <Link href="https://pay.hotmart.com/J85992195J">
              <button className="bg-green-400 hover:bg-green-300 shadow-xl rounded-lg w-full p-3 mt-4 mb-4 text-xl font-bold">
                EU QUERO AGORA!
              </button>
            </Link>
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
        <div className="flex flex-wrap p-5 max-w-screen-lg items-start justify-center gap-8 md:justify-around md:items-start">
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

      <div className="flex flex-col justify-center items-center w-screen p-8 bg-gradient-to-b from-zinc-950 to-zinc-800 md:flex-row md:items-start">
        <div className="flex flex-col w-[512px] p-5 ">
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

        <div className="flex flex-col w-[512px] items-center p-5 gap-4">
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
          <Link className="w-full" href="https://pay.hotmart.com/J85992195J">
            <button className="bg-green-400 hover:bg-green-300 border-b border-b-black rounded-lg w-full p-3 mt-4 mb-4 text-xl font-bold shadow-md text-zinc-950">
              EU QUERO AGORA!
            </button>
          </Link>
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
              <strong className="text-4xl shadow-2xl shadow-yellow-200 my-4 flex">
                R$17,90{" "}
              </strong>{" "}
              Á vista!
              <span className="hidden">
                Desconto <strong>temporário</strong> de BlackFriiday
              </span>
            </p>
            <br />
            <Link href="https://pay.hotmart.com/J85992195J">
              <button className="bg-green-400 hover:bg-green-300 rounded-lg w-full p-3 mt-4 mb-4 text-xl font-bold shadow-md text-zinc-950">
                COMPRAR AGORA E FAZER PARTE DA COMUNIDADE!
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* Content depoimentos */}
      <div className="flex w-screen p-8 bg-zinc-700 justify-center bg-gradient-to-b from-zinc-950 to-zinc-800">
        {/* cards depoimentos */}
        <div className="flex flex-wrap justify-center gap-12 w-[1080px] p-4  lg:flex-row lg:justify-between lg:flex-nowrap ">
          <DepoimentoCard
            depoimento={`
          Eu estava procurando uma maneira de aprender a modelar personagens 3D de forma acessível e encontrei este e-book. Ele foi perfeito para minhas necessidades e me permitiu aprender a usar o Blender com facilidade.
          `}
            autor={"Maria, Designer de Jogos"}
          />
          <DepoimentoCard
            depoimento={`
          Eu sou um artista 3D iniciante e estava procurando por um curso que pudesse me guiar através do processo de criação de personagens. Este e-book foi exatamente o que eu precisava!`}
            autor={"Juan, artista 3D"}
          />
          <DepoimentoCard
            depoimento={`
          Eu sou um animador 3D e sempre quis aprender a modelar meus próprios personagens. Além do e-book me ajudar bastante, a comunidade é outro nível, e fiquei com um plano como se fosse o mensal que outros pagam sem o e-book, isso foi a promoção das promoções! perfeito.`}
            autor={"Pedro, Animador 3D em Jogos Digitais"}
          />
        </div>
      </div>

      {/* content */}
      <div className="flex w-screen p-8 bg-zinc-700 justify-center bg-gradient-to-b from-zinc-950 to-zinc-800">
        <div className="flex flex-col  w-[1080px] p-5 mt-20 mb-20 border border-slate-700 shadow-lg shadow-slate-800 rounded-xl text-lg text-justify indent-8 ">
          <p>
            Além disso, para tornar a experiência de aprendizado ainda mais
            interessante e desafiadora, proponho diversos{" "}
            <span className="text-green-500">desafios</span> ao longo do e-book.
            Os alunos serão estimulados a criar seus próprios personagens em
            estilo low poly e poderão me mencionar no instagram. como instrutor,
            terei o prazer de repostar os trabalhos e fornecer feedback
            construtivo para ajudá-los a evoluir ainda mais.
          </p>
        </div>
      </div>

      {/* content garantia */}
      <div className="flex w-screen p-8 bg-zinc-700 justify-center bg-gradient-to-b from-zinc-950 to-zinc-800">
        <div className="flex flex-col  w-[1080px] p-5 mt-20 mb-20 border border-slate-700 shadow-lg shadow-slate-800 rounded-xl  ">
          <h1 className="text-3xl text-center mb-4">Você ainda tem dúvidas?</h1>
          <div className="flex flex-wrap items-center justify-center lg:flex-nowrap">
            <Image
              src={imgGarantia}
              width={350}
              height={350}
              quality={75}
              alt="Simbolo de garantia"
            ></Image>
            <div className="flex flex-col  p-5 text-lg text-justify indent-8 ">
              <h2 className="text-xl">Fique tranquilo</h2> <br />
              <p>
                Imprevistos acontecem, todos nós sabemos, por isso para proteger
                o seu investimento, ele é garantido por 7 dias. Caso não queira
                mais fazer parte, basta entrar em contato que devolvo o seu
                dinheiro. O foco aqui sempre será o seu aprendizado! o
                conhecimento, e não seu dinheiro, por isso sem pegadinhas, sem
                central de atendimento etc. simples e rápido.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-screen p-8 bg-zinc-700 justify-center bg-gradient-to-b from-zinc-950 to-zinc-800">
        <div className="flex flex-wrap gap-8 justify-center   w-[1080px] p-5  ">
          {/* card perguntas */}
          <MiniCard
            imagem={imgCheck}
            title={"Qual a diferença entre low poly e high poly?"}
            description={
              "A diferença está no número de polígonos utilizados para criar o modelo 3D, low poly é mais simples, mais leve e mais fácil de modelar, high poly, o inverso."
            }
          ></MiniCard>

          <MiniCard
            imagem={imgCheck}
            title={"Como posso ir mais além?"}
            description={
              "Participar da comunidade, praticar os desafios propostos, pedir feedbacks, postar os seus trabalhos em andamento, e tudo isso é treino!"
            }
          ></MiniCard>

          <MiniCard
            imagem={imgCheck}
            title={"Preciso saber desenhar para modelar?"}
            description={
              "NÂO, muito menos decorar nomes de formas geométricas. Basta seguir as técnicas e lembrar dsa formas, assimilando com objetos reais."
            }
          ></MiniCard>

          <MiniCard
            imagem={imgCheck}
            title={"Preciso de um computador potente?"}
            description={
              "NÂO, basta ter os requisitos mínimos solicitados no site oficial do Blender para poder criar seus próprios modelos."
            }
          ></MiniCard>

          <MiniCard
            imagem={imgCheck}
            title={"Posso baixar o modelo ensinado no e-book?"}
            description={
              "SIM, além de ensinar mais de um modelo, você tem disponível o modelo do personagem principal que é o super Mario, este arquivo estará separado em um canal dentro da comunidade."
            }
          ></MiniCard>

          <MiniCard
            imagem={imgCheck}
            title={"O professor participa da comunidade?"}
            description={
              "Sim, sempre que possível eu mesmo estarei dando o suporte na comunidade dentro do Discord, lembrando que os próprios alunos se ajudam entre si. E também estou disponível no instagram @Liherbert_Artes onde tenho o prazer de lhe ajudar!"
            }
          ></MiniCard>

          <MiniCard
            imagem={imgCheck}
            title={"Qual a versão do Blender utilizada no E-book?"}
            description={
              "Este e-book está utilizando a versão 3.0 do Blender, porém as técnicas demonstradas podem ser utilizadas tranquilamente em versões anteriores do software e 3.6.3 LTS."
            }
          ></MiniCard>

          <MiniCard
            imagem={imgCheck}
            title={"Já efetuei o pagamento, e agora?"}
            description={
              "Compra sendo confirmada, você receberá um e-mail com acesso a plataforma da Hormart, e após isso um link para acesso à comunidade do Discord, lá também estará o arquivo em 3D do Mario disponível para download."
            }
          ></MiniCard>

          <MiniCard
            imagem={imgCheck}
            title={"O E-book terá atualização?"}
            description={
              "SIM! Além de descontos e promoções para os alunos na comunidade, de tempos em tempos este e-book irá sendo atualizado! Portanto não perca seu acesso a plataforma"
            }
          ></MiniCard>
        </div>
      </div>

      {/* Content Grade */}
      <div className="flex w-screen p-8 bg-zinc-700 justify-center bg-gradient-to-b from-zinc-950 to-zinc-800">
        <div className="flex flex-col items-center justify-between w-[1080px] p-5 border rounded-2xl border-slate-500 border-l-0 border-r-0 shadow-md shadow-slate-700">
          <h1 className="text-3xl">Ainda está com dúvidas?</h1>
          <h2> Veja abaixo o sumário de todo o conteúdo:</h2>
          <br />
          <div className="flex flex-wrap justify-center w-full gap-8 lg:flex-nowrap">
            <Image
              src={imgPaginas}
              width={450}
              height={450}
              quality={100}
              alt="Simbolo de garantia"
            ></Image>

            <div className="p-5 ">
              <ul>
                <li>INTRODUÇÃO O QUE É LOW POLY?</li>
                <li>INSTALAÇÃO DO BLENDER INTERFACE DO</li>
                <li>BLENDER MODO OBJETO: OBJECT MODE</li>
                <li>INSERINDO PRIMITIVAS NO BLENDER</li>
                <li>PRATICAR 1 - Blocagem de Personagem </li>
                <li>PRATICAR 2 - Blocagem de Personagem 2</li>
                <li>MODO DE EDIÇÃO: EDIT MODE</li>
                <li>VIEWPORT SHADING</li>
                <li>MODIFICADORES</li>
                <li>PRATICAR 3 - Modelo carro de Fórmula 1</li>
                <li>BLOCAGEM AVANÇADA DE ROBÔ</li>
                <li>MATERIAIS</li>
                <li>TEXTURAS</li>
                <li>UV MAPPING (MAPEAMENTO UV)</li>
                <li>PRATICAR 4 - Abrir malha e aplicar textura</li>
                <li>POSICIONAMENTOS DECÂMERA E ILUMINAÇÃO</li>
                <li>RENDERIZAÇÃO</li>
                <li>PRATICAR 5 - Modelagem do Mario - low poly</li>
                <li>CONCLUSÃO REFERÊNCIAS</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Content Sobre */}
      <div className="flex flex-col items-center w-screen p-8 bg-zinc-700 justify-center bg-gradient-to-b from-zinc-950 to-zinc-800 lg:flex-row">
        <div className="flex flex-col  w-[512px]  items-center justify-center  ">
          <Image
            src={imgPerfilSobre}
            width={450}
            height={450}
            quality={100}
            alt="Simbolo de garantia"
          ></Image>
        </div>
        <div className="flex flex-col  w-[512px] p-5">
          <h1 className="text-3xl">
            Olá, <br />
            sou Liherbert Lisbôa{" "}
            <span className="text-xs">(Liherbert artes)</span>
          </h1>
          <br />
          <div className="text-justify indent-6">
            <p>
              {" "}
              Como alguns de vocês já sabem, trabalho com várias áreas, tanto no
              mundo dos games como em web design. No e-book tem um pouco da
              minha história. Sou Tech Artist em jogos digitais, professor na
              área de TI-software e Jogos Digitais há mais de 10 anos. Animador
              2D/3D e Artista 3D. Trabalho atualmente como programador Front-End
              e modelador/animador 3D para duas empresas, sempre estou
              realizando freelas de 3D para aprimorar cada vez mais as técnicas
              e até contratando alguns profissionais da área para executar os
              serviços por questões de demandas muito altas. Acredito que com
              este e-book, posso ajudar a tornar a modelagem 3D mais acessível e
              prática para você, permitindo que você possa migrar para esta área
              de forma mais fácil e eficiente. A modelagem 3D é amplamente
              utilizada na indústria de jogos, publicidade, animações e muitas
              outras áreas, portanto, o conhecimento em modelagem 3D pode ser
              valioso em vários campos de atuação.
            </p>
            <br />
            <p>
              Meu foco principal é ajudar a aperfeiçoar a técnica de modelagem
              3D, oferecendo os conhecimentos necessários para que você possa
              começar a criar seus próprios modelos.
            </p>
            <br />

            <p>
              Então, te convido a acessar um acervo único de páginas, que juntos
              vamos criar diversas artes, basta clicar no botão abaixo para
              conhecer mais sobre a minha metodologia.
            </p>
          </div>
          <Link href="https://pay.hotmart.com/J85992195J">
            <button className="bg-green-400 hover:bg-green-300 shadow-xl rounded-lg w-full p-3 mt-4 mb-4 text-zinc-950 text-xl font-bold">
              VOU COMEÇAR AGORA!
            </button>
          </Link>
        </div>
      </div>

      {/* Footer */}

      <FooterEbook />
    </>
  );
}
