import Image from "next/image";

export default function FooterEbook() {
  return (
    <div className="flex flex-col w-screen justify-center items-center p-5 text-center">
      <Image
        className="rounded-full mb-2"
        src="/perfil.jpg"
        width={64}
        height={64}
        alt="Imagem de perfil - Logo"
      />
      <p className="text-sm">
        2022-2024 - Todos Direitos Reservados <br />
        Liherbert Artes Studio - CNPJ: 46.345.671/0001-95 <br />
        Empresa Brasileira <br />
        Site Desenvolvido por: Liherbert Lisbôa
        <br /> Política de Privacidade
      </p>
    </div>
  );
}
