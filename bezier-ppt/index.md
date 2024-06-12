---
marp: true
theme: uncover
class: invert
style: |
  .columns {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
  }
  .all-center {
    display: grid;
    place-items: center;
  }
  .bhs {
    font-family: "Black Han Sans", sans-serif;
    font-weight: 400;
    font-style: normal;
  }
---

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap" rel="stylesheet">



# <!--fit--><span class="bhs">3차 곡선에 대한 탐구</span>

## 벡터 이미지는 어떻게 만들어지는가


---

## <span class="bhs">Vector 이미지란?</span>

- Scalable Vector Graphics
- 확대해도 깨지지 않는 이미지

![bg right:33% width:100%](SVG_Logo.svg)

---

![width:1100px](SVG_Logo.svg)

---

![width:1100px](SVG_Logo.svg.png)

---

## <span class="bhs">발명</span>

- Bernstein Polynomial
- De Casteljau Algorithm
- Pierre Bézier

![bg right:33% width:100%](pierre-bezier.png)

---

## <span class="bhs">Lerp</span>

<small>$P_0$와$P_1$ 사이의 점 P가 있을때, 그 점의 좌표를 $P_0$, $P_1$까지의 비율로 나타내는 함수를 Linear Interpolation - 선형 보간 함수 - lerp 라고 한다.
</small>

<br/>


> $$
> lerp(P_0, P_1, t) = (1-t) \cdot P_0 + t \cdot P_1,\,0 \leq t \leq 1
> $$

---

## <span class="bhs">De Casteljau's Algorithm</span>

* 점 2개에 Lerp → Linear Bézier Curve
* 점 3개에 Lerp → Quadratic Bézier Curve
* 점 4개에 Lerp → Cubic Bézier Curve
* 점 $N$개에 Lerp → $N-1$-th Bézier Curve

---

### Linear Bézier

<div class="columns">
  
  
<iframe src="https://www.desmos.com/calculator/ehfqlvs10h?embed" width="500" height="500" style="border: 1px solid #ccc" frameborder=0></iframe>

<div class="all-center">

$$
P = lerp(P_0, P_1, t)
$$

</div>

</div>

---

### Quadratic Bézier

<div class="columns">

<iframe src="https://www.desmos.com/calculator/yvanai4rim?embed" width="500" height="500" style="border: 1px solid #ccc" frameborder=0></iframe>

<div class="all-center">

$$
\begin{gather}
Q_0 = lerp(P_0, P_1, t) \\
Q_1 = lerp(P_1, P_2, t) \\
\\
P = lerp(Q_1, Q_2, t)
\end{gather}
$$

</div>

</div>

---

### Cubic Bézier

<div class="columns">


<iframe src="https://www.desmos.com/calculator/ghpvgn98s9?embed" width="500" height="500" style="border: 1px solid #ccc" frameborder=0></iframe>

<div class="all-center">

$$
\begin{gather}
Q_0 = lerp(P_0, P_1, t) \\
Q_1 = lerp(P_1, P_2, t) \\
Q_2 = lerp(P_2, P_3, t) \\
\\
R_0 = lerp(Q_0, Q_1, t) \\
R_1 = lerp(Q_1, Q_2, t) \\
\\
P = lerp(R_0, R_1, t)
\end{gather}
$$

</div>

</div>

---

### Cubic Bézier

<div class="columns">

<iframe src="https://www.desmos.com/calculator/3gr7bkbnjy?embed" width="500" height="500" style="border: 1px solid #ccc" frameborder=0></iframe>

$$
\begin{gather*}

Q_0 = (1-t)\cdot {\color{red}P_0} \, + \, t\cdot {\color{green}P_1}\\
Q_1 = (1-t)\cdot {\color{green}P_1} \, + \, t\cdot {\color{blue}P_2} \\
Q_2 = (1-t)\cdot {\color{blue}P_2} \, + \, t\cdot {\color{yellow}P_3} \\
\\
R_0 = (1-t)\cdot Q_0 \, + \, t\cdot Q_1\\
R_1 = (1-t)\cdot Q_1 \, + \, t\cdot Q_2 \\
\\
P = (1-t)\cdot Q_1 \, + \, t\cdot Q_2 \\

\end{gather*}
$$

</div>


---

De Casteljau's Algorithm, $N = 4$ 일때 $P$에 대해 정리

$$

\begin{equation}
\begin{aligned}
R_0 &= (1-t)\cdot Q_0 \, + \, t\cdot Q_1 \\
	&= (1-t)\cdot [\,(1-t)\cdot {\color{red}P_0} \, + \, t\cdot {\color{green}P_1}\,] \, + \, t\cdot [\,(1-t)\cdot {\color{green}P_1} \, + \, t\cdot {\color{blue}P_2}\,] \\
	&= (1-t)^2 \cdot {\color{red}P_0} + 2 \cdot (1-t) \cdot t \cdot {\color{green}P_1} + t^2 \cdot {\color{blue}P_2}

\\\\

R_1 &= (1-t)\cdot Q_1 \, + \, t\cdot Q_2 \\
	&= (1-t)\cdot [\,(1-t)\cdot {\color{green}P_1} \, + \, t\cdot {\color{blue}P_2}\,] \, + \, t\cdot [\,(1-t)\cdot {\color{blue}P_2} \, + \, t\cdot {\color{yellow}P_3}\,] \\
	&= (1-t)^2 \cdot {\color{green}P_1} + 2 \cdot (1-t) \cdot t \cdot {\color{blue}P_2} + t^2 \cdot {\color{yellow}P_3}

\\\\

P &= (1-t)\cdot Q_1 \, + \, t\cdot Q_2 \\
	&= (1-t) \cdot [\,(1-t)^2 \cdot {\color{red}P_0} + (1-t) \cdot t \cdot {\color{green}P_1} + t^2 \cdot {\color{blue}P_2}\,] + t \cdot [(1-t)^2 \cdot {\color{green}P_1} + (1-t) \cdot t \cdot {\color{blue}P_2} + t^2 \cdot {\color{yellow}P_3}] \\
	&= (1-t)^3 \cdot {\color{red}P_0} + 3 \cdot (1-t)^2 \cdot t \cdot {\color{green}P_1} + 3 \cdot (1-t) \cdot t^2 \cdot {\color{blue}P_2} + t^3 \cdot {\color{yellow}P_3}
\end{aligned}
\end{equation}

$$

---

De Casteljau's Algorithm, $N = 4$ 일때 $P$에 대해 정리

$$
(1-t)^3 \cdot {\color{red}P_0} + 3 \cdot (1-t)^2 \cdot t \cdot {\color{green}P_1} + 3 \cdot (1-t) \cdot t^2 \cdot {\color{blue}P_2} + t^3 \cdot {\color{yellow}P_3}
$$


---

## <span class="bhs">Bernstein's Polynomial</span>

조절점 $P_0, P_1, P_2, ..., P_n$ 에 대한 Bézier Curve

<br/>

> $$
P(t) = \sum_{i=0}^n P_i {n  \choose i}(1-t)^{n-i}t^i P_i,\,0 \leq t \leq 1
$$

---

$n=3$ 일때

<br/>

$$
\begin{equation}
\begin{aligned}
P(t) &= \sum_{i=0}^n {n  \choose i}(1-t)^{n-i}t^i P_i \\
     &= (1-t)^3 \cdot {\color{red}P_0} + 3 \cdot (1-t)^2 \cdot t \cdot {\color{green}P_1} + 3 \cdot (1-t) \cdot t^2 \cdot {\color{blue}P_2} + t^3 \cdot {\color{yellow}P_3}
\end{aligned}
\end{equation}

$$

---
