---
sidebar_label: Ekonomia jednostkowa
sidebar_position: 6
custom_edit_url: null
---

# Ekonomia jednostkowa

Ekonomia jednostkowa definiuje <mark>rentowność na użytkownika</mark> i ogólną ścieżkę do zrównoważonego biznesu. Ta sekcja modeluje przychody i koszty OROKAI na poziomie użytkownika, identyfikuje kluczowe dźwignie rentowności i projektuje scenariusze break-even.

## Struktura przychodów na użytkownika (uproszczony model)

### Podstawowa formuła

Zysk jednostkowy = ARPU (Średni przychód na użytkownika) - CAC (Koszt akwizycji klienta) - CPS (Koszt na usługę)

Gdzie:
- ARPU = Średni miesięczny przychód generowany na aktywnego użytkownika
- CAC = Jednorazowy koszt pozyskania użytkownika (marketing, onboarding)
- CPS = Bieżący miesięczny koszt obsługi użytkownika (infrastruktura, wsparcie)

Rentowność osiągnięta gdy:
Zysk jednostkowy > 0 (przez cykl życia użytkownika)

### ARPU: Średni przychód na użytkownika

ARPU różni się znacząco w zależności od typu użytkownika i poziomu aktywności.

### Składniki ARPU (miesięcznie)

> Źródła ARPU:
- Operacje on-chain (swapy, mosty, migracje)
- Automatyzacja stakingu (opłaty auto-claim)
- Transakcje kartowe (wydatki)
- On/off-ramp (konwersje fiat)
- Marża gazu (wszystkie transakcje)

> Formuła:
ARPU = Σ (Aktywność_i × Opłata_i × Częstotliwość_i)

> Gdzie:
- Aktywność_i = Typ operacji (swap, stake, karta, etc.)
- Opłata_i = Opłata OROKAI za tę operację
- Częstotliwość_i = Jak często użytkownik wykonuje tę operację miesięcznie

### Segmenty użytkowników i poziomy ARPU

#### Segment 1: Użytkownik sporadyczny (Nieaktywny)
```
Profil:
├─ Zarejestrował się, wykonał początkowy on-ramp
├─ Trzyma krypto ale nie transakcjonuje
├─ Brak użycia karty, brak stakingu
└─ Może 1-2 swapy rocznie

Miesięczna aktywność:
├─ Swapy: 0.1/miesiąc × $5 opłata = $0.50
├─ Karta: $0
├─ Staking: $0
├─ On-ramp: $0 (już onboardowany)
└─ Marża gazu: ~$0.10

ARPU: $0.60/miesiąc lub $7.20/rok

Częstotliwość: ~40% użytkowników (uśpieni/nieaktywni)
```

#### Segment 2: Użytkownik podstawowy (Niska aktywność)
```
Profil:
├─ Okazjonalne swapy (testowanie wód)
├─ Mała pozycja stakingowa (ręczny claim)
├─ Rzadkie użycie karty
└─ Sprawdza aplikację miesięcznie

Miesięczna aktywność:
├─ Swapy: 2/miesiąc × $5 opłata = $10
├─ Karta: $200 wydatków × 0.3% = $0.60
├─ Staking: Ręczny (tylko gas) = $0.30
├─ On-ramp: $0
└─ Marża gazu: ~$2

ARPU: $12.90/miesiąc lub $154.80/rok

Częstotliwość: ~30% użytkowników
```

#### Segment 3: Użytkownik aktywny (Umiarkowana aktywność)
```
Profil:
├─ Regularne swapy (rebalansowanie portfela)
├─ Umiarkowany staking ($10k-50k TVL)
├─ Karta jako wtórna metoda wydatków
└─ Sprawdza aplikację tygodniowo

Miesięczna aktywność:
├─ Swapy: 8/miesiąc × $8 opłata = $64
├─ Karta: $1,000 wydatków × 0.3% = $3
├─ Staking (auto-claim): $50/miesiąc nagród × 8% = $4
├─ Bridge: 1/kwartał (÷3) = $1.67
└─ Marża gazu: ~$8

ARPU: $80.67/miesiąc lub $968/rok

Częstotliwość: ~20% użytkowników
```

