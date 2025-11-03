---
sidebar_label: Skrót funkcjonalny
sidebar_position: 5
custom_edit_url: null
---

# On-ramp, automatyczna alokacja, nagrody w USDT

## Skrót funkcjonalny

### On-/off-ramp przez partnerów 
Zakup/sprzedaż krypto oraz płatności fiat obsługują zewnętrzni, licencjonowani dostawcy; OROKAI <mark>nie przyjmuje depozytów i nie rozlicza płatności jako strona finansowa.</mark>

### Portfel i uprawnienia
Użytkownik korzysta z własnego portfela (lub portfela utworzonego po jego stronie); OROKAI nie przechowuje kluczy; <mark>uprawnienia smart kontraktów są minimalne i jawne (least privilege).</mark>

### Alokacja i migracje
OROKAI przygotowuje transakcje (stake/deposit/swap), a <mark>użytkownik je podpisuje;</mark> dostępne są migracje „one-click” między protokołami i łańcuchami.

### Nagrody w USDT
Nagrody generowane są przez wybrane przez użytkownika protokoły, mogą być claimowane przez smart kontrakty <mark>w granicach udzielonych uprawnień,</mark> konwersja do USDT odbywa się przez DEX i z podpisem/zgodą użytkownika. Nagrody mogą być automatycznie claimowane i konwertowane po konfiguracji przez użytkownika. Stopy i nagrody zależą od zewnętrznych protokołów i są zmienne; OROKAI ich nie gwarantuje.


### DEX-first
Wymiany krypto są domyślnie realizowane przez zdecentralizowane giełdy (DEX) z listy dozwolonych integracji. OROKAI nie działa jako animator rynku, broker czy depozytariusz.


## Transparentne opłaty

Model opłat (m.in. użycie karty, operacje on-chain, DEX swap) jest jasno prezentowany przed autoryzacją transakcji. <mark>OROKAI pobiera wyłącznie opłaty przewidziane w regulaminie i ujawnione w interfejsie.</mark>

## Karty płatnicze (przez partnerów licencjonowanych)

### Rola partnera
Emisję kart, rozliczenia, AML/KYC oraz zgodność (np. PCI DSS) zapewnia wydawca karty/procesor płatności.
### Rola OROKAI
Wyłącznie warstwa oprogramowania i integracji (UI/API, synchronizacja stanu, webhooks). Brak przetwarzania wrażliwych danych kart (PAN/CVV) po stronie OROKAI.
### Zasilanie i użycie
<mark>Środki pochodzą z portfela użytkownika (self-custody);</mark> przewalutowania i on-/off-ramp wykonują partnerzy. Dostępność funkcji zależna od jurysdykcji.

## Program afiliacyjny (revenue share)

### Mechanika
Użytkownik otrzymuje część przychodów OROKAI z opłat (fees) wygenerowanych przez zaproszone konta (np. DEX swap, on-/off-ramp, komponenty kartowe o ile umowy to dopuszczą).
### Attrybucja i wypłaty
Link/kod polecający, atrybucja off-/on-chain; wypłaty w USDT po spełnieniu progów i kontroli anti-fraud; w wybranych przypadkach KYC może być wymagane przez partnera.
### Charakter wypłat
<mark>To udział w przychodach,</mark> nie odsetki ani nie gwarantowany dochód.

:::warning[Zastrzeżenia high level]

> OROKAI nie świadczy usług powierniczych ani nie przechowuje aktywów klientów.

> OROKAI nie udziela porad inwestycyjnych; informacje i rekomendacje AI mają charakter wyłącznie informacyjny.

> Wyniki/zwroty zależą od zewnętrznych protokołów i warunków rynkowych; są zmienne i niegwarantowane.

> Karty i afiliacja działają wyłącznie przez partnerów regulowanych i mogą być ograniczone geograficznie.

> Dostępność funkcji może zależeć od jurysdykcji i integracji partnerów (Faza I: Full DeFi, no KYC; Faza II: opcjonalne KYC dla funkcji fiat).
:::