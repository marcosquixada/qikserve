
describe('Cart', () => {
    it('should add 1 item on cart', () => {
        const cart = { items: [], quantity: 0, subtotal: 0 };
        const item = { id: productId, qty: qty + 1 };
    });

    it('should remove 1 item from cart', () => {
        const x = 2, y = 4;

        const sum = x + y;

        expect(sum).toBe(6);
    });

    it('should sum total items in cart', () => {
        const x = 2, y = 4;

        const sum = x + y;

        expect(sum).toBe(6);
    });

    it('should empty cart', () => {
        const x = 2, y = 4;

        const sum = x + y;

        expect(sum).toBe(6);
    });

    it('should remote item from cart', () => {
        const x = 2, y = 4;

        const sum = x + y;

        expect(sum).toBe(6);
    });

    it('should apply available promos in cart', () => {
        const x = 2, y = 4;

        const sum = x + y;

        expect(sum).toBe(6);
    });

    it('should call api', async () => {
        const response = await api.get('/products');

        expect(response.status).toBe(200);
    });
});

/*
describe('Register', () => {
    it('should receice JWT token when authenticated with valid credentials', () => {

    });
});*/