#### Segment 4: Power User (Wysoka aktywność)
```
Profil:
├─ Codzienny trader/rebalancer
├─ Duża pozycja stakingowa ($100k-500k TVL)
├─ Karta jako główna metoda wydatków
├─ Aktywny w programie afiliacyjnym
└─ Używa funkcji automatyzacji AI

Miesięczna aktywność:
├─ Swapy: 30/miesiąc × $10 opłata = $300
├─ Karta: $5,000 wydatków × 0.3% = $15
├─ Staking (auto-claim): $500/miesiąc nagród × 8% = $40
├─ Bridge: 2/miesiąc × $5 = $10
├─ Migracja: 1/kwartał (÷3) = $7
└─ Marża gazu: ~$35

ARPU: $407/miesiąc lub $4,884/rok

Częstotliwość: ~8% użytkowników
```

#### Segment 5: Wieloryb (Instytucjonalny/HNW)
```
Profil:
├─ Multi-milionowe TVL ($1M+)
├─ Częste duże transakcje
├─ Karta dla wydatków biznesowych
├─ Złożone strategie (migracje, cross-chain)
└─ Dedykowane zarządzanie kontem

Miesięczna aktywność:
├─ Swapy: 50/miesiąc × $50 opłata (większe rozmiary) = $2,500
├─ Karta: $20,000 wydatków × 0.3% = $60
├─ Staking (auto-claim): $10,000/miesiąc nagród × 8% = $800
├─ Bridge: 5/miesiąc × $20 = $100
├─ Migracja: 2/miesiąc × $50 = $100
└─ Marża gazu: ~$150

ARPU: $3,710/miesiąc lub $44,520/rok

Częstotliwość: ~2% użytkowników
```
### Obliczanie mieszanego ARPU
```
Średnia ważona ARPU (100,000 łącznych użytkowników):

├─ Sporadyczny (40%): 40,000 użytkowników × $0.60 = $24,000/miesiąc
├─ Podstawowy (30%): 30,000 użytkowników × $12.90 = $387,000/miesiąc
├─ Aktywny (20%): 20,000 użytkowników × $80.67 = $1,613,400/miesiąc
├─ Power (8%): 8,000 użytkowników × $407 = $3,256,000/miesiąc
└─ Wieloryb (2%): 2,000 użytkowników × $3,710 = $7,420,000/miesiąc

Całkowity miesięczny przychód: $12,700,400
Mieszane ARPU: $127/miesiąc lub $1,524/rok

Uwaga: To jest przychód BRUTTO przed wypłatami afiliacyjnymi
```
### CAC: Koszt akwizycji klienta
#### Kanały akwizycji i koszty
```
Kanał 1: Program afiliacyjny (Podstawowy)
├─ CAC z góry: $0 (płać tylko od przychodu)
├─ Koszt bieżący: ~15% przychodu użytkownika (dożywotni)
├─ Efektywny CAC (amortyzowany przez Rok 1): $195 na użytkownika
└─ Najlepszy dla: Skalowalny, przewidywalny wzrost

Kanał 2: Płatna reklama (Google/Meta)
├─ CAC z góry: $80-$150 na rejestrację
├─ Współczynnik konwersji: 30-50% (rejestracja → pierwsza transakcja)
├─ Efektywny CAC: $160-$300 na aktywnego użytkownika
├─ Koszt bieżący: $0 (jednorazowy)
└─ Najlepszy dla: Szybkie skoki wzrostu, ekspansja geograficzna

Kanał 3: Marketing treści (SEO/Blog)
├─ CAC z góry: $20-$40 na rejestrację (amortyzowane koszty treści)
├─ Współczynnik konwersji: 50-60% (ruch o wysokiej intencji)
├─ Efektywny CAC: $33-$80 na aktywnego użytkownika
├─ Koszt bieżący: Minimalny (treść wiecznie aktualna)
└─ Najlepszy dla: Długoterminowy zrównoważony wzrost

Kanał 4: Partnerstwa (B2B/Integracje)
├─ CAC z góry: Zmienny ($0-$50k na partnerstwo)
├─ CAC na użytkownika: $10-$50 (zależy od wielkości partnera)
├─ Współczynnik konwersji: 60-80% (wstępnie zakwalifikowani użytkownicy)
├─ Efektywny CAC: $13-$83 na aktywnego użytkownika
└─ Najlepszy dla: Akwizycja instytucjonalna/wielorybów

Kanał 5: Organiczny/Wirusowy (Pocztą pantoflową)
├─ CAC z góry: $0
├─ Koszt bieżący: Jakość produktu + wsparcie
├─ Efektywny CAC: $5-$15 na użytkownika (tylko wsparcie/infra)
└─ Najlepszy dla: Długoterminowy, złożony wzrost
```

