# Aula 04 - Seletores em CSS

## Seletores simples

- via tag: `p { color: red }`
- via classe: `.vermelho { color: red }`
- via id: `#paragrafo { color: red }`

## Seleção por atributos

- `[attributo]`: Seleciona elementos com o atributo
- `[attributo=valor]`: Seleciona elementos com atributo com o valor especificado
- `[attributo~=valor]`: Seleciona elementos com atributo contendo valor
- `[attributo|=valor]`: Seleciona elementos com atributo que comece com o valor ou seja igual
- `[attributo^=valor]`: Seleciona elementos com atributo que comece com o valor
- `[attributo$=valor]`: Seleciona elementos com atributo que termine com o valor
- `[attributo*=valor]`: Seleciona elementos com atributo que o valor contenha o termo

## Combinação de seletores e hierarquia

- combinação (um ou outro ou outro...), separados por vírgula: `p, section, .itens { color: red; }`
- hierarquia (elementos filhos): `div p a { color: red; }`
- hierarquia direta (filho direto de outro elemento): `div > p { color: red }`
- próximo irmão (próximo elemento no mesmo nível): `div + p { color: red }`

## Referências

- [Seletores](https://www.w3schools.com/cssref/css_selectors.php)
- [Combinadores](https://www.w3schools.com/cssref/css_ref_combinators.php)

