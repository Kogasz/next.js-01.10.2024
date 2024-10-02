import ImieList from "@/components/imielist";
import ListaPuntowana from "@/components/listapunkt";
import Link from "next/link";

export default function Home() {
  const lista = [
    { imie: "Filip Lemiesz", ok: true },
    { imie: "Filip Lemi", ok: false },
    { imie: "Filip Lemies", ok: true },
    { imie: "Filip Lem", ok: false }
  ];

  const lista_punkt = ["APPLE", "BANANA", "CHERRY", "WINOGRONO"];
  
  return (
    <div className="flex flex-row items-center justify-center h-screen gap-2">
      <div>
      {lista.map((osoba, index) => (
        <ImieList key={index} imie={osoba.imie} ok={osoba.ok} />
      ))}
      </div>
      <div>
        <ListaPuntowana owoce={lista_punkt} />
      </div>
      <Link href="/strona1">Strona1</Link>
    </div>
  );
}
