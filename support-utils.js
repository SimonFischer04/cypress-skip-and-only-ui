"use strict";
/// <reference types="cypress" />
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTests = exports.getRootSuite = void 0;
var ramda_1 = require("ramda");
var _ = Cypress._;
var getRootSuite = function (runnable) {
    if (runnable.parent) {
        return (0, exports.getRootSuite)(runnable.parent);
    }
    return runnable;
};
exports.getRootSuite = getRootSuite;
var getTests = function (rootRunnable, title) {
    if (title === void 0) { title = []; }
    var testNames = _.map(rootRunnable.tests, 'title');
    var fullTestNames = title.length
        ? testNames.map(function (name) { return (0, ramda_1.append)(name, title); })
        : testNames.map(function (name) { return [name]; });
    // for each suite
    var fullSuiteNames = (0, ramda_1.unnest)(rootRunnable.suites.map(function (suite) {
        var fullSuiteName = (0, ramda_1.append)(suite.title, title);
        return (0, exports.getTests)(suite, fullSuiteName);
    }));
    return (0, ramda_1.concat)(fullSuiteNames, fullTestNames);
};
exports.getTests = getTests;