**Mieszany CAC (Docelowy mix):**
```
Mix akwizycji (Rok 1-2):
├─ Afiliacja: 60% użytkowników → $195 × 0.60 = $117
├─ Płatne reklamy: 20% użytkowników → $230 × 0.20 = $46
├─ Treści: 10% użytkowników → $57 × 0.10 = $5.70
├─ Partnerstwa: 5% użytkowników → $48 × 0.05 = $2.40
└─ Organiczny: 5% użytkowników → $10 × 0.05 = $0.50

Mieszany CAC: $171.60/użytkownik

Uwaga: To jest koszt jednorazowy (z wyjątkiem afiliacji, która jest bieżącym %)
```
### CPS: Koszt na usługę (miesięcznie)
**Bieżące koszty obsługi każdego użytkownika:**

### Koszty infrastruktury (Zmienne)
```
Na aktywnego użytkownika miesięcznie:

RPC/Indeksowanie:
├─ Wywołania RPC multi-chain: ~10,000 wywołań/miesiąc
├─ Koszt: $0.0001-0.0003 na wywołanie
└─ Miesięcznie: $1-$3 na użytkownika

Przechowywanie danych:
├─ Historia transakcji, stan portfela, analityka
├─ ~50 MB na użytkownika miesięcznie
└─ Miesięcznie: $0.10-$0.30 na użytkownika

CDN/Hosting:
├─ Dostawa aplikacji, aktywa statyczne
└─ Miesięcznie: $0.20-$0.50 na użytkownika

Monitoring/Observability:
├─ Logi, metryki, traces
└─ Miesięcznie: $0.15-$0.40 na użytkownika

Całkowita infrastruktura (Zmienna): $1.45-$4.20 na użytkownika/miesiąc
Średnia: ~$2.50/użytkownik/miesiąc
```
### Koszty wsparcia (Zmienne)
```
Wsparcie klienta:

Użytkownicy sporadyczni/podstawowi (70% użytkowników):
├─ Rzadkie zgłoszenia (~0.1 zgłoszenia/miesiąc)
├─ Koszt na zgłoszenie: $5 (zautomatyzowane + poziom-1)
└─ Miesięcznie: $0.50/użytkownik

Użytkownicy aktywni/power (28% użytkowników):
├─ Umiarkowane wsparcie (~0.5 zgłoszenia/miesiąc)
├─ Koszt na zgłoszenie: $8 (poziom-1 + trochę poziom-2)
└─ Miesięcznie: $4/użytkownik

Użytkownicy wieloryby (2% użytkowników):
├─ Wsparcie high-touch (~2 zgłoszenia/miesiąc)
├─ Koszt na zgłoszenie: $15 (poziom-2 + dedykowane)
└─ Miesięcznie: $30/użytkownik

Mieszany koszt wsparcia:
├─ 70% × $0.50 = $0.35
├─ 28% × $4 = $1.12
└─ 2% × $30 = $0.60
──────────────────────
Łącznie: ~$2.07/użytkownik/miesiąc
```
### Koszty stałe (Alokowane na użytkownika)
```
Stałe koszty miesięczne (Łącznie):
├─ Inżynieria/Produkt: $150,000
├─ Bezpieczeństwo/Audyty: $50,000
├─ Zgodność/Prawne: $30,000
├─ Admin/Operacje: $20,000
└─ Marketing (Marka): $50,000
──────────────────────
Łącznie stałe: $300,000/miesiąc

Alokowane na użytkownika (100,000 użytkowników):
$300,000 ÷ 100,000 = $3/użytkownik/miesiąc

W skali (500,000 użytkowników):
$300,000 ÷ 500,000 = $0.60/użytkownik/miesiąc

Uwaga: Koszty stałe nie skalują się liniowo; korzyści skali poprawiają marżę
```
### Całkowity CPS (Koszt na usługę)
```
Na aktywnego użytkownika miesięcznie:

Koszty zmienne:
├─ Infrastruktura: $2.50
├─ Wsparcie: $2.07
└─ Suma częściowa: $4.57

Koszty stałe (alokowane):
└─ $3.00 (przy 100k użytkowników)

Całkowity CPS: $7.57/użytkownik/miesiąc w skali 100k
Całkowity CPS: $5.17/użytkownik/miesiąc w skali 500k (korzyści skali)
```
### Rentowność na poziomie segmentu

