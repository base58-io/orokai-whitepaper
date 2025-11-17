---
sidebar_label: Zasady i założenia
sidebar_position: 1
custom_edit_url: null
---

# Zasady i założenia

## Podstawowe zasady rozwoju

:::warning[ważne] 
Ta roadmapa <mark>nie jest gwarancją funkcji ani dat dostarczenia.</mark> Reprezentuje nasz obecny kierunek strategiczny i może być dostosowana w miarę ewolucji projektu.
:::

Przed zagłębieniem się w konkretne fazy, ustalamy fundamentalne zasady kierujące naszym podejściem do rozwoju i kluczowe założenia leżące u podstaw osi czasu.

### Non-Custodial na pierwszym miejscu

> Każda funkcja musi utrzymywać model self-custody:
- Użytkownicy zawsze kontrolują swoje klucze
- OROKAI nigdy nie wykonuje transakcji w imieniu użytkownika
- Przepływ pracy "przygotuj-i-podpisz" obowiązkowy dla wszystkich operacji
- Każda funkcja naruszająca tę zasadę jest odrzucana, niezależnie od popytu

Implikacja: Niektóre funkcje "wygody" mogą zająć dłużej lub być niemożliwe
Przykład: Brak "auto-invest" bez podpisywania każdej transakcji przez użytkownika

### Architektura DEX-First

> Wszystkie swapy krypto kierowane przez zewnętrzne DEX:
- OROKAI nigdy nie działa jako market maker ani dostawca płynności
- Brak księgi zleceń ani wewnętrznej funkcjonalności giełdy
- Podejście allow-list (wyselekcjonowane integracje DEX)
- Brak roszczeń "najlepszej egzekucji" (pokazuj koszty, użytkownik decyduje)

Implikacja: Zależne od płynności i dostępności DEX

### Compliance-By-Design

> Zgodność regulacyjna wbudowana w architekturę, nie dodawana później:
- Ograniczenia geograficzne egzekwowane na poziomie UI/API
- Screening sankcji przez partnerów (operacje fiat)
- Jasne rozdzielenie: OROKAI = oprogramowanie, partnerzy = usługi finansowe
- Funkcje wymagające licencji tylko przez licencjonowanych partnerów

Implikacja: Niektóre funkcje opóźnione do zabezpieczenia partnerstw/licencji

### Bezpieczeństwo i audyty bramkują postęp

> Żadna funkcja nie startuje bez odpowiedniego przeglądu bezpieczeństwa:
- Smart kontrakty: Minimum 2 niezależne audyty
- Krytyczny backend: Testy penetracyjne + przegląd kodu
- Nowe integracje: Proces weryfikacji allow-list
- Publiczny bug bounty na wszystkich etapach

Implikacja: Audyty mogą opóźnić uruchomienia o 4-8 tygodni

### Iteracyjna strategia wydań

> Wysyłaj MVP, zbieraj feedback, iteruj:
- Faza 1: Tylko funkcje podstawowe (ograniczony zakres)
- Ucz się z zachowania użytkowników przed rozszerzaniem
- "Gotowe" oznacza "uruchomione i stabilne", nie "perfekcyjne"
- Przyszłe fazy budują na zwalidowanych założeniach

Implikacja: Wcześni użytkownicy widzą podstawowe wersje, nie wypolerowany produkt końcowy

### Priorytetyzacja sterowana użytkownikiem

> Roadmapa dostosowuje się na podstawie rzeczywistego użycia i opinii:
- Jeśli użytkownicy nie używają Funkcji X, nie zbudujemy Funkcji X+1
- Jeśli użytkownicy kochają Funkcję Y, przyspieszamy powiązane funkcje
- Input społeczności przez ankiety, Discord, governance (jeśli włączone)
- Dane > opinie (metryki użycia informują decyzje)

Implikacja: Roadmapa może znacząco się zmienić po uruchomieniu

:::warning[Podejście regulacyjne-najpierw]
OROKAI priorytetyzuje zgodność i jasność regulacyjną przed uruchomieniem funkcji które wchodzą w interakcję z tradycyjnymi finansami lub regulowanymi instrumentami.
:::

## Kluczowe założenia (i ryzyka jeśli błędne)

### Założenie 1
#### Wykonalność techniczna
Założenie:
- Integracje multi-chain mogą być zbudowane w szacowanych osiach czasu
- Infrastruktura RPC/indeksowania skaluje się do 100k+ użytkowników
- Smart kontrakty mogą obsługiwać złożoną orkiestrację bezpiecznie
- Modele AI mogą dostarczać użyteczne rekomendacje bez halucynacji

Ryzyko jeśli błędne:
- Opóźnienia osi czasu (6-12 miesięcy na przepisanie)
- Problemy z wydajnością (wolny UX, nieudane transakcje)
- Podatności bezpieczeństwa (exploity, utrata środków)
- Niezadowolenie użytkowników (AI daje złe porady → churn)

