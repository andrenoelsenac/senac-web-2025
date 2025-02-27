# senac-web-2025
Arquivos usados na disciplina Introdução ao Desenvolvimento Web

Para copiar o repositório, digite:

```sh
git clone https://github.com/andrenoelsenac/senac-web-2025.git
```

## Comandos do git

- `git init`: inicializa um repositório git na pasta local (não precisa se criar o repositório pelo GitHub)
- `git add`: adiciona os arquivos no `staging` preparando os arquivos para a versão (commit)
  - Geralmente usa-se: `git add .`
- `git commit`: cria uma versão do repositório
  - Não esqueça da mensagem de commit: `git commit -m "Mensagem"`
- `git branch`: Cria um novo ramo (branch)
- `git checkout`: Muda de ramo (ou até de commit)
  - `git checkout -b ramo`: cria um ramo novo e já muda pra ele
- `git status`: Verifica o status atual do repositório
- `git log`: Exibe o histórico de commits
- `git clone`: Faz o clone de um repositório do GitHub (usa-se apenas uma vez)
- `git pull`: "Puxa" as alterações que existem no servidor
- `git push`: Envia as alterações para o servidor (precisa ter autorização)

## Como funciona o fluxo do git

![Fluxo do git](https://th.bing.com/th/id/R.cec8adcdc71ce9c388b973c23ea6a490?rik=mya3AetRx1G2Vg&riu=http%3a%2f%2fdiogomg.github.io%2fgit-experience%2fimages%2fgit-local-remote.png&ehk=peCgL7wEAoB1dC6ql%2bjge%2bTYhTGRA7bh4IrWqLcAM3U%3d&risl=&pid=ImgRaw&r=0)

## Importante

O conteúdo da `master` contém os arquivos usados na Aula 02, onde aprendemos sobre `git` e `github`. Para visualizar as demais aulas, pode ver em outras `branches`.

```sh
git checkout aula-03
```

Ou pela interface do GitHub