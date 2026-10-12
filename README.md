# Eunchan Jo — Personal Website

개인 홈페이지의 초기 구조입니다. 참고 페이지와 실제 콘텐츠가 정해지면 디자인과 섹션을 확장합니다.
현재 화면은 이름과 준비 중 안내만 담은 임시 페이지입니다.

## 구성

프레임워크나 빌드 과정 없이 HTML/CSS로 동작합니다.

```text
site/
  index.html              # 홈페이지 내용과 메타 정보
  .nojekyll               # 정적 파일을 그대로 제공
  assets/
    styles.css            # 색상, 글꼴, 레이아웃, 모바일 대응
    favicon.svg           # 임시 EJ 아이콘
.github/workflows/
  deploy-pages.yml        # main 브랜치의 site/를 GitHub Pages에 배포
```

공개할 파일은 `site/` 안에 추가합니다. README와 설정 파일은 배포 대상에 포함되지 않습니다.
이미지와 문서 링크는 `./assets/...` 같은 상대 경로를 사용하면 프로젝트 주소와 루트 주소에서 모두 작동합니다.

## 로컬 실행

저장소 루트에서 Python 3로 실행합니다.

```bash
python3 -m http.server 8000 --bind 127.0.0.1 --directory site
```

브라우저에서 <http://localhost:8000>을 엽니다. 파일 수정 후 새로고침하면 반영됩니다.
서버는 `Ctrl+C`로 종료합니다.

## 원하는 주소: eunchanjo.github.io

GitHub의 기본 Pages 주소는 소유한 사용자 또는 조직 이름으로 정해집니다.
`https://eunchanjo.github.io/`를 사용하려면 다음 조건이 필요합니다.

- 소유 계정 또는 조직 이름: `eunchanjo`
- 그 소유자 아래의 저장소 이름: `eunchanjo.github.io`

현재 원격 저장소는 `Chipmunk-g4/Eunchan-Jo_Personal-Page`입니다.
기본 설정으로 이 저장소에 Pages를 활성화하면 예상 주소는
`https://chipmunk-g4.github.io/Eunchan-Jo_Personal-Page/`입니다.
저장소 이름만 `eunchanjo.github.io`로 바꾸거나 CNAME에 이 주소를 입력하는 것으로는 원하는 주소가 되지 않습니다.

원하는 주소를 위해서는 `eunchanjo` 계정/조직의 사용 가능 여부와 소유권을 확인한 후,
해당 소유자의 `eunchanjo.github.io` 저장소에 코드를 올려야 합니다.
현재 작업은 로컬 기초 구성만 준비하며 계정, 원격 저장소 이름, 원격 URL은 변경하지 않았습니다.

## GitHub Pages 활성화

1. 배포할 GitHub 저장소에서 **Settings → Pages → Build and deployment → Source → GitHub Actions**를 선택합니다.
2. 준비된 파일을 `main` 브랜치에 커밋하고 푸시합니다.
3. **Actions → Deploy GitHub Pages** 실행이 성공했는지 확인합니다.
4. **Settings → Pages**에서 실제 공개 주소를 확인합니다.

이후 `main`에 푸시할 때마다 `site/`가 자동 배포됩니다.
Actions의 **Run workflow**로 수동 배포할 수도 있습니다.
GitHub Free를 사용하는 경우 Pages를 제공하는 저장소는 공개 저장소여야 합니다.

공식 안내: [Pages 사이트 생성](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site),
[Actions 배포 구성](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

## 다음 작업

- 참고 페이지에 맞춰 레이아웃과 스타일 결정
- 소개, 프로젝트, 이력, 연락처 등 필요한 콘텐츠 추가
- 프로필 사진, 문서, 외부 링크 연결
- 최종 주소가 정해지면 canonical URL과 공유용 메타 정보 추가
