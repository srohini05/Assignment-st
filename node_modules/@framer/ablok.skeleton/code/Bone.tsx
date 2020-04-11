import * as React from "react"
import styled, { css, keyframes } from "styled-components"
import { Color, addPropertyControls, ControlType } from "framer"
import { changeOpacity } from "./_helpers"

interface BoneProps {
    width: number
    height: number
    radius: number
    color: string
    highlightColor: string
    animSpeed: number
    animDelay: number
    animate: boolean
}

export function Bone(props: BoneProps) {
    const flash = keyframes`
    to {
        transform: translateX(100%);
    }
  `

    const StyledBone = styled.div<BoneProps>`
    width: 100%;
    height: ${props => props.height}px;
    background-color: ${props => props.color};
    border-radius: ${props => props.radius}px;
    overflow: hidden;
    z-index: 10;
    ${props =>
        props.animate &&
        css`
        position: relative;
        &:after {
          background-color: transparent;
          position: absolute;
          content: "";
          width: 100%;
          height: 100%;
          transform: translateX(-100%);
          background-position-x: right;
          z-index: 0;
          background: linear-gradient(
            90deg,
            ${Color.toRgbString(changeOpacity(props.highlightColor, 0))},
            ${props.highlightColor},
            ${Color.toRgbString(changeOpacity(props.highlightColor, 0))}
          );
          animation: ${flash} ease-in-out ${props.animSpeed}s infinite;
          animation-delay: ${props.animDelay}s;
        }
      `}
  `

    return <StyledBone {...props} />
}

Bone.defaultProps = {
    width: 48,
    height: 48,
    radius: 4,
    color: "#ddd",
    animate: true,
    highlightColor: "rgba(0,0,0,0.04)",
    animSpeed: 1.2,
    animDelay: 0,
}

addPropertyControls(Bone, {
    radius: {
        type: ControlType.Number,
        min: 0,
        max: 1000,
        unit: "px",
        step: 1,
        displayStepper: true,
        title: "Radius",
    },
    color: {
        type: ControlType.Color,
        title: "Color",
    },
    animate: {
        type: ControlType.Boolean,
        title: "Animation",
    },
    highlightColor: {
        type: ControlType.Color,
        title: "Highlight",
        hidden(props) {
            return props.animate === false
        },
    },
    animSpeed: {
        type: ControlType.Number,
        min: 0.5,
        max: 5,
        unit: "s",
        step: 0.1,
        displayStepper: true,
        title: "Speed",
        hidden(props) {
            return props.animate === false
        },
    },
    animDelay: {
        type: ControlType.Number,
        min: 0,
        max: 30,
        unit: "s",
        step: 0.1,
        displayStepper: true,
        title: "Delay",
        hidden(props) {
            return props.animate === false
        },
    },
})
