---
sidebar_label: On-Ramp / Off-Ramp
sidebar_position: 3
custom_edit_url: null
---

# On-Ramp / Off-Ramp z kartą kredytową

## Usługi obsługiwane przez partnerów

### Bezproblemowe wejście i wyjście

OROKAI ułatwia przechodzenie między tradycyjną walutą (fiat) a krypto <mark>bez wymagania konta na scentralizowanej giełdzie.</mark> Współpracujemy z <mark>licencjonowanymi dostawcami płatności</mark>, którzy obsługują wszystkie transakcje fiat, zgodność z KYC/AML i przetwarzanie kart — OROKAI jest <mark>tylko interfejsem oprogramowania.</mark>

:::warning[Kluczowa zasada]
OROKAI <mark>nigdy nie dotyka pieniędzy fiat.</mark> Partnerzy obsługują wszystkie transakcje fiat, bankowość i zgodność regulacyjną. Łączymy Cię z nimi, ale <mark>nie jesteśmy dostawcą usług płatniczych, przekazicielem pieniędzy ani bankiem.</mark>
:::

## Nasi partnerzy On/Off-Ramp

Hierarchia dostawców On/Off-Ramp (Automatyczne przełączanie awaryjne dla globalnego zasięgu)

### Główny dostawca: Stripe

#### Dostawca:        
> Stripe, Inc. (stripe.com)
#### Licencjonowany (stany USA):  
> Zarejestrowany przekaziciel pieniędzy 

> Certyfikat PCI DSS Level 1

> Regulowany procesor płatności (globalnie)

#### Zasięg:        
Główna dostępność w:
- Stanach Zjednoczonych
- Unii Europejskiej (większość krajów)
- Wielkiej Brytanii
- Kanadzie
- Australii
- Innych wybranych regionach (sprawdź dostępność Stripe)

#### Co obsługuje Stripe:
- Przetwarzanie płatności fiat (karta/bank)
- Weryfikacja KYC/AML (kontrole tożsamości)
- Monitoring transakcji (zapobieganie oszustwom)
- Raportowanie regulacyjne (zgodnie z wymogami prawa)
- Wsparcie klienta dla problemów płatniczych
- Custody krypto podczas on-ramp (krótki okres)

#### Co obsługuje OROKAI:
- Integracja UI/UX (osadzenie widgetu Stripe)
- Przechowywanie preferencji użytkownika (metody płatności, limity)
- Zarządzanie portfelem docelowym (TWÓJ portfel self-custody)
- Śledzenie statusu transakcji (powiadomienia)

#### Obsługiwane aktywa (przez Stripe):
- Główne kryptowaluty: BTC, ETH, USDC, USDT
- Wybór sieci: Ethereum, Polygon, Solana, inne
- (Dostępność różni się w zależności od regionu - określa Stripe)

### Dostawca zapasowy: Onramper

#### Dostawca:        
> Onramper (onramper.com)
#### Licencjonowany:  
> Agregator płatności (łączy się z wieloma dostawcami)

> Współpracuje z licencjonowanymi partnerami w każdym regionie

#### Zasięg:        
Globalny (180+ krajów):
- Aktywuje się gdy Stripe niedostępny w regionie użytkownika
- Szerszy zasięg geograficzny
- Wiele metod płatności na region

#### Co robi Onramper:
- Kieruje do najlepszego dostępnego licencjonowanego dostawcy dla regionu użytkownika
- Agreguje: Mercuryo, MoonPay, Transak, Wyre, innych
- Obsługuje regionalną zgodność KYC/AML przez partnerów
- Zapewnia ujednolicone API dla integracji OROKAI

#### Przykłady regionalnego przełączania awaryjnego:
Użytkownik w [Regionie X gdzie Stripe niedostępny]
- Onramper kieruje do Mercuryo (jeśli dostępny)
- Użytkownik kończy KYC z Mercuryo
- Krypto dostarczone do portfela użytkownika OROKAI

