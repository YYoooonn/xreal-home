# HomPage

XREAL 4기 홈페이지 프로젝트

## GetStart

```bash
yarn
yarn dev
```

필요한 페키지가 설치된 후 `localhost:3000` 에서 웹페이지가 호스트됩니다.

## 커밋하기 전 꼭 `yarn precommit`를 실행해주세요.

husky를 통해 git hook로 자동화하기엔 커밋 속도가 너무나도 느려집니다.  
스스로 자가진단을 해주세요. 에디터는 실시간으로 프로젝트의 모든 에러와 경고를 잡아내지 않습니다.  
`yarn precommit`는 TSC로 타입 유효성을 점검하고 ESLint로 주어진 규칙으로 코드를 검사하고 Prettier로 코드 스타일을 교정, 포메팅합니다.  
이러한 과정을 거치지 않는다면 **deploy 과정에서 에러가 발생할 가능성이 매우 높습니다.** 실제로, 제가 확인한 9할의 deploy 실패는 타입 에러였습니다.
