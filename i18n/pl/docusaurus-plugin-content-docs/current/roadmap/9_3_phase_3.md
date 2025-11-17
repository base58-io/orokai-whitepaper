---
sidebar_label: Faza 3 — Integracje regulowane i OROKAI Chain
sidebar_position: 4
custom_edit_url: null
---

# Faza 3 — Integracje regulowane i OROKAI Chain

## Zakres: Funkcje instytucjonalne i regulowane

### Ulepszone KYC (gdzie wymagane)

- Warstwowe KYC (opcjonalne dla DeFi, wymagane dla fiat/CEX/RWA)
- Zarządzane przez partnera (Stripe, V Plus Pay, partnerzy CEX)
- Zachowujące prywatność (minimalne dane do OROKAI)
- Regionalne warianty (wymogi US vs EU vs Azja)

### Integracja Real-World Assets (RWA)

- Tokenizowane papiery wartościowe (tylko przez licencjonowanych emitentów)
- Tokenizowane towary (złoto, nieruchomości)
- OROKAI = tylko warstwa UI/agregacji
- Partner przejmuje ciężar regulacyjny (emitent, custodian)

### Integracja handlu papierami wartościowymi (warunkowa)

- Wyświetlaj tokenizowane akcje/obligacje w portfelu
- Wykonuj przez licencjonowanego partnera broker-dealer
- OROKAI nigdy nie działa jako broker
- Wysoce zależne od jurysdykcji (może nie uruchomić w niektórych regionach)

### Token Generation Event (TGE)

- Uruchomienie tokena OROKAI (utility, nie papier wartościowy)
- Zniżki na opłaty, governance, staking
- Zobacz Rozdział 8 dla pełnych szczegółów [TBD]
- Podlega prawnej zgodzie na wszystkich głównych rynkach

### OROKAI Chain Mainnet v1

- Architektura L1 lub L2 (decyzja do Miesiąca 24)
- Gas w tokenie OROKAI
- Warstwa orkiestracji (batching, routing, messaging)
- Zestaw walidatorów lub infrastruktura sequencera
- Komunikacja cross-chain z istniejącymi sieciami

## Kamienie milowe
### Kamień milowy 8
#### Skala i rentowność
> Deliverables:
- Ramy prawne sfinalizowane (struktura podmiotu, licencje)
- Umowy partnerskie podpisane (CEX, emitenci RWA, brokerzy)
- Przepływy KYC zaprojektowane (integracje partnerów)
- Dokumentacja zgodności kompletna

### Kamień milowy 9
#### Przygotowanie TGE
> Deliverables:
- Ekonomia tokena sfinalizowana (zobacz Rozdział 8 [TBD])
- Kontrakty tokena wdrożone (testnet)
- Plan dystrybucji potwierdzony (zespół, społeczność, treasury)
- Kampania marketingowa przygotowana
- Listingi giełdowe wynegocjowane (DEX + CEX)

### Kamień milowy 10
#### Przygotowanie TGE
> Deliverables:
- Publiczny testnet live (walidatorzy/sequencery operacyjne)
- Dokumentacja deweloperska opublikowana
- Początkowe dApps wdrożone (sama platforma OROKAI)
- Bug bounty + program incentivized testnet
- Połączenia mostów cross-chain przetestowane

## Deliverables techniczne
### Integracje funkcji regulowanych
- Połączenia API partnerów (CEX, platformy RWA, brokerzy)
- Przepływy weryfikacji KYC (pass-through do partnerów)
- Narzędzia raportowania zgodności (logi transakcji, alerty AML)
- Ulepszenia geo-restrykcji (detekcja VPN, weryfikacja IP)

### OROKAI Chain (jeśli realizowany)

#### Smart kontrakty:
- Kontrakt tokena (kompatybilny z ERC-20 lub natywny)
- Kontrakty staking/delegacja
- Logika dystrybucji opłat gazu
- Moduł governance (jeśli włączony)

#### Infrastruktura:
- Oprogramowanie walidatora/sequencera
- Block explorer
- Endpointy RPC (publiczne + premium)
- Kontrakty mostów (do Ethereum, Polygon, etc.)
- SDK/narzędzia deweloperskie

#### Observability:
- Monitoring sieci (walidatorzy, TPS, finalność)
- Dashboard ekonomii tokena (podaż, staking, spalenia)
- Portal governance (jeśli dotyczy)

### Ulepszenia platformy
- Enterprise API (dla klientów instytucjonalnych)
- White-label SDK (dla partnerów B2B)
- Zaawansowana analityka (analiza kohort, modele predykcyjne)
- Wsparcie multi-sig (dla DAO, funduszy, family offices)

## Zgodność i prawo

### Opinia prawna tokena
- Analiza testu Howey (US)
- Zgodność MiFID II (EU)
- Klasyfikacja papierów wartościowych w każdej jurysdykcji
- Strategie safe harbor (jeśli dotyczy)

### Ramy RWA/papierów wartościowych
- Relacje broker-dealer (OROKAI nie jako broker)
- Koordynacja agenta transferowego (dla tokenizowanych papierów wartościowych)
- Ustalenia custody (trzymane przez partnera, nie OROKAI)
- Weryfikacja akredytacji inwestora (gdzie wymagane)

### Strategia wielojurysdykcyjna
- Struktura podmiotu (US vs podmioty offshore)
- Geo-blokowanie gdzie konieczne (kraje ograniczone)
- Lokalni radcowie prawni na głównych rynkach (US, EU, Singapur, Japonia, Arabia Saudyjska)
- Uczestnictwo w regulatory sandbox (gdzie dostępne)

## Egzekucja warunkowa (elastyczność)

**Funkcje Fazy 3 są WYSOCE warunkowe:**

JEŚLI opinia prawna = "token jest papierem wartościowym" 
   TO opóźnij/anuluj TGE LUB zrestrukturyzuj jako token tylko governance

JEŚLI partnerstwa RWA nie zmaterializują się 
   TO pomiń integrację RWA, skup się na podstawowym DeFi

JEŚLI koszty OROKAI Chain przekroczą $10M+ 
   TO ponownie oceń wykonalność, potencjalnie porzuć łańcuch (użyj istniejących L1/L2)

JEŚLI funkcje regulowane zablokowane w US 
   TO skup się na rynkach Azja/EU, zaakceptuj niższy TAM

JEŚLI rentowność osiągnięta BEZ funkcji regulowanych 
   TO obniż priorytet Fazy 3, zoptymalizuj funkcje Fazy 2 zamiast tego

Filozofia: Faza 3 to EKSPANSJA, nie PRZETRWANIE

:::tip[Ekspansja regulowana]

Faza 3 reprezentuje pełną dojrzałość z integracjami tradycyjnych finansów i natywną infrastrukturą blockchain, wszystko zbudowane na fundamentach zgodności regulacyjnej.

:::