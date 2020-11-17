#!/usr/bin/env fish

set ver (jq -r ".version" package.json | string trim)

set_color yellow;
echo 开始制作comfey-$ver.pdf……
pandoc --pdf-engine xelatex doc.md --toc -o dist/comfey-$ver.pdf
set_color -o green
echo 制作完成！
