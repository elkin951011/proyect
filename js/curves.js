// getCountrysAviable();
// async function getCountrysAviable(){
//   let apiUrl = 'https://api.covid19api.com/countries';
//   let response = await fetch(apiUrl);
//   let data = await response.json();
//   let arr = data.reduce((acc, cur) => cur.Country ? [...acc, cur.Country] : acc, []);
//   console.log(arr);
// }
contador = {}
dibujo = {objeto:0,seleccion:'',descarga:''}

$(document).ready(function(){
  $('.descargar').click(function(){
    //se borran los bordes
    $('.figuras').css({'border':'none'});
    //se quitan los botones de editar
    $('.edit_tamano').remove();

    html2canvas($("#canvas"), {
      onrendered: function(canvas) {
          dibujo.descarga = canvas.toDataURL("image/jpg");
          console.log(dibujo.descarga)
          link = document.createElement('a');
          link.download = 'descarga.png';
          link.href = dibujo.descarga;
          link.click();

          //window.location.href = dibujo.descarga;
          //window.open(dibujo.descarga, '_blank');
      }
    });
  });

  $('.sig').click(function(){
    pagina('sig')
  })
  $('.ant').click(function(){
    pagina('ant')
  })
});

drawCurves(allCountrys);
$('.pagina_1, .pagina_2, .pagina_3').click(function(){
  contador.pagina = parseInt(this.innerHTML)
  pagina()
})

function deleteCurves(){
  let pos = document.getElementById('curves');
  let canvas = pos.getElementsByTagName("canvas");
  let text = document.getElementsByTagName("p");
  while (canvas.length > 0){
    for (let i = 0 ; i < canvas.length ; i++){
      pos.removeChild(canvas[i]);
      pos.removeChild(text[i]);
    }
  }
}


function drawCurves(inputAarray){
  deleteCurves();
  
  contador.num_ini = 0
  
  contador.array = inputAarray;
  if(inputAarray.length <= 5){
    contador.num_fin = inputAarray.length;
  }
  else{
    contador.pagina = 1;
    contador.num_fin = 5*contador.pagina;
    contador.num_ini = (5*contador.pagina)-5;
  }

  traer_curvas();
  contador.setInterval = setInterval(traer_curvas, 500);
  numeros_de_pagina();
}

function pagina(pag){
  if(pag == 'sig'){
    if(contador.array.length > (5*contador.pagina)){
      contador.pagina += 1;
      contador.num_fin = 5*contador.pagina;
      contador.num_ini = (5*contador.pagina)-5;
    }
  }
  else if(pag == 'ant'){
    if(contador.pagina > 1){
      contador.pagina -= 1;
      contador.num_fin = 5*contador.pagina;
      contador.num_ini = (5*contador.pagina)-5;
    }
  }
  else{
    contador.num_fin = 5*contador.pagina;
    contador.num_ini = (5*contador.pagina)-5;
  }

  $(".figuras_menu").remove();
  traer_curvas();
  contador.setInterval = setInterval(traer_curvas, 500);
  numeros_de_pagina();
}

