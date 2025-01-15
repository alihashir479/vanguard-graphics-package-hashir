import { Button, TextField, Paper, Box } from "@mui/material"
import { LOWERTHIRDS_HOST } from "../../common/replicants"

import React from "react"
import { LowerThird } from "../../@types/replicants"
import { useReplicantValue } from "../../common/hooks/useReplicant"

function Host() {
    const [host, setHost] = useReplicantValue<LowerThird>(LOWERTHIRDS_HOST.NAME, LOWERTHIRDS_HOST.NAME_SPACE)

    return (
        <>
            <Paper sx={{ p: 2, mb: 1 }} elevation={0}>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <TextField
                        sx={{ mr: 1 }}
                        label="First Name"
                        value={host?.value?.nameFirst || ""}
                        onChange={e => {
                            // Logic to change first name here
                        }}
                        size="small"
                        type="text"
                    />
                    <TextField
                        sx={{ mr: 1 }}
                        label="Last Name"
                        value={host?.value?.nameLast || ""}
                        onChange={e => {
                            // Logic to change last name here
                        }}
                        size="small"
                        type="text"
                    />
                    <TextField
                        sx={{ mr: 1 }}
                        label="socialmedia"
                        value={host?.value?.socialmedia || ""}
                        onChange={e => {
                            // Logic to change social media name here
                        }}
                        size="small"
                        type="text"
                    />
                    <Button
                        color={host?.graphics?.isShowing ? "error" : "primary"}
                        variant="contained"
                        disableElevation
                        onClick={() => {
                            // Logic to toggle visibility of lower third
                        }}
                    >
                        {host?.graphics?.isShowing ? "Hide" : "Show"}
                    </Button>
                </Box>
            </Paper>
        </>
    )
}
export default Host
