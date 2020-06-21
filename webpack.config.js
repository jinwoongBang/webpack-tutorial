// [1] 파일 경로를 지정
const path = require('path');
// [2] html 컴파일 플러그인
const HtmlWebPackPlugin = require('html-webpack-plugin');

// 출력할 모듈
module.exports = {
    // [entry] 컴파일 할 파일
    entry: './src/index.js',
    // [output] 컴파일 이후 결과 파일
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname + '/build')
    },
    // [mode] 개발, 배포, 테스트 등 환경 설정 분리
    mode: 'none',
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
                        options: { minimize: false }
                   }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './public/index.html', // 해당 위치의 html 파일을 읽어옴
            filename: 'index.html' // output 으로 출력할 파일
        })
    ]
}