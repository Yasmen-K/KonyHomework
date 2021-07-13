define({ 

 //Type your controller code here 
  
  init: function(){
  this.view.preShow = this.preShow;
  },
  
  preShow: function(){
    this.view.btnChangeColour = this.change;
  },

  
  change: function(){
    this.view.colourchange.btnChangeColour._inputColour = this.view.txtEnterColour.txt;
    alert(this.view.txtEnterColour.txt);
  },

 });