import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { i as require_jsx_runtime } from "../_libs/@radix-ui/react-label+[...].mjs";
import { r as cn } from "./router-C5CBHS1A.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Reveal-ibYPdWzH.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Reveal({ children, className, delay = 0, as = "div" }) {
	const ref = (0, import_react.useRef)(null);
	const [visible, setVisible] = (0, import_react.useState)(false);
	const Tag = as;
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		if (typeof IntersectionObserver === "undefined") {
			setVisible(true);
			return;
		}
		const observer = new IntersectionObserver((entries) => {
			for (const entry of entries) if (entry.isIntersecting) {
				setVisible(true);
				observer.disconnect();
			}
		}, {
			threshold: .12,
			rootMargin: "0px 0px -40px 0px"
		});
		observer.observe(el);
		return () => observer.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
		ref,
		className: cn("reveal", visible && "reveal-in", className),
		style: { transitionDelay: `${delay}ms` },
		children
	});
}
//#endregion
export { Reveal as t };
