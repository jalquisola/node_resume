function generate_pie_graph(data){
    var doughnutData = [
      {
        value: data.x,
        color:"#1abc9c",
        highlight:"#1abc9c"
      },
      {
        value : data.y,
        color : "#ecf0f1",
        highlight : "#ecf0f1"
      }
    ];
    var myDoughnut = new Chart(document.getElementById(data.html_id).getContext("2d")).Pie(doughnutData);
}