Użytkownik w [Regionie Y z metodą płatności nieobsługiwaną przez Stripe]
- Onramper kieruje do Transak (obsługuje lokalną metodę płatności)
- Użytkownik kończy transakcję
- Krypto dostarczone do portfela użytkownika

### Automatyczny wybór dostawcy

> OROKAI wykrywa region użytkownika (IP + zadeklarowany kraj)

> Sprawdza dostępność Stripe dla tego regionu

> JEŚLI Stripe dostępny:
   - Prezentuj widget Stripe (preferowany - najlepszy UX)
   - Użytkownik kończy transakcję przez Stripe
> JEŚLI Stripe NIE dostępny:
   - Przełącz na widget Onramper
   - Onramper wybiera najlepszego dostępnego dostawcę
   - Użytkownik kończy transakcję przez partnera Onramper

Użytkownik widzi bezproblemowe doświadczenie niezależnie od użytego dostawcy.

## Struktura opłat

### Składnik 1: Opłaty dostawcy

#### Opłaty Stripe (orientacyjne, różnią się w zależności od regionu/metody płatności):
- Przetwarzanie płatności: ~2-5% (zależne od karty)
- Konwersja walut: Włączona w kurs wymiany
- Opłaty sieciowe: Gas blockchain (przepuszczane)
- Łącznie typowo: 2-5% + opłaty sieciowe

#### Opłaty partnerów Onramper (różnią się w zależności od dostawcy/regionu):
- Przetwarzanie płatności: ~3-6% (zależne od dostawcy)
- Konwersja walut: Włączona w kurs wymiany
- Opłaty sieciowe: Gas blockchain (przepuszczane)
- Łącznie typowo: 3-6% + opłaty sieciowe

:::tip[UWAGA]
Opłaty dostawców są ustalane przez partnerów Stripe/Onramper, nie OROKAI. Wyświetlamy je jasno, ale nie mamy kontroli nad tymi stawkami.
:::

### Składnik 2: Opłaty za usługi OROKAI

> On-Ramp: 1,0% kwoty transakcji

> Off-Ramp: 1,0% kwoty transakcji

Co to obejmuje:
- Integracja i utrzymanie oprogramowania
- Interfejs użytkownika i doświadczenie
- Orkiestracja transakcji
- Wsparcie klienta (strona OROKAI)
- Zarządzanie portfelem i powiadomienia

Stosowane do: Otrzymana kwota krypto (on-ramp) lub wysłana (off-ramp)

### Składnik 3: Opłata sieciowa

Opłaty sieciowe to koszt zapisywania transakcji na blockchain i są płacone walidatorom/górnikom, nie OROKAI ani dostawcom płatności.

Jak to działa:
- On-Ramp: Opłata gazu za dostarczenie krypto od dostawcy do TWOJEGO portfela
- Off-Ramp: Opłata gazu za wysłanie krypto z TWOJEGO portfela do dostawcy
- Kwota różni się w zależności od: Sieci (Ethereum vs Polygon), przeciążenia, złożoności transakcji
- Wyświetlana w czasie rzeczywistym przed potwierdzeniem transakcji

:::warning[zastrzeżenie]
Opłaty sieciowe NIE są kontrolowane przez OROKAI ani dostawców — są określane przez warunki sieci blockchain w momencie transakcji.
:::

:::tip[WSKAZÓWKA] 
Wybierz sieci o niższych kosztach (Polygon, Solana) dla mniejszych transakcji, aby zminimalizować opłaty sieciowe jako procent zakupu/sprzedaży.
:::

### Przykład całkowitego kosztu

