var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var SRC_PATH = path.resolve(ROOT_PATH, 'src');
var DIST_PATH = path.resolve(ROOT_PATH, 'dist');

module.exports = {
    // 入口. 让 webpack 用哪个文件作为项目的入口
    // 可以直接用文件夹名称, 默认会找 index.js, 也可以确定是哪个文件名字
    entry: {
        app: './src/app.js'
    },
    // 出口. 让 webpack 把处理完成的文件放在哪里
    // 用一个数组 [name] 来代替, 它会根据 entry 的入口文件名称生成多个 js 文件
    output: {
        path: DIST_PATH,
        filename: '[name].js'
    },
    // enable dev source map
    devtool: 'source-map',
    // enable dev server
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        proxy: {
            '/api/*': {
                target: 'http://localhost:8080',
                secure: false
            }
        }
    },
    // 模块. 要用什么不同的模块来处理各种类型的文件
    module: {
        preLoaders: [{
            test: /\.(js|jsx)$/,
            include: SRC_PATH,
            loader: 'eslint-loader'
        }],
        loaders: [{
            test: /\.(js|jsx)$/,
            include: SRC_PATH,
            loader: 'babel',
            query: {
                presets: ['react', 'es2015']
            }
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap!postcss-loader')
        }, {
            test: /\.less$/,
            include: SRC_PATH,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap!postcss-loader!less-loader?sourceMap')
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url?limit=40000'
        }]
    },
    eslint: {
        configFile: './.eslintrc.json'
    },
    postcss: [autoprefixer],
    plugins: [
        // 当项目中引用次数超过 2 次的包自动打入 commons.js 中, 可自行根据需要进行调整优化
        new webpack.optimize.CommonsChunkPlugin({
            name: 'commons',
            filename: 'commons.js',
            minChunks: 2
        }),
        new ExtractTextPlugin('[name].css'),
        // 创建了一个 HtmlWebpackPlugin 实例, 生成一个页面, 可以创建多个页面
        // 参数 title --- 页面标题
        // 参数 filename --- 文件名称
        // 参数 template --- 模板路径
        // 参数 chunks --- 指定要引用 entry 里面的哪几个入口
        new HtmlwebpackPlugin({
            title: 'HUI Mobile',
            filename: 'index.html',
            template: 'index.html',
            chunks: ['commons', 'app']
        })
    ]
};
