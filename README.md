# React TS Template

This repo is intended to house potentially a nuber of branches with variations on setup of a basic React TS repo.

It may be useful in use as a template for new projects going forward, however the main reason is to try to enshrine some of the learining about dofferences in setup based on ultimate project requirements.

# Testing

The tools of choice are Jest and React Testing Library, setup leans on this article:

https://www.carlrippon.com/using-jest-and-rtl-with-react-typescript/

Using Jest with TypeScript and supporting official documentation is here:

https://jestjs.io/docs/getting-started#using-typescript

React Testing Library falls over without specifying a DOM rather than node environment, as shown here:

https://jestjs.io/docs/configuration#testenvironment-string

The preference for ESModules means that Jest won't work out of the box, so experimental support is required:

https://jestjs.io/docs/ecmascript-modules


