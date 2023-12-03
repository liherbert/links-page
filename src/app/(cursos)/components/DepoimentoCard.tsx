export default function DepoimentoCard(props: any) {
  return (
    <div className="flex flex-col w-64 border border-slate-700 bg-zinc-900 p-5 text-center rounded-lg shadow-lg shadow-slate-500">
      <p className="text-lg flex-grow ">{props.depoimento}</p>
      <br />
      <p className="text-xs text-zinc-400 font-bold">{props.autor}</p>
    </div>
  );
}
