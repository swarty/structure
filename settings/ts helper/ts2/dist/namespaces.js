"use strict";
var nForm;
(function (nForm) {
    class MyForm {
        constructor(email) {
            this.email = email;
            this.type = 'inline';
            this.state = 'active';
        }
        getInfo() {
            return {
                type: this.type,
                state: this.state
            };
        }
    }
    const myForm = new MyForm('lol@example.com');
    console.log(myForm);
})(nForm || (nForm = {}));
//# sourceMappingURL=namespaces.js.map