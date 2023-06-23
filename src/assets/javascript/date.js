    export function date(){
        $(function(){
            var dtToday = new Date();

            var month = dtToday.getMonth() + 1;
            var day = dtToday.getDate();
            var year = dtToday.getFullYear();
            if(month < 10)
                month = '0' + month.toString();
            if(day < 10)
             day = '0' + day.toString();
            var maxDate = year + '-' + month + '-' + day;
            $('#inputdate').attr('min', maxDate);
        });
    }

    export function calendar(){
      document.getElementById('inputdate').value='';
      window.alert('No se puede ingresar fechas por teclado');
  }

  export function alerta(){
    $(function(){
      var dtToday = new Date();

      var month = dtToday.getMonth() + 1;
      var day = dtToday.getDate();
      var year = dtToday.getFullYear();
      if(month < 10)
          month = '0' + month.toString();
      if(day < 10)
       day = '0' + day.toString();
      var maxDate = year + '-' + month + '-' + day;
      $('#inputdate').attr('max', maxDate);
    });
  }

  export function reporte(maxDate){
    $('#inputdate').attr('min', maxDate);
  }

  export function jAlert(mensaje){
    window.alert(mensaje);
  }

  export function reset(){
    var maxDate = '2000-01-01';
    $('#inputdate').attr('min', maxDate);
  }

  export function limpiar(){
    document.getElementById('inputdate').value='';
  }

