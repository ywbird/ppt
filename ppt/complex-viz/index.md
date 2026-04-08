---
title: "복소함수의 시각화를 통해 이미지를 구겨보자"
---

<h1>복소함수의 시각화</h1>

### 를 통해 이미지를 구겨보자

#### by 30314 이도이

---

연속함수

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

<div class=fragment>$$
\mathbb C \cong \mathbb R ^ 2
$$</div>

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

******

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

******

$$
f(z) = re^{i\theta}
$$

<div class=fragment>
$l: (-\infty, \infty) \to (0, 1)$

$\downarrow$

$hsl($ <span>$\displaystyle{\frac{\theta}{2\pi}}$</span> $, 1\ , $ <span>$l(r)$</span> $)$
</div>

---

## Z-W plane

******

$z \rightsquigarrow f(z)$

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

### Domain Coloring = Z-W Plane

---

ㄴㅇㄹ
