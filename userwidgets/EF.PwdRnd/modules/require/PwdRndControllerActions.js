define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onEndEditing defined for txtPassword **/
    AS_TextField_8d2c7ce508da4f0db430715198ebddcc: function AS_TextField_8d2c7ce508da4f0db430715198ebddcc(eventobject, changedtext) {
        var self = this;
        //Password validation Logic
        //Length as 6 to 16
        //Password has one  alpha, one Numeric and one Special Character
        //Special Charactrs include !@#$%^&*_
        var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*_])[a-zA-Z0-9!@#$%^&*_]{6,16}$/;
        //Check if the field is empty then set the text to Normal else check for Validation
        if (/^\s*$/.test(this.view.txtPassword.text)) {
            self.view.txtPassword["skin"] = "txtPasswordRoundedN"
        } else {
            //Check if Password has all the required validations and set skin to Normal
            if (regularExpression.test(this.view.txtPassword.text)) {
                self.view.txtPassword["skin"] = "txtPasswordRoundedN"
            } else
            //Check if Password is failing any required validations and set skin to Red  
            {
                self.view.txtPassword["skin"] = "txtPasswordRoundedRed"
            }
        }
    },
    /** onEndEditing defined for txtPassword **/
    AS_TextField_444ad3f2bc9645f8bdc4fbe70ad7f8c3: function AS_TextField_444ad3f2bc9645f8bdc4fbe70ad7f8c3(eventobject, changedtext) {
        var self = this;
        //Password validation Logic
        //Length as 6 to 16
        //Password has one  alpha, one Numeric and one Special Character
        //Special Charactrs include !@#$%^&*_
        var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*_])[a-zA-Z0-9!@#$%^&*_]{6,16}$/;
        //Check if the field is empty then set the text to Normal else check for Validation
        if (/^\s*$/.test(this.view.txtPasswordSline.text)) {
            self.view.txtPassword["skin"] = "txtPasswordSquare"
        } else {
            //Check if Password has all the required validations and set skin to Normal
            if (regularExpression.test(this.view.txtPasswordSline.text)) {
                self.view.txtPassword["skin"] = "txtPasswordSquare"
            } else
            //Check if Password is failing any required validations and set skin to Red  
            {
                self.view.txtPassword["skin"] = "txtPasswordSquareRed"
            }
        }
    }
});