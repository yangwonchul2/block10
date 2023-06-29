# CSS

## 단위

### 색상

````

 ```html
 <style>
    * {
        color: red;
        color; green;
    }
 </style>
````

- `#`을 사용하여 16진수로 나타낼 수 있다.

```html
<style>
  * {
      color: #;
      color; green;
  }
</style>
```

### 길이/ 크기

- px
- in
- %
  - 보통 부모의 길이를 기준으로 0%~100%
- vw, vh
  - viewport width , viewport height
  - %와 마찬가지로 0~100 까지 이며 화면 크기기준
- em
  - 부모의 font-size. 기주준으로 합니다.
  - 부모의 font-size가 16px 일 때 자식 엘리먼트에게 1em 을 설정할 경우 16px 로 적용된다.
- rem
  - root em, 최상위 엘리먼트의 font-size를 기준으로 합니다.
  - html이 최상위 엘리먼트
  - html의 font-size 가 32px , div의 font-size를 2rem으로 설정하면 출력되는 크기는 64px 이다.
