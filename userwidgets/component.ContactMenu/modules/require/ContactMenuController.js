define(function() {

  
  var clickMessage = function(){
    alert('Message');
  };
  
  var clickCall = function(){
    alert('Call');
  };
  
  var clickFaceTime = function(){
    alert('Face Time');
  };
  
  var clickMail = function(){
    alert('Mail');
  };
  
  var clickPay = function(){
    alert('Pay');
  };
  
  
	return {
	constructor:function(){
      this.view.messageContainer.onClick = clickMessage;
      this.view.callContainer.onClick = clickCall;
      this.view.faceTimeContainer.onClick = clickFaceTime;
      this.view.mailContainer.onClick = clickMail;
      this.view.payContainer.onClick = clickPay;
    },
	};
});