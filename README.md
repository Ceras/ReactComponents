# ReactComponents

This is a seed for creating new components. 

To create a new component create a new branch using
git checkout --orphan components/<component name>

During develop run "node start" and navigate to localhost:3000
Before pushing, mekat sure you run "webback" to build the component.

Build file is added to dist folder, react and all plugins should be excluded from "bundle.js" using webpack "CommonsChunkPlugin"
