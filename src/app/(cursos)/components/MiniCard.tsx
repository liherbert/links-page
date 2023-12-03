import Image from "next/image";

export default function MiniCard(props: any) {
  return (
    <div>
      {/* Mini card */}
      <div className="flex flex-col items-center text-center w-[300px] p-4 bg-gradient-to-b from-zinc-600 to-zinc-950 shadow-md shadow-slate-700 border border-slate-500  rounded-lg">
        <Image
          src={props.imagem}
          width={42}
          height={42}
          alt="Imagem da Capa do E-book"
        ></Image>
        <h1 className="text-2xl font-semibold mb-4 mt-2 leading-6">
          {props.title}
        </h1>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
