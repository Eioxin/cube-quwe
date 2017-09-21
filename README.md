# README

Hier steht alles, was zum nutzen der Typescript "Testumgebung" gebraucht wird.

  - Git
  - Kompelieren

## Git

### Resposetory clonen:

noch nicht bereit!

## Kompelieren

### Die verschiedenen "wichtigen" Datein:

- tslinter.jason

Zuständig für die Style Regeln in Typescript, das Zuständige Plugin heißt Linter.

- package.json

Zuständig für die npm-Befehle und Dependencies

#### Ordner in .gitignore:

- build/
- node_modules/

### npm installieren (wenn noch nicht vorhanden):

```
sudo apt-get install nodejs
sudo apt-get install npm
```

### .ts Dateien kompelieren

!!! Es funktioniert nur wenn die .ts-Datein direkt im src Ordner liegen !!!
Wenn das nicht gewollt ist muss es in der package.json angepasst werden

``` npm run compile ```

Die Dateien werden nach build/ kompeliert.

``` npm run test ```

Die Dateien werden nach build/ kompeliert und die tests werden ausgeführt.

``` npm run watch ```

Die Dateien werden nach build/ kompeliert und die tests werden ausgeführt. Nach jeder Änderung wird ``` npm run test ``` ausgeführt.