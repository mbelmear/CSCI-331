<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/main.css">
    <title>LAMP Stack</title>
    <script src="../js/app.js" defer></script>
</head>
<body>
    <h1>LAMP Stack</h1>
    <?php
    // PHP code for add.php starts here

    // Replace with your actual database connection details
    $hostname = "localhost";
    $username = "root";
    $password = "";
    $database = "db42"; // Name of your database

    // Establish a database connection
    $db = new mysqli($hostname, $username, $password, $database);

    // Check the connection
    if ($db->connect_error) {
        die("Connection failed: " . $db->connect_error);
    }

    // Check if the form has been submitted
    if($_SERVER["REQUEST_METHOD"] == "POST"){
        // Get data from the form
        $first_name = $_POST["first"];
        $last_name = $_POST["last"];
        $country = $_POST["country"];
        $age = $_POST["age"];
        $latitude = $_POST["latitude"];
        $longitude = $_POST["longitude"];

        // Insert data into the database
        $sql = "INSERT INTO `randuser` (`first`, `last`, `country`, `age`, `latitude`, `longitude`) 
        VALUES ('$first_name', '$last_name', '$country', $age, $latitude, $longitude)";

        if ($db->query($sql) === TRUE) {
            echo "Data added successfully<br>";
        } 
        else {
            echo "Error: " . $sql . "<br>" . $db->error;
        }

        $sql = "SELECT * FROM randuser";
        $result = $db->query($sql);

        if (!$result) {
            die("Query failed: " . $db->error);
        }

        if ($result->num_rows > 0) {
            echo "<table border='1'>";
            
            // Display column names as table headers
            echo "<tr>";
            while ($row = $result->fetch_assoc()) {
                foreach ($row as $key => $value) {
                    echo "<th>" . $key . "</th>";
                }
                break; // Break after fetching column names from the first row
            }
            echo "</tr>";

            // Display data rows
            $result->data_seek(0); // Reset result pointer to the first row
            while ($row = $result->fetch_assoc()) {
                echo "<tr>";
                foreach ($row as $value) {
                    echo "<td>" . $value . "</td>";
                }
                echo "</tr>";
            }

            echo "</table>";
        } else {
            echo "0 results";
        }

        $db->close();
    }
    else {
        // Get data from the form
        $first_name = $_GET["first"];
        $last_name = $_GET["last"];
        $country = $_GET["country"];
        $age = $_GET["age"];
        $latitude = $_GET["latitude"];
        $longitude = $_GET["longitude"];

        // Insert data into the database
        $sql = "INSERT INTO `randuser` (`first`, `last`, `country`, `age`, `latitude`, `longitude`) 
        VALUES ('$first_name', '$last_name', '$country', $age, $latitude, $longitude)";

        if($db->query($sql) === TRUE) {
            echo "Data added successfully<br>";
        } 
        else{
            echo "Error: " . $sql . "<br>" . $db->error;
        }

        $sql = "SELECT * FROM randuser";
        $result = $db->query($sql);

        if (!$result) {
            die("Query failed: " . $db->error);
        }

        if ($result->num_rows > 0) {
            echo "<table border='1'>";
            
            // Display column names as table headers
            echo "<tr>";
            while ($row = $result->fetch_assoc()) {
                foreach ($row as $key => $value) {
                    echo "<th>" . $key . "</th>";
                }
                break; // Break after fetching column names from the first row
            }
            echo "</tr>";

            // Display data rows
            $result->data_seek(0); // Reset result pointer to the first row
            while ($row = $result->fetch_assoc()) {
                echo "<tr>";
                foreach ($row as $value) {
                    echo "<td>" . $value . "</td>";
                }
                echo "</tr>";
            }

            echo "</table>";
        } else {
            echo "0 results";
        }

        $db->close();
    }?>
</body>
</html>