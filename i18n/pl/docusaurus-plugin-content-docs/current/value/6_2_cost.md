---
sidebar_label: Transparentność kosztów
sidebar_position: 3
custom_edit_url: null
---

# Transparentność kosztów i bezpieczeństwo środków

## Pełna widoczność i kontrola

### Koszty przed podpisaniem

Na każdym etapie widoczny jest szacowany gas, opłaty protokołu/mostu/DEX oraz potencjalny slippage — zanim użytkownik autoryzuje operację.

### Self-custody i least-privilege

Środki i klucze pozostają po stronie użytkownika; <mark>uprawnienia smart kontraktów są minimalne i transparentne,</mark> z szybkimi linkami do odwołania.

### DEX-first i rozdzielenie ról

Wymiany wykonywane przez zewnętrzne DEX z allow-listy; rozliczenia fiat/kartowe oraz KYC/AML obsługiwane przez licencjonowanych partnerów; <mark>OROKAI nie jest stroną rozliczeń.</mark>

:::tip[Bezpieczeństwo przez projekt]

Transparentność i minimalne uprawnienia to nie funkcje – to fundamentalne zasady wbudowane w każdy aspekt architektury OROKAI.

:::

## Model bezpieczeństwa: Warstwy ochrony

### Warstwa 1
> Twój portfel (Non-Custodial)
- Klucze przechowywane TYLKO na TWOIM urządzeniu
- OROKAI ma zerowy dostęp do kluczy prywatnych
- Możesz eksportować/migrować do dowolnego portfela w każdej chwili

### Warstwa 2
> Uprawnienia (Least-Privilege)
- Minimalne zatwierdzenia (dokładne kwoty gdy możliwe)
- Uprawnienia ograniczone czasowo (gdzie wspierane)
- Jasne linki do odwołania zawsze dostępne

### Warstwa 3
> Weryfikacja protokołów (Allow-Lista)
- Tylko zaudytowane, sprawdzone w boju protokoły
- Ciągłe monitorowanie pod kątem incydentów
- System kwarantanny dla podwyższonych ryzyk

### Warstwa 4
> Walidacja transakcji (Kontrole przed lotem)
- Weryfikacja sieci (zapobieganie złemu łańcuchowi)
- Walidacja adresu (checksum, format)
- Kontrole salda (wystarczający gas + tokeny)
- Ochrona slippage (nie wykona jeśli przekroczony)

### Warstwa 5
> Kontrole użytkownika (Zawsze ostatnie słowo)
- Przegląd każdego kroku przed podpisaniem
- Anulowanie w każdej chwili przed podpisem
- Wstrzymanie/wyłączenie automatyzacji
- Ścieżki awaryjnej wypłaty