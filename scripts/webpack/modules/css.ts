// Core
import { Configuration } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
// import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import path from 'path';
import glob from 'glob';

const loadCss = ({ sourceMap }: { sourceMap: boolean }) => ({
    loader:  'css-loader',
    options: {
        sourceMap,
    },
});

const loadSass = ({ sourceMap }: { sourceMap: boolean }) => ({
    loader:  'sass-loader',
    options: {
        sourceMap,
        sassOptions: {
            outputStyle: 'compressed', // ??
        },
    },
});

export const loadDevCss = (): Configuration => ({
    module: {
        rules: [
            {
                test: /\.css|.scss|.sass$/,
                use:  [
                    'style-loader',
                    loadCss({ sourceMap: false }),
                    'resolve-url-loader',
                    loadSass({ sourceMap: true }),
                ],
            },
        ],
    },
});

export const loadProdCss = (): Configuration => {
    let newEntry = {};

    const optionsGlob = {};

    glob.sync('**/*.scss', optionsGlob).forEach((pathFile) => {
        const scriptName = path.parse(pathFile).name;
        const folder = pathFile.split('/').at(-2);
        newEntry = {
            ...newEntry,
            [ `${folder}/${scriptName}` ]: `./${pathFile}`,
        };
    });

    return {
        entry:  newEntry,
        module: {
            rules: [
                {
                    test: /\.css|.scss|.sass$/,
                    use:  [
                        MiniCssExtractPlugin.loader,
                        loadCss({ sourceMap: false }),
                        'resolve-url-loader',
                        loadSass({ sourceMap: true }),
                    ],
                },
            ],
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename:    'css/[name].[contenthash:3].css',
                ignoreOrder: true,
            }),
        ],
    };
};
