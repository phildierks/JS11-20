function firstLast6(integers){
    if(integers[0]== 6 || integers[integers.length-1]== 6){
        return true;
    }else{
        return false;
    }
}

function has23(nums) {
    if(nums[0] == 2 || nums[0] == 3 || nums[1] == 3 || nums[1] == 2 ){
        return true;
    }else{
        return false;
    }
}

function fix23(array){
    var another = array;
    for(var i = 0; i < array.length; i++){
        if(array[i] == 2 && array[1+i] == 3){
            another[1+i] = 0
        }
    }
    return another;
}

function countYZ(words){
    var sum= 0;
    words = words.toLowerCase();
    for(var i= 0; i< words.length; i++){
        if(words[i] == " " && (words[i-1] == 'z' || words[i-1] == 'y')) {
           sum++
        }
    }
    if(words[words.length-1] == 'y' || words[words.length-1] == 'z'){
        sum++
    }
    return sum;
}

function endOther(fir, sec){
  fir = fir.toLowerCase();
  sec = sec.toLowerCase();
  var shorter;
  var longer;
  if(fir.length == sec.length){
      return (fir == sec);
  }else if (fir.length < sec.length){
     shorter = fir;
     longer = sec;
  }else{
      shorter = sec;
      longer = fir;
  }
  var end = longer.substring(longer.length - shorter.length);
  return (shorter == end);
}
function starOut(string){
    var output = '';
    for(var i = 0; i < string.length; i++){
        if(string[i] !== "*" && string[i-1] !== "*" && string[i+1] !== "*"){
            output += string[i];
        }
    }
    return output;
}
function getSandwich(pieces){
    var numbreads = pieces.match(/bread/g);
    if(numbreads >= "bread,bread"){
        var firstBread = pieces.search("bread") + 5;
        var lastBread = pieces.lastIndexOf("bread");
        return pieces.substring(firstBread,lastBread);
    }
    return "";
}



function canBalance(ints) {
    var sum = 0;
    var sum2 = 0;
    for (var i = 0; i < ints.length; i++) {
        sum += ints[i];
        sum2=0;
        for(var a = i+1; a < ints.length; a++) {
           sum2 += ints[a];

        }
        if(sum == sum2){
            return true;
            sum2 = 0;

        }
    }
    return false;

}

function countClumps(nums){
    var sum= 0;
    for(var i= 0; i<nums.length;i++){
        if(nums[i] == nums[i-1] && nums[i]!== nums[i-2]){
            sum+=1
    }

    }
    return sum;
}

function evenlySpaced(a,b,c){

    if(b-a == c-b ||  c-a == a-b || a-c == c-b){
        return true;
    }
    return false;
}
function tester() {

    document.getElementById("output").innerHTML = starOut("ab*cd");

}
