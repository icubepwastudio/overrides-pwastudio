/**
 * Mappings for overwrites
 * example: [`@magento/venia-ui/lib/components/Main/main.js`]: './lib/components/Main/main.js'
 */

const root = '../../../src';

module.exports = componentOverride = {
    [`${root}/components/Home/Banner/Banner.js`]: './components/Banner/Banner.js',
    [`@magento/venia-ui/lib/components/Footer/footer.css`]: './components/Footer/footer.css'
};
