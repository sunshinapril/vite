import path from 'path';
console.log('vite-config.js')
module.exports = {
    alias: {
        '/@/': path.resolve(__dirname, './src'),
    },
}