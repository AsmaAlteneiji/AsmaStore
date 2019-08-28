fetch("./index.json")
.then(response=>response.json())
.then(data=>displayProducts(data.products));

function displayProducts(data)
{
    for(let value of data)
    { 
        for(let index in value)
        {
            var div=document.createElement("div");  
            div.innerHTML=value[index];
            document.getElementById("container").appendChild(div); 
        }   
    }   
}

function createTable(records) 
{
    var table = document.createElement("table");
    table.setAttribute("border", 1);
    table.appendChild(createHeading(records[0]));
    for (let record of records) {
    table.appendChild(createRow(record));
    }
    document.getElementById("container").appendChild(table);
}
function createHeading(record) {
 var row = document.createElement("tr");
 for (let prop in record) {
   var heading = document.createElement("th");
   heading.innerHTML = prop.toUpperCase();
   row.appendChild(heading);
 }
 return row;
}
function createRow(record) {
 var row = document.createElement("tr");
 for (let prop in record) {
   var column = document.createElement("td");
   column.innerHTML = record[prop];
   row.appendChild(column);
 }
 return row;
}