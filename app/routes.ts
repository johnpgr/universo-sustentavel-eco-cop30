import { type RouteConfig, index, route } from "@react-router/dev/routes"

export default [
    index("routes/home.tsx"),
    route("/search", "routes/search.tsx"),
    route("/locations", "routes/locations.tsx"),
    route("/locations/:id", "routes/location.tsx"),
    route("/tips", "routes/tips.tsx"),
    route("/education", "routes/education.tsx"),
] satisfies RouteConfig
