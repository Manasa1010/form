var canavs;
var form1;
var database;

function setup() {
    database=firebase.database();
    cavas=createCanvas(500,500);
    radio = createRadio();
  
  radio.option('no');
  radio.option('yes');
  radio.style('width', '100px');
  textAlign(CENTER);
  fill(255, 0, 0);
    
}


function draw() {
  form1=new Form ();

  form1.display();
  let val = radio.value();
  background(val);
  text(val, width / 2, height / 2);

}

