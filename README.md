Claro! Aqui está o README atualizado com suas adições:

```markdown
# Nimbus

**Aviso: Esta biblioteca está em desenvolvimento ativo.**

Nimbus é uma biblioteca JavaScript que permite alterar o estilo de elementos HTML com base em classes predefinidas. Com o Nimbus, você pode facilmente personalizar a aparência de seus elementos HTML simplesmente adicionando classes específicas.

## Como usar

Para começar a usar o Nimbus, siga estas etapas simples:

1. Inclua o arquivo JavaScript Nimbus em seu projeto.
2. Defina as classes de estilo desejadas em seu HTML.
3. Desfrute da magia do Nimbus alterando dinamicamente o estilo do seu HTML!

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Minha Biblioteca</title>
</head>
<body class="background-red">
    <!-- Div onde o conteúdo será injetado -->
    <div id="conteudo" class="t-width-cent-4 t-height-cent-1 minha-classe background-yellow borderad-cent-10 ">

        <h1 class="color-red ts-cent-20">ola</h1>
        
    </div>
    
    <div  class="t-width-cent-4 t-height-px-10 background-blue padd-px-2 borderad-px-2">

        <h1 class="color-white ts-cent-30">eai</h1>

    </div>
    <!-- Link para o arquivo JavaScript -->
    <script src="Nimbus.js"></script>
</body>
</html>
```

## Recursos

### Cores

Nimbus oferece uma variedade de cores predefinidas que podem ser aplicadas como fundo ou cor de texto. Simplesmente adicione as classes `background-{cor}` ou `color-{cor}` para alterar a cor de fundo ou texto, respectivamente.

### Tamanhos

É possível definir largura e altura em pixels ou em porcentagem. Use as classes `t-width-px-{valor}`, `t-height-px-{valor}` para definir em pixels e `t-width-cent-{valor}`, `t-height-cent-{valor}` para definir em porcentagem.

### Tamanho da fonte

Você pode ajustar o tamanho da fonte utilizando classes como `ts-px-{valor}` para pixels e `ts-cent-{valor}` para porcentagem.

### Bordas e margens

Altere a borda e a margem dos elementos com as classes `borderad-px-{valor}`, `borderad-cent-{valor}` para definir em pixels e porcentagem, respectivamente. Para definir o preenchimento, utilize `padd-px-{valor}` e `padd-cent-{valor}`.

### Alinhamento e Centralização

Facilite o alinhamento dos itens com a classe `aling_item`, que utiliza flexbox para centralizar vertical e horizontalmente.

Para centralizar elementos horizontalmente, utilize a classe `center`.

## Contribuição

Sinta-se à vontade para contribuir com este projeto abrindo issues ou enviando pull requests. Toda contribuição é bem-vinda!