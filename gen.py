import tomllib

def gen_html(inner: str) -> str:
    result = f"""
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Presentations</title>
  <link  class="title"rel="stylesheet" href="style.css">
</head>

<body>
  <main>
    <a href="https://meliplug.info">홈으로</a>
    <h1>이도이의 발표 Archive</h1>

    <ul class="ppt-list">
    {inner}
    </ul>
  </main>
</body>

</html>
"""
    return result

def gen_item(item) -> str:
    result = f"""<li class="ppt-list_item">
    <a class="ppt-item_link" href="{item["path"]}">
    <img class="ppt-item_hero" src="{item["hero_img"] if "hero_img" in item else ""}" alt="">
    </a>
    <div class="ppt-item_meta">
      <span class="ppt-item_date">{item["date"]}</span> 
      <a class="ppt-item_link" href="{item["path"]}">
        <span class="ppt-item_title">{item["title"]}</span>
      </a>
      <div class="ppt-item_tags">
        {"".join(f'<span class="ppt-item_tags_tag">#{x}</span>' for x in item["tags"])}
      </div>
    </div>
</li>
"""
    return result

def main():
    with open("config.toml", "r") as opt_file:
        options = tomllib.loads(opt_file.read())
        items = "".join(gen_item(item) for item in options["ppts"])
        print(gen_html(items))

if __name__ == "__main__":
    main()
