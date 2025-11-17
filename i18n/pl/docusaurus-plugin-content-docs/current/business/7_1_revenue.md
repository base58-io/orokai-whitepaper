---
sidebar_label: Opłaty transakcji On-Chain
sidebar_position: 2
custom_edit_url: null
---

# Opłaty transakcji On-Chain

## Struktura opłat

### Przegląd

:::tip[Kluczowa zasada] 
Użytkownicy płacą opłaty <mark>bezpośrednio odbiorcom</mark> (dostawcom płynności, operatorom mostów, walidatorom sieci, OROKAI). Nigdy nie przechowujemy środków w trakcie transakcji. Nasze opłaty rekompensują orkiestrację oprogramowania, optymalizację routingu i utrzymanie infrastruktury.
:::

OROKAI pobiera opłaty od czterech typów operacji on-chain:

| Typ operacji | Składniki opłaty | Przychód OROKAI |
|----------------|----------------|----------------|
| **Swapy DEX** | Opłata LP (do puli) + opłata routingu OROKAI + Gas | [EDYTOWALNE: 25%] opłaty LP + [EDYTOWALNE: 10%] marża gazu |
| **Nagrody stakingu** | Opłata automatyzacji OROKAI (opcjonalnie) + Gas | [EDYTOWALNE: 8%] odebranego + [EDYTOWALNE: 10%] marża gazu |
| **Mosty Cross-Chain** | Opłata protokołu mostu + orkiestracja OROKAI + Gas (oba łańcuchy) | [EDYTOWALNE: 50%] opłaty mostu + [EDYTOWALNE: 10%] marża gazu |
| **Migracje** | Suma opłat poszczególnych kroków (swap + bridge + stake) | Opłaty za krok jak powyżej |

### Opłaty swap DEX

:::tip[Co płaci użytkownik]
Całkowity koszt = Kwota swapu × % opłaty LP + (Opłata LP × 25%) + Gas sieci × 1.10
:::
```
Przykład: Swap 1,000 USDC → ETH (Uniswap V3, pula 0.05%)

Rozbicie opłaty:
Kwota wejściowa: 1,000 USDC

Opłata LP (0.05%): $0.50
├─ Trafia do: Dostawców płynności Uniswap
└─ Użytkownik płaci: $0.50

Opłata routingu OROKAI (25% LP): $0.125
├─ Trafia do: OROKAI (orkiestracja oprogramowania)
└─ Użytkownik płaci: $0.125

Gas sieci: $2.50 (przy 0.1 Gwei, Ethereum)
Marża gasu OROKAI (10%): $0.25
├─ Trafia do: Walidatorzy ($2.50) + OROKAI ($0.25)
└─ Użytkownik płaci: $2.75 całkowity gas

═══════════════════════════════════════════════
CAŁKOWITY KOSZT: $0.625 opłaty + $2.75 gas = $3.375
Użytkownik otrzymuje: ~996.625 USDC wartości ETH
Efektywna stopa: 0.3375%
```

> #### Wpływ opłaty puli
> 
> Różne pule płynności mają różne opłaty. OROKAI kieruje do optymalnej puli balansując 

**Koszt vs płynność**:

| Typ puli | Opłata LP | Opłata OROKAI (25%) | Łączne opłaty | Kiedy używana |
|-----------|--------|------------------|------------|-----------|
| Pula 0.01% | $0.10 | $0.025 | $0.125 | Pary stabilne (USDC/USDT) |
| Pula 0.05% | $0.50 | $0.125 | $0.625 | Popularne pary (ETH/USDC) |
| Pula 0.3% | $3.00 | $0.75 | $3.75 | Standardowe pary |
| Pula 1% | $10.00 | $2.50 | $12.50 | Pary egzotyczne/zmienne |

**Zmienność kosztu gasu:**

Koszty swapu różnią się dramatycznie z przeciążeniem sieci Ethereum:

