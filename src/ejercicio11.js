let kilometros=0 , combustible=0;
         do{
             kilometros=prompt("Ingrese el número de kilómetros recorridos por su vehiculo: ");
         }while(kilometros <= 0 || isNaN(kilometros))
         
         console.log("kilometros: "+kilometros);
         
         do{
             combustible=prompt("ingrese el numero de combustible consumido: ");
         }while(combustible <=0 || isNaN(combustible))
         
         console.log("combustible: "+combustible);
         let consumo = combustible / kilometros;
         
         console.log("combustible por kilometro: "+consumo);
         alert("El consumo del combustible por kilometro es "+consumo);