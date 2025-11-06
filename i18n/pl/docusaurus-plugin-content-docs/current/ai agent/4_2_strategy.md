---
sidebar_label: Protokoły i strategie
sidebar_position: 3
custom_edit_url: null
---

# Rekomendacje protokołów i strategii (tilting, dywersyfikacja)

## Logika rekomendacji (wysoki poziom)

### Filtrowanie protokołów
Filtrowanie według allow-listy protokołów (staking/LST, lending, DEX), zgodnie z <mark>kryteriami jakości</mark> (audyt, płynność, historia incydentów).

### Dopasowanie do profilu
Mapowanie celów/ryzyka na klasy strategii (np. stakowanie LST vs. pule zmienne).

### Tilting/dywersyfikacja
Propozycje zakresów alokacji (widełki) na wiele strategii/łańcuchów zamiast pojedynczego zakładu, z limitami na protokół.

### Koszty i operacje
Oszacowanie liczby kroków (approve, swap, bridge, stake) i kosztów (gas, slippage, opłaty DEX).

### Dashboard wyjaśnień: Jak AI ocenił każdą opcję

Kliknij „Dlaczego to?" przy każdej rekomendacji, aby zobaczyć szczegółową punktację.

:::tip[ROZBICIE PUNKTACJI]

> ZGODNOŚĆ Z CELAMI           25%      

> ZGODNOŚĆ Z RYZYKIEM         20%     

> DYWERSYFIKACJA              15%       

> PŁYNNOŚĆ                    15%       

> EFEKTYWNOŚĆ KOSZTOWA        10%       

> DOPASOWANIE DOŚWIADCZENIA   10%       

> POTENCJAŁ ZYSKU             5%  

:::     

## Prezentacja rekomendacji w UI

### Lista opcji
"<mark>Propozycje</mark> dopasowane do Twojego profilu" z tagami ryzyka i szacowanym kosztem uruchomienia.

### Wyjaśnienia
„Dlaczego to widzę?" – 2–3 kluczowe kody przyczyn (np. „konserwatywny profil", „krótki horyzont", „preferencja USDT").

### Pewność i alternatywy
Zakres pewności/niepewności + 1–2 alternatywy o zbliżonych parametrach.

### Brak „najlepszej egzekucji"
<mark>Agent nie gwarantuje najlepszej ceny</mark>; pokazujemy źródła kosztów i ryzyk, a nie ostateczny werdykt.

## Kontrola użytkownika

### Edycja alokacji
Suwaki, wykluczanie strategii, ustawianie maksymalnego kosztu gazu i limitów slippage.

### Przycisk „Przygotuj transakcje"
Generuje zestaw operacji do samodzielnego podpisu.

:::warning[Wymagana decyzja użytkownika]

Rekomendacje są sugestiami informacyjnymi, nie instrukcjami. Każda decyzja o alokacji i podpis transakcji pozostają całkowicie pod kontrolą użytkownika.

:::