| Stan sieci | Cena gasu | Gas sieci | Marża OROKAI | Całkowity gas | Całkowity koszt swapu |
|---------------|-----------|-------------|---------------|-----------|-----------------|
| Bardzo niski (teraz) | 0.1 Gwei | $0.45 | $0.045 | $0.50 | $1.125 (0.11%) |
| Niski | 5 Gwei | $22.50 | $2.25 | $24.75 | $25.375 (2.54%) |
| Normalny | 15 Gwei | $67.50 | $6.75 | $74.25 | $74.875 (7.49%) |
| Wysoki | 50 Gwei | $225.00 | $22.50 | $247.50 | $248.125 (24.81%) |

### Opłaty nagród stakingu

:::tip[Co płaci użytkownik]
Opłata claimu = Odebrana kwota × 8% + Gas × 1.10 (tx claimu) + Gas × 1.10 (tx opłaty)
:::
```
Przykład: Auto-Claim Lido stETH (1 stETH nagród)

Rozbicie opłaty:
Nagrody do odebrania: 1 stETH (~$3,000 przy $3k/ETH)

Opłata protokołu (Lido): Już odjęta przed naliczeniem (~10%)
├─ To NIE jest widoczne w 1 stETH
└─ Nagrody brutto były ~1.11 stETH; Lido wziął ~0.11 stETH

Opłata automatyzacji OROKAI (8%): 0.08 stETH (~$240)
├─ Trafia do: OROKAI (za usługę)
├─ Pobierana: Jako oddzielna transakcja po claimie
└─ Użytkownik autoryzował: Przy włączaniu claimu

Gas (Transakcja claimu): $1.50 sieć + $0.15 marża = $1.65
Gas (Transakcja opłaty): $1.25 sieć + $0.12 marża = $1.37

═══════════════════════════════════════════════
CAŁKOWITY KOSZT: 0.08 stETH + $3.02 gas
Użytkownik otrzymuje: 0.92 stETH (~$2,760)
Protokół już wziął: ~0.11 stETH
Netto vs brutto: 0.92 / 1.11 = 82.8% (opłaty protokołu + OROKAI)
```

### Opłaty mostu Cross-Chain

:::tip[Co płaci użytkownik]
Całkowity koszt mostu = Opłata protokołu mostu + (Opłata protokołu × 50%) OROKAI + Opłaty swapu (źródło) + Opłaty swapu (cel) + Gas (łańcuch źródłowy) × 1.10 + Gas (łańcuch docelowy) × 1.10
:::

Mosty są złożone, ponieważ obejmują **wiele kroków przez łańcuchy**. 
```
Przykład: Bridge 1 ETH (Ethereum → Polygon)

Krok 1: Swap ETH → USDC (Ethereum)
Krok 2: Bridge USDC (Ethereum → Polygon) przez CCTP
Krok 3: Swap USDC → ETH (Polygon)

Skonsolidowane podsumowanie opłaty:

Kwota początkowa: 1 ETH (~$3,000)

Wszystkie opłaty swapu:
├─ Krok 1 LP (0.05%): $1.50
├─ Krok 1 OROKAI (25%): $0.375
├─ Krok 3 LP (0.05%): $1.497
└─ Krok 3 OROKAI (25%): $0.374
└─ Suma swap: $3.746

Opłaty mostu:
├─ Protokół CCTP (0.001%): $0.03
└─ Orkiestracja OROKAI (50%): $0.015
└─ Suma bridge: $0.045

Wszystkie Gas (Ethereum + Polygon):
├─ Sieć Ethereum: $1.00 (swap + inicjacja mostu)
├─ Marża OROKAI Ethereum: $0.10
├─ Sieć Polygon: $0.10 (odbiór + swap)
└─ Marża OROKAI Polygon: $0.11
└─ Suma gas: $1.31

═══════════════════════════════════════════════
CAŁKOWITY KOSZT: $3.79 opłaty + $1.31 gas = $5.10
Ostatecznie otrzymane: 0.9983 ETH (~$2,994.90)
Efektywny koszt: 0.17%
```

