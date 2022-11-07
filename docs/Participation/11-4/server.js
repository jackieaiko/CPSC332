
const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: false }));
app.listen(3000);

app.get('/', function(req, res) {
    var str = '';
str =
`
<!DOCTYPE html>
<html lang="en">

<head>
        <title>Fake Form Demo</title>
        <link rel="icon" href="favicon2.png">
</head>

<body>
        <h1>Hello, World! New web page, who is this?</h1>
        <img src="icee.jpg"
                alt="Shamelessly stolen from https://i.kym-cdn.com/photos/images/original/000/000/601/C6QJPRHW4QF6KFDP7XJNW24TNDI4YNF2.jpg">

        <form action="submission.html" method="GET">

                <p>
                        <label for="first">First Name:</label>
                        <input type="text" name="first" id="first">
                </p>

                <p>
                        <label for="last">Last Name:</label>
                        <input type="text" name="last" id="last">
                </p>
                <input type="submit" value="Submit Feedback">
        </form>
</body>

</html>
`
    res.send(str);
});
app.post('/submission.html', function(req, res) {
    var str = '';
str +=    '<html lang="en">';
str +=        '<head>';
str +=            '<meta charset="utf-8">';
str +=            '<title>Submission Page</title>';
str +=            '<link rel="icon" href="favicon.png">';
str +=            '<style>';
str +=                'table,';
str +=                'th {';
str +=                    'border: 1px solid black;';
str +=                '}';
str +=                'td {';
str +=                    'border: 1px dotted black;';
str +=                '}';
str +=            '</style>';
str +=        '</head>';
str +=        '<body>';
str +=            '<h1>Submission Results Page</h1>';
str +=            '<table>';
str +=                '<caption>First and Last Name Submitted on the Previous Page</caption>';
str +=                '<tr>';
str +=                    '<th>First Name</th>';
str +=                    '<th>Last Name</th>';
str +=                '</tr>';
str +=                '<tr>';
str +=                    '<td id="fname">'+ req.body.first + '</td>';
str +=                    '<td id="lname">' + req.body.last+ '</td>';
str +=                '</tr>';
str +=            '</table>';
str +=        '</body>';
str +=    '</html>';
res.send(str);
});