**Które typy użytkowników są rentowne?**

| Segment | ARPU (netto) | CAC (Rok 1 amortyzowany) | CPS | Zysk jednostkowy | Rentowne? |
|---------|------------|-------------------|-----|-------------|-------------|
| **Sporadyczny** | $0.60 | $14.30 | $7.57 | **-$21.27** | ❌ (loss leader) |
| **Podstawowy** | $12.90 | $14.30 | $7.57 | **-$8.97** | ❌ (marginalne) |
| **Aktywny** | $80.67 | $14.30 | $7.57 | **+$58.80** | ✅ (rentowne) |
| **Power** | $407 | $14.30 | $7.57 | **+$385.13** | ✅ (wysoko rentowne) |
| **Wieloryb** | $3,710 | $14.30 | $30 | **+$3,665.70** | ✅ (ekstremalnie rentowne) |

**Spostrzeżenia:**

1. **Użytkownicy sporadyczni/podstawowi są nierentowni w Roku 1**
   - Ale: Mogą przekształcić się w aktywnych/power z czasem (LTV ma znaczenie)
   - Strategia: Minimalizuj CAC dla tych segmentów (najpierw afiliacja, nie płatne reklamy)

2. **Aktywni użytkownicy to sweet spot**
   - 20% użytkowników generuje 30% zysku
   - Skup akwizycję na tym segmencie

3. **Użytkownicy power/wieloryby napędzają rentowność**
   - 10% użytkowników generuje 70% zysku
   - Uzasadniona usługa high-touch (warte $30/miesiąc CPS dla wielorybów)

