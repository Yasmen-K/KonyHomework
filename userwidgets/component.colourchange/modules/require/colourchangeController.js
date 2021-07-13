define(function() {
  
  
   const colourSchem = {
    yellow:"flxYellow",
    red:"flxRed",
    blue:"flxBlue",
    green:"flxGreen",
    error:"flxError",
    
  };

 
  
  var change = function(){
//      let input = this.view.txtEnterColour.text;
   
     this.view.flxColourShower.skin =  colourSchem[this._inputColour]; 
    
    	if(!colourSchem[this._inputColour]){
          this.view.flxColourShower.skin = colourSchem.error;
            this.view.lblColourName.text = 'No such colour';
        }
    
  };
  
  

  
  

	return {
		constructor: function(baseConfig, layoutConfig, pspConfig) {
          this.view.btnChangeColour.onClick = change.bind(this);
//           this.view.txtEnterColour.onTextChange = showText.bind(this);
          this._inputColour = this.view.txtEnterColour.text;

		},
		//Logic for getters/setters of custom properties
		initGettersSetters: function() {

          defineGetter(this,'inputColour',function(){
            return this._inputColour;
          });
          
          defineSetter(this,"inputColour",function(value){
            
            if(this._inputColour === this){
              return;
            }else{
              this._inputColour = value;
            }
          });
          
		}
	};
});