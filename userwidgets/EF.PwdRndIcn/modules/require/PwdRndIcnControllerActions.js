define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onBeginEditing defined for txtPassword **/
    AS_TextField_419acbd49b3e4575bf4413cdec9fc689: function AS_TextField_419acbd49b3e4575bf4413cdec9fc689(eventobject, changedtext) {
        var self = this;
        if (kony.theme.getCurrentTheme() != "default") {
            kony.theme.setCurrentTheme("default", function() {
                self.view.frmPwdName.skin = "CopyskPWDRFocus";
            }, null);
        } else {
            (function() {
                self.view.frmPwdName.skin = "CopyskPWDRFocus";
            })();
        }
    },
    /** onEndEditing defined for txtPassword **/
    AS_TextField_d34c001be4814a35ae26afceb8d33f8a: function AS_TextField_d34c001be4814a35ae26afceb8d33f8a(eventobject, changedtext) {
        var self = this;
        if (kony.theme.getCurrentTheme() != "default") {
            kony.theme.setCurrentTheme("default", function() {
                self.view.frmPwdName.skin = "CopyskPWDRNormal";
            }, null);
        } else {
            (function() {
                self.view.frmPwdName.skin = "CopyskPWDRNormal";
            })();
        }
        //Password validation Logic
        //Length as 6 to 16
        //Password has one capital Alpha, one smale alpha, one Numeric and one Special Character
        //Special Charactrs include !@#$%^&*_
        var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*_])[a-zA-Z0-9!@#$%^&*_]{6,16}$/;
        //Check if the field is empty then set the text to Normal else check for Validation
        if (/^\s*$/.test(this.view.frmPwdName.txtPassword.text)) {
            self.view.frmPwdName["skin"] = "skPWDRNormal"
            self.view.txtPassword["skin"] = "skUNIRN"
        } else {
            //Check if Password has all the required validations and set skin to Normal
            if (regularExpression.test(this.view.frmPwdName.txtPassword.text)) {
                self.view.frmPwdName["skin"] = "skPWDRNormal"
                self.view.txtPassword["skin"] = "skUNIRN"
            } else
            //Check if Password is failing any required validations and set skin to Red  
            {
                self.view.frmPwdName["skin"] = "skPWDRRed"
                self.view.txtPassword["skin"] = "skUNIRRed"
            }
        }
    },
    /** onBeginEditing defined for txtPassword **/
    AS_TextField_a7a650d505df492eb8e421e8e8e1111c: function AS_TextField_a7a650d505df492eb8e421e8e8e1111c(eventobject, changedtext) {
        var self = this;
        if (kony.theme.getCurrentTheme() != "default") {
            kony.theme.setCurrentTheme("default", function() {
                self.view.frmPwdName.skin = "CopyskPWDRFocus";
            }, null);
        } else {
            (function() {
                self.view.frmPwdName.skin = "CopyskPWDRFocus";
            })();
        }
    },
    /** onEndEditing defined for txtPassword **/
    AS_TextField_816c75ad01bc49b394482d0ee6b61e38: function AS_TextField_816c75ad01bc49b394482d0ee6b61e38(eventobject, changedtext) {
        var self = this;
        if (kony.theme.getCurrentTheme() != "default") {
            kony.theme.setCurrentTheme("default", function() {
                self.view.frmPwdName.skin = "CopyskPWDRNormal";
            }, null);
        } else {
            (function() {
                self.view.frmPwdName.skin = "CopyskPWDRNormal";
            })();
        }
    }
});