#### On-Ramp przez Stripe
```
Użytkownik chce kupić: USDC wartości $1,000 USD

Rozbicie kosztów:

1. Płatność do Stripe:          $1,000.00

2. Opłaty Stripe (~3%):         -$30.00
(Przetwarzanie karty + FX)

3. Zakupione krypto:            USDC wartości $970.00
 
4. Opłata OROKAI (1%):          -$9.70
(1% z $970 krypto)

5. Opłata sieciowa (gas):       -$2.50
(Dostarczenie USDC do portfela na Polygon)

─────────────────────────────────────────────────────────────────────
OTRZYMUJESZ:                    ~$957.80 USDC 
─────────────────────────────────────────────────────────────────────

Łączne opłaty: $42.20 (4.22% z $1,000)
 ├─ Dostawca: $30.00 (3.0%)
 ├─ OROKAI: $9.70 (0.97%)
 └─ Sieć: $2.50 (0.25%)
```

#### Off-Ramp przez Stripe
```
Użytkownik chce wypłacić: 1,000 USDC na konto bankowe

Rozbicie kosztów:

1. Kwota początkowa:              1,000 USDC

2. Opłata OROKAI (1%):            -10 USDC
(1% z 1,000 USDC)

3. Kwota wysłana do Stripe:       990 USDC

4. Stripe konwertuje na USD:      ~$990.00
(Po aktualnym kursie wymiany)

5. Opłata wypłaty Stripe:         -$15.00
(Opłata przelewu bankowego, różni się w zależności od metody/regionu)

6. Opłata sieciowa (gas):         -$2.50
(Wysyłanie USDC na adres Stripe)

─────────────────────────────────────────────────────────────────────
OTRZYMUJESZ (w banku):            ~$972.50 USD
─────────────────────────────────────────────────────────────────────

Łączne opłaty: $27.50 (2.75% z $1,000)
 ├─ OROKAI: $10.00 (1.0%)
 ├─ Dostawca: $15.00 (1.5%)
 └─ Sieć: $2.50 (0.25%)
```

### Widoczność kosztów

Zanim użytkownik zaakceptuje operację, widzi opłaty partnera i koszty sieciowe (jeśli dotyczą).

:::tip[Integracja z regulowanym partnerem]

Wszystkie operacje kartowe i fiat są obsługiwane przez licencjonowanych, zgodnych dostawców zewnętrznych – OROKAI działa wyłącznie jako warstwa interfejsu.

:::

## Przepływ użytkownika

### On-Ramp (Kup krypto kartą)

> **KROK 1:** Użytkownik inicjuje zakup

Użytkownik klika: [Kup krypto] w dashboardzie OROKAI

OROKAI pyta:
- Ile? [Kwota w USD/EUR/GBP/etc.]
- Jakie aktywo? [ETH / USDC / USDT / BTC / etc.]
- Która sieć? [Ethereum / Polygon / Solana / etc.]
- Metoda płatności? [Karta / Przelew bankowy / etc.]

> **KROK 2:** Wybór dostawcy (Automatyczny)

OROKAI wykrywa:
- Region użytkownika: [Kraj]
- Stripe dostępny? → TAK
- Kieruj do: Widget Stripe

(Jeśli Stripe niedostępny → Przełącz na widget Onramper)

> **KROK 3:** Ujawnienie opłat

Użytkownik musi wyraźnie zaakceptować opłaty przed kontynuacją.

> **KROK 4:** Widget Stripe otwiera się (Osadzony)

Widget on-ramp Stripe pojawia się w interfejsie OROKAI.

:::warning[KRYTYCZNE BEZPIECZEŃSTWO]
- Dane karty wprowadzane bezpośrednio do widgetu Stripe
- OROKAI nigdy nie otrzymuje PAN, CVV ani informacji rozliczeniowych
- Zgodność PCI DSS obsługiwana przez Stripe
:::
> **KROK 5:** KYC/AML (Jeśli wymagane przez Stripe)

Dla nowych użytkowników lub dużych kwot, Stripe może wymagać:

- Weryfikacji tożsamości (dowód osobisty rządowy)
- Potwierdzenia adresu (rachunek za media, wyciąg bankowy)
- Weryfikacji selfie (sprawdzenie żywotności)
- Źródła środków (dla dużych transakcji)

To dzieje się w przepływie Stripe, nie OROKAI.
OROKAI otrzymuje aktualizacje statusu (zatwierdzony/oczekujący/odrzucony).

