import ReactDOM from "react-dom"
import React from "react"
import { LOWERTHIRDS_HOST } from "../common/replicants"
import { LowerThird as LowerThird } from "../@types/replicants"
import { useOnlyReplicantValue } from "../common/hooks/useReplicant"
import { Card, CardContent, IconButton, Typography } from "@mui/material"
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';

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
            {host?.graphics?.isShowing && (
              <Card variant="outlined" sx={{ minWidth: 250, maxWidth: 250 }}>
                <CardContent>
                  <Typography variant="h5" component="div">{host.value?.nameFirst} {host.value?.nameLast}</Typography>
                  <Typography variant="body2" className="flex items-center" sx={{ display: "flex", alignItems: "center" }}>
                  <IconButton aria-label="social-media">
                    <ConnectWithoutContactIcon sx={{ height: 18, width: 18 }} />
                  </IconButton>
                    {host.value?.socialmedia}
                  </Typography>
                </CardContent>
              </Card>
            )}
        </div>
    )
}

ReactDOM.render(<LowerThird />, document.getElementById("root"))
