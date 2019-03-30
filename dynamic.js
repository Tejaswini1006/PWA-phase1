function loadJson(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json")
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState === 4 && xhr.status =="200"){
      callback(xhr.responseText);
    }
  }
  xhr.send(null);
}

loadJson("dynamic.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
  Profile(data.Profile);
  Career(data.Career);
  education(data.education);
  Skills(data.Skills);
}
)

var left=document.querySelector(".left");
function Profile(p){
  var image=document.createElement("img");
  image.src=p.image;
  left.append(image);

  var name=document.createElement("name");
  name.textContent=p.name;
  left.append(name);

  var desig=document.createElement("desig");
  desig.textContent=p.desig;
  left.append(desig);

  var email=document.createElement("email");
  email.textContent=p.email;
  left.append(email);

  var mobile=document.createElement("mobile");
  mobile.textContent=p.mobile;
  left.append(mobile);
}
var right=document.querySelector(".right");
function Career(ca){
  var h1=document.createElement("h1");
  h1.textContent="Carrer Objective";
  right.append(h1);

  var hr=document.createElement("hr");
  right.append(hr);

  var p=document.createElement("p");
  p.textContent=p.info;
  right.append(p);
}
function education(edu){
  var h1=document.createElement("h1");
  h1.textContent="Education details";
  right.append(h1);

  var hr=document.createElement("hr");
  right.append(hr);

  var table=document.createElement("table");
//  table.border="2";
right.append(table);

  var tr1="<tr><th>sno</th><th>Qualification</th><th>NameoftheInstitution</th><th>Percentage</th><th>yearofpassing</th></tr>";
  var tr2=" ";
  for(var i=0;i<edu.length;i++)
  {
  tr2=tr2+"<tr><td>"+edu[i].sno+"</td><td>"+edu[i].Qualification+"</td><td>"+edu[i].NameoftheInstitution+"</td><td>"+edu[i].Percentage+"</td><td>"+edu[i].yearofpassing+"</td></tr>";
}
table.innerHTML=tr1+tr2;
  right.append(table);
}

  function Skills(s){
    var rr=document.createElement("h2");
    rr.textContent="Skills get";
    right.append(rr);
    var ul=document.createElement("ul");
    for(var i in s){
      var li=document.createElement("li");
      li.innerHTML=s[i].name+":"+s[i].info;
      ul.append(li);
    }
    right.append(ul);
}
