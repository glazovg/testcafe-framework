import { Selector, t } from 'testcafe'

class Login {
    emailField = Selector('#email')
    passwordField = Selector('#password')
    loginButton = Selector('.submit_btn')
    errorMessage = Selector('.error_msg')

    async login(user, password) {
        await t
            .typeText(this.emailField, user)
            .typeText(this.passwordField, password)
            .click(this.loginButton)
    }
}

export default Login = new Login()