---
sidebar_label: Przegląd nagród
sidebar_position: 4
custom_edit_url: null
---

# Przegląd nagród i historia

## Śledzenie i automatyzacja

### Widok „Nagrody"

Zbiorcza prezentacja aktywnych pozycji, skumulowanych nagród i nadchodzących okien claimu (na protokół/łańcuch).

### OPCJA A: Ręczne zarządzanie nagrodami

Jak to działa:
> OROKAI śledzi naliczone nagrody we wszystkich Twoich pozycjach

> Dashboard pokazuje kwoty „Do odebrania"

> TY decydujesz kiedy odebrać (brak automatycznych działań)

> Każdy claim = oddzielna transakcja którą TY podpisujesz

> Nagrody pozostają w natywnych tokenach (np. stETH, AAVE)

### OPCJA B: Automatyczny claim + konwersja do USDT/USDC (Opcjonalnie)

:::warning[Uwaga]

Ta funkcja zostanie opracowana w późniejszej fazie.

:::

Jak to działa:
> TY autoryzujesz harmonogram RAZ (np. „tygodniowo" lub „miesięcznie")

> OROKAI przygotowuje transakcje claim + swap do USDT

> Wykonywane automatycznie gdy warunki spełnione (ustawiasz progi)

> Każda egzekucja nadal używa podpisów TWOJEGO portfela (wstępnie autoryzowanych)

> Nagrody konwertowane do USDT przez DEX (z allow-listy)

:::warning[To NIE jest automatyzacja custodial]
   - Twoje klucze pozostają na <mark>TWOIM</mark> urządzeniu
   - Każda tx używa uprawnienia które <mark>TY</mark> przyznałeś
   - Możesz odwołać autoryzację <mark>W KAŻDEJ CHWILI</mark>
   - <mark>OROKAI</mark> nie może odebrać bez Twojego wstępnego zatwierdzenia
:::

### Historia

Każdy claim/swap/stake odzwierciedlony w historii z kosztami (gas/opłata/slippage) i linkami on-chain.

:::warning[Zmienne nagrody i ryzyko konwersji]

Poziomy nagród są zmienne; konwersja do USDT odbywa się przez DEX z ryzykiem ceny/slippage.

:::

### Kluczowe zasady

#### Automatyzacja w OROKAI

| Zasada | Co to oznacza |
|-----------|---------------|
| **Opcjonalna, nigdy obowiązkowa** | Ręczna kontrola jest domyślna. Automatyzacja to TWÓJ wybór. |
| **Wstępnie autoryzowana, nie automatyczna** | TY przyznjesz uprawnienie raz. Każda egzekucja używa tego uprawnienia. |
| **Odwołalna w każdej chwili** | Wyłącz automatyzację natychmiast. Odwołaj uprawnienia jednym kliknięciem. |
| **Świadoma kosztów** | OROKAI nie wykona jeśli gas przekroczy Twój maks. Pomija drogie okresy. |
| **Transparentna historia** | Każdy auto-claim zalogowany z kosztem, wynikiem, linkiem on-chain. |
| **Non-custodial** | Twoje klucze pozostają na TWOIM urządzeniu. Uprawnienia nie dają nam custody. |
| **Oparta na warunkach** | Wykonuje tylko gdy TWOJE warunki spełnione (min kwota, maks gas, etc.). |