Mitygacja:
- Testowanie proof-of-concept przed zobowiązaniem do architektury
- Modularny projekt (można wymienić komponenty jeśli potrzeba)
- Konserwatywne szacunki (dodaj 30% do osi czasu)
- Równoległe ścieżki rozwoju (nie blokuj na jednym komponencie)

### Założenie 2
#### Dostępność i niezawodność partnerów
Założenie:
- Stripe/Onramper pozostają niezawodne dla fiat on/off-ramp
- V Plus Pay dostarcza funkcjonalność karty zgodnie z harmonogramem
- Protokoły DEX (Uniswap, etc.) pozostają dostępne i płynne
- Protokoły mostów (CCTP, Wormhole, LayerZero) utrzymują uptime

Ryzyko jeśli błędne:
- Opóźnienia funkcji (partner nie gotowy gdy my jesteśmy)
- Degradacja doświadczenia użytkownika (przestoje, nieudane transakcje)
- Wpływ na przychody (nie można pobierać opłat jeśli usługi niedostępne)
- Szkoda reputacyjna (użytkownicy obwiniają OROKAI za problemy partnera)

Mitygacja:
- Redundancja wielu dostawców (Stripe + Onramper, wiele DEX)
- Kontraktowe SLA z partnerami
- Tryby fallback (jeśli Partner A nie działa, kieruj przez Partnera B)
- Transparentna status page (komunikuj problemy uczciwie)

### Założenie 3
#### Jasność regulacyjna (lub wystarczająca niejednoznaczność)
Założenie:
- Oprogramowanie non-custodial pozostaje legalne na głównych rynkach (US, EU, Azja)
- Program afiliacyjny nie sklasyfikowany jako piramida finansowa lub papiery wartościowe
- Model utility tokena akceptowalny dla regulatorów (jeśli uruchomiony)
- Protokoły DeFi z którymi się integrujemy pozostają zgodne

Ryzyko jeśli błędne:
- Wymuszone zamknięcia w niektórych jurysdykcjach (geo-blokada tych regionów)
- Odpowiedzialność prawna (grzywny, działania egzekucyjne)
- Usunięcie funkcji (np. musi wyłączyć program afiliacyjny)
- Uruchomienie tokena anulowane lub zrestrukturyzowane (jeśli Rozdział 8 staje się problematyczny)

Mitygacja:
- Radca prawny w każdej głównej jurysdykcji (US, EU, Singapur, Japonia)
- Konserwatywne podejście (unikaj szarych stref)
- Bramki zgodności przed uruchomieniem regulowanych funkcji
- Elastyczność pivotu modelu jeśli regulacje się zmienią

### Założenie 4
#### Popyt rynkowy i dopasowanie produkt-rynek
Założenie:
- Użytkownicy chcą uproszczonego dostępu DeFi (wygoda > pełna kontrola)
- Użytkownicy zapłacą opłaty za orkiestrację/AI/UX (nie tylko użyją darmowych narzędzi)
- Agregacja multi-chain jest wartościowa (vs specjalizacja single-chain)
- Karty napędzają zaangażowanie i przychody (vs bycie loss leaderem)

Ryzyko jeśli błędne:
- Niska adopcja (< 10k użytkowników po 12 miesiącach)
- Wysoki churn (użytkownicy próbują raz i odchodzą)
- Nierentowna ekonomia jednostkowa (CAC > LTV)
- Wymagany pivot (zmiana podstawowej propozycji wartości)

Mitygacja:
- Testowanie MVP z małą bazą użytkowników (waliduj przed skalowaniem)
- Elastyczna roadmapa (można zmienić priorytety na podstawie danych)
- Badania użytkowników (ankiety, wywiady, testy użyteczności)
- Runway finansowy (18-24 miesiące na znalezienie PMF)

## Czym roadmapa JEST i NIE JEST

### Ta roadmapa JEST

> Kierunkiem strategicznym (dokąd zmierzamy)

> Ramami priorytetyzacji (co jest ważne)

> Mapą zależności (co musi przyjść przed czym)

> Narzędziem komunikacji (wyrównaj zespół, partnerów, użytkowników)

> Elastyczna i adaptacyjna (dostosowuje się na podstawie nauki)

### Ta roadmapa NIE JEST

> Gwarancją funkcji ani dat

> Zobowiązaniem do konkretnej funkcjonalności

> Stałym kontraktem (zastrzegamy prawo do zmian)

> Poradą inwestycyjną (nie kupuj tokenów na podstawie obietnic roadmapy)

> Kompleksową listą (wiele szczegółów pominiętych dla zwięzłości)

## Terminologia do rozumienia faz

### Kamień milowy vs Deliverable

> Kamień milowy: Znaczące wydarzenie lub punkt decyzyjny

> Deliverable: Konkretna funkcja lub wynik

> Związek: Kamienie milowe są osiągane przez ukończenie wielu deliverables