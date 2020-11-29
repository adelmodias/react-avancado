module.exports = {
    testEnvironment: "jsdom",
    testPathIgnorePatterns: ["/node_modules", "/.next/"],
    colletCoverage: true,
    colletCoverageFrom: ["src/**/*.ts(x)"],
    setupFilesAfterEnv: ["<rootDir>/.jest/setup.ts"]
}
