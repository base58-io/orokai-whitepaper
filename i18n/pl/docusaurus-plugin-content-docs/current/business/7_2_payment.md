---
sidebar_label: Karty płatnicze
sidebar_position: 3
custom_edit_url: null
---

# Karty płatnicze i operacje fiat

:::warning[Kluczowa zasada]
OROKAI nigdy nie dotyka pieniędzy fiat. Partnerzy (V Plus Pay, Stripe, Onramper) obsługują wszystkie transakcje fiat. OROKAI zarabia opłaty za integrację oprogramowania, UX i orkiestrację — nie za przetwarzanie płatności ani przekaz pieniędzy.
:::

## Karty płatnicze

OROKAI współpracuje z **V Plus Pay** (cards.vpluspay.hk) aby oferować karty płatnicze finansowane krypto. To znaczący strumień przychodów, ponieważ używanie kart generuje powtarzające się, przewidywalne opłaty.

### Struktura partnerstwa: V Plus Pay

#### Kto co robi:

| Odpowiedzialność | V Plus Pay (Partner) | OROKAI |
|----------------|---------------------|--------|
| **Wydawanie kart** | Wydaje karty fizyczne/wirtualne | Tylko integracja oprogramowania |
| **Przetwarzanie płatności** | Zgodność PCI DSS, routing transakcji | Brak dostępu do danych kart |
| **KYC/AML** | Weryfikacja tożsamości, screening sankcji | Tylko UI do onboardingu użytkownika |
| **Zgodność regulacyjna** | Licencjonowany procesor płatności | Dostawca oprogramowania |
| **Rozliczanie fiat** | Wypłaty dla sprzedawców, konwersja walut | Nigdy nie dotyka fiat |
| **Wsparcie posiadaczy kart** | Problemy specyficzne dla kart (zgubiona/skradziona, spory) | Wsparcie integracji aplikacji |
| **Pobieranie opłat** | Potrąca z kwoty transakcji | Otrzymuje udział w przychodach |

> V Plus Pay jest <mark>regulowaną instytucją finansową.</mark> 
>
> OROKAI jest <mark>platformą technologiczną.</mark> Jasne rozdzielenie redukuje ciężar regulacyjny na OROKAI.

:::tip[opłata]
Opłata bazowa wynosi 2,5% (2,2% trafia do dostawcy/0,3% trafia do OROKAI).
:::

### Poziomy opłat oparte na wolumenie

Gdy miesięczne wydatki kartowe użytkownika rosną, **opłata V Plus Pay maleje** (standardowa praktyka branżowa). **0,3% OROKAI pozostaje stałe**.

**Przykładowa struktura poziomów (orientacyjna):**

| Miesięczny wolumen kartowy | Opłata V Plus Pay | Opłata OROKAI | Łączna opłata | Oszczędności użytkownika vs bazowa |
|---------------------|----------------|------------|-----------|---------------------|
| $0 - $5,000 (Bazowa) | 2.2%* | 0.3% | **2.5%** | — |
| $5,001 - $20,000 | 2.0%* | 0.3% | **2.3%** | 8% oszczędności |
| $20,001 - $50,000 | 1.8%* | 0.3% | **2.1%** | 16% oszczędności |
| $50,001 - $100,000 | 1.6%* | 0.3% | **1.9%** | 24% oszczędności |
| $100,000+ | 1.4%* | 0.3% | **1.7%** | 32% oszczędności |

**Uwagi:**
- Dokładne progi poziomów określane przez V Plus Pay i mogą się zmieniać
- 0,3% OROKAI jest **stałe** niezależnie od wolumenu
- [EDYTOWALNE-POZIOMY-KART: Progi wolumenu i stawki V Plus TBD przez partnera]

**Dlaczego opłata OROKAI nie maleje:**
- Nasze koszty (infrastruktura, integracja portfela, wsparcie) są **na transakcję**, nie zależne od wolumenu
- 0,3% jest już konkurencyjne vs alternatywy (zobacz porównanie poniżej)
- Spójność przychodów ważna dla operacji i rozwoju

### Strategiczne znaczenie kart

#### Dlaczego karty są kluczowym celem przychodowym:

> **Powtarzające się przychody:** Użytkownicy wydają regularnie (dziennie/tygodniowo) vs jednorazowe swapy

> **Przywiązanie użytkowników:** Karta w Apple/Google Pay → codzienny punkt kontaktu

> **Efekty sieciowe:** Więcej użytkowników → lepsze poziomy wolumenu → bardziej atrakcyjne

