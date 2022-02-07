type DeviceSize = "xs" | "sm" | "lg";

const size: Record<DeviceSize, string> = {
    xs: "320px",
    sm: "768px",
    lg: "1200px",
}

const device: Record<keyof typeof size, string> = {
    xs: `(min-width: ${size.xs})`,
    sm: `(min-width: ${size.sm})`,
    lg: `(min-width: ${size.lg})`
}

export default { size, device }