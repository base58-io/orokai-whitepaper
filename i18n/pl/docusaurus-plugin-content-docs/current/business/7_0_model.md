---
sidebar_label: Model biznesowy
sidebar_position: 1
custom_edit_url: null
---

# Model biznesowy

## Przegląd źródeł przychodów

OROKAI działa w <mark>modelu biznesowym oprogramowania non-custodial.</mark> Generujemy przychody z <mark>usług orkiestracji, integracji i interfejsu użytkownika</mark> — nigdy z przechowywania, custody ani kontrolowania środków użytkowników. Nasze opłaty są pobierane za wartość którą dostarczamy: upraszczanie złożonych operacji DeFi, agregację protokołów, dostarczanie rekomendacji prowadzonych przez AI i utrzymywanie bezpiecznej infrastruktury.

:::tip[Podstawowa zasada]  
OROKAI zarabia na <mark>oprogramowaniu i usługach,</mark> nie na aktywach użytkowników. Nigdy nie mamy custody, więc nigdy nie zarabiamy odsetek, opłat pożyczkowych ani zysków z handlu na środkach użytkowników. Wszystkie opłaty są transparentne i ujawnione zanim użytkownicy autoryzują transakcje.
:::

### Podsumowanie strumieni przychodów

OROKAI monetyzuje sześć głównych działań.

> Transakcje on-chain
- Swapy DEX: Opłata routingu (% opłaty LP)
- Staking/Nagrody: Opłata automatyzacji (% odebranych nagród)
- Mosty cross-chain: Opłata orkiestracji (% kosztu mostu)
- Migracje: Opłaty za krok (suma swap/bridge/marża gazu)
- Marża gazu: Opłata serwisowa na wszystkich szacunkach gasu (+%)

> Karty płatnicze
- Opłaty transakcyjne przez partnerstwo V Plus Pay (stały %)

> Fiat on/off-ramp
- Opłata platformy na konwersje fiat ↔ krypto (%)

> Program afiliacyjny
- Udział w przychodach z polecającymi

> Utility tokena (Przyszłość)
- Zniżki na opłaty i funkcje premium [TBD]

> Dostęp B2B/API (Przyszłość)
- Integracje white-label i API dla przedsiębiorstw [TBD]

> Blockchain OROKAI (Przyszłość)
- Opłaty gazu i opłaty serwisowe protokołu dla operacji on-chain (batchowanie, routing, wiadomości cross-chain) gdy wystartuje OROKAI Chain [TBD]

## Model przychodów: Opłata-za-usługę

### Operacje On-Chain
| Źródło przychodu | Opłata OROKAI | Pobierana od | Szczegóły w sekcji |
|----------------|------------|------------|-------------------|
| Swap DEX | [EDYTOWALNE: 25%] opłaty LP | Każda transakcja swapu | Model biznesowy/Opłaty transakcji On-Chain |
| Nagrody stakingu | [EDYTOWALNE: 8%] odebranej kwoty | Tylko auto-claim (opcjonalnie) | Model biznesowy/Opłaty transakcji On-Chain |
| Bridge | [EDYTOWALNE: 50%] opłaty protokołu mostu | Transfery cross-chain | Model biznesowy/Opłaty transakcji On-Chain |
| Marża gasu | [EDYTOWALNE: +10%] na szacunku | Wszystkie transakcje blockchain | Model biznesowy/Opłaty transakcji On-Chain |

### Operacje Fiat

| Źródło przychodu | Opłata OROKAI | Pobierana od | Szczegóły w sekcji |
|----------------|------------|------------|-------------------|
| Karty płatnicze | [EDYTOWALNE: 0.3%] stała | Kwota transakcji kartowej | Sekcja 7.3 |
| On-Ramp | [EDYTOWALNE: 0.3%] | Zakupione krypto | Sekcja 7.3 |
| Off-Ramp | [EDYTOWALNE: 0.3%] | Sprzedane krypto | Sekcja 7.3 |

### Programy wzrostu

