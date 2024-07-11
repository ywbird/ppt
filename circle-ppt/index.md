---
marp: true
theme: uncover
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
---

# <!--fit-->동글동글

## 원의 방정식의 다양한 표현 방법

## by 10315이도이, 10303곽대호

---

## 원의 방정식의 표준형

**중심 $C(a,b)$, 반지름 $r$**

<div class="columns" >

- 표준형 : $(a,b)$ 에서 거리가 $r$
    $(x-a)^2+(y-b)^2=r^2$
- 일반형 : 표준형을 전개
    $x^2+y^2+Ax+by+C=0$

![]()

</div>

---

## $y=f(x)$ 함수꼴의 원을 방정식

<div class="columns" >

<div>

- 일반형을 $y$에 대해 정리하여 $y=f(x)$으로 나타냄

$f(x)=\pm\sqrt{r^2-(x-a)^2}+b$

</div>

<!--DESMOS 함수꼴 원방-->

</div>

---

## 삼각비를 이용한 원의 방정식

- 원 위의 점 $(x,y)$를 $\cos\theta$, $\sin\theta$ 형태로 표현

<div class="columns" >

1) $x=a+\cos\theta$
    $y=b+\sin\theta$

2) $t\equiv\tan\frac{\theta}{2}$ 일때,
    $\cos\theta=\frac{1-t^2}{1+t^2}$
    $\sin\theta=\frac{2t}{1+t^2}$

3) $x=a+r(\frac{1-t^2}{1+t^2})$
    $y=b+r(\frac{2t}{1+t^2})$

<!--DESMOS 사진(편집)-->
![]()

</div>

---

## 극좌표계를 이용한 원의 방정식

### 극좌표계란?

<div class="columns">

- 원점으로부터의 거리와 $x$축에 대한 각으로 점을 나타낸 방법
- $(r,\theta)$로 표현

<!--DESMOS 이미지 넣기-->

</div>

---

### 극좌표계 변환

* 데카르트 좌표계(평면좌표) $\rightarrow$ 극좌표계
    
    $D(A)=(\sqrt{A.x^2,A.y^2},\arctan(\frac{A.x}{A.y}))$

* 극좌표계 $\rightarrow$ 데카르트 좌표계(평면좌표)
    
    $P(A)=(A.x\cdot \cos(A.y),A.x\cdot \sin(A.y))$

---

### 극좌표계에서의 원
### 원의 중심 : $O(0,0)$

<div class="columns">

<div class="all-center">

$$
r=1
$$

</div>

<!--DESMOS 극좌표계 원-->

</div>

---

### 원의 중심 : $(r_1,\theta_1)$, 반지름 : $r$

<div class="columns">

<div class="all-center">

$$
r_0^2-2r_1r_0\cos(\theta-\theta_1)+r_1^2=r^2
$$

</div>

<!--DESMOS 중심이 원점이 아닌 원-->

</div>

---

