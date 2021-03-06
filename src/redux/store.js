export const initialState = {
  response: {
    tabs: [
      {
        label: "Language",
        options: ["Javascript", "Typescript"],
        required: true,
        selectedValue: null,
        childTab: null
      },
      {
        label: "Technology",
        options: [
          "Angular",
          "React",
          "React Native",
          "Node js server",
          "VS Code Extension"
        ],
        required: true,
        selectedValue: null,
        childTab: {
          whichTab: "Node js server",
          label: "Database",
          options: ["MongoDB", "MySql", "PostgreSQL", "None"],
          required: true,
          selectedValue: null
        }
      }
    ],
    metaData: [
      {
        label: "Package Name",
        placeholder: "project identifier",
        value: "",
        required: true
      },
      {
        label: "Version",
        placeholder: "1.0.0",
        value: "",
        required: true
      },
      {
        label: "Description",
        placeholder: "About project",
        value: "",
        required: false
      },
      {
        label: "Git repository link",
        placeholder: "repo link",
        value: "",
        required: false
      },
      {
        label: "Keywords",
        placeholder: "eg. js, node",
        value: "",
        required: false
      },
      {
        label: "Author",
        placeholder: "developer name",
        value: "",
        required: false
      },
      {
        label: "License",
        placeholder: "eg. MIT, Apache",
        value: "",
        required: false
      }
    ],
    dependencyList: {
      DeveloperTools: [
        {
          label: "Redux",
          desc: "Redux is a predictable state container for JavaScript apps",
          tag: ["react", "react-native", "nodejs"]
        },
        {
          label: "React Redux",
          desc:
            "React Redux is the official React binding for Redux. It lets your React components read data from a Redux store, and dispatch actions to the store to update data.",
          tag: ["react", "react-native", "nodejs"]
        },
        {
          label: "express",
          desc: "Fast, unopinionated, minimalist web framework for node.",
          tag: ["react", "react-native", "nodejs"]
        },
        {
          label: "body-parser",
          desc:
            "Parse incoming request bodies in a middleware before your handlers, available under the req.body property",
          tag: ["react", "react-native", "nodejs"]
        },
        {
          label: "lodash",
          desc:
            "It is used to simplify your work of managing and editing objects and arrays by providing lots of utility methods",
          tag: ["react", "react-native", "nodejs"]
        }
      ],
      Web: [
        {
          label: "express",
          desc: "Fast, unopinionated, minimalist web framework for node."
        },
        {
          label: "body-parser",
          desc:
            "Parse incoming request bodies in a middleware before your handlers, available under the req.body property",
          tag: ["react", "react-native", "nodejs"]
        },
        {
          label: "lodash",
          desc:
            " It is used to simplify your work of managing and editing objects and arrays by providing lots of utility methods",
          tag: ["react", "react-native", "nodejs"]
        }
      ],
      Security: [
        {
          label: "babel-core",
          desc:
            "Transforms the passed in code. Returning an object with the generated code, source map, and AST.",
          tag: ["react", "react-native", "nodejs"]
        },
        {
          label: "body-parser",
          desc:
            "Parse incoming request bodies in a middleware before your handlers, available under the req.body property",
          tag: ["react", "react-native", "nodejs"]
        },
        {
          label: "lodash",
          desc:
            " It is used to simplify your work of managing and editing objects and arrays by providing lots of utility methods",
          tag: ["react", "react-native", "nodejs"]
        }
      ],
      FileOperation: [
        {
          label: "lodash",
          desc:
            " It is used to simplify your work of managing and editing objects and arrays by providing lots of utility methods",
          tag: ["react", "react-native", "nodejs"]
        }
      ],
      Testing: [
        {
          label: "lodash",
          desc:
            " It is used to simplify your work of managing and editing objects and arrays by providing lots of utility methods",
          tag: ["react", "react-native", "nodejs"]
        }
      ]
    }
  }
};
