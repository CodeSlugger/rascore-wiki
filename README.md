# rascore wiki

Публичная вики rascore: https://codeslugger.github.io/rascore-wiki/

Сайт на Docusaurus 3. Страницы — в `docs/`, страницы виджетов собираются `tools/gen_widgets.py` из схем настроек сайта (`tools/schemas.json`).

```bash
npm install
npm start          # локально с горячей перезагрузкой
npm run build      # статический сайт в build/
```

Публикация: содержимое `build/` в ветку `gh-pages`.
