define({ 
  
 segDataList: [
    {name: "Ivan Minchev",
     phone: "0888010203",
     dateAdded: "25/06/2021"},
    {name: "Denica Stoeva",
     phone: "0888040253",
     dateAdded: "25/06/2021"},
    {name: "Magazin za mebeli",
     phone: "0888123456",
     dateAdded: "25/06/2021"},
    {name: "Ivan Minchev",
     phone: "0888010203",
     dateAdded: "25/06/2021"},
    {name: "Denica Stoeva",
     phone: "0888040253",
     dateAdded: "25/06/2021"},
    {name: "Magazin za mebeli",
     phone: "0888123456",
     dateAdded: "25/06/2021"},
    {name: "Ivan Minchev",
     phone: "0888010203",
     dateAdded: "25/06/2021"},
    {name: "Denica Stoeva",
     phone: "0888040253",
     dateAdded: "25/06/2021"},
    {name: "Magazin za mebeli",
     phone: "0888123456",
     dateAdded: "25/06/2021"},
    {name: "Ivan Minchev",
     phone: "0888010203",
     dateAdded: "25/06/2021"},
    {name: "Denica Stoeva",
     phone: "0888040253",
     dateAdded: "25/06/2021"},
    {name: "Magazin za mebeli",
     phone: "0888123456",
     dateAdded: "25/06/2021"},
    {name: "Ivan Minchev",
     phone: "0888010203",
     dateAdded: "25/06/2021"},
    {name: "Denica Stoeva",
     phone: "0888040253",
     dateAdded: "25/06/2021"},
    {name: "Magazin za mebeli",
     phone: "0888123456",
     dateAdded: "25/06/2021"},
  ],
  
  formatedData: [],
  
  onViewCreated: function() {
    this.view.init = this.init;
    this.view.preShow = this.preShow;
 
  },
  
  
  init: function() {
    this.formatedSegmentData.call(this,this.segDataList,this.formatedData);
  	this.view.segContacts.onRowClick = this.RowClick;
    this.view.btnfrmText.onClick = this.click;
   
  },
  
  preShow: function() {
    this.view.segContacts.setData(this.formatedData);
  },
  
  
  formatedSegmentData: function(responseData,fomratedData) {
    var scope = this;
    responseData.forEach(function(contact) {
      fomratedData.push({
        "lblName": {"text": contact.name ? contact.name : "N/A"},
        "lblPhone": {"text": contact.phone},
      });
    });
  },
  
  RowClick: function(){
  
    
    let row = this.view.segContacts.selectedRowItems;
    let nav = new kony.mvc.Navigation('ContactScreen');
    nav.navigate(row);
    
    
  },
  
  click:function(){
    let nav = new kony.mvc.Navigation('frmColourBox');
    nav.navigate();
  }



  
  

 });