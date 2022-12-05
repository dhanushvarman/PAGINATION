var h1=document.createElement("h1");
h1.setAttribute("id","heading");
h1.innerHTML="PAGINATION";

var table=document.createElement("table");
table.setAttribute("id","table");
table.style.marginLeft = "400px";

async function data(){
    var res=await fetch("https://638adcb87220b45d2283a9d5.mockapi.io/dontchangeit");
    var res1=await res.json();

    console.log(res1)
    var div=document.createElement("div");
    div.setAttribute("id","buttons");
    div.style.marginLeft = "500px";

    var button1=document.createElement("button");
    button1.setAttribute("type","button");
    button1.style.marginRight="5px";
    button1.setAttribute("class","btn btn-primary");
    button1.innerHTML="1";

    button1.onclick=()=>{
        buttons(1);
    }

    var button2=document.createElement("button");
    button2.setAttribute("type","button");
    button2.style.marginRight="5px";
    button2.setAttribute("class","btn btn-primary");
    button2.innerHTML="2";

    button2.onclick=()=>{
        buttons(2);
    }

    var button3=document.createElement("button");
    button3.setAttribute("type","button");
    button3.style.marginRight="5px";
    button3.setAttribute("class","btn btn-primary");
    button3.innerHTML="3";

    button3.onclick=()=>{
        buttons(3);
    }

    var button4=document.createElement("button");
    button4.setAttribute("type","button");
    button4.style.marginRight="5px";
    button4.setAttribute("class","btn btn-primary");
    button4.innerHTML="4";

    button4.onclick=()=>{
        buttons(4);
    }

    var button5=document.createElement("button");
    button5.setAttribute("type","button");
    button5.style.marginRight="5px";
    button5.setAttribute("class","btn btn-primary");
    button5.innerHTML="5";

    button5.onclick=()=>{
        buttons(5);
    }

    var button6=document.createElement("button");
    button6.setAttribute("type","button");
    button6.style.marginRight="5px";
    button6.setAttribute("class","btn btn-primary");
    button6.innerHTML="6";

    button6.onclick=()=>{
        buttons(6);
    }

    var button7=document.createElement("button");
    button7.setAttribute("type","button");
    button7.style.marginRight="5px";
    button7.setAttribute("class","btn btn-primary");
    button7.innerHTML="7";

    button7.onclick=()=>{
        buttons(7);
    }

    var button8=document.createElement("button");
    button8.setAttribute("type","button");
    button8.style.marginRight="5px";
    button8.setAttribute("class","btn btn-primary");
    button8.innerHTML="8";

    button8.onclick=()=>{
        buttons(8);
    }

    var button9=document.createElement("button");
    button9.setAttribute("type","button");
    button9.style.marginRight="5px";
    button9.setAttribute("class","btn btn-primary");
    button9.innerHTML="9";

    button9.onclick=()=>{
        buttons(9);
    }

    var button10=document.createElement("button");
    button10.setAttribute("type","button");
    button10.style.marginRight="5px";
    button10.setAttribute("class","btn btn-primary");
    button10.innerHTML="10";

    button10.onclick=()=>{
        buttons(10);
    }
    
    div.append(button1,button2,button3,button4,button5,button6,button7,button8,button9,button10)
    document.body.append(h1,table,div);
    document.body.style.backgroundColor="whitesmoke";

    function buttons(x){
        var data=document.getElementById("table");
        data.innerHTML="";
        data.innerHTML=`
        <tr style="color: blue;">
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
        </tr>`;
        var b=10;
        for(var i=(x-1)*10;i<(b*x);i++){
            var data=document.getElementById("table");
            data.innerHTML+=`
            <tr>
                <td>${res1[i].id}</td>
                <td>${res1[i].name}</td>
                <td>${res1[i].email}</td>
            </tr>`;
        }
    }
    buttons(1);
}

data();


