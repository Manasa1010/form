class Form{
    constructor(){
        this.Q1=createElement("h2");
       this.Q2=createElement("h2");
       this.Q3=createElement("h2");
       this.Q4=createElement("h2");
       this.Q5=createElement("h2");
       this.radio = createRadio();
    }
   

    display(){
        var title = createElement("h2");
        title.html("Changes that you wish")
        title.position(displayWidth/2-50,50);


       this.Q1.html("1:Do you think our school should increase our free time ?");
      this.Q1.position(100,200);
      this.radio.option('no');
      this.radio.option('yes');
     
      //this. radio.style('width', '100px');
      //let val = this.radio.value();
    //background(val);
      //text(val, width / 2, height / 2);

      //textAlign(CENTER);
      //fill(255, 0, 0);

      this.Q2.html("2:Do you thing ou school should increase our lunch time  ?");
      this.Q2.position(100,300);
      
      this.Q3.html("3: Do you think our school should organise dance compition every year? ");
      this.Q3.position(100,400);

      this.Q4.html("4:Do you think our school should take us to camp out of Banglore ?");
      this.Q4.position(100,500);

      this.Q5.html("5: Do you want our school to take tutions for 10th  ?");
      this.Q5.position(100,600);
      
        
    }
}