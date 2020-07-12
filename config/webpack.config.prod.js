// [1] 파일 경로를 지정
const path = require('path');
// [2] html 컴파일 플러그인
const HtmlWebPackPlugin = require('html-webpack-plugin');
// [3] 웹팩에서 css 파일을 읽은 후 어디에 저장할 것인지 결정하는 플러그인
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// [4] 사용 안하는 파일을 자동으로 삭제해주는 플러그인
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// 출력할 모듈
module.exports = {
    // [entry] 컴파일 할 파일
    entry: './src/index.js',
    // [output] 컴파일 이후 결과 파일
    output: {
        filename: 'bundle.[contenthash].js',
        path: path.resolve(__dirname, '../build'),
    },
    // [mode] 개발, 배포, 테스트 등 환경 설정 분리
    mode: 'production',
    // [module] 모듈의 컴파일 형식
    module: {
        rules: [
            // [바벨 로더]
            {
                test: /\.(js|jsx)/,
                exclude: '/node_modules',
                use: ['babel-loader'],
            },
            // [html 로더]
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: { minimize: false },
                    },
                ],
            },
            // [css 로더]
            {
                test: /\.css$/,
                // use 에서 사용되는 load 는 오른쪽 > 왼쪽 순서로 실행
                // css-loader 로 css 를 읽고 MniCssExtractPlugin.loader로 파일로 추출
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            // [scss 로더]
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './public/index.html', // 해당 위치의 html 파일을 읽어옴
            filename: 'index.html', // output 으로 출력할 파일
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: ['build'],
        }),
    ],
};
