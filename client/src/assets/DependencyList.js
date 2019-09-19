const dependencyList = {
    developerTools: [
        { label: 'Redux', desc: 'Redux is a predictable state container for JavaScript apps',tag:['react','react-native','nodejs'] },
        { label: 'React Redux', desc: 'React Redux is the official React binding for Redux. It lets your React components read data from a Redux store, and dispatch actions to the store to update data.',tag:['react','react-native','nodejs'] },
        { label: 'express', desc: 'Fast, unopinionated, minimalist web framework for node.',tag:['react','react-native','nodejs'] },
        { label: 'body-parser', desc: 'Parse incoming request bodies in a middleware before your handlers, available under the req.body property',tag:['react','react-native','nodejs'] },
        { label: 'lodash', desc: 'It is used to simplify your work of managing and editing objects and arrays by providing lots of utility methods',tag:['react','react-native','nodejs'] },
    ],
    web: [
        { label: 'express', desc: 'Fast, unopinionated, minimalist web framework for node.' },
        { label: 'body-parser', desc: 'Parse incoming request bodies in a middleware before your handlers, available under the req.body property',tag:['react','react-native','nodejs'] },
        { label: 'lodash', desc: ' It is used to simplify your work of managing and editing objects and arrays by providing lots of utility methods',tag:['react','react-native','nodejs'] },],
    security: [
        { label: 'babel-core', desc: 'Transforms the passed in code. Returning an object with the generated code, source map, and AST.',tag:['react','react-native','nodejs'] },
        { label: 'body-parser', desc: 'Parse incoming request bodies in a middleware before your handlers, available under the req.body property',tag:['react','react-native','nodejs'] },
        { label: 'lodash', desc: ' It is used to simplify your work of managing and editing objects and arrays by providing lots of utility methods',tag:['react','react-native','nodejs'] },
    ],
    fileOperation: [
        { label: 'lodash', desc: ' It is used to simplify your work of managing and editing objects and arrays by providing lots of utility methods',tag:['react','react-native','nodejs'] },
    ],
    Testing: [
        { label: 'lodash', desc: ' It is used to simplify your work of managing and editing objects and arrays by providing lots of utility methods',tag:['react','react-native','nodejs'] },
    ]
}

export default function DependencyList(tag) {

    let newPackages = {};

    for (const category in dependencyList){
        const pkgs = dependencyList[category];
        const filteredPkgs = pkgs.filter((pkg)=>{
            return pkg.tag && pkg.tag.indexOf(tag) > -1;
        });
        newPackages[category] = filteredPkgs;
    }

    return newPackages;
}