> **KROK 6:** Przetwarzanie płatności

Stripe przetwarza płatność kartą:

Aktualizacje statusu pokazane w OROKAI:
- Przetwarzanie płatności...
- Płatność udana
- Kupowanie krypto...
- Krypto zakupione, dostarczanie do portfela...

Użytkownik może zamknąć okno; powiadomienia zaktualizują się po zakończeniu.

> **KROK 7:** Dostarczenie krypto do Twojego portfela

Stripe dostarcza USDC na adres portfela podany przez OROKAI
(adres TWOJEGO portfela self-custody).

OROKAI monitoruje blockchain pod kątem przychodzącej transakcji:
- Wykryto transakcję: [TX Hash]
- Status: Oczekująca (czekanie na potwierdzenia)
- Status: Potwierdzona 

> **KROK 8:** Gotowe do alokacji

Użytkownik może teraz:
- Zobaczyć saldo w dashboardzie
- Alokować do strategii DeFi (zobacz Sekcja 5.2)
- Zachować w portfelu na później
- Kupić więcej krypto

### Off-Ramp (Sprzedaj krypto na fiat)

> **KROK 1:** Użytkownik inicjuje sprzedaż

Użytkownik klika: [Sprzedaj krypto] lub [Wypłać na bank]

OROKAI pyta:
- Które aktywo? [Pokazuje dostępne: USDC, ETH, etc.]
- Ile? [Kwota w krypto lub ekwiwalent $]
- Sieć? [Ethereum / Polygon / etc.]
- Cel? [Konto bankowe / Karta]

> **KROK 2:** Unstake/Wypłata (Jeśli potrzebne)

JEŚLI krypto jest zastakowane w protokole:
- OROKAI wykrywa: "Twoje USDC jest w AAVE"
- Sugeruje: "Wypłać najpierw z AAVE"
- Przygotowuje: Przepływ unstake → Potem off-ramp
- Użytkownik podpisuje: Transakcję wypłaty

JEŚLI krypto jest już płynne w portfelu:
- Przejdź bezpośrednio do Kroku 3

> **KROK 3:** Ujawnienie opłat

Opłaty są szacunkami. Ostateczne kwoty potwierdzone po konwersji.

> **KROK 4:** Przygotowanie transferu krypto

OROKAI przygotowuje transakcję wysłania USDC na adres Stripe.

> **KROK 5:** Użytkownik podpisuje transakcję

Transakcja pojawia się w TWOIM portfelu (MetaMask, etc.):
- Przegląd: Kwota, adres, sieć
- Podpisz transakcję
- Wyślij do blockchain

OROKAI śledzi status:
- Transakcja oczekująca...
- Potwierdzona on-chain
- Stripe przetwarza konwersję...

> **KROK 6:** Stripe konwertuje i przekazuje

Stripe otrzymuje USDC:
- Konwertuje na USD (po aktualnym kursie rynkowym)
- Odejmuje opłatę wypłaty
- Inicjuje przelew bankowy (ACH/SEPA/etc.)

Harmonogram:
- Krypto otrzymane przez Stripe: Natychmiast (potwierdzenie on-chain)
- Konwersja USD: W ciągu 1 godziny
- Wpłata bankowa: 1-3 dni robocze (zależy od banku)

> **KROK 7:** Powiadomienie o zakończeniu

OROKAI pokazuje aktualizacje:
```
Krypto wysłane do Stripe
[Link TX Hash]

Status: Oczekiwanie na wpłatę bankową (1-3 dni)
Oczekiwane przybycier: [Data]

Otrzymasz powiadomienie gdy środki wpłyną na bank.  
```
Gdy przelew bankowy się zakończy:
```
Wypłata zakończona!

Otrzymano w banku: 
Kwota początkowa: 
Łączne opłaty: 

[Zobacz paragon] [Nowa transakcja]
```

## Dostępność regionalna i przełączanie awaryjne

