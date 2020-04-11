import * as React from "react"
import { useState, useEffect } from "react"
import { ControlType, addPropertyControls, RenderTarget } from "framer"

interface Props {
    ready: boolean
    skeleton?: any
    content?: any
    interval: number
    onCanvas: boolean
}

export function Swap(props: Props) {
    const [ready, setReady] = useState(false)

    let render: ControlType.ComponentInstance | any
    if (!props.onCanvas && RenderTarget.current() === RenderTarget.canvas) {
        render = props.skeleton
    } else {
        if (ready) {
            render = props.content
        } else {
            render = props.skeleton
        }
    }

    useEffect(() => {
        props.ready === true ? setReady(true) : setReady(false)

        const interval = setTimeout(() => {
            setReady(true)
        }, props.interval * 1000)
        return () => clearTimeout(interval)
    }, [])

    const placeholder = (
        <div
            style={{
                color: "rgb(136, 85, 255)",
                backgroundColor: "rgba(136, 85, 255, 0.3)",
                padding: "10px",
                overflow: "hidden",
                fontSize: 12,
                display: "flex",
                flexDirection: "row",
                flexWrap: "nowrap",
                textAlign: "left",
                justifyContent: "left",
                alignItems: "center",
                alignContent: "center",
                height: "100%",
                whiteSpace: "nowrap",
            }}
        >
            <div
                style={{
                    width: "100%",
                    textAlign: "center",
                }}
            >
                Connect to Skeleton and Content frames
            </div>
            <div
                style={{
                    padding: "10px",
                    position: "absolute",
                    transform: "translateY(-50%)",
                    right: 0,
                    top: "50%",
                    margin: 0,
                    fontSize: 10,
                }}
            >
                &rarr;
            </div>
        </div>
    )

    return render > [] ? render : placeholder
}

Swap.defaultProps = {
    ready: false,
    interval: 3,
    width: 343,
    height: 200,
    onCanvas: false,
}

addPropertyControls(Swap, {
    skeleton: {
        type: ControlType.ComponentInstance,
        title: "Skeleton",
    },
    content: {
        type: ControlType.ComponentInstance,
        title: "Content",
    },
    interval: {
        type: ControlType.Number,
        min: 0,
        max: 60,
        unit: "s",
        step: 0.1,
        displayStepper: true,
        title: "Interval",
    },
    onCanvas: {
        type: ControlType.Boolean,
        enabledTitle: "On",
        disabledTitle: "Off",
        title: "On Canvas",
    },
})
