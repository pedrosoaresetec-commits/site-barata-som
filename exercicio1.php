<!DOCTYPE html>
<html lang="pt-br">
<head>
<meta charset="UTF-8">
<title>Exercício 1</title>
<style>
    table {
        border-collapse: collapse;
        width: 50%;
        margin: 20px auto;
    }
    td {
        border: 1px solid black;
        padding: 10px;
        text-align: center;
    }
    .par {
        background-color: #f2f2f2;
    }
    .impar {
        background-color: #cce5ff;
    }
</style>
</head>
<body>

<table>
<?php
for ($i = 1; $i <= 8; $i++) {
    $classe = ($i % 2 == 0) ? "par" : "impar";
    echo "<tr class='$classe'>";
    
    for ($j = 1; $j <= 4; $j++) {
        echo "<td>Linha $i - Coluna $j</td>";
    }

    echo "</tr>";
}
?>
</table>

</body>
</html>