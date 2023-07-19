```mermaid
flowchart TB
E(작업명)-->A
A[처리 / 작업] --> B{조건}
B--Yes-->C[true일때 작업]
B--No-->D[false일때 작업]
F[[작업명,함수호출]]
```
