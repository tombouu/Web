const userr = document.getElementById('user');
const text = document.getElementById('text');
const exit_button = document.getElementById('escape');
const minim_button = document.getElementById('minim');
const down_button = document.getElementById('down');
const terminal = document.getElementById('termi');
const type = document.getElementById('type');
const button = document.querySelectorAll(".top-button");
const container2 = document.getElementById('container2');

let exit_value = 0;
let minim_value = 0;


let dir = ['total 240<br>drwxr-xr-x  1 root root   4096 Oct 14 10:28 <span style="color : blue;">bin</span><br>drwxr-xr-x  1 root root   4096 Apr 14 07:35 <span style="color : blue;">bin</span><br>\
drwxr-xr-x  1 root root   605976 Oct 14 10:07 <span style="color : blue;">bin</span><br>drwxr-xr-x  1 root root   4096 Oct 14 10:28 <span style="color : blue;">bin</span><br>\
drwxr-xr-x  1 root root   4096 Oct 14 10:28 <span style="color : black; background-color: green;">tmp</span><br>'];

function addDir(name) {
    dir+= 'drwxr-xr-x  1 root root  4096 Oct 14 10:28 <span style="color : blue;">'+name+'</span><br>';
    return 'mkdir '+name+'<br>';
}

function user() {
    return '<span style="color: green;">Tom@Desktop:~$</span>';
}

function ls() {
    return 'ls -l <br>';
}

new Typewriter(userr, {
    delay: 0,
    cursor: "",
})
.pasteString(user())

.start();


new Typewriter(text, {
    delay: 100,
    loop: true,
})
.pauseFor(1000)
.typeString(' We are under maintenance :\\')
.pauseFor(3000)
.deleteChars(28)
.start();

//On click

minim_button.onclick = function(){
    
    if (minim_value == 0) {
        minim_value = 1;
        terminal.style.width = '50%';
        terminal.style.height = '50%';
        terminal.style.margin = '5% 25% 0';

        for (let i = 0; i < button.length; i++) {
            button[i].style.width = '2%';
        }
        $( "#termi" ).draggable();
    }
    else{
        minim_value = 0;
        //$( "#termi" ).draggable( "disable" );
        $( "#termi" ).draggable( "destroy" );
        terminal.style.width = '100%';
        terminal.style.height = '100%';
        terminal.style.margin = '0 0 0';
        terminal.style.position = 'relative';
        
        for (let i = 0; i < button.length; i++) {
            button[i].style.width = '1%';
        }
    }
};

exit_button.onclick = function(){
    
    if (exit_value == 0) {
        alert("Why you want to leave ?");
    }
    else{
        
    }
};

let a = false;

// always checking if the element is clicked, if so, do alert('hello')
type.addEventListener("click", () => {
	a = true;
});


type.addEventListener('keydown', (enter) => {
    if (!enter.repeat){
        console.log("sexe");
    }
      
  });

// La div ne reviens pas a la position initial quand elle regrandi



    console.log("left :" + terminal.offsetLeft);
    console.log("Top :" + terminal.offsetTop);

//