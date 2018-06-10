module.exports = function(sequelize, DataTypes) {
	const ImageInfo = sequelize.define("imageinfo", {
		image_id: DataTypes.STRING,
		likes: DataTypes.INTEGER
	});

	// VideoInfo.associate = (models) => {};

	return ImageInfo;
};