| Źródło przychodu | Opłata OROKAI | Pobierana od | Szczegóły w sekcji |
|----------------|------------|------------|-------------------|
| Program afiliacyjny | [EDYTOWALNE: % TBD] udział | Opłaty poleconych użytkowników | Sekcja 7.4 |
| Utility tokena | Zniżki na opłaty [TBD] | Opcjonalne dla użytkowników | Sekcja 8.4 |
| Blockchain OROKAI | [TBD] | [TBD] | Sekcja 8.4 |

## Z czego NIE zarabiamy

Aby utrzymać zgodność i nasz model non-custodial, OROKAI wyraźnie <mark>nie</mark> generuje przychodów z:

> #### Custody lub kontroli środków użytkowników
> 
> Nigdy nie przechowujemy aktywów użytkowników, więc nie możemy zarabiać odsetek, opłat pożyczkowych ani zysku.

> #### Handlu lub market-makingu
> 
> Kierujemy do zewnętrznych DEX, ale nie działamy jako kontrahent ani market maker.

> #### Operacji protokołów
> 
> Nie kontrolujemy protokołów staking/lending, więc nagrody protokołów trafiają w całości do użytkowników (minus nasza opłata automatyzacji jeśli włączona).

> #### Roszczeń najlepszej egzekucji
> 
> Nie gwarantujemy najlepszych cen, więc nie czerpiemy zysków ze spreadu ani arbitrażu cenowego.

> #### Monetyzacji danych użytkowników
> 
> Minimalizujemy zbieranie PII i nigdy nie sprzedajemy danych użytkowników stronom trzecim.

:::warning[Operacje non-custodial]

OROKAI działa w modelu non-custodial; nie przechowujemy środków i nie jesteśmy stroną rozliczeń fiat/kartowych — te procesy są obsługiwane przez licencjonowanych partnerów.

:::

### Charakterystyka przychodów

> Zmienne strumienie przychodów
- Opłaty on-chain skalują się z aktywnością użytkowników (więcej swapów/stakes/bridges = więcej przychodów)
- Marża gazu skaluje się z przeciążeniem sieci (ale też alertujemy użytkowników aby czekali na niski gas)
- Opłaty kartowe skalują się z wolumenem wydatków
- Wszystko zależne od wyboru użytkownika (nie możemy wymuszać transakcji)

> Składniki stałe
- Procenty OROKAI są ustalane zgodnie z powyższą tabelą
- Opłata kartowa: 0.3% pozostaje stała nawet gdy opłata partnera maleje z wolumenem

> Udział w przychodach
- Opłaty partnerów (Stripe, Onramper, V Plus Pay) → <mark>Partnerzy zachowują swoją część</mark>
- Opłaty protokołów (DEX LP, operatorzy mostów) → <mark>Protokoły zachowują swoją część</mark>
- Opłaty OROKAI → Operacje OROKAI, rozwój, bezpieczeństwo

### Transparentność i kontrola użytkownika

Wszystkie opłaty przestrzegają tych zasad:

- **Ujawniane z góry** — Każda opłata pokazana zanim użytkownik podpisze transakcję  
- **Użytkownik może zrezygnować** — Nie chcesz automatyzacji? Użyj trybu ręcznego (niższe opłaty)  
- **Dostępne rozbicie** — Kliknij "Pokaż szczegóły" aby zobaczyć dokładnie kto co dostaje  
- **Brak ukrytych opłat** — Brak opłat za bezczynność, brak niespodziewanych kosztów  
- **Edytowalne parametry** — Wszystkie procenty opłat wyraźnie oznaczone dla przyszłych dostosowań

### Skalowalność modelu przychodów

> Przychody rosną wraz z:
- Adopcją użytkowników (więcej użytkowników = więcej transakcji)
- Częstotliwością transakcji (aktywni użytkownicy generują więcej opłat)
- Średnim rozmiarem pozycji (większe pozycje = większe opłaty w wartościach bezwzględnych)
- Adopcją funkcji (karty, automatyzacja, cross-chain)
- Efektami sieciowymi (program afiliacyjny przynosi organiczny wzrost)

> Przychody są odporne ponieważ:
- Wiele strumieni przychodów (nie zależne od jednego źródła)
- Globalny adresowalny rynek (180+ krajów przez partnerów)
- Non-custodial = niższe ryzyko regulacyjne vs platformy custodial
- Powtarzalna aktywność (nagrody staking odbierane regularnie, karty używane często)