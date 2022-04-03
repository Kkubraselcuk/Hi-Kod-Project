# Insertion Sort Projesi
## [22,27,16,2,18,6] -> Insertion Sort'a göre aşamalar : 
1. Aşama = ilk sayı 22'dir ve en küçük sayı 2 olduğu için 2 ve 22 yer değiştirir --> [2,27,16,22,18,6] (n)
2. Aşama = gelen sayı 27'dir ve 6, 27'den küçük olduğu için 6 ve 27 yer değiştirir. -->[2,6,16,22,18,27] (n-1)
3. Aşama = gelen sayı 22'dir' ve 18, 22'den küçük olduğu için 18 ve 22 yer değiştir. --> [2,6,16,18,22,27] (n-2)

## Big-O Gösterimi
- n + n-1 +n-2 + ....+1 = n*(n-1)/2
- O(n) = n^2

## Time Complexity
- Best Case : Aradığımız sayının dizinin en başında olması O(n)
- Average Case : Aradığımız sayının ortada olması O(n^2)
- Worst Case : Aradığımız sayının sonda olması O(n^2)

## Dizi sıralandıktan sonra 18 sayısı hangi case kapsamına girer ?
- Average Case

# [7,3,5,8,2,9,4,15,6] Insertion Sort'a göre ilk 4 adımını yazınız.

1. Aşama = ilk sayı 7'dir ve en küçük 2 olduğu için 2 ve 7 yer değiştirir. --> [2,3,5,8,7,9,4,15,6] (n)
2. Aşama = gelen sayı 3'dür ve daha küçük sayı olmadığı için 3 yer değiştirmez. --> [2,3,4,8,7,9,5,15,6] (n-1)
3. Aşama = gelen sayı 5'dir ve 4, 5'den küçük olduğu için 4 ve 5 yer değiştrir.  --> [2,3,4,5,7,9,8,15,6] (n-2)
4. Aşama = gelen sayı 8 dir ve 5, 8'den küçük olduğu için 5 ve 8 yer değiştirir. --> [2,3,4,5,6,9,8,15,7] (n-3)
