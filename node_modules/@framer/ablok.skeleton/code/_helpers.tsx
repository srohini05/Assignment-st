import { Color } from "framer"

/**
 * Changes the transparency level of any color using the Framer X Color function.
 * @param color (hex, rgba, or hsl)
 * @param alpha (between 0 and 1)
 * @returns Framer Color object with color and set transparency.
 */
export function changeOpacity(color: any, alpha: number) {
    const colorObject = Color(color)
    return Color.alpha(colorObject, alpha)
}
