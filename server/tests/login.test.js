const authenticateHandler = require('../models/handlers/authenticate');

describe('testing user validation functionality', () => {
    beforeEach(() => {
        jest.resetModules();
    });

    test('initial setup of user validation flow', async() => {
        // Arrange
        const email = 'johndoe@gmail.com';
        const password = 'a1234';

        // Act
        const isValid = await authenticateHandler.isUserCredentialsValid(email, password);

        // Assert
        expect(isValid).toBe(true);
    })

})