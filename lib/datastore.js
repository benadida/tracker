/*
 * Abstraction for tracker datastore
 */

const redis = require("redis");

/*
 * fields.email, fields.lastName, fields.firstNames
 */
exports.createUser = function(fields) {
};

/*
 * returns a JS object of user fields
 */
exports.getUserByEmail = function(email) {
};

exports.addMeasurement = function(userId, date, measurementType, measurement) {
};

exports.deleteMeasurement = function(userId, measurementId) {
};

exports.getMeasurementsSince = function(userId, measurementType, since) {
};

exports.getMeasurementsRange = function(userId, measurementType, start, end) {
};