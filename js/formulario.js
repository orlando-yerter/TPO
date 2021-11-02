

function validar(){
    var form =document.form;   
      if(form.nombre.value==0){
        alert("el nombre esta vacio");
        form.nombre.value= "";
        form.nombre.focus();
        return 0;
      }
      else if(form.apellido.value==0){
        alert("apellido  esta vacio");
        form.apellido.value= "";
        form.apellido.focus();
        return 0;
      }    
     
      else if(form.mail.value==0){
        alert("el mail  esta vacio");
        form.mail.value= "";
        form.mail.focus();
        return 0;
    }   
        alert(" todos los datos se han validados correctamente");
        document.form.submit();
}