> **Cross-Sell:** Użytkownicy kart prawdopodobnie użyją innych funkcji OROKAI (staking, swapy)

> **Widoczność marki:** Fizyczne karty z brandingiem OROKAI = marketing

> **Wglądy w dane:** Wzorce wydatków informują rekomendacje AI (zgodne z prywatnością)

**Cel:** Karty stają się **głównym przypadkiem użycia**, który napędza codzienne zaangażowanie, z funkcjami DeFi jako wartością dodaną dla generowania zysku.

:::warning[Warunki zależne od partnera]

Opłaty związane z kartami i udział w przychodach zależą od umów partnerskich i lokalnych regulacji – konkretne warunki mogą się różnić w zależności od jurysdykcji.

:::

## Opłaty On/Off-Ramp

### Struktura opłat

Konwersje fiat ↔ krypto zapewniają **płynność wejścia i wyjścia** dla użytkowników. Niższa marża niż karty, ale krytyczna dla akwizycji użytkowników.

:::tip[opłata]
**Opłata OROKAI:** [EDYTOWALNE-OPŁATA-ONRAMP: 0.3%] na zakupione/sprzedane krypto
:::

**Pozycjonowanie OROKAI:**
- Droższe niż CEX (ale non-custodial + nie potrzeba konta CEX)
- Konkurencyjne z bezpośrednimi fiat on-rampami (Coinbase, Moonpay)
- **Kluczowa wartość:** Środki trafiają bezpośrednio do <mark>Twojego portfela,</mark> nie do custody giełdy

### Model przychodów: Napędzany wolumenem

Przychody z on/off-ramp zależą od:

> Miesięczny przychód = (Wolumen on-ramp × 0.3%) + (Wolumen off-ramp × 0.3%)
```
Przykładowe scenariusze:

Niska adopcja: 10,000 użytkowników × $200 śr. on-ramp = $2M wolumenu/miesiąc
├─ Przychód OROKAI: $6,000/miesiąc ($72k/rok)

Średnia adopcja: 100,000 użytkowników × $500 śr. = $50M wolumenu/miesiąc
├─ Przychód OROKAI: $150,000/miesiąc ($1.8M/rok)

Wysoka adopcja: 500,000 użytkowników × $1,000 śr. = $500M wolumenu/miesiąc
├─ Przychód OROKAI: $1.5M/miesiąc ($18M/rok)

Kluczowe metryki:
├─ Miesięczni użytkownicy On-Ramp (MORU)
├─ Średnia kwota On-Ramp (AORA)
├─ Częstotliwość On-Ramp (razy/użytkownik/miesiąc)
└─ Wskaźnik Off-Ramp (% użytkowników wypłacających)
```

**Czynniki wzrostu:**
- Akwizycja nowych użytkowników (marketing kart, partnerstwa)
- Ekspansja geograficzna (więcej krajów przez Onramper)
- Niższe opłaty partnerów (czyni OROKAI bardziej atrakcyjnym vs CEX)
- Ulepszone UX (więcej metod płatności)

### Dlaczego opłata On/Off-Ramp 0,3%?

OROKAI dostarcza znaczącą wartość za 0,3%:
> Integracja wielu dostawców
   - Utrzymywanie API ze Stripe, Onramper, innymi
   - Automatyczne przełączanie awaryjne (Stripe → Onramper jeśli niedostępny)
   - Monitorowanie statusu w czasie rzeczywistym

> Bezproblemowy UX
   - Osadzone widgety (brak przekierowania na zewnętrzną stronę)
   - Wstępnie wypełnione adresy portfeli (zapobieganie błędom)
   - Śledzenie transakcji i powiadomienia

> Orkiestracja portfela
   - Zapewnienie dostarczenia środków do właściwej sieci
   - Walidacja sieci (zapobieganie błędom złego łańcucha)
   - Zarządzanie gazem dla transakcji dostarczenia

> Wsparcie i rozwiązywanie sporów
   - Interfejs ze wsparciem partnera
   - Rozwiązywanie problemów z transakcjami
   - Koordynacja zwrotów (gdy dotyczy)

> Pomoc w zgodności
   - Egzekwowanie ograniczeń geograficznych
   - Koordynacja screeningu sankcji
   - Raportowanie regulacyjne (gdy wymagane)

0,3% OROKAI to wartość za **wygodę i bezpieczeństwo**.

**Dla szczegółowych przepływów użytkownika (jak działają karty i on/off-ramp), zobacz:**
[Sekcja Jak to działa: On-ramp / off-ramp](/docs/journey/5_2_on-ramp)