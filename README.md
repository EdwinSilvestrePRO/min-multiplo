# Multiplo

Tener a nuestra disposición una función simple
y poderosa que es capaz de encontrar múltiplos
es genial ahora con el paquete **multiplo**, tan
simple como se describe también lo es en tamaño.

Su uso consiste en la utilización de la función *mcm()* que por
defecto si no se define parámetros numéricos retorna *null*, se
puede pasar parámetros pero esos datos deben de cumplir las siguientes
condisiones:

```javascript 
// El tipo de dato siempre es numérico + 
// Debe de ser números naturales. +
// Nunca debe de ser Negativo. +
// Nunca debe de irracional o fraccionario +
```

## Aquí un ejemplo de implementación:

```javascript
import { mcm } from 'multiplo';

console.log(mcm()) // null
console.log(mcm(4)) // 4
console.log(mcm(4, 8)) // 8
console.log(mcm(4, 8, 16)) // 16
console.log(mcm(4, 7, 5)) // 140

```
> Un paquete para encontrar el mcm, esto está chévere
-- Neverneit Sober