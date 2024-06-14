<img src="Img/logo-nimbus.png" alt="Logo Nimbus" width="80" align="right">

# Nimbus

**Aviso: Esta biblioteca está em desenvolvimento ativo.**

Nimbus é uma biblioteca JavaScript que permite alterar o estilo de elementos HTML com base em classes predefinidas. Com o Nimbus, você pode facilmente personalizar a aparência de seus elementos HTML simplesmente adicionando classes específicas.

## Como Usar

Para começar a usar o Nimbus, siga estas etapas simples:

1. Inclua o script Nimbus no seu projeto, adicionando a seguinte linha no seu HTML:
   ```html
   <script src="https://izaq-code.github.io/Nimbus/Nimbus.js"></script>
   ```
2. Adicione o atributo `Nimbus` aos elementos HTML que deseja estilizar e defina as classes de estilo desejadas como valores do atributo.
3. Desfrute da magia do Nimbus alterando dinamicamente o estilo do seu HTML!

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
    <div Nimbus="color-red, background-blue, t-height-px-100, aling_item, center, t-width-cent-10, aling_item_center, borderad-px-50">

        <h1 Nimbus="color-red, ts-cent-20">ola</h1>
        
    </div>
    
    <div Nimbus="t-height-px-100, t-width-cent-10, background-blue, aling_item_center, aling_item">

        <h1 Nimbus="ts-cent-10, color-white">Nimbus</h1>

    </div>

    <!-- Link para o arquivo JavaScript -->
    <script src="https://izaq-code.github.io/Nimbus/Nimbus.js"></script>
</body>
</html>
```

## Recursos

### Cores

Nimbus oferece uma variedade de cores predefinidas que podem ser aplicadas como fundo ou cor de texto. Simplesmente adicione as classes `background-{cor}` ou `color-{cor}` para alterar a cor de fundo ou texto, respectivamente.

### Tamanhos

Você pode definir largura e altura em pixels ou em porcentagem. Use as classes `t-width-px-{valor}`, `t-height-px-{valor}` para definir em pixels e `t-width-cent-{valor}`, `t-height-cent-{valor}` para definir em porcentagem.

### Tamanho da Fonte

Ajuste o tamanho da fonte utilizando classes como `ts-px-{valor}` para pixels e `ts-cent-{valor}` para porcentagem.

### Bordas e Margens

Altere a borda e a margem dos elementos com as classes `borderad-px-{valor}`, `borderad-cent-{valor}` para definir em pixels e porcentagem, respectivamente. Para definir o preenchimento, utilize `padd-px-{valor}` e `padd-cent-{valor}`.

### Alinhamento e Centralização

Facilite o alinhamento dos itens com a classe `aling_item`, que utiliza flexbox para centralizar vertical e horizontalmente. Para centralizar elementos horizontalmente, utilize a classe `center`.

### Grid

O Nimbus oferece suporte a layouts de grade flexíveis através do sistema de grade CSS. Com as classes fornecidas, você pode criar layouts de grade responsivos e adaptáveis. Por exemplo, você pode definir o número de colunas e o tamanho de cada coluna usando classes como `grid-columns-{min}px-{fr}`.

### Max-Height e Max-Width

Além de definir tamanhos específicos para elementos, o Nimbus também permite limitar a altura e largura máximas de elementos usando o `max-height-px-${i}`//`max-height-cent-${i}` ou `max-width-px-${i}`//`max-width-cent-${i}`. Isso é útil para garantir que determinados elementos não ultrapassem certos limites de tamanho, especialmente em layouts responsivos.

### Gap

O espaçamento entre os elementos é uma consideração importante no design de layout. O Nimbus permite definir o espaçamento entre os elementos usando a classe `gap-px-{valor}` para definir em pixels ou `gap-cent-{valor}` para definir em porcentagem.

## Contribuição

Sinta-se à vontade para contribuir com este projeto abrindo issues ou enviando pull requests. Toda contribuição é bem-vinda!
