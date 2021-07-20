define({ 

 //Type your controller code here 
  
  onViewCreated:function(){
      this.view.init = this.init;
  },
  
  init: function(){
  this.view.preShow = this.preShow;
  this.view.btnSubmitColour.onClick = this.cliked;
  },
  
 
  
  cliked:function(){
    this.view.colourchange.inputColour = this.view.txtColourInput.text; 
    this.view.txtColourInput.text = "";
    
  },

  
  

 });