### Zasięg geograficzny i kierowanie dostawców


| Region | Główny dostawca | Dostawca zapasowy | Uwagi o zasięgu |
|--------|-----------------|-------------------|----------------|
| 🇺🇸 Stany Zjednoczone | Stripe | Onramper | Wszystkie stany* |
| 🇪🇺 Unia Europejska | Stripe | Onramper | Większość krajów |
| 🇬🇧 Wielka Brytania | Stripe | Onramper | Pełne wsparcie |
| 🇨🇦 Kanada | Stripe | Onramper | Pełne wsparcie |
| 🇦🇺 Australia | Stripe | Onramper | Pełne wsparcie |
| 🇯🇵 Japonia | Onramper | N/A | Przez partnerów |
| 🇰🇷 Korea Południowa | Onramper | N/A | Przez partnerów |
| 🇸🇦 Arabia Saudyjska | Onramper | N/A | Przez partnerów** |
| 🇸🇬 Singapur | Stripe | Onramper | Pełne wsparcie |
| Inne (180+ krajów) | Onramper | N/A | Oparte na partnerach |

**Uwagi:**
- \* Niektóre stany USA mają ograniczenia krypto (NY, HI, etc.) — Onramper może kierować do zgodnych dostawców
- \** Dostępność w Arabii Saudyjskiej podlega lokalnym regulacjom i wymogom zgodności z Szariatem
- Zasięg i dostępność dostawców może się zmieniać w oparciu o zmiany regulacyjne
- OROKAI automatycznie kieruje Cię do najlepszego dostępnego dostawcy dla Twojego regionu


