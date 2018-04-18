module.exports = {
	mode: "production",
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: "babel-loader",
			options: {
				"plugins": [
					["transform-react-jsx", { "pragma":"h" }]
				]
			}
		}]
	}
}