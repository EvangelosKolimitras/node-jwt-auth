

exports.roots = ['<rootDir>/src'];
exports.transform = {
	'^.+\\.tsx?$': 'ts-jest'
};
exports.testRegex = '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$';
exports.moduleFileExtensions = ['ts', 'tsx', 'js', 'jsx', 'json', 'node'];
