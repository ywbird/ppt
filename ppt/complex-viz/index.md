---
title: "복소함수의 시각화를 통해 이미지를 구겨보자"
# theme: simple
---

<style>
.colw{
    display: flex;
    gap: 5px;
}
.col{
    flex: 1;
}
</style>

<!-- e=1&w=400& -->
<!-- e=1&w=800&h=300& -->

<h1 class="r-fit-text">복소함수의 시각화</h1>

### 를 통해 이미지를 구겨보자

by 30314 이도이

---

## 연속함수

<iframe
src="https://viz.meliplug.info/gen/index.html?e=0&w=800&h=300&c=H4sIAAAAAAAAAyWOwQqCQBCG7z7F4ElhWwjyotjBAqlLhw4JIbHq6i7VbuyOZEjv3rodhvmHb4b5Wq0sQqOZ6SCHY1XS47kqDXsJKpXEYgFRAFCcqtthT1yaXYG7GFUn1dDoKYXrakNgTRMCrq9cqIlfYpO0KaAZ%2BX%2B2Qr93%2BvUxchCYQs8e1pNvEGdB0HqVYfntVLwSbQ1nyKOwH1WLUitPQwLXKd8%2BGQpqpYqmuCYwWzT6zi%2ByQ5FC8o2zHwRZEF3bAAAA"
width=802 height=302
></iframe>

******

## 연속함수

$\downarrow$

<div class="fragment">

- 테일러 급수
- 파데 근사
- 바이어슈트라스 분해 정리

$\downarrow$
</div>


<div class="fragment">
다항함수/유리함수
</div>

***

$$
a_0 + a_1x + a_3x^3 + a_3x^3 + \cdots + a_nx^n
$$

<br>

$$
\displaystyle{
\frac
{a_0 + a_1x + a_3x^3 + a_3x^3 + \cdots + a_nx^n}
{1 + b_1x + b_3x^3 + b_3x^3 + \cdots + b_nx^n}
}
$$

<br>

$$
(x-a_0)(x-a_1)(x-a_2)\cdots(x-a_n)
$$

******

$$
\sin(x) = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \frac{x^7}{7!} + O(9)
$$

<br>

$$
\sin(x) \approx \frac{x - \frac{53}{396}x^3 + \frac{551}{166320}x^5}{1 + \frac{13}{396}x^2 + \frac{5}{11088}x^4}
$$

<br>

$$
\sin(x) = x \left(1 - \frac{x^2}{\pi^2}\right) \left(1 - \frac{x^2}{4\pi^2}\right) \left(1 - \frac{x^2}{9\pi^2}\right) \cdots
$$

---

$$
f: \mathbb R \to \mathbb R
$$

<div class="fragment">

$\downarrow$

$$
\mathbb R ^ 2
$$
</div>

***

$$
a+bi \mapsto (a, b)
$$

<div class=fragment>

$$
\mathbb C \cong \mathbb R ^ 2
$$

</div>

***

$$
f: \mathbb C \to \mathbb C
$$

<div class="fragment">

$\downarrow$

$$
\mathbb C ^ 2 \cong \mathbb R ^ 4
$$
</div>

---

<!-- ## 시각화 방법 -->
## Visualization Methods

<ul>
<li class="fragment highlight-green">$\text{Domain Coloring}$</li>
<li>$\text{3D Plot}$</li>
<li>$\text{Vector Field}$</li>
<li class="fragment highlight-green">$z-w\text{ Plane}$</li>
<li>$\text{Riemann Sphere}$</li>
</ul>

---

## Domain Coloring

***

### HSL

![hsl](./assets/hsl.jpg)

