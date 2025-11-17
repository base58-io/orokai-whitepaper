---
sidebar_label: Zależności i ścieżka krytyczna
sidebar_position: 5
custom_edit_url: null
---

# Zależności i ścieżka krytyczna

## Zależności faz

### Sekwencyjne

Faza 1 → Faza 2 → Faza 3

Uzasadnienie:
- Faza 2 wymaga stabilnej platformy Fazy 1 (nie można budować na złamanych fundamentach)
- Faza 3 wymaga skali z Fazy 2 (funkcje regulowane potrzebują bazy użytkowników)
- Próba równoległej egzekucji = marnotrawstwo zasobów, dług techniczny

Dozwolone nakładanie:
- Planowanie Fazy 2 może się ZACZĄĆ podczas Fazy 1
- Partnerstwa Fazy 3 mogą być NEGOCJOWANE podczas Fazy 2

### Zależności na poziomie funkcji

> Infrastruktura
- Blokuje: Integracje partnerów, staking, swapy, UI

> Integracje partnerów
- Zależy od: Infrastruktura ukończona
- Blokuje: Uruchomienie beta, uruchomienie publiczne

> Beta → Uruchomienie publiczne
- Zależy od: Partnerzy gotowi, audyty ukończone
- Blokuje: Start Fazy 2

> Rozwój Agenta AI
- Zależy od: Dane użytkowników z Fazy 1 (wzorce zachowań)
- Blokuje: Zaawansowane funkcje automatyzacji

> Integracje mostów
- Zależy od: Infrastruktura multi-chain stabilna
- Blokuje: Złożone strategie cross-chain

> Infrastruktura skalowania
- Zależy od: 50k+ użytkowników generujących obciążenie
- Blokuje: Gotowość Fazy 3

> Zatwierdzenia regulacyjne
- Zależy od: Opinie prawne, umowy partnerskie
- Blokuje: TGE, RWA, funkcje papierów wartościowych

> TGE + Testnet łańcucha
- Zależy od: Prawna jasność tokena
- Blokuje: Mainnet OROKAI Chain

> Mainnet łańcucha + Przywództwo rynkowe
- Zależy od: Sukces testnetu, gotowość ekosystemu
- Blokuje: Nic (Faza 3 ukończona)

### Niekrytyczne (mogą dziać się równolegle)

> Integracja karty (równolegle z rozwojem stakingu)

> Marketing treści (równolegle ze wszystkimi pracami technicznymi)

> Projekt programu afiliacyjnego (równolegle z funkcjami Fazy 2)

> Ulepszenia UI/UX (ciągłe przez wszystkie fazy)

> Audyty bezpieczeństwa (start wcześnie, prowadź równolegle)

:::tip[Walidacja sekwencyjna]

Każda faza buduje na zwalidowanych fundamentach z poprzedniej fazy, zapewniając stabilność i zgodność przed rozszerzaniem funkcjonalności.

:::