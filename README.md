<img src="Img/logo-nimbus.png" alt="Logo Nimbus" width="80" align="right">

# Nimbus

**Aviso: Esta biblioteca está em desenvolvimento ativo.**

Nimbus é uma biblioteca JavaScript que permite alterar o estilo de elementos HTML com base em classes predefinidas. Com o Nimbus, você pode personalizar a aparência dos seus elementos HTML simplesmente adicionando classes específicas.

## Como Usar

Para começar a usar o Nimbus, siga estas etapas simples:

1. Inclua o script Nimbus no seu projeto adicionando a seguinte linha no seu HTML:
   ```html
   <script src="https://izaq-code.github.io/Nimbus/Nimbus.js"></script>
   ```
2. Adicione o atributo `Nimbus` aos elementos HTML que deseja estilizar e defina as classes de estilo desejadas como valores do atributo.
3. Desfrute da magia do Nimbus alterando dinamicamente o estilo do seu HTML!

### Exemplo

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nimbus</title>
</head>
<body>
    <!-- Div onde o conteúdo será injetado -->
    <div Nimbus="color-red, background-blue, t-height-px-100, align-item, center, t-width-cent-10, align-item-center, borderad-px-50">
        <h1 Nimbus="color-red, ts-cent-20">ola</h1>
    </div>
    
    <div Nimbus="t-height-px-100, t-width-cent-10, background-blue, align-item-center, align-item">
        <h1 Nimbus="ts-cent-10, color-white">Nimbus</h1>
    </div>

    <h1>Exemplo de inputs Nimbus</h1>
    <div Nimbus="in{Nome do Usuário}"></div>
    <div Nimbus="in{E-mail do Usuário}"></div>

    <!-- Link para o arquivo JavaScript -->
    <script src="https://izaq-code.github.io/Nimbus/Nimbus.js"></script>
</body>
</html>
```

## Recursos

### Cores

Nimbus oferece uma variedade de cores predefinidas que podem ser aplicadas como fundo ou cor de texto. Simplesmente adicione as classes `background-{cor}` ou `color-{cor}` para alterar a cor de fundo ou do texto, respectivamente.

### Tamanhos

Defina largura e altura em pixels ou porcentagem com as seguintes classes:
- `t-width-px-{valor}` para largura em pixels
- `t-height-px-{valor}` para altura em pixels
- `t-width-cent-{valor}` para largura em porcentagem
- `t-height-cent-{valor}` para altura em porcentagem

### Tamanho da Fonte

Ajuste o tamanho da fonte com as classes:
- `ts-px-{valor}` para tamanho em pixels
- `ts-cent-{valor}` para tamanho em porcentagem

### Bordas e Margens

Altere a borda e a margem dos elementos com as classes:
- `borderad-px-{valor}` para borda em pixels
- `borderad-cent-{valor}` para borda em porcentagem
- `padd-px-{valor}` para preenchimento (padding) em pixels
- `padd-cent-{valor}` para preenchimento (padding) em porcentagem

### Alinhamento e Centralização

Facilite o alinhamento dos itens com a classe `align-item`, que utiliza flexbox para centralizar vertical e horizontalmente. Para centralizar elementos horizontalmente, utilize a classe `center`.

### Grid

Nimbus oferece suporte a layouts de grade flexíveis através do sistema de grid CSS. Com as classes fornecidas, você pode criar layouts de grid responsivos e adaptáveis. Por exemplo, defina o número de colunas e o tamanho de cada coluna usando classes como `grid-columns-{min}px-{fr}`.

### Max-Height e Max-Width

Limite a altura e largura máximas dos elementos com as classes:
- `max-height-px-{valor}` e `max-height-cent-{valor}` para altura máxima
- `max-width-px-{valor}` e `max-width-cent-{valor}` para largura máxima

### Gap

Defina o espaçamento entre os elementos com as classes:
- `gap-px-{valor}` para espaçamento em pixels
- `gap-cent-{valor}` para espaçamento em porcentagem

### Inputs

Nimbus também suporta a formatação de campos de entrada (inputs) através de uma sintaxe especial. Para utilizar o Nimbus em campos de entrada, você pode usar a sintaxe `in{texto}`, onde `{texto}` será substituído pelo valor do campo de entrada correspondente.

Exemplo:
```html
<div Nimbus="in{Nome do Usuário}"></div>
<div Nimbus="in{E-mail do Usuário}"></div>
```

Nesse exemplo, o Nimbus irá formatar os campos de entrada com base nas classes definidas para o `in{Nome do Usuário}` e `in{E-mail do Usuário}`, permitindo uma personalização fácil e direta desses elementos de formulário.

## Contribuição

Sinta-se à vontade para contribuir com este projeto abrindo issues ou enviando pull requests. Toda contribuição é bem-vinda!
