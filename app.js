


function changeColor(){
    
    var hex_numbers = ["0","1","2","3","4","5","6","7","8",
    "9","A","B","C","E","F","D","","","","","",]

    var hex_code = ""

    for(var i =0 ; i <6 ; i++){
        random_number = Math.floor(Math.random()
        * hex_numbers.length)

        hex_code += hex_numbers[random_number]
    }

    document.getElementById("span-colors").innerHTML = 
    hex_code

    document.getElementsByTagName("body")[0].style.backgroundColor = 
    "#" + hex_code


}