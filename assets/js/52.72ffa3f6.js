(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{371:function(t,e,a){"use strict";a.r(e);var s=a(4),n=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),e("h2",{attrs:{id:"basics"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#basics"}},[t._v("#")]),t._v(" Basics")]),t._v(" "),e("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[e("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[e("p",[t._v("Sanic holds the configuration in the config attribute of the application object. The configuration object is merely an object that can be modified either using dot-notation or like a dictionary.")])]),t._v(" "),e("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[t._v("app "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Sanic"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myapp"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\napp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DB_NAME "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"appdb"')]),t._v("\napp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"DB_USER"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"appuser"')]),t._v("\n")])])])])]),t._v(" "),e("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[e("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[e("p",[t._v("You can also use the "),e("code",[t._v("update()")]),t._v(" method like on regular dictionaries.")])]),t._v(" "),e("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[t._v("db_settings "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'DB_HOST'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'localhost'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'DB_NAME'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'appdb'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'DB_USER'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'appuser'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\napp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("update"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("db_settings"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("It is standard practice in Sanic to name your config values in "),e("strong",[t._v("uppercase letters")]),t._v(". Indeed, you may experience weird behaviors if you start mixing uppercase and lowercase names.")])]),t._v(" "),e("h2",{attrs:{id:"loading"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#loading"}},[t._v("#")]),t._v(" Loading")]),t._v(" "),e("h3",{attrs:{id:"environment-variables"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#environment-variables"}},[t._v("#")]),t._v(" Environment variables")]),t._v(" "),e("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[e("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[e("p",[t._v("Any environment variables defined with the "),e("code",[t._v("SANIC_")]),t._v(" prefix will be applied to the Sanic config. For example, setting "),e("code",[t._v("SANIC_REQUEST_TIMEOUT")]),t._v(" will be loaded by the application automatically and fed into the "),e("code",[t._v("REQUEST_TIMEOUT")]),t._v(" config variable.")])]),t._v(" "),e("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("SANIC_REQUEST_TIMEOUT")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n")])])]),e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("REQUEST_TIMEOUT"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n")])])])])]),t._v(" "),e("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[e("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[e("p",[t._v("You can change the prefix that Sanic is expecting at startup.")])]),t._v(" "),e("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("MYAPP_REQUEST_TIMEOUT")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n")])])]),e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" app "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Sanic"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__name__"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" env_prefix"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'MYAPP_'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("REQUEST_TIMEOUT"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n")])])])])]),t._v(" "),e("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[e("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[e("p",[t._v("You can also disable environment variable loading completely.")])]),t._v(" "),e("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[t._v("app "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Sanic"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__name__"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" load_env"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])]),t._v(" "),e("h3",{attrs:{id:"using-sanic-update-config"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-sanic-update-config"}},[t._v("#")]),t._v(" Using Sanic.update_config")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("Sanic")]),t._v(" instance has a "),e("em",[t._v("very")]),t._v(" versatile method for loading config: "),e("code",[t._v("app.update_config")]),t._v(". You can feed it a path to a file, a dictionary, a class, or just about any other sort of object.")]),t._v(" "),e("h4",{attrs:{id:"from-a-file"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#from-a-file"}},[t._v("#")]),t._v(" From a file")]),t._v(" "),e("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[e("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[e("p",[t._v("Let's say you have "),e("code",[t._v("my_config.py")]),t._v(" file that looks like this.")])]),t._v(" "),e("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# my_config.py")]),t._v("\nA "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nB "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n")])])])])]),t._v(" "),e("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[e("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[e("p",[t._v("You can load this as config values by passing its path to "),e("code",[t._v("app.update_config")]),t._v(".")])]),t._v(" "),e("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" app"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("update_config"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/path/to/my_config.py"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("A"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])])])])]),t._v(" "),e("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[e("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[e("p",[t._v("This path also accepts bash style environment variables.")])]),t._v(" "),e("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("my_path")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/path/to"')]),t._v("\n")])])]),e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[t._v("app"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("update_config"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"${my_path}/my_config.py"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("Just remember that you have to provide environment variables in the format "),e("code",[t._v("${environment_variable}")]),t._v(" and that "),e("code",[t._v("$environment_variable")]),t._v(' is not expanded (is treated as "plain" text).')])]),t._v(" "),e("h4",{attrs:{id:"from-a-dict"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#from-a-dict"}},[t._v("#")]),t._v(" From a dict")]),t._v(" "),e("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[e("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[e("p",[t._v("The "),e("code",[t._v("app.update_config")]),t._v(" method also works on plain dictionaries.")])]),t._v(" "),e("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[t._v("app"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("update_config"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"B"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])]),t._v(" "),e("h4",{attrs:{id:"from-a-class-or-object"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#from-a-class-or-object"}},[t._v("#")]),t._v(" From a class or object")]),t._v(" "),e("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[e("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[e("p",[t._v("You can define your own config class, and pass it to "),e("code",[t._v("app.update_config")])])]),t._v(" "),e("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyConfig")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    A "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n    B "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n\napp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("update_config"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MyConfig"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])]),t._v(" "),e("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[e("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[e("p",[t._v("It even could be instantiated.")])]),t._v(" "),e("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[t._v("app"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("update_config"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MyConfig"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])]),t._v(" "),e("h3",{attrs:{id:"type-casting"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#type-casting"}},[t._v("#")]),t._v(" Type casting")]),t._v(" "),e("p",[t._v("When loading from environment variables, Sanic will attempt to cast the values to expected Python types. This particularly applies to:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("int")])]),t._v(" "),e("li",[e("code",[t._v("float")])]),t._v(" "),e("li",[e("code",[t._v("bool")])])]),t._v(" "),e("p",[t._v("In regards to "),e("code",[t._v("bool")]),t._v(", the following "),e("em",[t._v("case insensitive")]),t._v(" values are allowed:")]),t._v(" "),e("ul",[e("li",[e("strong",[e("code",[t._v("True")])]),t._v(": "),e("code",[t._v("y")]),t._v(", "),e("code",[t._v("yes")]),t._v(", "),e("code",[t._v("yep")]),t._v(", "),e("code",[t._v("yup")]),t._v(", "),e("code",[t._v("t")]),t._v(", "),e("code",[t._v("true")]),t._v(", "),e("code",[t._v("on")]),t._v(", "),e("code",[t._v("enable")]),t._v(", "),e("code",[t._v("enabled")]),t._v(", "),e("code",[t._v("1")])]),t._v(" "),e("li",[e("strong",[e("code",[t._v("False")])]),t._v(": "),e("code",[t._v("n")]),t._v(", "),e("code",[t._v("no")]),t._v(", "),e("code",[t._v("f")]),t._v(", "),e("code",[t._v("false")]),t._v(", "),e("code",[t._v("off")]),t._v(", "),e("code",[t._v("disable")]),t._v(", "),e("code",[t._v("disabled")]),t._v(", "),e("code",[t._v("0")])])]),t._v(" "),e("p",[t._v("If a value cannot be cast, it will default to a "),e("code",[t._v("str")]),t._v(".")]),t._v(" "),e("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[e("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[e("p",[t._v("Additionally, Sanic can be configured to cast additional types using additional type converters. This should be any callable that returns the value or raises a "),e("code",[t._v("ValueError")]),t._v(".")]),t._v(" "),e("p",[e("em",[t._v("Added in v21.12")])])]),t._v(" "),e("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[t._v("app "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Sanic"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" config"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Config"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("converters"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("UUID"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])]),t._v(" "),e("h2",{attrs:{id:"builtin-values"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#builtin-values"}},[t._v("#")]),t._v(" Builtin values")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[e("strong",[t._v("Variable")])]),t._v(" "),e("th",[e("strong",[t._v("Default")])]),t._v(" "),e("th",[e("strong",[t._v("Description")])])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("ACCESS_LOG")]),t._v(" "),e("td",[t._v("True")]),t._v(" "),e("td",[t._v("Disable or enable access log")])]),t._v(" "),e("tr",[e("td",[t._v("AUTO_EXTEND")]),t._v(" "),e("td",[t._v("True")]),t._v(" "),e("td",[t._v("Control whether "),e("RouterLink",{attrs:{to:"/en/plugins/sanic-ext/getting-started.html"}},[t._v("Sanic Extensions")]),t._v(" will load if it is in the existing virtual environment")],1)]),t._v(" "),e("tr",[e("td",[t._v("AUTO_RELOAD")]),t._v(" "),e("td",[t._v("True")]),t._v(" "),e("td",[t._v("Control whether the application will automatically reload when a file changes")])]),t._v(" "),e("tr",[e("td",[t._v("EVENT_AUTOREGISTER")]),t._v(" "),e("td",[t._v("True")]),t._v(" "),e("td",[t._v("When "),e("code",[t._v("True")]),t._v(" using the "),e("code",[t._v("app.event()")]),t._v(" method on a non-existing signal will automatically create it and not raise an exception")])]),t._v(" "),e("tr",[e("td",[t._v("FALLBACK_ERROR_FORMAT")]),t._v(" "),e("td",[t._v("html")]),t._v(" "),e("td",[t._v("Format of error response if an exception is not caught and handled")])]),t._v(" "),e("tr",[e("td",[t._v("FORWARDED_FOR_HEADER")]),t._v(" "),e("td",[t._v("X-Forwarded-For")]),t._v(" "),e("td",[t._v('The name of "X-Forwarded-For" HTTP header that contains client and proxy ip')])]),t._v(" "),e("tr",[e("td",[t._v("FORWARDED_SECRET")]),t._v(" "),e("td",[t._v("None")]),t._v(" "),e("td",[t._v("Used to securely identify a specific proxy server (see below)")])]),t._v(" "),e("tr",[e("td",[t._v("GRACEFUL_SHUTDOWN_TIMEOUT")]),t._v(" "),e("td",[t._v("15.0")]),t._v(" "),e("td",[t._v("How long to wait to force close non-idle connection (sec)")])]),t._v(" "),e("tr",[e("td",[t._v("INSPECTOR")]),t._v(" "),e("td",[t._v("False")]),t._v(" "),e("td",[t._v("Whether to enable the Inspector")])]),t._v(" "),e("tr",[e("td",[t._v("INSPECTOR_HOST")]),t._v(" "),e("td",[t._v("localhost")]),t._v(" "),e("td",[t._v("The host for the Inspector")])]),t._v(" "),e("tr",[e("td",[t._v("INSPECTOR_PORT")]),t._v(" "),e("td",[t._v("6457")]),t._v(" "),e("td",[t._v("The port for the Inspector")])]),t._v(" "),e("tr",[e("td",[t._v("INSPECTOR_TLS_KEY")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("The TLS key for the Inspector")])]),t._v(" "),e("tr",[e("td",[t._v("INSPECTOR_TLS_CERT")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("The TLS certificate for the Inspector")])]),t._v(" "),e("tr",[e("td",[t._v("INSPECTOR_API_KEY")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("The API key for the Inspector")])]),t._v(" "),e("tr",[e("td",[t._v("KEEP_ALIVE_TIMEOUT")]),t._v(" "),e("td",[t._v("5")]),t._v(" "),e("td",[t._v("How long to hold a TCP connection open (sec)")])]),t._v(" "),e("tr",[e("td",[t._v("KEEP_ALIVE")]),t._v(" "),e("td",[t._v("True")]),t._v(" "),e("td",[t._v("Disables keep-alive when False")])]),t._v(" "),e("tr",[e("td",[t._v("MOTD")]),t._v(" "),e("td",[t._v("True")]),t._v(" "),e("td",[t._v("Whether to display the MOTD (message of the day) at startup")])]),t._v(" "),e("tr",[e("td",[t._v("MOTD_DISPLAY")]),t._v(" "),e("td",[t._v("{}")]),t._v(" "),e("td",[t._v("Key/value pairs to display additional, arbitrary data in the MOTD")])]),t._v(" "),e("tr",[e("td",[t._v("NOISY_EXCEPTIONS")]),t._v(" "),e("td",[t._v("False")]),t._v(" "),e("td",[t._v("Force all "),e("code",[t._v("quiet")]),t._v(" exceptions to be logged")])]),t._v(" "),e("tr",[e("td",[t._v("PROXIES_COUNT")]),t._v(" "),e("td",[t._v("None")]),t._v(" "),e("td",[t._v("The number of proxy servers in front of the app (e.g. nginx; see below)")])]),t._v(" "),e("tr",[e("td",[t._v("REAL_IP_HEADER")]),t._v(" "),e("td",[t._v("None")]),t._v(" "),e("td",[t._v('The name of "X-Real-IP" HTTP header that contains real client ip')])]),t._v(" "),e("tr",[e("td",[t._v("REGISTER")]),t._v(" "),e("td",[t._v("True")]),t._v(" "),e("td",[t._v("Whether the app registry should be enabled")])]),t._v(" "),e("tr",[e("td",[t._v("REQUEST_BUFFER_SIZE")]),t._v(" "),e("td",[t._v("65536")]),t._v(" "),e("td",[t._v("Request buffer size before request is paused, default is 64 Kib")])]),t._v(" "),e("tr",[e("td",[t._v("REQUEST_ID_HEADER")]),t._v(" "),e("td",[t._v("X-Request-ID")]),t._v(" "),e("td",[t._v('The name of "X-Request-ID" HTTP header that contains request/correlation ID')])]),t._v(" "),e("tr",[e("td",[t._v("REQUEST_MAX_SIZE")]),t._v(" "),e("td",[t._v("100000000")]),t._v(" "),e("td",[t._v("How big a request may be (bytes), default is 100 megabytes")])]),t._v(" "),e("tr",[e("td",[t._v("REQUEST_TIMEOUT")]),t._v(" "),e("td",[t._v("60")]),t._v(" "),e("td",[t._v("How long a request can take to arrive (sec)")])]),t._v(" "),e("tr",[e("td",[t._v("RESPONSE_TIMEOUT")]),t._v(" "),e("td",[t._v("60")]),t._v(" "),e("td",[t._v("How long a response can take to process (sec)")])]),t._v(" "),e("tr",[e("td",[t._v("USE_UVLOOP")]),t._v(" "),e("td",[t._v("True")]),t._v(" "),e("td",[t._v("Whether to override the loop policy to use "),e("code",[t._v("uvloop")]),t._v(". Supported only with "),e("code",[t._v("app.run")]),t._v(".")])]),t._v(" "),e("tr",[e("td",[t._v("WEBSOCKET_MAX_SIZE")]),t._v(" "),e("td",[t._v("2^20")]),t._v(" "),e("td",[t._v("Maximum size for incoming messages (bytes)")])]),t._v(" "),e("tr",[e("td",[t._v("WEBSOCKET_PING_INTERVAL")]),t._v(" "),e("td",[t._v("20")]),t._v(" "),e("td",[t._v("A Ping frame is sent every ping_interval seconds.")])]),t._v(" "),e("tr",[e("td",[t._v("WEBSOCKET_PING_TIMEOUT")]),t._v(" "),e("td",[t._v("20")]),t._v(" "),e("td",[t._v("Connection is closed when Pong is not received after ping_timeout seconds")])])])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("FYI")]),t._v(" "),e("ul",[e("li",[t._v("The "),e("code",[t._v("USE_UVLOOP")]),t._v(" value will be ignored if running with Gunicorn. Defaults to "),e("code",[t._v("False")]),t._v(" on non-supported platforms (Windows).")]),t._v(" "),e("li",[t._v("The "),e("code",[t._v("WEBSOCKET_")]),t._v(" values will be ignored if in ASGI mode.")]),t._v(" "),e("li",[t._v("v21.12 added: "),e("code",[t._v("AUTO_EXTEND")]),t._v(", "),e("code",[t._v("MOTD")]),t._v(", "),e("code",[t._v("MOTD_DISPLAY")]),t._v(", "),e("code",[t._v("NOISY_EXCEPTIONS")])]),t._v(" "),e("li",[t._v("v22.9 added: "),e("code",[t._v("INSPECTOR")])]),t._v(" "),e("li",[t._v("v22.12 added: "),e("code",[t._v("INSPECTOR_HOST")]),t._v(", "),e("code",[t._v("INSPECTOR_PORT")]),t._v(", "),e("code",[t._v("INSPECTOR_TLS_KEY")]),t._v(", "),e("code",[t._v("INSPECTOR_TLS_CERT")]),t._v(", "),e("code",[t._v("INSPECTOR_API_KEY")])])])]),t._v(" "),e("h2",{attrs:{id:"timeouts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#timeouts"}},[t._v("#")]),t._v(" Timeouts")]),t._v(" "),e("h3",{attrs:{id:"request-timeout"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#request-timeout"}},[t._v("#")]),t._v(" REQUEST_TIMEOUT")]),t._v(" "),e("p",[t._v("A request timeout measures the duration of time between the instant when a new open TCP connection is passed to the\nSanic backend server, and the instant when the whole HTTP request is received. If the time taken exceeds the\n"),e("code",[t._v("REQUEST_TIMEOUT")]),t._v(" value (in seconds), this is considered a Client Error so Sanic generates an "),e("code",[t._v("HTTP 408")]),t._v(" response\nand sends that to the client. Set this parameter's value higher if your clients routinely pass very large request payloads\nor upload requests very slowly.")]),t._v(" "),e("h3",{attrs:{id:"response-timeout"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response-timeout"}},[t._v("#")]),t._v(" RESPONSE_TIMEOUT")]),t._v(" "),e("p",[t._v("A response timeout measures the duration of time between the instant the Sanic server passes the HTTP request to the\nSanic App, and the instant a HTTP response is sent to the client. If the time taken exceeds the "),e("code",[t._v("RESPONSE_TIMEOUT")]),t._v("\nvalue (in seconds), this is considered a Server Error so Sanic generates an "),e("code",[t._v("HTTP 503")]),t._v(" response and sends that to the\nclient. Set this parameter's value higher if your application is likely to have long-running process that delay the\ngeneration of a response.")]),t._v(" "),e("h3",{attrs:{id:"keep-alive-timeout"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#keep-alive-timeout"}},[t._v("#")]),t._v(" KEEP_ALIVE_TIMEOUT")]),t._v(" "),e("h4",{attrs:{id:"what-is-keep-alive-and-what-does-the-keep-alive-timeout-value-do"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#what-is-keep-alive-and-what-does-the-keep-alive-timeout-value-do"}},[t._v("#")]),t._v(" What is Keep Alive? And what does the Keep Alive Timeout value do?")]),t._v(" "),e("p",[e("code",[t._v("Keep-Alive")]),t._v(" is a HTTP feature introduced in "),e("code",[t._v("HTTP 1.1")]),t._v(". When sending a HTTP request, the client (usually a web browser application)\ncan set a "),e("code",[t._v("Keep-Alive")]),t._v(" header to indicate the http server (Sanic) to not close the TCP connection after it has send the response.\nThis allows the client to reuse the existing TCP connection to send subsequent HTTP requests, and ensures more efficient\nnetwork traffic for both the client and the server.")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("KEEP_ALIVE")]),t._v(" config variable is set to "),e("code",[t._v("True")]),t._v(" in Sanic by default. If you don't need this feature in your application,\nset it to "),e("code",[t._v("False")]),t._v(" to cause all client connections to close immediately after a response is sent, regardless of\nthe "),e("code",[t._v("Keep-Alive")]),t._v(" header on the request.")]),t._v(" "),e("p",[t._v("The amount of time the server holds the TCP connection open is decided by the server itself.\nIn Sanic, that value is configured using the "),e("code",[t._v("KEEP_ALIVE_TIMEOUT")]),t._v(" value. By default, it is set to 5 seconds.\nThis is the same default setting as the Apache HTTP server and is a good balance between allowing enough time for\nthe client to send a new request, and not holding open too many connections at once. Do not exceed 75 seconds unless\nyou know your clients are using a browser which supports TCP connections held open for that long.")]),t._v(" "),e("p",[t._v("For reference:")]),t._v(" "),e("ul",[e("li",[t._v("Apache httpd server default keepalive timeout = 5 seconds")]),t._v(" "),e("li",[t._v("Nginx server default keepalive timeout = 75 seconds")]),t._v(" "),e("li",[t._v("Nginx performance tuning guidelines uses keepalive = 15 seconds")]),t._v(" "),e("li",[t._v("IE (5-9) client hard keepalive limit = 60 seconds")]),t._v(" "),e("li",[t._v("Firefox client hard keepalive limit = 115 seconds")]),t._v(" "),e("li",[t._v("Opera 11 client hard keepalive limit = 120 seconds")]),t._v(" "),e("li",[t._v("Chrome 13+ client keepalive limit > 300+ seconds")])]),t._v(" "),e("h2",{attrs:{id:"proxy-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#proxy-configuration"}},[t._v("#")]),t._v(" Proxy configuration")]),t._v(" "),e("p",[t._v("See "),e("RouterLink",{attrs:{to:"/guide/advanced/proxy-headers.html"}},[t._v("proxy configuration section")])],1)])}),[],!1,null,null,null);e.default=n.exports}}]);