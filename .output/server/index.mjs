globalThis.__nitro_main__ = import.meta.url;
import "./_libs/unenv.mjs";

import { H as HookableCore } from "./_libs/hookable.mjs";
import { d as defineLazyEventHandler, H as HTTPError, a as H3Core } from "./_libs/h3.mjs";
import { a as FastResponse } from "./_libs/srvx.mjs";


import "./_libs/rou3.mjs";





function lazyService(loader) {
  let promise, mod;
  return {
    fetch(req) {
      if (mod) {
        return mod.fetch(req);
      }
      if (!promise) {
        promise = loader().then((_mod) => mod = _mod.default || _mod);
      }
      return promise.then((mod2) => mod2.fetch(req));
    }
  };
}
const services = {
  ["ssr"]: lazyService(() => import("./_ssr/index.mjs"))
};
globalThis.__nitro_vite_envs__ = services;
const assets = {
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": '"181d7-LdlU1IUIU8pY5Vr7vUfbQplVUk0"',
    "mtime": "2026-07-02T15:31:52.031Z",
    "size": 98775,
    "path": "../public/favicon.ico"
  },
  "/assets/hero-Dp6zuTqf.jpg": {
    "type": "image/jpeg",
    "etag": '"3b7bd-Rs7KacUlolbgmgvhFVsRqdfr2wU"',
    "mtime": "2026-07-02T15:52:11.699Z",
    "size": 243645,
    "path": "../public/assets/hero-Dp6zuTqf.jpg"
  },
  "/assets/contact-CJl1h5AO.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b92-+CXAZg7cq1P42ZRlwS2913dHvWY"',
    "mtime": "2026-07-02T15:52:11.699Z",
    "size": 2962,
    "path": "../public/assets/contact-CJl1h5AO.js"
  },
  "/assets/about-DYL98mo5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"8d7-pfWVt1KLDRRvI/1KNTqGkE4j6kg"',
    "mtime": "2026-07-02T15:52:11.699Z",
    "size": 2263,
    "path": "../public/assets/about-DYL98mo5.js"
  },
  "/assets/hero-BRDcdWzX.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"dc-ooELzV93lWOoekyHtZctbSCT6l8"',
    "mtime": "2026-07-02T15:52:11.699Z",
    "size": 220,
    "path": "../public/assets/hero-BRDcdWzX.js"
  },
  "/assets/index-BojRMyyN.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"55f48-z/l99f/SekNW1RAiYolCDRY5hUE"',
    "mtime": "2026-07-02T15:52:11.699Z",
    "size": 352072,
    "path": "../public/assets/index-BojRMyyN.js"
  },
  "/assets/index-C-uD4LfR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1748-uFkt5VQsvG3bnmkpbrna0dLVQUo"',
    "mtime": "2026-07-02T15:52:11.699Z",
    "size": 5960,
    "path": "../public/assets/index-C-uD4LfR.js"
  },
  "/assets/project-1-CO3DvQQl.jpg": {
    "type": "image/jpeg",
    "etag": '"2a3a6-GujVD8MPBhn3zLWYLEa4+SFuWrI"',
    "mtime": "2026-07-02T15:52:11.699Z",
    "size": 172966,
    "path": "../public/assets/project-1-CO3DvQQl.jpg"
  },
  "/assets/PageShell-C3CUASCI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"174f-vfdvfOqdzlG9JjSGMub86XNj65A"',
    "mtime": "2026-07-02T15:52:11.699Z",
    "size": 5967,
    "path": "../public/assets/PageShell-C3CUASCI.js"
  },
  "/assets/project-2-BlVfY8l8.jpg": {
    "type": "image/jpeg",
    "etag": '"2466f-kylKJU8jCWe7ME5le+wqQGhQ0jw"',
    "mtime": "2026-07-02T15:52:11.699Z",
    "size": 149103,
    "path": "../public/assets/project-2-BlVfY8l8.jpg"
  },
  "/assets/portfolio-BPatq_wq.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"715-AR8AUcfpMY99y4PYiNPAklv5h30"',
    "mtime": "2026-07-02T15:52:11.699Z",
    "size": 1813,
    "path": "../public/assets/portfolio-BPatq_wq.js"
  },
  "/assets/project-3-zbT5zgwQ.jpg": {
    "type": "image/jpeg",
    "etag": '"1d542-dBPVWqWb9cyzOtVAFijYXknUQ9w"',
    "mtime": "2026-07-02T15:52:11.699Z",
    "size": 120130,
    "path": "../public/assets/project-3-zbT5zgwQ.jpg"
  },
  "/assets/styles-CRQyyzzi.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"12b80-rz8qM10DDT6BZB9/xpikDU89qeE"',
    "mtime": "2026-07-02T15:52:11.699Z",
    "size": 76672,
    "path": "../public/assets/styles-CRQyyzzi.css"
  },
  "/assets/services-BBYRBSPq.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"afc-1kOyl4aGfMeKLcohwPmguI1R3k4"',
    "mtime": "2026-07-02T15:52:11.699Z",
    "size": 2812,
    "path": "../public/assets/services-BBYRBSPq.js"
  },
  "/assets/project-4-DRO01gNM.jpg": {
    "type": "image/jpeg",
    "etag": '"30775-sm/bk8xnnwvdsMmoAAz3j/6HXOY"',
    "mtime": "2026-07-02T15:52:11.699Z",
    "size": 198517,
    "path": "../public/assets/project-4-DRO01gNM.jpg"
  }
};
const publicAssetBases = {};
function isPublicAssetURL(id = "") {
  if (assets[id]) {
    return true;
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) {
      return true;
    }
  }
  return false;
}
const headers = ((m) => function headersRouteRule(event) {
  for (const [key, value] of Object.entries(m.options || {})) {
    event.res.headers.set(key, value);
  }
});
const findRouteRules = /* @__PURE__ */ (() => {
  const $0 = [{ name: "headers", route: "/assets/**", handler: headers, options: { "cache-control": "public, max-age=31536000, immutable" } }];
  return (m, p) => {
    let r = [];
    if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
    let s = p.split("/"), l = s.length;
    if (l > 1) {
      if (s[1] === "assets") {
        r.unshift({ data: $0, params: { "_": s.slice(2).join("/") } });
      }
    }
    return r;
  };
})();
const _lazy_0tZg4F = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
const findRoute = /* @__PURE__ */ (() => {
  const data = { route: "/**", handler: _lazy_0tZg4F };
  return ((_m, p) => {
    return { data, params: { "_": p.slice(1) } };
  });
})();
const errorHandler$1 = (error, event) => {
  const res = defaultHandler(error, event);
  return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
  const unhandled = error.unhandled ?? !HTTPError.isError(error);
  const { status = 500, statusText = "" } = unhandled ? {} : error;
  if (status === 404) {
    const url = event.url || new URL(event.req.url);
    const baseURL = "/";
    if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) {
      return {
        status: 302,
        headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
      };
    }
  }
  const headers2 = new Headers(unhandled ? {} : error.headers);
  headers2.set("content-type", "application/json; charset=utf-8");
  const jsonBody = unhandled ? {
    status,
    unhandled: true
  } : typeof error.toJSON === "function" ? error.toJSON() : {
    status,
    statusText,
    message: error.message
  };
  return {
    status,
    statusText,
    headers: headers2,
    body: {
      error: true,
      ...jsonBody
    }
  };
}
const errorHandlers = [errorHandler$1];
async function errorHandler(error, event) {
  for (const handler of errorHandlers) {
    try {
      const response = await handler(error, event, { defaultHandler });
      if (response) {
        return response;
      }
    } catch (error2) {
      console.error(error2);
    }
  }
}
function createNitroApp() {
  const captureError = (error, errorCtx) => {
    if (errorCtx?.event) {
      const errors = errorCtx.event.req.context?.nitro?.errors;
      if (errors) {
        errors.push({ error, context: errorCtx });
      }
    }
  };
  const h3App = createH3App({
    onError(error, event) {
      return errorHandler(error, event);
    }
  });
  let appHandler = (req) => {
    req.context ||= {};
    req.context.nitro = req.context.nitro || { errors: [] };
    return h3App.fetch(req);
  };
  return {
    fetch: appHandler,
    h3: h3App,
    hooks: void 0,
    captureError
  };
}
function createH3App(config) {
  const h3App = new H3Core(config);
  h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
  h3App["~getMiddleware"] = (event, route) => {
    const pathname = event.url.pathname;
    const method = event.req.method;
    const middleware = [];
    const routeRules = getRouteRules(method, pathname);
    event.context.routeRules = routeRules?.routeRules;
    if (routeRules?.routeRuleMiddleware.length) {
      middleware.push(...routeRules.routeRuleMiddleware);
    }
    if (route?.data?.middleware?.length) {
      middleware.push(...route.data.middleware);
    }
    return middleware;
  };
  return h3App;
}
const APP_ID = "default";
function useNitroApp() {
  let instance = useNitroApp._instance;
  if (instance) {
    return instance;
  }
  instance = useNitroApp._instance = createNitroApp();
  globalThis.__nitro__ = globalThis.__nitro__ || {};
  globalThis.__nitro__[APP_ID] = instance;
  return instance;
}
function useNitroHooks() {
  const nitroApp = useNitroApp();
  const hooks = nitroApp.hooks;
  if (hooks) {
    return hooks;
  }
  return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
  const m = findRouteRules(method, pathname);
  if (!m?.length) {
    return { routeRuleMiddleware: [] };
  }
  const routeRules = {};
  for (const layer of m) {
    for (const rule of layer.data) {
      const currentRule = routeRules[rule.name];
      if (currentRule) {
        if (rule.options === false) {
          delete routeRules[rule.name];
          continue;
        }
        if (typeof currentRule.options === "object" && typeof rule.options === "object") {
          currentRule.options = {
            ...currentRule.options,
            ...rule.options
          };
        } else {
          currentRule.options = rule.options;
        }
        currentRule.route = rule.route;
        currentRule.params = {
          ...currentRule.params,
          ...layer.params
        };
      } else if (rule.options !== false) {
        routeRules[rule.name] = {
          ...rule,
          params: layer.params
        };
      }
    }
  }
  const middleware = [];
  const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
  for (const rule of orderedRules) {
    if (rule.options === false || !rule.handler) {
      continue;
    }
    middleware.push(rule.handler(rule));
  }
  return {
    routeRules,
    routeRuleMiddleware: middleware
  };
}
function createHandler(hooks) {
  const nitroApp = useNitroApp();
  const nitroHooks = useNitroHooks();
  return {
    async fetch(request, env, context) {
      globalThis.__env__ = env;
      augmentReq(request, {
        env,
        context
      });
      const ctxExt = {};
      const url = new URL(request.url);
      if (hooks.fetch) {
        const res = await hooks.fetch(request, env, context, url, ctxExt);
        if (res) {
          return res;
        }
      }
      return await nitroApp.fetch(request);
    },
    scheduled(controller, env, context) {
      globalThis.__env__ = env;
      context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
        controller,
        env,
        context
      }) || Promise.resolve());
    },
    email(message, env, context) {
      globalThis.__env__ = env;
      context.waitUntil(nitroHooks.callHook("cloudflare:email", {
        message,
        event: message,
        env,
        context
      }) || Promise.resolve());
    },
    queue(batch, env, context) {
      globalThis.__env__ = env;
      context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
        batch,
        event: batch,
        env,
        context
      }) || Promise.resolve());
    },
    tail(traces, env, context) {
      globalThis.__env__ = env;
      context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
        traces,
        env,
        context
      }) || Promise.resolve());
    },
    trace(traces, env, context) {
      globalThis.__env__ = env;
      context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
        traces,
        env,
        context
      }) || Promise.resolve());
    }
  };
}
function augmentReq(cfReq, ctx) {
  const req = cfReq;
  req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
  req.runtime ??= { name: "cloudflare" };
  req.runtime.cloudflare = {
    ...req.runtime.cloudflare,
    ...ctx
  };
  req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
const cloudflareModule = createHandler({ fetch(cfRequest, env, context, url) {
  if (env.ASSETS && isPublicAssetURL(url.pathname)) {
    return env.ASSETS.fetch(cfRequest);
  }
} });
export {
  cloudflareModule as default
};
