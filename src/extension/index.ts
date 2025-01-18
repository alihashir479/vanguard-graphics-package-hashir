import NodeCG from "@nodecg/types"
import { LOWERTHIRDS_HOST } from "../common/replicants"
import { LowerThird } from "../@types/replicants"
import { Request, Response } from "express"

export = (nodecg: NodeCG.ServerAPI) => {
    nodecg.sendMessage("message")

    const lowerThirdLeft = nodecg.Replicant<LowerThird>(LOWERTHIRDS_HOST.NAME, LOWERTHIRDS_HOST.NAME_SPACE, {
        defaultValue: {
          value: {
            nameFirst: '',
            nameLast: '',
            socialmedia: ''
          },
          graphics: {
            isShowing: true,
            duration: 10000
          }
        }
    })

    const router = nodecg.Router()

    router.post("/toggleL3", (req: Request, res: Response) => {
        try {
            // Logic for toggling lower third visiblity here
            const { value, graphics } = req.body
            if (!lowerThirdLeft) {
                throw new Error("Replicant not initialized");
            }

            lowerThirdLeft.value = {
              ...lowerThirdLeft.value,
              value: {
                ...lowerThirdLeft.value?.value,
                ...value
              },
              graphics: {
                ...lowerThirdLeft.value?.graphics,
                ...graphics
              }
            }

            res.status(200).send("Ok")
        } catch (e) {
            console.error("Error with toggling overlay", e)
            res.status(500).send("Oops")
        }
    })

    nodecg.mount("/api", router)
}
