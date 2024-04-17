/**
 * Given a spec filename and name of a test, sets "it.only" for give list of tests.
 */
export declare const onlyTests: (specFilename: any, leaveTests: any) => void;
/**
 * Given a spec filename and name of a test, sets "it.skip" for give list of tests.
 */
export declare const skipTests: (specFilename: any, skipTests: any) => void;
/**
 * Removes all .only and .skip from spec file
 */
export declare const runAllTests: (specFilename: any) => void;