function drawCurve(inputCountry, div){
  dibujo.objeto += 1;
  id_figura = "figura_"+dibujo.objeto;

  if (div == 'curves'){
    if(inputCountry == undefined || inputCountry == 'undefined' ){
      return;
    }
    let cName = document.createElement("p");
    let node = document.createTextNode(inputCountry + ":");
    cName.id = "p_"+id_figura;
    cName.appendChild(node);
  
    let text = document.getElementById('curves');
    text.appendChild(cName);

    let canvas = document.createElement('canvas');
    canvas.id = id_figura;

    pos = document.getElementById(div);
    pos.appendChild(canvas);
    chartIt();
  }
  else{
    var canvas = document.getElementById(inputCountry);
    var imageURI = canvas.toDataURL("image/jpg");
    $('#canvas').append( '<img style="width: 200px;" id="'+id_figura+'" src="'+imageURI+'"/>' );
  }
  
  function chartIt(){
    const values = [];
    const newLabels = [];

    //se traen los datos en un servicio que recoge el json
    var respuesta = new XMLHttpRequest();
    respuesta.onreadystatechange = function() {};
    respuesta.open("GET", 'https://api.covid19api.com/dayone/country/' + inputCountry, false);
    respuesta.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    respuesta.send();
    if(respuesta.status == 200 && respuesta.readyState == 4){
      if(respuesta.status != 200){
        return;
      }
      arr = JSON.parse(respuesta.responseText).reduce((acc, cur) => cur.Confirmed ? [...acc, cur.Confirmed] : acc, []);

      for (let i = 1 ; i < arr.length ; i++){
        values.push(arr[i] - arr[i-1]);
      }
  
      for (let i = 0 ; i < values.length ; i++){
        newLabels.push('');
      }
    }

    const ctx = document.getElementById(id_figura).getContext('2d');
    const chart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: newLabels,
          datasets: [{
              label: '',
              fill: false,
              borderColor: 'rgb(0, 0, 0)',
              data: values
          }]
      },
      options: {
        elements: {
          point:{
              radius: 0
          }
        },
        scales: {
          xAxes: [{
            gridLines: {
                display:false,
                drawBorder: false
            }
          }],
          yAxes: [{
              ticks: {
                  display: false
              },
              gridLines: {
                display:false,
                drawBorder: false
            }   
          }]
        },
        legend: {
          display: false
        },
        tooltips: {
          enabled: false,
        },
        hover: {
          mode: null
        }
      }
    });
    chart.canvas.parentNode.style.width = '350px';
    chart.canvas.parentNode.style.height = '600px';
  }
  
    if (div == 'curves'){
      $('#'+id_figura).addClass('figuras_menu')
      $('#p_'+id_figura).addClass('figuras_menu')
      
      $('#'+id_figura).click(function(){
        drawCurve(this.id, 'canvas', false, false);
      })
    }
    else{
      //se marca el elemento creado para que se pueda mover
      $( "#figura_"+dibujo.objeto ).draggable({ containment: "#canvas" });
      //se adiciona la clase figuras para trabajarlo mas facil
      $( "#figura_"+dibujo.objeto ).addClass("figuras");
      //se crea la opcion del evento click para la edicion del objeto o la figura
      $( ".figuras" ).click(function(){
        $('.figuras').css({'border':'none'});
        $('#'+this.id).css({'border':'solid 1px black'});
        boton_editar(this.id);
      });
    }
}
function traer_curvas(){
  if(contador.num_ini >= contador.num_fin){
    $('.load').hide();
    nivel_carga(0)
    clearInterval(contador.setInterval);
  }
  else{
    contador.pagina == undefined || contador.pagina == 'undefined' ? contador.pagina = 1:'';
    $('.load').fadeIn();
    drawCurve(contador.array[contador.num_ini], 'curves');
    contador.num_ini += 1;
    temporal_contador = (contador.pagina-1) * 5;

    nivel_carga((contador.num_ini-temporal_contador)/(contador.num_fin-temporal_contador)*100)
  }
}
function boton_editar(id){
  dibujo.seleccion = id;
  $('.edit_tamano').remove();
  $('#canvas').append( '<i class="fa fa-plus-circle edit_tamano e_t_plus" style="font-size:48px;color:#006a71;"></i><i class="fa fa-minus-circle edit_tamano e_t_minus" style="font-size:48px;color:#006a71;"></i>' );
  $('.e_t_plus').click(function(){
    $("#"+dibujo.seleccion).width($("#"+dibujo.seleccion).width()+10);
  })
  $('.e_t_minus').click(function(){
    $("#"+dibujo.seleccion).width($("#"+dibujo.seleccion).width()-10);
  })
}
function nivel_carga(porcentaje){
  $('.cp-percent-number').html(parseInt(porcentaje)+"%");
  $('.cp-full, .cp-regular').css({'transform':'rotate('+1.8*porcentaje+'deg)'})
}
function numeros_de_pagina(){
  contador.array.length < 6 ? $('.navigation').hide():$('.navigation').fadeIn();

  if(contador.array.length > ((contador.pagina+2)*5) ){
    $('.pagina_1').html(contador.pagina)
    $('.pagina_2').html(contador.pagina+1)
    $('.pagina_3').html(contador.pagina+2)
  }
}