[HSL Color Picker](https://www.hslpicker.com/)

***

$$
f(z) = a + bi
$$

<div class=fragment>

$\downarrow$

$hsl($ <span class="fragment highlight-red">$a$</span> $, 1\ , $ <span class="fragment highlight-red">$b$</span> $)$

</div>

******

$$
f(z) = a + bi
$$

$l: (-\infty, \infty) \to (0, 1)$

$\downarrow$

$hsl($ <span>$l(a)$</span> $, 1\ , $ <span>$l(b)$</span> $)$

***

<div class=colw>

<div class=col>
$f(x) = \sin x$<br>

<img width=300 src="./assets/sin-sigmoid.png" data-preview-image/>

$l = sigmoid$
</div>

<div class=col>
$f(x) = \sin x$<br>

<img width=300 src="./assets/sin-modulo.png" data-preview-image/>

$l = mod$
</div>

<div class=col>
$f(x) = \text{atanh}\ x$<br>

<img width=300 src="./assets/atanh-modulo.png" data-preview-image/>

$l = mod$
</div>

</div>

***

<div class=colw>

<div class=col>
$f(x) = \sinh x$<br>

<img width=300 src="./assets/sinh-modulo.png" data-preview-image/>
$l = mod$
</div>

<div class=col>
$f(x) = \text{asin}\ x$<br>

<img width=300 src="./assets/arcsin-modulo.png" data-preview-image/>
$l = mod$
</div>

<div class=col>
$f(x) = \tan x$<br>

<img width=300 src="./assets/tan-sigmoid.png" data-preview-image/>
$l = sigmoid$
</div>

</div>

***

<div class=colw>

<div class=col>
$\tiny{f(x) = x^3 + 3x^2 + 15x + 1}$<br>

<img width=300 src="./assets/quadratic-sigmoid-2.png" data-preview-image/>

$l = sigmoid$
</div>

<div class=col>
$\tiny{f(x) = x^3 + (7-7i)x^2 + (15+7i)x + 9}$<br>

<img width=300 src="./assets/quadratic-sigmoid.png" data-preview-image/>

$l = sigmoid$
</div>

</div>

***

$$
f(z) = re^{i\theta}
$$

<div class=fragment>
$l: (-\infty, \infty) \to (0, 1)$

$\downarrow$

$hsl($ <span>$\displaystyle{\frac{\theta}{2\pi}}$</span> $, 1\ , $ <span>$l(r)$</span> $)$
</div>

***

<div class=colw>

<div class=col>
$f(x) = \sqrt{x}$<br>

<img width=300 src="./assets/polar-sqrt.png" data-preview-image/>

$l = sigmoid$
</div>

<div class=col>
$f(x) = \sin{x}$<br>

<img width=300 src="./assets/polar-sin.png" data-preview-image/>

$l = sigmoid$
</div>

<div class=col>
$f(x) = \sinh{x}$<br>

<img width=300 src="./assets/polar-sinh.png" data-preview-image/>

$l = sigmoid$
</div>

</div>

***

<div class=colw>

<div class=col>
$\tiny{f(x) = x^3 + 3x^2 + 15x + 1}$<br>

<img width=300 src="./assets/polar-quadratic.png" data-preview-image/>
</div>

<div class=col>
$\tiny{f(x) = x^3 + (7-7i)x^2 + (15+7i)x + 9}$<br>

<img width=300 src="./assets/polar-quadratic-2.png" data-preview-image/>
</div>

</div>

---

## Z-W plane

******

$z \rightsquigarrow f(z)$

***

<iframe
src="./assets/zw.html"
width=602 height=602
></iframe>

***

<img src="./assets/default.png" width=600 />

***

<div class=colw>

<div class=col>
$f(x) = x^2$<br>

<img width=300 src="./assets/zw-sqr.png" data-preview-image/>
</div>

<div class=col>
$f(x) = x^3$<br>

<img width=300 src="./assets/zw-cube.png" data-preview-image/>
</div>

</div>

***

<div class=colw>

<div class=col>
$f(x) = e^x$<br>

<img width=300 src="./assets/zw-exp.png" data-preview-image/>
</div>

<div class=col>
$f(x) = \ln x$<br>

<img width=300 src="./assets/zw-ln.png" data-preview-image/>
</div>

</div>

***

<div class=colw>

<div class=col>
$f(x) = \sin x$<br>

<img width=300 src="./assets/zw-sin.png" data-preview-image/>
</div>

<div class=col>
$f(x) = \tan x$<br>

<img width=300 src="./assets/zw-tan.png" data-preview-image/>
</div>

</div>

---

## Branch Cut

******

$\ln x$

******

$\ln re^{i\theta}$

******

$\ln r + i(\theta + 2\pi n)$

---

## Riemann Surface

***

<https://www.desmos.com/3d/iihaj3ss2n>  
<https://www.desmos.com/3d/gxz14pcuvu>

---

## Domain Coloring
## and
## Z-W Plane

***

### Domain Coloring

$f(z) \rightsquigarrow z$

<br>

### Z-W Plane

$z \rightsquigarrow f(z)$

******

### Domain Coloring

$f(z) \rightsquigarrow z$

<br>

### Z-W Plane

$f^{-1}(z) \rightsquigarrow z$

******

### Domain Coloring = Z-W Plane<sup>-1</sup>

---

<img src="./assets/qrcode.png" />

**`ywbird@naver.com`**

&copy;ywbird
