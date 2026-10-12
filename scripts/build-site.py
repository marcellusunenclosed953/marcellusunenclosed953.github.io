from hashlib import sha256
from pathlib import Path
from shutil import copytree
from tempfile import TemporaryDirectory


ROOT = Path(__file__).resolve().parent.parent
SOURCE = ROOT / "site"
OUTPUT = ROOT / "_site"


def build():
    with TemporaryDirectory() as directory:
        staged = Path(directory) / "site"
        copytree(SOURCE, staged)
        index = staged / "index.html"
        html = index.read_text(encoding="utf-8")

        for relative in ("assets/styles.css", "assets/main.js"):
            asset = staged / relative
            digest = sha256(asset.read_bytes()).hexdigest()[:12]
            versioned = asset.with_name(f"{asset.stem}.{digest}{asset.suffix}")
            versioned.write_bytes(asset.read_bytes())
            html = html.replace(f"./{relative}", f"./{versioned.relative_to(staged).as_posix()}")

        index.write_text(html, encoding="utf-8")
        copytree(staged, OUTPUT, dirs_exist_ok=True)


if __name__ == "__main__":
    build()
