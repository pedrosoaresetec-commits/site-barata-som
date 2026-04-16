<!DOCTYPE html>
<html lang="pt-br">
<head>
<meta charset="UTF-8">
<title>Exercício 3</title>
<style>
    table {
        border-collapse: collapse;
        width: 60%;
        margin: 20px auto;
    }
    th, td {
        border: 1px solid black;
        padding: 10px;
        text-align: center;
    }
    .eletronico {
        background-color: #d1ecf1;
    }
    .alimento {
        background-color: #d4edda;
    }
    .vestuario {
        background-color: #fff3cd;
    }
</style>
</head>
<body>

<?php
$produtos = [
    ["nome" => "Celular", "preco" => 1200, "categoria" => "eletronico"],
    ["nome" => "Arroz", "preco" => 25, "categoria" => "alimento"],
    ["nome" => "Camiseta", "preco" => 50, "categoria" => "vestuario"],
    ["nome" => "Notebook", "preco" => 3500, "categoria" => "eletronico"],
];

echo "<table>";
echo "<tr><th>Nome</th><th>Preço</th><th>Categoria</th></tr>";

foreach ($produtos as $p) {
    $classe = $p["categoria"];
    echo "<tr class='$classe'>";
    echo "<td>{$p["nome"]}</td>";
    echo "<td>R$ {$p["preco"]}</td>";
    echo "<td>{$p["categoria"]}</td>";
    echo "</tr>";
}

echo "</table>";
?>

</body>
</html>