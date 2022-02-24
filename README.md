# Vue 3 + Vite + Quasar

직접 여러 사이드 프로젝트에 사용하려고 만든 Vue 3 + Vite + Quasar SPA 프로젝트 기본 템플릿입니다.

- Vue Router v4.x가 탑재되어 있습니다.
- 기본적인 파일 구조로 src폴더 아래에 pages, components 폴더와 router/index.js가 있습니다.
- 백엔드/API서비스 연결을 염두에 두고 .env 파일을 만들고 .gitignore에도 추가하였습니다.

## 프론트엔드 커스터마이징에 참고할 페이지들

- Quasar의 Layout Builder(https://quasar.dev/layout-builder)에서 생성한 코드를 복사해 App.vue에 붙여넣기
- Quasar의 Vue Components(https://quasar.dev/vue-components/)에서 컴포넌트 작성
- 추가적인 CSS요소 또는 아이콘이 필요할 경우 Quasar의 Using Quasar(https://quasar.dev/start/vite-plugin#using-quasar)에서 configuration
- 아름다운 색상 조합을 위한 Material Theme Builder(https://material-foundation.github.io/material-theme-builder/#/custom)

## 백엔드

백엔드의 경우 여러 선택지를 두고 취사선택할 수 있도록 하기 위해 따로 설치하지 않았습니다. 필요한 경우 아래 후보군의 docs를 보고 따라하며 만들기로 합니다.

- Supabase(https://supabase.com/docs/guides/with-vue-3#building-the-app)
- Firebase(https://firebase.google.com/docs/build)
- MongoDB Atlas(https://docs.atlas.mongodb.com/)
