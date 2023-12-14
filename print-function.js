var names = ["David", "Sarah", "James", "Sonia", "Simeon"];
let loop = names.length;
let text = "";
for (let i = 0; i < names.length; i++) {
  text += names[i] + "<br>";
}
names.forEach(function(names) {
    console.log(names);
});