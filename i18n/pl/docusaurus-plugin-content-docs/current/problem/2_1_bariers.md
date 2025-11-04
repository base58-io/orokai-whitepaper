---
sidebar_label: Bariery wejścia do DeFi
sidebar_position: 2
custom_edit_url: null
---

# Bariery wejścia do DeFi

## Wyzwania dla nowych użytkowników

### Portfele i klucze prywatne

Dla nowych odbiorców już samo utworzenie portfela i zrozumienie, że <mark>klucz prywatny</mark> nie może zostać ujawniony ani utracony, bywa barierą krytyczną. Dodatkowo problemem są <mark>frazy seed, kopie zapasowe i phishing.</mark>

### Koszty i tokeny gazu

Na każdej sieci opłaty transakcyjne są w innym tokenie i zmieniają się dynamicznie. Użytkownik musi zapewnić odpowiedni token na gas w każdym łańcuchu, co generuje dodatkowe kroki (i pomyłki).

### Mosty międzyłańcuchowe

Przenoszenie aktywów pomiędzy sieciami wymaga narzędzi, które niosą ryzyko techniczne i operacyjne (błędy, nieodpowiednie parametry, mylenie aktywów o podobnych nazwach).

### Operacje wieloetapowe

Zwykła alokacja może wymagać <mark>kilku kroków:</mark> swap → bridge → deposit/stake → claim/re-stake. Każdy etap to osobne transakcje, opłaty, ryzyka i decyzje.

## Konsekwencja

Wysoka szansa na błąd operacyjny (np. zły adres/łańcuch, niewłaściwy token gazu), niepotrzebne koszty i porzucanie procesu przez użytkowników nietechnicznych.

:::warning[Wysoka szansa na błąd operacyjny]

Dla nietechnicznych użytkowników istnieje wysokie prawdopodobieństwo popełnienia nieodwracalnego błędu. 

:::

## **"Journey of Pain" – ścieżka typowego użytkownika**

Użytkownik chce zacząć stakować ETH. Oto co musi przejść:

Krok 1: Wybór portfela
```
├─ Metamask vs. Rabby vs. Rainbow vs. Ledger vs. Trezor?
├─ "Który jest bezpieczny?"
└─ Decyzja: 30-60 min research → Metamask (najpopularniejszy)
```
Krok 2: Instalacja i seed phrase
```
├─ 12 losowych słów: "voyage spatial quantum..."
├─ OSTRZEŻENIE: "NIGDY nie udostępniaj, nie rób screenshota"
├─ Stres: "Co jeśli zgubię? Co jeśli ktoś ukradnie?"
└─ 25% użytkowników rezygnuje TUTAJ (źródło: Metamask survey 2023)
```
Krok 3: Kupno ETH
```
├─ Jeśli przez CEX: KYC (1-3 dni) + transfer (opłata $5-15)
├─ Jeśli przez DEX: potrzebny już ETH na gas (chicken-egg problem)
└─ Średni czas: 2-5 dni
```

Krok 4: Zrozumienie Lido
```
├─ "Co to stETH?" → Research 30 min
├─ "Jaka jest różnica vs. rETH, cbETH?" → Confusion
└─ "Czy mogę stracić środki?" → FUD (Fear, Uncertainty, Doubt)
```

Krok 5: Connect wallet do Lido
```
├─ Pop-up: "Lido.fi chce połączyć się z Twoim portfelem"
├─ Phishing fear: "Czy to prawdziwy Lido?"
└─ Weryfikacja: sprawdzenie URL, logo, community
```

Krok 6: Approve contract
```
├─ Pop-up: "Allow Lido to spend your ETH - Unlimited"
├─ "UNLIMITED?! To niebezpieczne!"
├─ Koszt: $3-8 gas fee (pierwszy raz, zaskoczenie)
└─ 15% użytkowników rezygnuje TUTAJ (źródło: Etherscan data)
```

Krok 7: Stake transaction
```
├─ Druga transakcja, drugi gas fee ($5-12)
├─ "Estimated time: 15 seconds" → faktycznie 3 minuty (Ethereum congestion)
└─ Sukces... ale czy na pewno?
```

Krok 8: Weryfikacja
```
├─ "Czy dostałem stETH?" → Trzeba dodać token do Metamask (ręcznie)
├─ "Kiedy dostanę nagrody?" → Research: "accrues daily, visible in balance"
└─ "Jak wypłacić?" → Kolejny research: "swap stETH → ETH lub unstake queue"
```

> CAŁKOWITY CZAS: 3-7 dni (z KYC) lub 4-8 godzin (bez KYC)

> LICZBA KROKÓW: 8 głównych + ~20 mikro-decyzji

> PUNKTY MOŻLIWEJ REZYGNACJI: 5

> WSPÓŁCZYNNIK SUKCESU (completion rate): ~35-40%