**Wpływ scenariusza gasu na mosty:**

Mosty obejmują transakcje na **dwóch łańcuchach**, więc koszty gasu się kumulują:

| Gas Ethereum | Koszt gasu Eth | Gas Polygon | Całkowity gas | Całkowity koszt mostu |
|--------------|--------------|-------------|-----------|-------------------|
| 0.1 Gwei (teraz) | $1.00 | $0.10 | $1.31 | $5.10 (0.17%) |
| 5 Gwei | $100.00 | $0.10 | $110.11 | $113.90 (3.80%) |
| 30 Gwei | $600.00 | $0.10 | $660.11 | $663.90 (22.13%) |

**Dlaczego bridge przez USDC?**
- Niższe opłaty mostu dla stablecoinów (0.001% vs 0.02%+ dla wrapped assets)
- CCTP to natywny USDC (brak wrapped intermediary = bezpieczniejsze)
- Lepsza płynność dla par USDC na obu łańcuchach

**Kiedy bridging ma sens:**

Bridge gdy:
- Łańcuch docelowy oferuje X% lepszy APY (pokrywa koszt mostu)
- Gas jest niski (5 Gwei na Ethereum)
- Rozmiar pozycji wystarczająco duży (koszt mostu 1% pozycji)
- Długoterminowa pozycja (nie bridging z powrotem wkrótce)

OROKAI obliczy break-even i zasugeruje optymalny timing.

### Opłaty migracji (Operacje wieloetapowe)

:::tip[Co płaci użytkownik]
Koszt migracji = Gas unstake + Opłaty swap + Opłaty bridge + Opłaty swap + Gas stake (Wszystkie z opłatami OROKAI za krok jak powyżej)
:::

Migracje są **najbardziej złożonymi** operacjami, obejmującymi do 6 transakcji przez 2 łańcuchy.
```
Przykład: Migracja 5 ETH (Protokół A Ethereum → Protokół B Polygon)

Kompletny przepływ:
Krok 1: Unstake z Protokołu A (Ethereum)
Krok 2: Swap ETH → USDC (Ethereum)
Krok 3: Bridge USDC (Ethereum → Polygon)
Krok 4: Swap USDC → ETH (Polygon)
Krok 5: Approve Protokołu B (Polygon)
Krok 6: Stake w Protokole B (Polygon)

Skonsolidowane podsumowanie kosztu:
Pozycja początkowa: 5 ETH zastakowane (~$15,000)

Wszystkie opłaty:
├─ Opłaty swap (pule 0.05%): $14.995 LP + $3.749 OROKAI
├─ Opłaty bridge: $0.15 protokół + $0.075 OROKAI
└─ Suma opłat: $18.97 (0.126%)

Wszystkie Gas (6 transakcji):
├─ Ethereum (3 tx): $1.44 sieć + $0.13 OROKAI
├─ Polygon (3 tx): $0.54 sieć + $0.20 OROKAI
└─ Suma gas: $2.31

═══════════════════════════════════════════════
CAŁKOWITY KOSZT MIGRACJI: $21.28 (0.142%)
Końcowa pozycja: 4.9965 ETH zastakowane na Polygon
Czas: 20-40 minut
```

**Wpływ gasu na migracje (6 transakcji):**

| Gas Ethereum | Całkowity koszt gasu | Całkowity koszt migracji | % pozycji $15k |
|--------------|----------------|----------------------|-------------------|
| 0.1 Gwei (teraz) | $2.31 | $21.28 | 0.14% |
| 5 Gwei | $159.54 | $178.51 | 1.19% |
| 30 Gwei | $951.54 | $970.51 | 6.47% |

**Ramy decyzyjne migracji:**

OROKAI pomaga użytkownikom zdecydować kiedy migracja jest warta.
:::tip[decyzja]
Migracja ma sens gdy:

