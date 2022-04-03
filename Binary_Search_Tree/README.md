# Binary Search Tree Projesi
[7, 5, 1, 8, 3, 6, 0, 9, 4, 2] dizisinin Binary-Search-Tree aşamaları
root --> 7
1. gelen sayı 5 : 
- root 7 dir. 5 roottan küçük olduğu için rootun solunda bulunur.
2. gelen sayı 1 : 
- root 7 dir. 1 roottan küçük olduğu için rootun solunda bulunur 
- solda 5 olduğu için root artık 5'dir ve 1 root(5)den küçük olduğu için root(5)'in solunda olur.
3. gelen sayı 8 : 
- root 7 dir. 8 roottan büyük olduğu için sağında bulunur.
4. gelen sayı 3 : 
- root 7 dir. 3 roottan küçük olduğu için soluna gelir 
- solda 5 olduğu için root artık 5'dir ve 3 root(5)den küçük olduğu için root(5)'in solunda olur
- yeni root artık 1'dir. 3 root(1)den büyük olduğu için root(1)'un sağında bulunur
5. gelen sayı 6 : 
- root 7 dir. 6 roottan küçük olduğu için rootun solunda bulunur 
- solda 5 olduğu için root artık 5'dir ve 6 root(5)den büyük olduğu için root(5)'in sağında bulunur.
6. gelen sayı 0 : 
- root 7 dir. 0 roottan küçük olduğu için soluna gelir
- solda 5 olduğu için root artık 5'dir ve 0 root(5)den küçük olduğu için root(5)'in solunda olur
- solunda 1 olduğu için root artık 1'dir. 0 root(1)den küçük olduğu için root(1)'un solunda bulunur
7. gelen sayı 9 : 
- root 7 dir. 9 roottan büyük olduğu için sağına gelir 
- sağında 8 olduğu için root artık 8'dir ve 3 root(8)den büyük olduğu için root(8)'in sağında bulunur.
8. gelen sayı 4 : 
- root 7 dir. 4 roottan küçük olduğu için soluna gelir
- solda 5 olduğu için root artık 5'dir ve 4 root(5)den küçük olduğu için root(5)'in solunda olur
- solunda 1 olduğu için root artık 1'dir. 4 root(1)den büyük olduğu için root(1)'un soluna gelir 
- solunda 3 olduğu için root artık 3' dür. 4 root(3) den büyük olduğu için root(3)un sağında bulunur.
9. gelen sayı 2 : 
- root 7 dir. 2 roottan küçük olduğu için soluna gelir
- solda 5 olduğu için root artık 5'dir ve 2 root(5)den küçük olduğu için root(5)'in solunda olur
- solunda 1 olduğu için root artık 1'dir. 2 root(1)den büyük olduğu için root(1)'un soluna gelir 
- solunda 3 olduğu için root artık 3' dür. 2 root(3) den küçük olduğu için root(3)un solunda bulunur.

          7
         / \
        5   8
       / \   \  
      1   6   9
     / \   
    0   3 
       / \
      2   4  