:::tip[zasięg]
Dostępność on/off-ramp OROKAI zależy od geograficznego zasięgu naszych partnerów. Dla najbardziej aktualnej dostępności regionalnej, sprawdź bezpośrednio u naszych dostawców:
- **Stripe Crypto On-Ramp:** [https://docs.stripe.com/crypto/onramp#supported-countries](https://docs.stripe.com/crypto/onramp#supported-countries)
- **Onramper:** [https://onramper.com/supported-countries](https://onramper.com/supported-countries)
:::

### Jak działa przełączanie awaryjne

> Użytkownik w regionie obsługiwanym przez Stripe:

- OROKAI prezentuje widget Stripe
- Bezproblemowe doświadczenie Stripe
- Najszybsze przetwarzanie

> Użytkownik w regionie bez Stripe:

- OROKAI automatycznie kieruje do Onramper
- Onramper wybiera najlepszego dostępnego partnera dla tego regionu
- Może wymagać innego procesu KYC (zależny od partnera)
- Użytkownik kończy transakcję przez partnera

## Limity i zgodność

### Limity

> Stripe (Typowe limity):

- Dziennie: Do $10,000 USD (różni się w zależności od poziomu weryfikacji)
- Tygodniowo: Do $25,000 USD
- Miesięcznie: Do $100,000 USD
- Na transakcję: Minimum $50, maksimum $10,000

> Partnerzy Onramper (Różni się):

- Zależy od wybranego partnera i regionu
- Typowo: $50 - $5,000 na transakcję
- Może mieć niższe limity dla niezweryfikowanych użytkowników

:::tip[limity]
Limity są ustalane przez dostawców, nie OROKAI. Wyższe limity dostępne po ulepszonej weryfikacji KYC.
:::

### Wymagania KYC/AML

WSZYSCY dostawcy wymagają podstawowych informacji:
- Pełne imię i nazwisko
- Adres email
- Kraj zamieszkania
- Metoda płatności (karta/bank)

Ulepszone KYC dla większych kwot:
- Dowód tożsamości wydany przez rząd (paszport, prawo jazdy)
- Potwierdzenie adresu (rachunek za media, wyciąg bankowy)
- Weryfikacja selfie (sprawdzenie żywotności)
- Źródło środków (dla bardzo dużych transakcji)

:::warning[zastrzeżenie]
> KYC obsługiwane przez: Stripe lub partnerów Onramper (NIE OROKAI)

> OROKAI otrzymuje: Tylko status zatwierdzenia/odrzucenia

> OROKAI nigdy nie przechowuje: Dokumentów tożsamości, SSN, wrażliwych danych osobowych
:::

### Zakazane jurysdykcje

> On/off-ramp OROKAI NIE jest dostępny w:

- Krajach objętych sankcjami (według list sankcji OFAC/UE)
- Regionach gdzie transakcje krypto są nielegalne
- Jurysdykcjach bez zasięgu licencjonowanych dostawców
- Użytkownicy na listach sankcji (sprawdzane przez dostawców)

:::warning[VPN]
 Używanie VPN do omijania ograniczeń geograficznych jest ZABRONIONE
i może skutkować zawieszeniem konta + zamrożeniem środków.
:::

## Kluczowe zasady: On/Off-Ramp w OROKAI

| Zasada | Co to oznacza |
|-----------|---------------|
| **OROKAI nigdy nie dotyka fiat** | Wszystkie transakcje fiat obsługiwane przez licencjonowanych partnerów (Stripe/Onramper). |
| **Transparentne opłaty** | Wszystkie koszty pokazane przed transakcją. Opłaty dostawcy + opłata OROKAI 1%. |
| **Zachowane self-custody** | Krypto dostarczone bezpośrednio do TWOJEGO portfela. Nigdy nie trzymamy Twojego krypto. |
| **KYC przez partnerów** | Weryfikacja tożsamości obsługiwana przez Stripe/Onramper, nie OROKAI. |
| **Automatyczne przełączanie awaryjne** | Bezproblemowe doświadczenie czy używasz Stripe czy Onramper. |
| **Zgodność PCI DSS** | Dane karty nigdy nie trafiają na serwery OROKAI (wprowadzane w widgecie dostawcy). |
| **Zgodność regionalna** | Dostępne tylko tam gdzie prawnie dozwolone. Brak możliwości omijania przez VPN. |

## Wsparcie i rozwiązywanie problemów

**Kto co obsługuje:**

Zrozumienie kogo kontaktować w różnych sprawach zapewnia szybsze rozwiązanie. Oto jasny podział odpowiedzialności wsparcia:

| Typ problemu | Kontakt | Czas rozwiązania |
|------------|---------|-----------------|
| Płatność odrzucona/nieudana | Wsparcie dostawcy | Czasu rzeczywistego do 24h |
| Karta nie zaakceptowana | Wsparcie dostawcy | Natychmiastowe |
| Problemy KYC/weryfikacja | Wsparcie dostawcy | 1-3 dni |
| Środki nie otrzymane w portfelu | Wsparcie OROKAI | 1-24 godziny |
| Śledzenie transakcji | Wsparcie OROKAI | Czas rzeczywisty |
| Prośby o zwrot | Wsparcie dostawcy | 5-10 dni |
| Otrzymana niewłaściwa kwota | Dostawca + OROKAI | 24-48 godzin |
| Pytania ogólne | Wsparcie OROKAI | 6-24 godziny |

> OROKAI zapewnia:

- Śledzenie statusu transakcji (gdzie jest moje krypto?)
- Rozwiązywanie problemów z portfelem (nie otrzymałem, zła sieć)
- Wsparcie interfejsu (jak używać funkcji on/off-ramp)
- Łącznik z dostawcą (eskalacja złożonych przypadków)

> Dostawcy obsługują:

- Problemy z przetwarzaniem płatności
- Weryfikacja KYC/AML
- Zwroty i chargebacki
- Zapytania regulacyjne

**Informacje kontaktowe:**

- **Wsparcie OROKAI:** Dostępne w aplikacji przez Centrum Pomocy lub support@orokai.io
- **Wsparcie Stripe:** Przez paragon transakcji lub [https://support.stripe.com](https://support.stripe.com)
- **Wsparcie Onramper:** Przez kanał wsparcia partnera dostawcy (wyświetlany podczas transakcji)