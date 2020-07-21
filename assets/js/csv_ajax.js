
    console.log("ohh yeah");
    var x=$('#form')
    
    
    x.submit(function(e) { 
        e.preventDefault();
        // var data= new FormData(e);
        // console.log(e);
        
        // console.log(self);
        $.ajax({
            type: 'post',
            url: '/submit',
            data: new FormData(this),
            dataType:'json',
            contentType:false,
            cache:false,
            processData:false,
            success: function(data){
            //    console.log(data.data.result);
               newcsvDom(data.data.result);
            }, error: function(error){
                console.log(error.responseText);
            }
        });
        // $('#form')[0].reset();
    });


    let newcsvDom = function(csv){
        
      console.log(csv.length);
    //   console.log(csv[0]);
    //   console.log(Object.keys(csv[0]));
    //   console.log(Object.keys(csv[0])[0]);

      
    
      $('<table></table>',{
          id:"table_data",
          class:"table_data"
      }).appendTo("#table");
      $('<caption><h1>File Data</h1></caption>',{
        
        }).appendTo("#table_data");
      $('<tr></tr>',{
            id:"table_head",
            class:"table_head"
        }).appendTo("#table_data");
        // console.log(csv[0]);
      for(let i=0; i<Object.keys(csv[0]).length ; i++){
        //    console.log(Object.keys(csv[0])[i]);
           var obj=(Object.keys(csv[0])[i]).toString();
        //    console.log(csv[0][obj]);
            $('<th></th>',{
                id:Object.keys(csv[0])[i],
                class:"table_th",
                text:Object.keys(csv[0])[i]
            }).appendTo("#table_head");
      }

      for(let i=0; i<csv.length ; i++){

        $('<tr></tr>',{
            id:"table_head"+i,
            
        }).appendTo("#table_data");
        for(let j=0; j<Object.keys(csv[0]).length ; j++){
                var obj=(Object.keys(csv[0])[j]).toString();
                // console.log(csv[i][obj]);
                $('<td></td>',{
                    class:"table_td",
                    text:csv[i][obj]
                }).appendTo("#table_head"+i);
          }
        
           
      }
     
    }

    function myFunction() {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("table_data");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[0];
          if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
            }
          }       
        }
      }


    function rese(){
        
       
       $('#table_data').remove();
    }
