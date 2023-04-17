## _Bot InteligentnyInaczej_
***

#### By _Dariusz Olszewski_

#### Aplikacja udająca rozmowę z człowiekiem w formie tekstowej.

### Technologies Used
***

- _JavaScript_
- _HTML_
- _CSS_

### Description
***

Aplikacja udająca rozmowę z człowiekiem w formie tekstowej.
- aplikacja składa się z pola na treść rozmowy, pola tekstowego umożliwiającego wpisywanie tekstu oraz przycisku wysyłającego wiadomość
- na początku w polu z treścią rozmowy pojawia się wiadomość powitalna od bota (_Cześć, jak tam zajęcia z JS?_)
- w polu tekstowym pod treścią użytkownik może wpisać dowolną wiadomość i wysłać ją klikając przycisk _Wyślij_ lub za pomocą klawisza _Enter_, co spowoduje pojawienie się jego wiadomości w oknie rozmowy i wyczyszczenie pola tekstowego
- na każdą wiadomość bot odpowiada kolejną wiadomością od siebie
- bot jest deterministyczny (odpowiada zawsze tak samo na tę samą wiadomość od użytkownika). Trzy przykładowe odpowiedzi na wiadomości od użytkownika:  
_Q: Cześć_  
_A: Cześć. W czym mogę pomóc?_  
_Q: Która jest godzina?_  
_A: Przepraszam, nie mam dostępu do aktualnego czasu._  
_Q: Dziękuję_  
_A: Nie ma za co. Miłego dnia_

#### Dodatkowe funkcjonaloności

- wiadomości od bota poajwiają się z opóźnieniem 1 sekundy.
- aplikacja posiada mechanizm wykrywania wulgaryzmów. Jeśli użytkownik spróbuje wysłać wiadomość z zabronioną treścią, otrzyma ostrzeżenie (alert), a w oknie rozmowy, zamiast wiadomości użytkownika pojawi się czerwony wpis od bota _Wykryto wulgaryzmy w Twojej wiadomości. Proszę, nie używaj takich słów._
- komendy dla bota:  
  - /version, odpowiedź: Wersja oprogramowania: v1.2.3
  - /pogoda kraków, przykładowa odpowiedź (zmyślona): W kraków jest 22 stopnie

### Deployment
***

_Aplikacja jest opublikowana w Internecie za pomocą Github Pages pod adresem https://dol568.github.io/bot-inteligentny-inaczej/. Link do repozytorium https://github.com/dol568/bot-inteligentny-inaczej.git._


## FAQs
***
A list of frequently asked questions
1. **This is a question in bold**
   Answer to the first question with _italic words_.
2. __Second question in bold__
   To answer this question, we use an unordered list:
* First point
* Second Point
* Third point
3. **Third question in bold**
   Answer to the third question with *italic words*.
4. **Fourth question in bold**
   | Headline 1 in the tablehead | Headline 2 in the tablehead | Headline 3 in the tablehead |
   |:--------------|:-------------:|--------------:|
   | text-align left | text-align center | text-align right |