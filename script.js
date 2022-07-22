
//10,2,4,1,2,3,5
var input =  [4,5,1,5,2,6,12,1,5];
var waterunits = [];
const addtoarray = ()=>{
   var value = document.getElementById("inputvalue");
   if(value.value%1 ==0 && value.value!="")
   {
    input.push(value.value);
    value.value ="";
    document.getElementById("spaninputarray").innerHTML = input;
    }
    else{
        alert("Invalid input value! Please enter non negative integers only.")
    }
}

    const generateoutput = ()=>{
        var waterunits = 0;
        const max = Math.max(...input);
        const arr = Array(max).fill(0);
        var inputTable  =  document.getElementById("input");
        arr.forEach((value,rowindex)=>{
            var row =  inputTable.insertRow(rowindex);
            row.id = 'row' + rowindex;
            input.forEach((value,colindex)=>{
                var col = row.insertCell(colindex);
                col.id = 'col' + rowindex.toString() + colindex.toString();
            })
        })
        input.forEach((value,index)=>{
            var height = max - value;
            console.log(height);
            var colid = index.toString();
            while(height<max){
                document.getElementById('col'+height.toString()+colid).style.backgroundColor = 'yellow';
                height++;
            }
        })

        var outputTable  =  document.getElementById("output");
        arr.forEach((value,rowindex)=>{
            var row =  outputTable.insertRow(rowindex);
            row.id = 'rowout' + rowindex;
            input.forEach((value,colindex)=>{
                var col = row.insertCell(colindex);
                col.id = 'colout' + rowindex.toString() + colindex.toString();
            })
        })
        input.forEach((value,index)=>{
            var height = max - value;
            console.log(height);
            var colid = index.toString();
            while(height<max){
                document.getElementById('colout'+height.toString()+colid).style.backgroundColor = 'yellow';
                height++;
            }
        })
        arr.forEach((value,rowindex)=>{
            input.forEach((value,colindex)=>{
                if(document.getElementById('colout'+rowindex+colindex).style.backgroundColor !== 'yellow'){
                    var leftwall = false;
                    var rightwall = false;
                    var temp = colindex-1;
                    while(temp>=0){
                        if(document.getElementById('colout'+rowindex+temp).style.backgroundColor === 'yellow'){
                            leftwall = true;
                            break;
                        }
                        temp--;
                    }
                    temp = colindex+1;
                    while(temp<input.length){
                        if(document.getElementById('colout'+rowindex+temp).style.backgroundColor === 'yellow'){
                            rightwall = true;
                            break;
                        }
                        temp++;
                    }
                    if(rightwall && leftwall){
                        document.getElementById('colout'+rowindex+colindex).style.backgroundColor = 'blue';
                        waterunits++;
                    }
                }
            });
        })
        document.getElementById('waterunits').innerHTML = waterunits;
    }

