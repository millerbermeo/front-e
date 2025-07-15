/** @type {import('tailwindcss').Config} */

// tailwind.config.js
module.exports = {
    content: [`./src/**/*.{js,ts,jsx,tsx}`],
    theme: {
        extend: {
            colors: {
                main: '#1E88E5',
                second: '#FB8C00',
                fondo: '#F5F5F5',
                action: '#43A047',
                text: '#212121',
            },
        },
    },

};
