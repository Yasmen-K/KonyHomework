define(function() {
  
  
   var colourSchem = {
    yellow:"flxYellow",
    red:"flxRed",
    blue:"flxBlue",
    green:"flxGreen",
    error:"flxError",
    netural:"flxNetural",
  };

  var change = function(){    
    	if(!colourSchem[this._inputColour]){
          this.view.flxColourShower.skin = colourSchem.error;
          this.view.lblColourName.text = 'No such colour';
          return;
        }
   
     this.view.flxColourShower.skin =  colourSchem[this._inputColour]; 
     this.view.lblColourName.text = this._inputColour;
    
  };
  
	return {
		constructor: function(baseConfig, layoutConfig, pspConfig) {
          this._inputColour = "netural";
		},
		//Logic for getters/setters of custom properties
		initGettersSetters: function() {
          defineGetter(this,'inputColour',function(){
            return this._inputColour;
          });
          
          defineSetter(this,"inputColour",function(value){
            if(value){
               this._inputColour = value;
               change.call(this);
              return;
            }
            this._inputColour = "netural";
            return this._inputColour;
          });
          
		}
	};
});