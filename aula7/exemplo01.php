<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exemplo 01 - Lista de Itens</title>
</head>
<body>
    
    <h1>LISTA DE ITENS</h1>
    <ul> 
            <!--aqui começa o laço de repetiçâo-->
        <?php 
        for ($i=1; $i <=100 ; $i++) { 
            echo "<li> Item $i </li>";
        }

        ?>
        <!-- Aqui termina o  laço de repetiçao -->
    </ul>
</body>
</html>

<?php
?>