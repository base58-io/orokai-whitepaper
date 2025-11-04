---
sidebar_label: Automatyzacja i uproszczenie
sidebar_position: 4
custom_edit_url: null
---

# Automatyzacja i uproszczenie procesu inwestowania

## Zoptymalizowane procesy

### Alokacja „krok po kroku”

Interfejs prowadzi przez <mark>minimalny zestaw podpisów:</mark> 

> approve (jeśli potrzebne)

> swap w DEX (jeśli wybrano)

> deposit/stake w protokole.

### Claimy nagród (opcjonalnie)

Użytkownik  <mark>może włączyć</mark> scenariusze claim/re-stake albo claim → USDT (przez DEX). Każdy scenariusz to z góry określony zestaw transakcji, które <mark>użytkownik autoryzuje</mark> i może wyłączyć w dowolnym momencie.

### Rebalans i migracje

UI umożliwia porównanie strategii i – jeśli użytkownik tak zdecyduje – przygotowuje zestaw transakcji migracyjnych (np. unstake/withdraw → bridge → swap → deposit).

### Kontrola i odwołanie uprawnień

Ekrany „Uprawnienia” i „Historia” pozwalają przeglądać/odwoływać aprrove’y oraz sprawdzać ścieżkę operacji.

:::tip[Automatyzacja z pełną kontrolą użytkownika]

Automatyzacja nie oznacza działania bez wiedzy użytkownika: OROKAI przygotowuje operacje, użytkownik je podpisuje, a smart kontrakty wykonują je wyłącznie w zakresie udzielonych uprawnień.

:::