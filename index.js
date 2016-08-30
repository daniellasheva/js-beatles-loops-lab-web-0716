  function theBeatlesPlay(musicians, instruments){
      var array= [];

      for (var i=0; i<musicians.length; i++){
        var string= `${musicians[i]} plays ${instruments[i]}`
        array.push(string);
      }
      return array;
  }

  function johnLennonFacts (facts){
    var array= [];
    var i=0;
    while (i<facts.length){
      var string = `${facts[i]}!!!`
      array.push(string);
      i++;
    }
    return array;
  }

  function iLoveTheBeatles(number) {
    if (number<15)  {
      var array=[];
      var i=0;
      do {
      array.push("I love the Beatles!");
      i++;
    }
      while (i<number+1);
      return array;
    }
    else {
      return "I love the Beatles!"
    }
  }
