module.exports = function(sequelize, DataTypes) {
	const VideoInfo = sequelize.define("videoinfo", {
		likes: DataTypes.INTEGER,
	});

	// VideoInfo.associate = (models) => {};

	return VideoInfo;
};