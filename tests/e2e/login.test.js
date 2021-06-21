import { t } from 'testcafe'
import loginPage from '../e2e/pageObjects/login.po'
import config from '../../config'
import data from '../e2e/dataProvider/data'

fixture`Login`
    .page(config.stage.url)

test('login with invalid credentials', async () => {
    await loginPage.login(data.invalidUser, data.invalidPassword)
    const isErrorMessageVisible = await loginPage.errorMessage.visible
    const errorMessageText = await loginPage.errorMessage.innerText
    await t
        .expect(isErrorMessageVisible)
        .ok('Error message was not displayed.')
        .expect(errorMessageText)
        .eql(data.errorMessage, 'Wrong error message!')
})