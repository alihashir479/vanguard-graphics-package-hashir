import NodeCG from "@nodecg/types"
import { LOWERTHIRDS_HOST } from "../common/replicants"
import { LowerThird } from "../@types/replicants"

export = (nodecg: NodeCG.ServerAPI) => {
    nodecg.sendMessage("message")

    const lowerThirdLeft = nodecg.Replicant<LowerThird>(LOWERTHIRDS_HOST.NAME, LOWERTHIRDS_HOST.NAME_SPACE)

    const router = nodecg.Router()

    router.post("/toggleL3", (req, res) => {
        try {
            // Logic for toggling lower third visiblity here
            res.send("Ok")
        } catch (e) {
            console.error("Error with toggling overlay", e)
            res.status(500).send("Oops")
        }
    })

    nodecg.mount("/api", router)
}