Roczny zysk > Koszt migracji / Miesiące do przeglądu
:::
```
Przykład:
- Obecne APY: 4% na $15k = $600/rok
- Docelowe APY: 6% na $15k = $900/rok
- Zysk: $300/rok = $25/miesiąc
- Koszt migracji: $21.28 (przy niskim gazie)
- Break-even: <1 miesiąc 

Jeśli planowanie pobytu >1 miesiąc, migracja opłacalna.

OROKAI oblicza to automatycznie i pokazuje:
"Migracja zwróci się w X dni"
```

### Wyjaśnienie marży gazu

OROKAI dodaje **[EDYTOWALNE: 10%] marżę** do wszystkich szacunków gasu. Oto dlaczego i jak to działa:

#### Cel marży gasu:
> Koszty infrastruktury
   - Dostęp do węzłów RPC (redundancja wielu dostawców)
   - Monitorowanie cen gazu w czasie rzeczywistym
   - Symulacja i szacowanie transakcji
   - Wykrywanie nieudanych transakcji i logika ponowienia

> Ochrona użytkownika
   - Szacunki zawierają bufor na fluktuacje cen
   - Redukuje nieudane transakcje (użytkownik i tak zapłaciłby gas)
   - Kontrole przed lotem zapobiegają kosztownym błędom

> Opłata za usługę
   - Rekompensuje orkiestrację, batchowanie, optymalizację

#### Jak to działa:
> Krok 1: OROKAI szacuje rzeczywisty gas sieci potrzebny
- Odpytuje wielu dostawców RPC
- Symuluje transakcję
- Pobiera aktualną cenę gasu (np. 0.1 Gwei)

> Krok 2: Oblicz całkowity koszt
- Potrzebne jednostki gasu: 150,000 (dla swapu)
- Koszt sieci: 150k × 0.1 Gwei × cena ETH = $0.45
- Użytkownik widzi: $0.45 × 1.10 = $0.50 (marża 10% włączona)

> Krok 3: Użytkownik płaci całość przy podpisywaniu
- $0.45 trafia do walidatorów sieci
- $0.05 trafia do OROKAI (opłata za usługę)

#### Transparentność użytkownika:
W UI użytkownicy mogą **rozwinąć szczegóły gasu**:

#### Funkcje optymalizacji gazu:
OROKAI nie tylko dodaje marżę do gasu — pomagamy użytkownikom oszczędzać:

- **Alerty niskiego gazu:** Powiadamiamy gdy gas spada poniżej średniej (oszczędź 50-90%)  
- **Sugestie batchowania:** Łącz operacje aby zmniejszyć całkowitą liczbę tx  
- **Rekomendacje łańcucha:** Sugeruj L2 gdy gas Ethereum jest wysoki  
- **Optymalizacja timingu:** AI sugeruje najlepsze okna czasowe dla operacji

## Tabela podsumowania opłat

| Operacja | Opłaty OROKAI | Typowy zakres kosztu | Gdy koszt niski | Gdy koszt wysoki |
|-----------|-------------|-------------------|------------------|-------------------|
| **Swap** | 25% LP + 10% gas | $0.50 - $250 | Niski gas + pula 0.05% | Wysoki gas + pula 1% |
| **Staking (auto)** | 8% odebranego + 10% gas | $6 - $300 | Mały claim, niski gas | Duży claim, wysoki gas |
| **Bridge** | 50% opłaty mostu + opłaty swap + 10% gas | $5 - $700 | Niski gas, USDC przez CCTP | Wysoki gas, wrapped assets |
| **Migracja** | Opłaty za krok (suma) | $20 - $1,000+ | Niski gas, cel L2 | Wysoki gas, wiele mostów |

:::tip[Transparentny model opłat]

Wszystkie opłaty ujawniane przed autoryzacją użytkownika – OROKAI monetyzuje oprogramowanie i usługi infrastruktury, nie custody ani zarządzanie aktywami.

:::