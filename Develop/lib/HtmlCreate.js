
function HtmlCreate(employees){

    html = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
            <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
            
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
            <script src="https://code.jquery.com/jquery.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
            <title>Report on Employees</title>
            
        </head>
            

        <body>
            <br>
            <div class="wrapper">`;

    end =`</div>
        </body>
        </html>


        <style>

        .headerCard{
            background-color:lightblue;
            padding:10px;
            padding-bottom: 0px;
        }

        .card {
        /* margin-left: 5vw;
        margin-right:5vw;
        margin-top: 5vh;
        margin-bottom: 5vh; */
        margin-left: 20px;
        margin-right: 20px;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        background-color: rgb(29, 83, 199);
        border-radius: 5px;
        }

        .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
        }

        h2 {
            margin: 0px;
        }
        h3{
            margin-top: 10px;
        }

        li{
            background-color: blanchedalmond;
            color: black;
            border-radius:10px;
            border:1px solid #DDD;
            width:200px;
        }

        .underneath {
            background-color: whitesmoke;
            margin-top: 2px;
            margin-left: 12px;
            margin-right: 12px;
        }

        .kitten {
            background:white;
            width: 205px;
            height: 105px;
            border-radius: 4px;
            padding: 5px; 
        }

        .wrapper {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
        }

        body {
            background-color: lightgrey;
        }

        </style>`;


    employees.forEach(element => {
        
        hash = element.name.hashCode();
        x = hash % 100;
        w = 200+ Math.floor( x / 10 );
        h = 100+ x % 10;


        card = `<div class="card text-white bg-info mb-3" style="max-width: 18rem;">
        <div class="card-header">
            <center>
                <img class="kitten" src="http://placekitten.com/${w}/${h}" alt="cat picture">
            </center>
            <h2><b>${element.name}</b></h2>
            <h3> <i class="${element.getRoleIcon()}"></i> ${element.getRole()}</h3>
        </div>
        <div class="card-body">
        <h5 class="card-title"></h5>
        <p class="card-text"></p>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${element.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${element.email}">${element.email}</a></li>
            <li class="list-group-item">${element.getHtml3()}</li>
        </ul>
        </div>
        </div>
        `;

        html = html+card;
        
    });

    return html+end;

}

    module.exports = HtmlCreate;

 

