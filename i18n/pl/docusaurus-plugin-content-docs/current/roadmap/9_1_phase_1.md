---
sidebar_label: Faza 1 — Fundamenty
sidebar_position: 2
custom_edit_url: null
---

# Faza 1 — Fundamenty

## Zakres: Minimum Viable Product

### Staking DeFi

> Integracje dla 
- ETH (przez Lido - stETH)
- ATOM (Cosmos)
- SOL (Solana)
- allow-lista protokołów, widok nagród.

### On/Off-Ramp (przez partnerów)

> Wejście/wyjście przez licencjonowanych partnerów (emisja/rozliczenia/KYC/AML po stronie partnera).
- Integracja Stripe (główna)
- Integracja Onramper (backup)
- On-ramp kartą kredytową
- Off-ramp przelewem bankowym

### Karta płatnicza (przez V Plus Pay)

> Najpierw karta wirtualna (fizyczna w Fazie 2)
- Wydawaj z salda portfela
- Podstawowa struktura opłat (2.5%)

### DEX krajowy i swap

> Podstawowe swapy krypto w obrębie wspieranych łańcuchów:
- Uniswap V3 (Ethereum, Polygon, Base)
- Raydium (Solana)
- Podejście allow-list (tylko zweryfikowane pule)
- Transparentne rozbicie opłat 

### Portfel Zero-Setup

> Tworzenie smart wallet
- po stronie użytkownika, non-custodial
- Logowanie email/social (zarządzanie kluczami MPC)
- Opcja backupu seed phrase
- Wsparcie WalletConnect (istniejące portfele)

## Kamienie milowe

### Kamień milowy 1
#### Podstawowa infrastruktura
> Deliverables:
- Integracja RPC multi-chain (Ethereum, Solana, Cosmos)
- Przepływ tworzenia portfela przetestowany
- Podstawowy UI/UX (aplikacja webowa)
- Smart kontrakty wdrożone (testnet)

### Kamień milowy 2
#### Integracje partnerów
> Deliverables:
- Stripe/Onramper live (testnet/sandbox)
- Integracja karty V Plus Pay ukończona
- Staking Lido funkcjonalny
- Routing swap Uniswap działający

### Kamień milowy 3
#### Uruchomienie beta
> Deliverables:
- Zamknięta beta (100-500 użytkowników, tylko zaproszenia)
- Monitoring i observability live
- Infrastruktura wsparcia gotowa
- Program bug bounty uruchomiony

### Kamień milowy 4
#### Publiczne uruchomienie
> Deliverables:
- Dostępność publiczna (otwarte rejestracje)
- Kampania marketingowa (treści, płatne reklamy, partnerstwa)
- Dokumentacja kompletna (przewodniki użytkownika, FAQ)
- Początkowe partnerstwa płynnościowe (protokoły, portfele)

## Deliverables techniczne

### Smart kontrakty
- AllocationRouter (orkiestruje przepływy wieloetapowe)
- Adaptery protokołów (Lido, walidatorzy Cosmos, staking Solana)
- Router DEX (integracja Uniswap)
- Mechanizm awaryjnej pauzy

### Usługi backendowe
- Warstwa agregacji RPC (redundancja wielu dostawców)
- Indexer (historia transakcji, salda)
- Silnik quote/routing (agregacja cen DEX)
- Handlery webhook (wydarzenia partnerów)
- Kolejka zadań (operacje asynchroniczne)

### Frontend

- Aplikacja webowa (React, responsywna)
- Adapter portfela (WalletConnect, tworzenie smart wallet)
- Przepływ transakcji (przygotuj, podgląd kosztów, podpisz)
- Dashboard (salda, historia, pozycje)
- Chat wsparcia (Intercom lub podobny)

## Zgodność i partnerstwa
### Regulacyjne
- Przegląd prawny ToS, Polityki prywatności
- Ograniczenia geograficzne wdrożone (zgodność z sankcjami)
- KYC/AML partnera (obsługiwane przez Stripe, V Plus Pay)
### Kluczowe partnerstwa
- Stripe (on-ramp) - Priorytet 1
- Onramper (backup on-ramp) - Priorytet 2
- V Plus Pay (emitent kart) - Priorytet 1
- 1-2 protokoły DeFi (Lido potwierdzone, inne TBD)

:::tip[Budowanie fundamentów]

Faza 1 ustanawia podstawową infrastrukturę i waliduje model non-custodial z istotnymi integracjami DeFi.

:::