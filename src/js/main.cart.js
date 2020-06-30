require.config({
    paths: {
        jquery: './jquery.min',
        shopcar: './lib/cart',
        cookie: './cookie'
    }
});

require(['cart'], function(cart) {
    cart.render();
})