## Dźwignie rentowności
### Dźwignia 1: Zwiększ ARPU
```
Strategie:
├─ Zachęcaj do wyższej aktywności (powiadomienia push, gamifikacja)
├─ Sprzedaj funkcje premium (auto-claim, strategie AI)
├─ Zwiększ użycie karty (marketing, nagrody)
├─ Cross-sell (jeśli użytkownik tylko swapuje, wprowadź staking)
└─ Uruchom nowe strumienie przychodów (subskrypcje, dostęp API)

Wpływ:
├─ +10% ARPU → +$10.80/użytkownik/miesiąc
└─ Całkowity zysk: $103.3M → $116.3M (+12.6%) ✅

Wykonalność: Średnia (wymaga rozwoju produktu + marketingu)
```
### Dźwignia 2: Zredukuj CAC
```
Strategie:
├─ Przejście z płatnych reklam → program afiliacyjny (niższy CAC)
├─ Popraw SEO treści (ruch organiczny)
├─ Zachęty poleceniowe (wzrost wirusowy)
├─ Partnerstwa (wykwalifikowani leady po niższym koszcie)
└─ Popraw lejek konwersji (zredukuj odpływ)

Wpływ:
├─ -20% CAC ($171 → $137) → -$2.86/użytkownik/miesiąc
└─ Całkowity zysk: $103.3M → $106.7M (+3.3%) ✅

Wykonalność: Wysoka (ulepszenia operacyjne)
```
### Dźwignia 3: Zredukuj CPS (Infrastruktura)
```
Strategie:
├─ Negocjuj lepsze stawki RPC/cloud (zniżki wolumenowe)
├─ Optymalizuj użycie RPC (cache, batch calls)
├─ Self-host krytycznej infrastruktury (vs SaaS)
├─ Automatyzuj wsparcie (chatbot AI, lepsza dokumentacja)
└─ Skaluj koszty stałe na więcej użytkowników (rozwijaj bazę użytkowników)

Wpływ:
├─ -20% CPS ($7.57 → $6.06) → +$1.51/użytkownik/miesiąc
└─ Całkowity zysk: $103.3M → $121.4M (+17.5%) ✅

Wykonalność: Wysoka (inżynieria + skala)
```
### Dźwignia 4: Popraw mix użytkowników (Zmiana segmentów)
```
Strategia:
├─ Targetuj użytkowników aktywnych/power/wielorybów w marketingu
├─ Kwalifikuj leady (zniechęcaj sporadyczne rejestracje)
├─ Pielęgnuj Sporadyczny → Podstawowy → Aktywny (onboarding, edukacja)
└─ Zatrzymaj użytkowników o wysokiej wartości (dedykowane wsparcie, przywileje)

Wpływ (zmiana mix z 40/30/20/8/2 na 30/25/25/15/5):

Przed:
├─ Mieszane ARPU: $107.95/miesiąc

Po:
├─ Sporadyczny (30%): 30% × $0.60 = $0.18
├─ Podstawowy (25%): 25% × $12.90 = $3.23
├─ Aktywny (25%): 25% × $80.67 = $20.17
├─ Power (15%): 15% × $407 = $61.05
└─ Wieloryb (5%): 5% × $3,710 = $185.50
──────────────────────
Nowe mieszane ARPU: $270.13/miesiąc (+150%!) ✅✅

Całkowity zysk: $103.3M → $315M (+205%) ✅✅✅

Wykonalność: Średnia (wymaga ukierunkowanej akwizycji + retencji)
```
### Dźwignia 5: Zredukuj churn (Zwiększ czas życia)
```
Obecne założenie: Czas życia użytkownika = średnio 24 miesiące

Strategie redukcji churn:
├─ Popraw onboarding (zredukuj wczesny odpływ)
├─ Funkcje zaangażowania (powiadomienia, insights)
├─ Nagrody lojalnościowe (zniżki tokenowe, gamifikacja)
├─ Efekty sieciowe (afiliacja wiąże użytkowników razem)
└─ Koszty przejścia (zintegrowane w rutyny DeFi)

Wpływ:
├─ Zwiększ czas życia 24 → 36 miesięcy (+50%)
├─ LTV wzrasta proporcjonalnie
├─ Bardziej agresywny CAC wykonalny (ROI nadal dodatni)
└─ Całkowity zysk rośnie gdy kohorty dojrzewają

Cele wskaźnika churn:
├─ Rok 1: 30% (standard branżowy)
├─ Rok 2: 20% (poprawiający się)
└─ Rok 3+: 10% (dojrzali, przywiązani użytkownicy)

Wykonalność: Średnia (produkt + budowanie społeczności)
```
## Analiza wrażliwości
**Jak kluczowe zmienne wpływają na rentowność?**
```
Przypadek bazowy (100k użytkowników):
├─ ARPU: $107.95/miesiąc
├─ CAC: $171.60 (Rok 1 amortyzowany: $14.30/miesiąc)
├─ CPS: $7.57/miesiąc
└─ Zysk jednostkowy: $86.08/miesiąc → $103.3M/rok łącznie

Tabela wrażliwości:

Zmienna: ARPU (±20%)
├─ -20% ($86/miesiąc): Zysk jednostkowy = $63.73 → $76.5M/rok (-26%)
├─ Bazowy ($108/miesiąc): $103.3M
└─ +20% ($130/miesiąc): Zysk jednostkowy = $108.43 → $130.1M/rok (+26%)

Zmienna: CAC (±20%)
├─ -20% ($137): Zysk jednostkowy = $88.94 → $106.7M/rok (+3.3%)
├─ Bazowy ($172): $103.3M
└─ +20% ($206): Zysk jednostkowy = $83.22 → $99.9M/rok (-3.3%)

Zmienna: CPS (±20%)
├─ -20% ($6.06): Zysk jednostkowy = $87.59 → $105.1M/rok (+1.7%)
├─ Bazowy ($7.57): $103.3M
└─ +20% ($9.09): Zysk jednostkowy = $84.56 → $101.5M/rok (-1.7%)

Zmienna: Mix użytkowników (zmiana na power/wieloryby)
├─ Obecny mix: $103.3M
├─ Poprawiony mix (+10% power/wieloryby): $180M/rok (+74%)
└─ Mix z przewagą wielorybów (podwój % wielorybów): $250M/rok (+142%)

Zmienna: Skala (liczba użytkowników)
├─ 50k użytkowników: CPS $9.57 → Zysk jednostkowy $83.08 → $49.8M/rok łącznie
├─ 100k użytkowników (bazowy): $103.3M
├─ 500k użytkowników: CPS $5.17 → Zysk jednostkowy $88.48 → $531M/rok
└─ 1M użytkowników: CPS $4.57 → Zysk jednostkowy $89.08 → $1.07B/rok
```
### Ścieżka do rentowności
**Oś czasu i kamienie milowe:**
```
Miesiąc 0-6 (Uruchomienie):
├─ Użytkownicy: 0 → 10,000
├─ Przychód: $0 → $1.1M/miesiąc
├─ Koszty: Wysokie stałe + inwestycja CAC
├─ Status: Nierentowne (oczekiwane)
└─ Burn Rate: -$500k/miesiąc (finansowane z rundy)

Miesiąc 7-12 (Product-Market Fit):
├─ Użytkownicy: 10,000 → 50,000
├─ Przychód: $1.1M → $5.4M/miesiąc
├─ Koszty: Stałe poprawiające się, CAC skalujący efektywnie
├─ Status: Zbliżanie się do break-even
└─ Burn Rate: -$100k/miesiąc → Break-even

Miesiąc 13-24 (Wzrost):
├─ Użytkownicy: 50,000 → 150,000
├─ Przychód: $5.4M → $16.2M/miesiąc
├─ Koszty: Korzyści skali działają
├─ Status: Rentowne ✅
└─ Miesięczny zysk: +$5M/miesiąc (marża 30%)

Miesiąc 25-36 (Skala):
├─ Użytkownicy: 150,000 → 500,000
├─ Przychód: $16.2M → $54M/miesiąc
├─ Koszty: Silne korzyści skali
├─ Status: Wysoko rentowne ✅✅
└─ Miesięczny zysk: +$25M/miesiąc (marża 46%)

Rok 4+ (Dojrzałość):
├─ Użytkownicy: 500,000 → 1M+
├─ Przychód: $54M+ → $100M+/miesiąc
├─ Status: Lider rynku
└─ Roczny zysk: $500M - $1B (marża 50%+)
```
### Analiza break-even

