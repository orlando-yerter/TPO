function validar(){
    var form =document.form;
      if(form.nombre.value==0){
        alert("el nombre esta vacio");
        form.nombre.value= "";
        form.nombre.focus();
        return 0;
      }
	
	
      else if(form.email.value==0){
        alert("el mail  esta vacio");
        form.email.value= "";
        form.email.focus();
        return false;
    }
         return true;
   alert("los datos se han enviados correctamente");
   form.submit();
}




