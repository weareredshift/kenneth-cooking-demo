# App Structure

The src folder of this app is broken down into the following folders:

- **Components** - Reusable components that are potentially relevant in multiple locations throughout the app and beyond.
- **Containers** - Components used to wrap other components - eg main AppContainer and any other possible containers for sub-pages, or for content requiring remote data.
- **Redux** - Everything related to the Redux functionality of the site -- actions, reducers, Redux set up, and potential future/separate asynchronous actions, etc.
- **Routes** - The main routing file for the application, and all pages that are associated with a particular URL route. Each route folder can also contain sub-components specific to that page.
- **Utils** - Low-level JS utils used throughout the site. No React here.

### Paths

Every folder under `src` is automatically aliased, and so can be imported absolutely, not relatively: `import * as actions from 'redux/actions';`.

### Tests

Tests are generally collocated near the files they test, within a __test__ folder, and ending in the `.spec.js` extension. For example:

```
- utils
  - __test__
    - myUtil.spec.js
  - myUtil.js
```
