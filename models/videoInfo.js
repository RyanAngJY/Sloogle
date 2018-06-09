module.exports = function(sequelize, DataTypes) {
	const VideoInfo = sequelize.define("videoInfo", {
		likes: DataTypes.INTEGER,
	});

	// VideoInfo.associate = (models) => {};

	return VideoInfo;
};