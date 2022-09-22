var h1=document.createElement("h1");
h1.setAttribute("id","heading");
h1.innerHTML="PAGINATION";

var table=document.createElement("table");
table.setAttribute("id","table");

async function data(){
    var res=await fetch("https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json");
    var res1=await res.json();

    var div=document.createElement("div");
    div.setAttribute("id","buttons");

    var button1=document.createElement("button");
    button1.setAttribute("type","button");
    button1.setAttribute("class","button");
    button1.innerHTML="1";

    button1.onclick=()=>{
        buttons(1);
    }

    var button2=document.createElement("button");
    button2.setAttribute("type","button");
    button2.setAttribute("class","button");
    button2.innerHTML="2";

    button2.onclick=()=>{
        buttons(2);
    }

    var button3=document.createElement("button");
    button3.setAttribute("type","button");
    button3.setAttribute("class","button");
    button3.innerHTML="3";

    button3.onclick=()=>{
        buttons(3);
    }

    var button4=document.createElement("button");
    button4.setAttribute("type","button");
    button4.setAttribute("class","button");
    button4.innerHTML="4";

    button4.onclick=()=>{
        buttons(4);
    }

    var button5=document.createElement("button");
    button5.setAttribute("type","button");
    button5.setAttribute("class","button");
    button5.innerHTML="5";

    button5.onclick=()=>{
        buttons(5);
    }

    var button6=document.createElement("button");
    button6.setAttribute("type","button");
    button6.setAttribute("class","button");
    button6.innerHTML="6";

    button6.onclick=()=>{
        buttons(6);
    }

    var button7=document.createElement("button");
    button7.setAttribute("type","button");
    button7.setAttribute("class","button");
    button7.innerHTML="7";

    button7.onclick=()=>{
        buttons(7);
    }

    var button8=document.createElement("button");
    button8.setAttribute("type","button");
    button8.setAttribute("class","button");
    button8.innerHTML="8";

    button8.onclick=()=>{
        buttons(8);
    }

    var button9=document.createElement("button");
    button9.setAttribute("type","button");
    button9.setAttribute("class","button");
    button9.innerHTML="9";

    button9.onclick=()=>{
        buttons(9);
    }

    var button10=document.createElement("button");
    button10.setAttribute("type","button");
    button10.setAttribute("class","button");
    button10.innerHTML="10";

    button10.onclick=()=>{
        buttons(10);
    }
    
    div.append(button1,button2,button3,button4,button5,button6,button7,button8,button9,button10)
    document.body.append(h1,table,div);
    document.body.style.backgroundColor="cyan";

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

    
    // function create_button(){
    //     for(var i=1;i<=10;i++){
    //         var button=document.createElement("button");
    //         button.setAttribute("type","button");
    //         // button.setAttribute("id",`button${i}`);
    //         button.innerHTML=i;

    //         document.body.append(button);

    //         button.onclick=()=>{
    //             var b=10;
    //             var k=document.getElementsByTagName("button");
    //             console.log(k);
    //             for(var x=(k-1)*10;x<(b*k);x++){
    //                 console.log(x);
    //             }
    //         }
    //     }
}

data();


