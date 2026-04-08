import { file, write } from "bun";

// Attributes 생성 헬퍼 함수
function buildAttrString(autoAnimate: boolean, customAttrs: string) {
  const attrs = [];
  if (autoAnimate) attrs.push('data-auto-animate');
  if (customAttrs) attrs.push(customAttrs);
  return attrs.length > 0 ? " " + attrs.join(" ") : "";
}

// 템플릿의 MathJax URL을 버전 4로 업데이트했습니다.
const HTML_TEMPLATE = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

    <title>{{TITLE}}</title>

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/dist/reset.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/dist/reveal.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/dist/theme/{{THEME}}.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/{{HIGHLIGHT}}.min.css">
  </head>
  <body>
    <div class="reveal">
      <div class="slides">
        {{SLIDES}}
      </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/dist/reveal.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/plugin/notes/notes.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/plugin/highlight/highlight.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/plugin/zoom/zoom.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/plugin/math/math.js"></script>
    
    <script>
      Reveal.initialize({
          hash: true,
          // Reveal.js의 플러그인 옵션명은 mathjax3를 사용하지만,
          // 내부 엔진은 아래 URL을 통해 MathJax 4를 불러옵니다.
          mathjax3: {
            mathjax: 'https://cdn.jsdelivr.net/npm/mathjax@4/tex-mml-chtml.js',
            tex: {
              inlineMath: [ [ '$', '$' ], [ '\\\\(', '\\\\)' ]  ]
            },
            options: {
              skipHtmlTags: [ 'script', 'noscript', 'style', 'textarea', 'pre' ]
            },
          },
          plugins: [ RevealHighlight, RevealNotes, RevealZoom, RevealMath.MathJax3 ]
      });
    </script>
  </body>
</html>`;

async function buildPresentation() {
  const args = Bun.argv.slice(2);

  if (args.length < 2) {
    console.error("❌ Error: Please specify both input and output file paths.");
    console.error("👉 Usage: bun run build.ts <input_markdown> <output_html>");
    process.exit(1);
  }

  const markdownPath = args[0];
  const outputPath = args[1];

  try {
    const mdContent = await file(markdownPath).text();
    let content = mdContent.trim();
    
    let frontmatter = "";
    let pageTitle = "reveal.js";
    let theme = "black";
    let highlight = "tokyo-night-dark";

    // 1. Frontmatter 추출
    const fmRegex = /^\s*---\n([\s\S]*?)\n---\n/;
    const match = content.match(fmRegex);
    if (match) {
      frontmatter = match[1];
      content = content.replace(fmRegex, "");
      
      const titleMatch = frontmatter.match(/^title:\s*(.+)$/im);
      if (titleMatch) pageTitle = titleMatch[1].trim().replace(/^["']|["']$/g, '');

      const themeMatch = frontmatter.match(/^theme:\s*(.+)$/im);
      if (themeMatch) {
        let parsedTheme = themeMatch[1].trim().replace(/^["']|["']$/g, '').toLowerCase();
        theme = parsedTheme === 'default' ? 'black' : parsedTheme;
      }

      const highlightMatch = frontmatter.match(/^highlight:\s*(.+)$/im);
      if (highlightMatch) {
        let parsedHighlight = highlightMatch[1].trim().replace(/^["']|["']$/g, '').toLowerCase();
        highlight = parsedHighlight === 'tokyo' ? 'tokyo-night-dark' : parsedHighlight;
      }
    }

    // 2. 가로 슬라이드 토큰화 (--- 또는 ------ 및 {속성} 파싱)
    const hRegex = /(?:\r?\n|^)\s*(-{6}|-{3})(?:\s*\{([^}]*)\})?\s*(?:\r?\n|$)/;
    const hTokens = content.split(hRegex);
    const hSlides = [];

    hSlides.push({
      content: hTokens[0],
      attributes: "",
      autoAnimate: false
    });

    for (let i = 1; i < hTokens.length; i += 3) {
      const sepType = hTokens[i];
      const attrs = hTokens[i + 1] ? hTokens[i + 1].trim() : "";
      const slideContent = hTokens[i + 2];

      hSlides.push({
        content: slideContent,
        attributes: attrs,
        autoAnimate: false
      });

      if (sepType === "------") {
        hSlides[hSlides.length - 2].autoAnimate = true;
        hSlides[hSlides.length - 1].autoAnimate = true;
      }
    }

    let slidesHtml = "";
    // 세로 슬라이드용 정규식 (*** 또는 ****** 및 {속성} 파싱)
    const vRegex = /(?:\r?\n|^)\s*(\*{6}|\*{3})(?:\s*\{([^}]*)\})?\s*(?:\r?\n|$)/;

    // 3. 세로 슬라이드 파싱 및 HTML 렌더링
    for (let hIndex = 0; hIndex < hSlides.length; hIndex++) {
      const hSlide = hSlides[hIndex];

      if (hIndex === 0 && hSlide.content.trim() === "" && hSlides.length > 1) {
        continue;
      }

      const vTokens = hSlide.content.split(vRegex);
      const vSlides = [];

      vSlides.push({
        content: vTokens[0],
        attributes: "",
        autoAnimate: false
      });

      for (let i = 1; i < vTokens.length; i += 3) {
        const sepType = vTokens[i];
        const attrs = vTokens[i + 1] ? vTokens[i + 1].trim() : "";
        const slideContent = vTokens[i + 2];

        vSlides.push({
          content: slideContent,
          attributes: attrs,
          autoAnimate: false
        });

        if (sepType === "******") {
          vSlides[vSlides.length - 2].autoAnimate = true;
          vSlides[vSlides.length - 1].autoAnimate = true;
        }
      }

      const validVSlides = vSlides.filter((vs, idx) => !(idx === 0 && vs.content.trim() === "" && vSlides.length > 1));
      
      const hAttr = buildAttrString(hSlide.autoAnimate, hSlide.attributes);

      if (validVSlides.length > 1) {
        slidesHtml += `\n        <section${hAttr}>`;
        for (const vSlide of validVSlides) {
          const vAttr = buildAttrString(vSlide.autoAnimate, vSlide.attributes);
          const renderedHtml = Bun.markdown.html(vSlide.content.trim());
          slidesHtml += `\n          <section${vAttr}>\n${renderedHtml}\n          </section>`;
        }
        slidesHtml += `\n        </section>`;
      } else {
        const renderedHtml = Bun.markdown.html(validVSlides[0].content.trim());
        slidesHtml += `\n        <section${hAttr}>\n${renderedHtml}\n        </section>`;
      }
    }

    // 4. 템플릿 치환
    const finalHtml = HTML_TEMPLATE
      .replace('{{TITLE}}', pageTitle)
      .replace('{{THEME}}', theme)
      .replace('{{HIGHLIGHT}}', highlight)
      .replace('{{SLIDES}}', slidesHtml);

    // 5. 저장
    await write(outputPath, finalHtml);
    console.log(`✅ Build successful! -> ${outputPath}`);

  } catch (error) {
    console.error("❌ An error occurred during the build. Please check the file paths.", error);
  }
}

buildPresentation();