**W jakiej skali OROKAI staje się rentowne?**
```
Koszty stałe: $300k/miesiąc
Koszt zmienny na użytkownika: $4.57/miesiąc (infra + wsparcie)
ARPU (netto po afiliacji): $107.95/miesiąc
CAC (amortyzowany Rok 1): $14.30/miesiąc

Miesięczny break-even:

Koszty stałe ÷ (ARPU - Koszt zmienny - CAC) = Potrzebni użytkownicy
$300,000 ÷ ($107.95 - $4.57 - $14.30) = $300,000 ÷ $89.08 = 3,368 użytkowników

Punkt break-even: ~3,400 aktywnych użytkowników

Przy 3,400 użytkownikach:
├─ Przychód: 3,400 × $107.95 = $367k/miesiąc
├─ Koszty zmienne: 3,400 × $4.57 = $15.5k/miesiąc
├─ Koszty stałe: $300k/miesiąc
├─ CAC (amortyzowany): 3,400 × $14.30 = $48.6k/miesiąc
└─ Zysk: $367k - $15.5k - $300k - $48.6k = ~$3k/miesiąc ✅ (break-even)

Oś czasu do 3,400 użytkowników:
├─ Agresywny wzrost: Miesiąc 4-5
├─ Umiarkowany wzrost: Miesiąc 6-8
└─ Konserwatywny wzrost: Miesiąc 9-12

Werdykt: OROKAI może osiągnąć rentowność w ciągu 4-12 miesięcy po uruchomieniu
```
### Podsumowanie: Stan ekonomii jednostkowej

Ocena ekonomii jednostkowej OROKAI:

> Silne mieszane ARPU: $108/miesiąc (zdrowe vs $50-80 średnia branżowa)

> Zarządzalny CAC: $172 (zwracalny w 2 miesiące)

> Niski CPS: $7.57 (poprawia się ze skalą)

> Szybki zwrot: 2 miesiące (CAC zwrócony szybko)

> Wysoki stosunek LTV:CAC: 6:1 w Roku 1 ($1,033 LTV ÷ $172 CAC)

> Skalowalne: Korzyści skali poprawiają marżę 30% → 50%+

> Wiele dźwigni: Może poprawić rentowność przez ARPU, CAC, CPS, mix

> Wczesny break-even: Rentowne przy 3,400 użytkownikach (~Miesiąc 4-12)

> Ryzyka:
- Użytkownicy sporadyczni/podstawowi nierentowni (trzeba przekształcić lub unikać)
- Wysoka zależność od użytkowników power/wielorybów (10% napędza 70% zysku)
- Koszty afiliacji permanentnie 15% obciążenia (ale umożliwia wzrost)
- Ryzyko churn (musi utrzymać 24+ miesięczny czas życia)

Werdykt: SILNA ekonomia jednostkowa z jasną ścieżką do rentowności.

:::tip[Skupienie na skalowalności]

Ekonomia jednostkowa poprawia się ze skalą – wyższe wolumeny obniżają koszty na operację zachowując standardy jakości i bezpieczeństwa.

:::