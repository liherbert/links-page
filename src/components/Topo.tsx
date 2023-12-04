import Link from "next/link";

export default function Topo() {
  return (
    <div>
      <div className="flex w-screen bg-zinc-900 h-8 p-6 items-center border-b border-zinc-600 justify-between">
        <div className="text-xl">
          Liherbert <span className="text-red-600">Artes</span>
        </div>
        <div>
          <nav className="flex w-full gap-3">
            <ul className="flex gap-4">
              <Link href={"/"}>
                <li>Home</li>
              </Link>
              {/* <li>Cursos</li>
              <li>Portfólio</li>
              <li>Sobre</li>
              <li>Contato</li> */}
            </ul>
          </nav>
        </div>
        <div>
          <ul className="flex gap-4 items-center justify-center">
            <Link href="https://discord.gg/7xq82T6rb2">
              <li className="flex text-xs font-black">Área de membros</li>
            </Link>
            <Link href={"e-book/do-zero-ao-3d-lowpoly"}>
              <li className="flex p-2 text-xs h-4 w-20 text-red-600 border border-red-600 items-center justify-center">
                E-book
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
