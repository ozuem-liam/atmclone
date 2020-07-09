// menu bar to lead to the logging in of password

let all_ps = document.getElementsByTagName('p');

let copyAllPs = [];
for (let i=0; i < all_ps.length; i++) {
    copyAllPs.push(all_ps[i].classList[1]);
}

function withdrawalTextChange() {
   
    //remove all existing options
    document.getElementById('left-1').remove();
    document.getElementById('left-2').remove();
    document.getElementById('left-3').remove();
    document.getElementById('left-4').remove();
    document.getElementById('right-1').remove();
    document.getElementById('right-4').remove();

    document.getElementById('header').innerHTML = "Account Type"
    document.getElementById('right-2').innerHTML = "Savings";
    document.getElementById('right-3').innerHTML = "Current";
};

function depositTextChange() {
    document.getElementById('right-2').remove();
    document.getElementById('right-3').remove();

    let para1 = document.createElement('p');
    let node1 = document.createTextNode("N500");
    para1.appendChild(node1);

    let element1 = document.getElementById('div1');
    element1.appendChild(para1);

    let para2 = document.createElement('p');
    let node2 = document.createTextNode("N1000");
    para2.appendChild(node2);

    let element2 = document.getElementById('div2');
    element2.appendChild(para2);

    let para3 = document.createElement('p');
    let node3 = document.createTextNode("N2000");
    para3.appendChild(node3);

    let element3 = document.getElementById('div3');
    element3.appendChild(para3);

    let para4 = document.createElement('p');
    let node4 = document.createTextNode("N5000");
    para4.appendChild(node4);

    let element4 = document.getElementById('div4');
    element4.appendChild(para4);

    let para5 = document.createElement('p');
    let node5 = document.createTextNode("N10000");
    para5.appendChild(node5);

    let element5 = document.getElementById('div5');
    element5.appendChild(para5);

    let para6 = document.createElement('p');
    let node6 = document.createTextNode("N15000");
    para6.appendChild(node6);

    let element6 = document.getElementById('div6');
    element6.appendChild(para6);

    let para7 = document.createElement('p');
    let node7 = document.createTextNode("N20000");
    para7.appendChild(node7);

    let element7 = document.getElementById('div7');
    element7.appendChild(para7);

    let para8 = document.createElement('p');
    let node8 = document.createTextNode("Other");
    para8.appendChild(node8);

    let element8 = document.getElementById('div8');
    element8.appendChild(para8);
}