var wrapperEle = document.body.querySelector("wrapper");
var list = [
  {
    name: "Harry",
    age: 25
  },
  {
    name: "Larry",
    age: 15
  },
  {
    name: "Bert",
    age: 45
  },
  {
    name: "Jerry",
    age: 35
  },
  {
    name: "Berry",
    age: 5
  },
  {
    name: "Bart",
    age: 55
  }
];
for(var i=0; i<list.length; i++){
  if(list[i].age<40.){
document.getElementById("personEle").style.color = "red";
}
}
var button = document.getElementById("clickme"),
  count = 0;
button.onclick = function() {
  count += 1;
  button.innerHTML = "Click me: " + count;
};