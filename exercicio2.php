<!DOCTYPE html>
<html lang="pt-br">
<head>
<meta charset="UTF-8">
<title>Exercício 2</title>
</head>
<body>

<form method="post">
    Linhas: <input type="number" name="linhas" required><br><br>
    Colunas: <input type="number" name="colunas" required><br><br>
    <button type="submit">Gerar Tabela</button>
</form>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $linhas = $_POST["linhas"];
    $colunas = $_POST["colunas"];

    echo "<table border='1' style='margin-top:20px;'>";

    $i = 1;
    while ($i <= $linhas) {
        echo "<tr>";

        $j = 1;
        while ($j <= $colunas) {
            echo "<td>L$i C$j</td>";
            $j++;
        }

        echo "</tr>";
        $i++;
    }

    echo "</table>";
}
?>

</body>
</html>