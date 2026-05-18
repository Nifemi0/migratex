import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                artists: resolve(__dirname, 'artists.html'),
                portfolio: resolve(__dirname, 'portfolio.html'),
                booking: resolve(__dirname, 'booking.html'),
                location: resolve(__dirname, 'location.html'),
                chris: resolve(__dirname, 'artists/chris-young.html'),
                mrinkcredible: resolve(__dirname, 'artists/mr-inkcredible.html'),
                sebastien: resolve(__dirname, 'artists/sebastien-crooks.html'),
                tessa: resolve(__dirname, 'artists/tessa.html'),
                error: resolve(__dirname, '404.html'),
            },
        },
    },
});
