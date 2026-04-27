import { memo } from "react";

interface CheatSheetItemProps {
  title: string;
  code: string;
  description: string;
  emoji: string;
}

const CheatSheetItem = ({ title, code, description, emoji }: CheatSheetItemProps) => (
  <div className="bg-white rounded-2xl shadow-sm border-2 border-indigo-100 p-4 flex flex-col hover:border-indigo-300 transition-colors">
    <h3 className="text-xl font-bold text-indigo-800 mb-2 flex items-center gap-2">
      <span>{emoji}</span> {title}
    </h3>
    <pre className="bg-slate-800 text-green-400 p-3 rounded-xl mb-3 overflow-x-auto text-sm font-mono shadow-inner">
      <code>{code}</code>
    </pre>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

const CheatSheet = memo(() => {
  const items = [
    {
      title: "Wypisywanie na ekran",
      emoji: "🖨️",
      code: 'print("Cześć!")\nprint(5 + 3)',
      description:
        "Polecenie print() służy do pokazywania tekstu lub wyników na ekranie komputera.",
    },
    {
      title: "Zmienne (Pudełka na dane)",
      emoji: "📦",
      code: 'imie = "Ania"\nzdobyte_punkty = 100',
      description:
        "Zmienna to takie pudełko, do którego możemy włożyć jakąś wartość (np. tekst albo liczbę) i nadać mu nazwę.",
    },
    {
      title: "Rodzaje danych",
      emoji: "🔤",
      code: 'tekst = "To jest napis"\nliczba = 5\nulamek = 3.5',
      description:
        "Napisy (tekst) zawsze bierzemy w cudzysłowy. Liczby piszemy normalnie. Uwaga: w ułamkach używamy kropki, nie przecinka!",
    },
    {
      title: "Matematyka",
      emoji: "➕",
      code: "wynik1 = 10 + 5  # dodawanie\nwynik2 = 10 - 5  # odejmowanie\nwynik3 = 10 * 5  # mnożenie\nwynik4 = 10 / 5  # dzielenie",
      description: "Python potrafi liczyć! Zamiast znaku 'x' do mnożenia używamy gwiazdki '*'.",
    },
    {
      title: "Pytanie użytkownika",
      emoji: "🙋",
      code: 'imie = input("Jak masz na imię? ")',
      description:
        "Funkcja input() zatrzymuje program i czeka, aż użytkownik coś wpisze z klawiatury.",
    },
    {
      title: "Komentarze",
      emoji: "📝",
      code: "# To jest tajna notatka\nprint(1) # to wypisze 1",
      description:
        "Wszystko po znaku '#' to komentarz. Komputer tego nie czyta, to notatki tylko dla Ciebie!",
    },
    {
      title: "Warunki (Jeśli... to...)",
      emoji: "🚦",
      code: 'punkty = 10\nif punkty > 5:\n    print("Wygrywasz!")\nelse:\n    print("Grasz dalej!")',
      description:
        "Słowo 'if' oznacza 'jeśli'. Pozwala programowi podejmować decyzje. Zwróć uwagę na wcięcia (spacje) pod 'if' i 'else'!",
    },
    {
      title: "Pętla FOR (Powtarzanie)",
      emoji: "🔄",
      code: 'for i in range(3):\n    print("Hura!")',
      description:
        "Pętla pozwala powtarzać polecenia wiele razy. Ten kod napisze 'Hura!' dokładnie 3 razy.",
    },
    {
      title: "Pętla WHILE (Dopóki)",
      emoji: "⏳",
      code: 'hp = 3\nwhile hp > 0:\n    print("Żyjesz!")\n    hp = hp - 1',
      description:
        "Pętla while powtarza się tak długo, jak długo warunek jest prawdziwy. Uważaj, żeby nie zrobić pętli w nieskończoność!",
    },
  ];

  return (
    <div className="p-6 h-full w-full overflow-y-auto bg-indigo-50 will-change-transform">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-extrabold text-indigo-900 mb-6 text-center">
          Ściągawka Programisty Pythona 🐍
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-12">
          {items.map((item, index) => (
            <CheatSheetItem
              key={index}
              title={item.title}
              code={item.code}
              description={item.description}
              emoji={item.emoji}
            />
          ))}
        </div>
      </div>
    </div>
  );
});

export default CheatSheet;
