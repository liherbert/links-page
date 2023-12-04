import Image from "next/image";

export default function FooterLinks() {
  return (
    <div className="flex flex-col w-screen justify-center items-center p-5 text-center text-xs">
      <Image
        className="rounded-full mb-2"
        src="/perfil.jpg"
        width={64}
        height={64}
        alt="Imagem de perfil - Logo"
      />
      <p>
        2022-2024 - Todos os Direitos Reservados <br />
        Liherbert Artes Studio - CNPJ: 46.345.671/0001-95 - Campina Grande - PB
        <br />
        Empresa Brasileira <br />
        Site Desenvolvido por: Liherbert Lisbôa
        {/* <br /> Política de Privacidade */}
        <br />
        contato@liherbertartes.com.br
      </p>
    </div>
  );
}
