var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer'); // 自动补全css3前缀
var CopyWebpackPlugin = require("copy-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin"); // 提取样式插件
var HtmlWebpackPlugin = require('html-webpack-plugin'); // 自动生成html插件
var SwigWebpackPlugin = require('swig-webpack-plugin'); // 生成一个HTML文件或者提供自己的模板(使用swig)
var ImageminPlugin = require('imagemin-webpack-plugin').default;
var CleanPlugin = require('clean-webpack-plugin');

const PUBLIC_PATH = './';

module.exports = {
    entry: { // 多页面应用，页面入口文件配置
        index: ['./src/js/index.js']
    },
    devtool: 'source-map',
    output: { // 文件输出配置
        path: path.resolve(__dirname, 'prod'), // 输出文件的路径
        publicPath: PUBLIC_PATH,
        filename: 'js/[name].[chunkhash:8].js' //http://www.cnblogs.com/ihardcoder/p/5623411.html
    },
    module: { // 加载器配置
        rules: [ // loaders => rules
            {
                test: /\.(tpl|html)$/,
                use: 'html-loader', // apply multiple loaders and options
            },
            {
                // 可把options里的内容添加到loader之后 loader:'babel-loader?'+ JSON.stringify({ presets: ['es2015'] })
                // 减少构建搜索或编译路径。提高打包速度
                exclude: path.resolve(__dirname, 'node_modules'),// 使用绝对路径
                include: path.resolve(__dirname, 'src'),
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader', // babel-loader语法转换很耗时  // 如果含有options配置项用use报错
                    // query:{ 典型的 options 被称为 query，是一个可以被添加到 loader 名之后的字符串
                    // options: { // query => options
                    //     // cacheDirectory:'./webpack_cache/',
                    //     presets: ['es2015'] // 安装插件babel-preset-es2015，也可在package.json中指定
                    // }
                }]
            },
            {
                test: /\.(css|scss)$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader?minimize", "sass-loader", "postcss-loader"]
                })
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                use: ['url-loader?limit=8000&name=images/[name].[ext]'],
            },
            {
                test: /\.(svg|woff|ttf|eot)$/i,
                use: [
                    'file-loader?name=font/[name].[ext]'
                ]
            }
        ]
    },
    externals: {
        'vue': 'Vue', // 缩小360多kb 11249行 =》200行
        'vue-router': 'VueRouter',
    },
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    },
    plugins: [ // 共享所有chunk
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html',
            inject: true, //所有JavaScript资源插入到body元素的底部
            chunks: ['index','common'],
        }),
        // new HtmlWebpackPlugin({
        //     filename: 'app.html',
        //     template: 'src/app.html',
        //     inject: true,
        //     chunks: ['app','common'],
        // }),
        new CleanPlugin(['prod']),

        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, 'dev/dep'),
                to: path.resolve(__dirname, 'prod/dep'),
            }
        ]),
        new ExtractTextPlugin({filename: 'css/[name].[chunkhash:8].css'}),

        new ImageminPlugin({
            test: /\.(jpe?g|png|gif|svg)$/i,
        }),

        // 压缩插件 加入了这个插件之后，编译的速度会明显变慢，所以一般只在生产环境启用
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),

        // 优化点六. 合并公共代码

        //有些类库如utils, bootstrap之类的可能被多个页面共享，最好是可以合并成一个js，而非每个js单独去引用。这样能够节省一些空间。这时我们可以用到CommonsChunkPlugin，我们指定好生成文件的名字，以及想抽取哪些入口js文件的公共代码，webpack就会自动帮我们合并好。

        new webpack.optimize.CommonsChunkPlugin({ // 抽取公共js插件
            name: "common",
            filename: "js/common.[chunkhash:8].js",
        })
    ]
}

// 优化点五.将模块暴露到全局

// 如果想将Loading组件放到全局，有两种办法：
//
// 在loader里使expose将Loading暴露到全局，然后就可以直接使用Loading
//
// {
//     test: path.join(config.path.src, '/js/common/Loading'),
//         loader: 'expose?Loading'
// },


