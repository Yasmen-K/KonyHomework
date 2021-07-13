define({ 

 //Type your controller code here 
 
 
onViewCreated: function(){
  this.view.init = this.init;
  this.view.preShow = this.preShow;
},
  
  init:function(){
    this.view.btnContacts.onClick = this.navToSegments;
  },
  

  onNavigate: function(context) {
        this.context = context;
    
    	
    alert(JSON.stringify(context));
    	if(context){
          this.view.lblName.text = context[0].lblName.text;
        }
          
        },
  
  navToSegments:function(){
    let nav = new kony.mvc.Navigation('ListsScreen');
    nav.navigate();
  }
    	

       	
    

  

 });