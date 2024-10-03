# Selectors

- Elementleri seçmeye yararyan methodlar
- https://testing-library.com/docs/ecosystem-testing-library-selector/

! Seçiciler > 3 ana parçadan oluşur

1-Method Tipi 2-All İfadesi 3-Seçici Methodu

- Method Tipi > get | find | query

- get > başlangıçta dom'da olan elementleri almak için kullanılır | elementi bulumzsa test başarısız olur

- query > get ile benzer çalışır | elementi bulamazsa null döndürür ve test devam eder

- find > elementin ne zaman ekrana basılacağı belli değilse kullanıllır ( api isteklerinde)
- not: find methodu promise döndürür bu yüzden async await ile kullanılr

- eğer methoda all eklersek seçici koşula uyan bütün elementleri getirir
- not: all kullanırsak gelen cevap her zaman bir dizi olur

# Matchers

- Expect ile kullanılan ve Element üzerindeki beklentimizi ifade eden methodlar.
- ELEMENTLER İÇİN: https://github.com/testing-library/jest-dom
- DİĞER: https://jestjs.io/docs/using-matchers

# HTML Element Rolleri

- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles

# Kütüphaneler

- json-server
- bootstrap
- axios@^0.27.2
- @testing-library/user-event@14.0

# Test Geliştirme Süreci

## TDD (Test Driven Development)

- red to green test
- Önce bileşenin testleri yazılır daha sonra bileşen kodlanır
- Artısı, testler bir yük gibi gelmiyor. Geliştirme sürecinnin bir parçası oluyor. Testleri yazarken dinamik yapının algoritmasını olduşturduğumuz için işlevi daha hızlı kodlayabiliyoruz

## BDD (Behaviour Driven Development)

- Önce özellik / bileşen geliştirilir daha sonra testleri yazılır

# FireEvent

- react testing library içerisinde gelen olay tetikleme methodu
- gerçek kullanıcıdan uzak tepkiler verdiği için yerini userEvent'e bıraktı
- tetiklenen olaylar gerçek bir insanın tepkisinden çok daha hızlı bir şekilde aniden tetiklendiği için testlerde tutarsızlıklara sebep olabiliyor

# UserEvent

- bu yolu kullanmak için userEvent paketi indirilmeli
- fireEvent'in morden daha gelişmiş versiyonu
- tetiklediğimiz olaylar gerçek kullanıcın yapıcağı gibi bir gecikmenin ardından gerçekleşir
- gecikme olduğunda async await kullanırız

## Gif

<img src="/public/icecream-app-g.gif"/>
