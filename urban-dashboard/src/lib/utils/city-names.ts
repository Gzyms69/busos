export const CITY_DISPLAY_NAMES: Record<string, string> = {
  elblag: "Elbląg",
  krakow: "Kraków",
  wroclaw: "Wrocław",
  lodz: "Łódź",
  poznan: "Poznań",
  gdansk: "Gdańsk",
  bialystok: "Białystok",
  czestochowa: "Częstochowa",
  torun: "Toruń",
  rzeszow: "Rzeszów",
  olsztyn: "Olsztyn",
  "bielsko-biala": "Bielsko-Biała",
  "zielona-gora": "Zielona Góra",
  "ruda-slaska": "Ruda Śląska",
  "gorzow-wielkopolski": "Gorzów Wielkopolski",
  warszawa: "Warszawa",
  kielce: "Kielce",
  szczecin: "Szczecin",
  bydgoszcz: "Bydgoszcz",
  lublin: "Lublin",
  katowice: "Katowice",
  gdynia: "Gdynia",
  radom: "Radom",
  sosnowiec: "Sosnowiec",
  gliwice: "Gliwice",
  zabrze: "Zabrze",
  bytom: "Bytom",
  rybnik: "Rybnik",
  opole: "Opole",
  tychy: "Tychy",
};

export function getCityDisplayName(slug: string): string {
  if (!slug) return "";
  const key = slug.toLowerCase().trim();
  return CITY_DISPLAY_NAMES[key] || slug.charAt(0).toUpperCase() + slug.slice(1);
}
