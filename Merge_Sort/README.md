# Merge Sort Projesi
## Merge sort'a göre aşamaları
[16,21,11,8,12,22] -> Merge Sort
öncelikle sayı dizisi 2 ye ayrılır
                 [16,21,11,8,12,22]
daha sonra ayrılan dizi son yapı taşına ulaşıncaya kadar tekrar ikiye bölünür
               [16,21,11]     [8,12,22]
               /    \          /      \
            [16,21] [11]   [8,12]    [22]
            /   \     |     /   \      |
          [16]  [21] [11]  [8] [12]  [22]
sonrasında ayrılan sayılar sıralama yapılarak 2 şerli gruplarla bir araya gelir
            [16,21]  [11]   [8,12]   [22]
                \     /        \      /
               [11,16,21]    [8,12,22]
en son da küçükten büyüğe sıralanmış dizi oluşur
                 [8,11,12,16,21,22]
## Big-O gösterimi 
 Big-O: O(nlogn)
