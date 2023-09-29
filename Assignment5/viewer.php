<!DOCTYPE html>
<html>
<head>
    <title>Form Data Viewer</title>
    <link rel="stylesheet" type="text/css" href="styles/main.css">
</head>
<body class="center-container"> 
    <h1>Form Data Viewer</h1>
    <table class="center">
        <tr>
            <th>Field</th>
            <th>Value(s)</th>
        </tr>
        <?php
        // Loop through all data and display in the table based on either get or post 
        if($_SERVER['REQUEST_METHOD'] == 'POST'){
            foreach ($_POST as $key => $value) {
                echo "<tr>";
                echo "<td>" . htmlspecialchars($key) . "</td>";
                echo "<td>";
                if (is_array($value)) {
                    foreach ($value as $item) {
                        echo htmlspecialchars($item) . "<br>";
                    }
                } else {
                    echo htmlspecialchars($value);
                }
                echo "</td>";
                echo "</tr>";
            }
        }
        else{
            foreach ($_GET as $key => $value) {
                echo "<tr>";
                echo "<td>" . htmlspecialchars($key) . "</td>";
                echo "<td>";
                if (is_array($value)) {
                    foreach ($value as $item) {
                        echo htmlspecialchars($item) . "<br>";
                    }
                } else {
                    echo htmlspecialchars($value);
                }
                echo "</td>";
                echo "</tr>";
            }
        }
        ?>
    </table>
    <pre>
        <?php
        // Display the array of variables using var_dump based on either get or post
        if($_SERVER['REQUEST_METHOD'] == 'POST'){
            var_dump($_POST);
        }   
        else{
            var_dump($_GET);
        }
        ?>
    </pre>
</body>
</html>
