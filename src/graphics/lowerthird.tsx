import ReactDOM from "react-dom"
import React from "react"
import { LOWERTHIRDS_HOST } from "../common/replicants"
import { LowerThird as LowerThird } from "../@types/replicants"
import { useOnlyReplicantValue } from "../common/hooks/useReplicant"

function LowerThird() {
    const host = useOnlyReplicantValue<LowerThird>(LOWERTHIRDS_HOST.NAME, LOWERTHIRDS_HOST.NAME_SPACE)

    return (
        <div
            style={{
                position: "absolute",
                width: 1920,
                height: 1080,
                left: 0,
                bottom: 0,
            }}
        >
            {/* Your logic for displaying the lower third text and visibility */}
        </div>
    )
}

ReactDOM.render(<LowerThird />, document.getElementById("root"))
