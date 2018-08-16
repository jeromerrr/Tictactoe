function checkWin(array){
    for(let i =0; i<3;i++){
      if(array[i][0]&&(array[i][0]===array[i][1])&&(array[i][1]===array[i][2]))
      {
      return array[i][0]
      }
    }
    for(let i =0; i<3;i++){
      if(array[0][i]&&(array[0][i]===array[1][i])&&(array[1][i]===array[2][i])){
        return array[0][i]
      }
    }
    if(array[0][0]&&(array[0][0]===array[1][1])&&(array[1][1]===array[2][2])){
      return array[0][0]
    }
    if(array[2][0]&&(array[2][0]===array[1][1])&&(array[1][1]===array[0][2])){
      return array[2][0]
    }
    for(let i =0; i<3;i++){
      for(let j=0; j<3;j++){
        if(array[i][j]===""){
          return ""
        }
      }
    }
    return "full"
  }
  x=[["a",2,3],[1,"x",3],[1,2,"c"]]
  console.log(x);
  console.log(checkWin(x))
