---
sidebar_label: Fragmentacja protokołów i sieci
sidebar_position: 3
custom_edit_url: null
---

# Fragmentacja protokołów i sieci, rozproszenie informacji

## Wyzwania zdecentralizowanego ekosystemu

### Wiele łańcuchów, wiele interfejsów

Te same klasy strategii (staking, lending, LP) istnieją na różnych sieciach i w różnych wersjach kontraktów. Parametry, <mark>ryzyka i koszty</mark> różnią się w zależności od łańcucha i protokołu.

### Niejednorodne metryki i dokumentacja

APY/APR liczone odmiennie, różne harmonogramy wypłat i warunki lock-up; informacje rozsiane między stronami www, dokumentacją techniczną i social.

### Szybkie zmiany

Aktualizacje kontraktów, nowe pule, zmienne limity i listy aktywów wymagają <mark>ciągłego monitoringu</mark> – użytkownik indywidualny nie ma na to czasu ani narzędzi.

## Przykład

### To samo "staking ETH", 5 różnych doświadczeń

Użytkownik chce stakować 10 ETH. Porównanie protokołów:

| Cecha | Lido (stETH) | Rocket Pool (rETH) | Coinbase (cbETH) | Native Staking | Binance CEX |
|-------|-------------|-------------------|------------------|----------------|-------------|
| **Min. kwota** | 0.01 ETH | 0.01 ETH | 0.0001 ETH | **32 ETH** | 0.0001 ETH |
| **Liquid token?** | Tak (stETH) | Tak (rETH) | Tak (cbETH) | Locked | Custodial |
| **Lock-up period** | Brak | Brak | Brak | ~27 dni | Według zasad CEX |
| **APY (Nov 2024)** | 3.2% | 3.1% | 2.9% | 3.5% | 3.0% |
| **Fee protokołu** | 10% | 5-20% | 25% | 0% (tylko gas) | Zmienna |
| **Wypłata** | Swap stETH lub Unstake queue | Swap rETH lub Burn | Swap cbETH | Unstake (Faza II ETH) | Instant (custodial) |
| **Smart contract risk** | Średnie | Średnie-Wysokie | Niskie (Coinbase) | Protokół ETH | Custodial risk |
| **Dostępność cross-chain** | 10+ sieci | 3 sieci | 2 sieci | Tylko Ethereum | Internal |
| **Gas dla approve** | $3-8 | $3-8 | $3-8 | $50-200 (setup node) | $0 (internal) |
| **Gas dla stake** | $5-12 | $5-12 | $5-12 | ~$150 | $0 (internal) |
| **Liczba kroków** | 2 (approve + stake) | 2 (approve + deposit) | 2 (approve + stake) | 20+ (node setup) | 1 (custodial) |
| **Czas do pierwszych nagród** | ~24h | ~24h | ~24h | ~1 epoch (6.4 min) | Instant |
| **Dokumentacja** | Dobra | Średnia | Dobra | Techniczna | Podstawowa |
| **Non-custodial?** | Tak | Tak | Tak | Tak | **NIE** |

**Kluczowe pytanie użytkownika:** <mark>*"Który wybrać?!"*</mark>

> **Bez OROKAI:** 2-4 godziny research na Reddit/Discord/Twitter  

> **Z OROKAI:** AI Agent pokazuje 3 opcje zgodne z profilem (np. "Lido – najwyższa płynność, Rocket Pool – bardziej zdecentralizowane, Native – najwyższe APY ale 32 ETH min.")

---

## Problem

### Metametrics – niemożność porównania "jabłko do jabłka"

Różne protokoły używają różnych definicji tych samych metryk:

| Termin | Definicja w Lido | Definicja w Rocket Pool | Definicja w AAVE |
|--------|------------------|------------------------|------------------|
| **APY** | Annualized Percentage Yield (compound daily) | APR (Annual Percentage Rate, simple) | Variable APY (zmienia się co block) |
| **Fee** | 10% z nagród stakerów | 5-20% w zależności od commission operatora | 0.3% + variable borrow rate spread |
| **Rewards** | Auto-accruing (balance stETH rośnie) | Mint nowy rETH (ratio zmienia się) | Claimable incentives (aToken) |
| **Risk** | "Smart contract audited" | "Decentralized operator set" | "Liquidation risk + smart contract risk" |

**Użytkownik bez technicznego zaplecza:** *"Nie rozumiem różnicy między 'accruing' a 'claimable'. Po prostu chcę wiedzieć ile zarobię."*

## Konsekwencja

Trudność w porównaniu strategii „jabłko do jabłka”, ryzyko wyboru nieadekwatnego protokołu lub nieaktualnej wersji kontraktu.

:::warning[Ryzyko nieaktualnych informacji]

Dynamiczny charakter DeFi sprawia, że strategie i protokoły mogą szybko się zmieniać, co utrudnia użytkownikom pozostanie na bieżąco i podejmowanie optymalnych decyzji.

:::