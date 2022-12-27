(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{404:function(e,t,a){"use strict";a.r(t);var n=a(4),r=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"version-22-12"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#version-22-12"}},[e._v("#")]),e._v(" Version 22.12")]),e._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#introduction"}},[e._v("Introduction")])]),t("li",[t("a",{attrs:{href:"#what-to-know"}},[e._v("What to know")]),t("ul",[t("li",[t("a",{attrs:{href:"#🚨-breaking-change-sanic-inspector-is-now-an-http-server"}},[e._v("🚨 BREAKING CHANGE - Sanic Inspector is now an HTTP server")])]),t("li",[t("a",{attrs:{href:"#scale-number-of-running-server-workers"}},[e._v("Scale number of running server workers")])]),t("li",[t("a",{attrs:{href:"#extend-inspector-with-custom-commands"}},[e._v("Extend Inspector with custom commands")])]),t("li",[t("a",{attrs:{href:"#early-worker-exit-on-failure"}},[e._v("Early worker exit on failure")])]),t("li",[t("a",{attrs:{href:"#introduce-jsonresponse-with-convenience-methods-to-update-a-json-response-body"}},[e._v("Introduce JSONResponse with convenience methods to update a JSON response body")])]),t("li",[t("a",{attrs:{href:"#updates-to-downstream-requirements-uvloop-and-websockets"}},[e._v("Updates to downstream requirements: uvloop and websockets")])]),t("li",[t("a",{attrs:{href:"#force-exit-on-2nd-ctrl-c"}},[e._v("Force exit on 2nd ctrl+c")])]),t("li",[t("a",{attrs:{href:"#deprecations-and-removals"}},[e._v("Deprecations and Removals")])])])]),t("li",[t("a",{attrs:{href:"#news"}},[e._v("News")])]),t("li",[t("a",{attrs:{href:"#thank-you"}},[e._v("Thank you")])])])]),t("p"),e._v(" "),t("h2",{attrs:{id:"introduction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),t("p",[e._v("This is the final release of the version 22 "),t("RouterLink",{attrs:{to:"/en/org/policies.html#release-schedule"}},[e._v("release cycle")]),e._v(". As such it is a "),t("strong",[e._v("long-term support")]),e._v(" release, and will be supported as stated in the "),t("RouterLink",{attrs:{to:"/en/org/policies.html#long-term-support-v-interim-releases"}},[e._v("policies")]),e._v(".")],1),e._v(" "),t("h2",{attrs:{id:"what-to-know"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#what-to-know"}},[e._v("#")]),e._v(" What to know")]),e._v(" "),t("p",[e._v("More details in the "),t("a",{attrs:{href:"https://sanic.readthedocs.io/en/stable/sanic/changelog.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Changelog"),t("OutboundLink")],1),e._v(". Notable new or breaking features, and what to upgrade...")]),e._v(" "),t("h3",{attrs:{id:"🚨-breaking-change-sanic-inspector-is-now-an-http-server"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#🚨-breaking-change-sanic-inspector-is-now-an-http-server"}},[e._v("#")]),e._v(" 🚨 "),t("em",[e._v("BREAKING CHANGE")]),e._v(" - Sanic Inspector is now an HTTP server")]),e._v(" "),t("p",[e._v("Sanic v22.9 introduced the "),t("a",{attrs:{href:"http://127.0.0.1:8080/en/guide/deployment/manager.html#inspector",target:"_blank",rel:"noopener noreferrer"}},[e._v("Inspector"),t("OutboundLink")],1),e._v(" to allow live inspection of a running Sanic instance. This feature relied upon opening a TCP socket and communicating over a custom protocol. That basic TCP protocol has been dropped in favor of running a full HTTP service in its place. "),t("RouterLink",{attrs:{to:"/en/guide/deployment/inspector.html"}},[e._v("Learn more about the Inspector")]),e._v(".")],1),e._v(" "),t("p",[e._v("The current release introduces a new HTTP server and a refreshed CLI experience. This enables several new features highlighted here. Perhaps the most significant change, however, is to move all of the Inspector's commands to a subparser on the CLI instance.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ sanic inspect --help                             \n\n  ▄███ █████ ██      ▄█▄      ██       █   █   ▄██████████\n ██                 █   █     █ ██     █   █  ██\n  ▀███████ ███▄    ▀     █    █   ██   ▄   █  ██\n              ██  █████████   █     ██ █   █  ▄▄\n ████ ████████▀  █         █  █       ██   █   ▀██ ███████\n\nOptional\n========\n  General:\n    -h, --help                      show this help message and exit\n    --host HOST, -H HOST            Inspector host address [default 127.0.0.1]\n    --port PORT, -p PORT            Inspector port [default 6457]\n    --secure, -s                    Whether to access the Inspector via TLS encryption\n    --api-key API_KEY, -k API_KEY   Inspector authentication key\n    --raw                           Whether to output the raw response information\n\n  Subcommands:\n    Run one or none of the below subcommands. Using inspect without a subcommand will fetch general information about the state of the application instance.\n    \n    Or, you can optionally follow inspect with a subcommand. If you have created a custom Inspector instance, then you can run custom commands. See https://sanic.dev/en/guide/deployment/inspector.html for more details.\n\n    {reload,shutdown,scale,<custom>}\n        reload                      Trigger a reload of the server workers\n        shutdown                    Shutdown the application and all processes\n        scale                       Scale the number of workers\n        <custom>                    Run a custom command\n")])])]),t("h4",{attrs:{id:"cli-remote-access-now-available"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cli-remote-access-now-available"}},[e._v("#")]),e._v(" CLI remote access now available")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("host")]),e._v(" and "),t("code",[e._v("port")]),e._v(" of the Inspector are now explicitly exposed on the CLI as shown above. Previously in v22.9, they were inferred by reference to the application instance. Because of this change, it will be more possible to expose the Inspector on live production instances and access from a remote installation of the CLI.")]),e._v(" "),t("p",[e._v("For example, you can check your running production deployment from your local development machine.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ sanic inspect --host=1.2.3.4\n")])])]),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),t("p",[e._v("For "),t("strong",[e._v("production")]),e._v(" instances, make sure you are "),t("em",[e._v("using TLS and authentication")]),e._v(" described below.")])]),e._v(" "),t("h4",{attrs:{id:"tls-encryption-now-available"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tls-encryption-now-available"}},[e._v("#")]),e._v(" TLS encryption now available")]),e._v(" "),t("p",[e._v("You can secure your remote Inspector access by providing a TLS certificate to encrypt the web traffic.")]),e._v(" "),t("div",{staticClass:"language-python extra-class"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[e._v("app"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("config"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("INSPECTOR_TLS_CERT "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"/path/to/cert.pem"')]),e._v("\napp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("config"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("INSPECTOR_TLS_KEY "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"/path/to/key.pem"')]),e._v("\n")])])]),t("p",[e._v("To access an encrypted installation via the CLI, use the "),t("code",[e._v("--secure")]),e._v(" flag.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ sanic inspect --secure\n")])])]),t("h4",{attrs:{id:"authentication-now-available"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#authentication-now-available"}},[e._v("#")]),e._v(" Authentication now available")]),e._v(" "),t("p",[e._v("To control access to the remote Inspector, you can protect the endpoints using an API key.")]),e._v(" "),t("div",{staticClass:"language-python extra-class"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[e._v("app"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("config"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("INSPECTOR_API_KEY "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Super-Secret-200"')]),e._v("\n")])])]),t("p",[e._v("To access a protected installation via the CLI, use the "),t("code",[e._v("--api-key")]),e._v(" flag.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ sanic inspect --api-key=Super-Secret-200\n")])])]),t("p",[e._v("This is equivalent to the header: "),t("code",[e._v("Authorization: Bearer <KEY>")]),e._v(".")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('$ curl http://localhost:6457  -H "Authorization: Bearer Super-Secret-200"\n')])])]),t("h3",{attrs:{id:"scale-number-of-running-server-workers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#scale-number-of-running-server-workers"}},[e._v("#")]),e._v(" Scale number of running server workers")]),e._v(" "),t("p",[e._v("The Inspector is now capable of scaling the number of worker processes. For example, to scale to 3 replicas, use the following command:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ sanic inspect scale 3\n")])])]),t("h3",{attrs:{id:"extend-inspector-with-custom-commands"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#extend-inspector-with-custom-commands"}},[e._v("#")]),e._v(" Extend Inspector with custom commands")]),e._v(" "),t("p",[e._v("The Inspector is now fully extendable to allow for adding custom commands to the CLI. For more information see "),t("RouterLink",{attrs:{to:"/en/guide/deployment/inspector.html#custom-commands"}},[e._v("Custom Commands")]),e._v(".")],1),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ sanic inspect foo --bar\n")])])]),t("h3",{attrs:{id:"early-worker-exit-on-failure"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#early-worker-exit-on-failure"}},[e._v("#")]),e._v(" Early worker exit on failure")]),e._v(" "),t("p",[e._v("The process manager shipped with v22.9 had a very short startup timeout. This was to protect against deadlock. This was increased to 30s, and a new mechanism has been added to fail early if there is a crash in a worker process on startup.")]),e._v(" "),t("h3",{attrs:{id:"introduce-jsonresponse-with-convenience-methods-to-update-a-json-response-body"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introduce-jsonresponse-with-convenience-methods-to-update-a-json-response-body"}},[e._v("#")]),e._v(" Introduce "),t("code",[e._v("JSONResponse")]),e._v(" with convenience methods to update a JSON response body")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("sanic.response.json")]),e._v(" convenience method now returns a new subclass of "),t("code",[e._v("HTTPResponse")]),e._v(" appropriately named: "),t("code",[e._v("JSONResponse")]),e._v(". This new type has some convenient methods for handling changes to a response body after its creation.")]),e._v(" "),t("div",{staticClass:"language-python extra-class"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[e._v("resp "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" json"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"foo"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"bar"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\nresp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("update"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"another"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"value"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),t("p",[e._v("See "),t("RouterLink",{attrs:{to:"/en/guide/basics/response.html#returning-json-data"}},[e._v("Returning JSON Data")]),e._v(" for more information.")],1),e._v(" "),t("h3",{attrs:{id:"updates-to-downstream-requirements-uvloop-and-websockets"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#updates-to-downstream-requirements-uvloop-and-websockets"}},[e._v("#")]),e._v(" Updates to downstream requirements: "),t("code",[e._v("uvloop")]),e._v(" and "),t("code",[e._v("websockets")])]),e._v(" "),t("p",[e._v("Minimum "),t("code",[e._v("uvloop")]),e._v(" was set to "),t("code",[e._v("0.15.0")]),e._v(". Changes were added to make Sanic compliant with "),t("code",[e._v("websockets")]),e._v(" version "),t("code",[e._v("11.0")]),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"force-exit-on-2nd-ctrl-c"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#force-exit-on-2nd-ctrl-c"}},[e._v("#")]),e._v(" Force exit on 2nd "),t("code",[e._v("ctrl+c")])]),e._v(" "),t("p",[e._v("On supporting operating systems, the existing behavior is for Sanic server to try to perform a graceful shutdown when hitting "),t("code",[e._v("ctrl+c")]),e._v(". This new release will perform an immediate shutdown on subsequent "),t("code",[e._v("ctrl+c")]),e._v(" after the initial shutdown has begun.")]),e._v(" "),t("h3",{attrs:{id:"deprecations-and-removals"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#deprecations-and-removals"}},[e._v("#")]),e._v(" Deprecations and Removals")]),e._v(" "),t("ol",[t("li",[t("em",[e._v("DEPRECATED")]),e._v(" - The "),t("code",[e._v("--inspect*")]),e._v(" commands introduced in v22.9 have been replaced with a new subcommand parser available as "),t("code",[e._v("inspect")]),e._v(". The flag versions will continue to operate until v23.3. You are encouraged to use the replacements. While this short deprecation period is a deviation from the standard two-cycles, we hope this change will be minimally disruptive."),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("OLD   sanic ... --inspect\nNEW   sanic ... inspect\n\nOLD   sanic ... --inspect-raw\nNEW   sanic ... inspect --raw\n\nOLD   sanic ... --inspect-reload\nNEW   sanic ... inspect reload\n\nOLD   sanic ... --inspect-shutdown\nNEW   sanic ... inspect shutdown\n")])])])])]),e._v(" "),t("h2",{attrs:{id:"news"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#news"}},[e._v("#")]),e._v(" News")]),e._v(" "),t("p",[e._v("The Sanic Community Organization will be headed by a new Steering Council for 2023. There are two returning and two new members.")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/ahopkins",target:"_blank",rel:"noopener noreferrer"}},[e._v("@ahopkins"),t("OutboundLink")],1),e._v(" "),t("em",[e._v("returning")]),e._v(" "),t("br"),e._v(" "),t("a",{attrs:{href:"https://github.com/prryplatypus",target:"_blank",rel:"noopener noreferrer"}},[e._v("@prryplatypus"),t("OutboundLink")],1),e._v(" "),t("em",[e._v("returning")]),e._v(" "),t("br"),e._v(" "),t("a",{attrs:{href:"https://github.com/sjsadowski",target:"_blank",rel:"noopener noreferrer"}},[e._v("@sjsadowski"),t("OutboundLink")],1),e._v(" "),t("em",[e._v("NEW")]),e._v(" "),t("br"),e._v(" "),t("a",{attrs:{href:"https://github.com/Tronic",target:"_blank",rel:"noopener noreferrer"}},[e._v("@Tronic"),t("OutboundLink")],1),e._v(" "),t("em",[e._v("NEW")])]),e._v(" "),t("p",[e._v("The 2023 release managers are "),t("a",{attrs:{href:"https://github.com/ahopkins",target:"_blank",rel:"noopener noreferrer"}},[e._v("@ahopkins"),t("OutboundLink")],1),e._v(" and "),t("a",{attrs:{href:"https://github.com/sjsadowski",target:"_blank",rel:"noopener noreferrer"}},[e._v("@sjsadowski"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("If you are interested in getting more involved with Sanic, contact us on the "),t("a",{attrs:{href:"https://discord.gg/FARQzAEMAA",target:"_blank",rel:"noopener noreferrer"}},[e._v("Discord server"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"thank-you"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#thank-you"}},[e._v("#")]),e._v(" Thank you")]),e._v(" "),t("p",[e._v("Thank you to everyone that participated in this release: 👏")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/aaugustin",target:"_blank",rel:"noopener noreferrer"}},[e._v("@aaugustin"),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://github.com/ahopkins",target:"_blank",rel:"noopener noreferrer"}},[e._v("@ahopkins"),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://github.com/ChihweiLHBird",target:"_blank",rel:"noopener noreferrer"}},[e._v("@ChihweiLHBird"),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://github.com/kijk2869",target:"_blank",rel:"noopener noreferrer"}},[e._v("@kijk2869"),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://github.com/LiraNuna",target:"_blank",rel:"noopener noreferrer"}},[e._v("@LiraNuna"),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://github.com/prryplatypus",target:"_blank",rel:"noopener noreferrer"}},[e._v("@prryplatypus"),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://github.com/sjsadowski",target:"_blank",rel:"noopener noreferrer"}},[e._v("@sjsadowski"),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://github.com/todddialpad",target:"_blank",rel:"noopener noreferrer"}},[e._v("@todddialpad"),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://github.com/Tronic",target:"_blank",rel:"noopener noreferrer"}},[e._v("@Tronic"),t("OutboundLink")],1)]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("If you enjoy the project, please consider contributing. Of course we love code contributions, but we also love contributions in any form. Consider writing some documentation, showing off use cases, joining conversations and making your voice known, and if you are able: "),t("a",{attrs:{href:"https://opencollective.com/sanic-org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("financial contributions"),t("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=r.exports}}]);